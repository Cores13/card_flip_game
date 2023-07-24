import {StyleSheet, Text, TouchableOpacity, Image} from 'react-native';
import React, {useEffect} from 'react';
import Animated, {
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

const Card = ({prize, selected, setSelected}: any) => {
  const spin = useSharedValue<number>(0);

  useEffect(() => {
    setSelected(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const frontAnimatedStyle = useAnimatedStyle(() => {
    const spinVal = interpolate(spin.value, [0, 1], [0, 180]);
    return {
      transform: [
        {
          rotateY: withTiming(`${spinVal}deg`, {duration: 500}),
        },
      ],
    };
  }, []);

  const backAnimatedStyle = useAnimatedStyle(() => {
    const spinVal = interpolate(spin.value, [0, 1], [180, 360]);
    return {
      transform: [
        {
          rotateY: withTiming(`${spinVal}deg`, {duration: 500}),
        },
      ],
    };
  }, []);

  return (
    <TouchableOpacity
      disabled={selected}
      onPress={() => {
        if (!selected) {
          spin.value = spin.value ? 0 : 1;
          setSelected(true);
        }
      }}
      key={prize.id}>
      <Animated.View style={[styles.front, frontAnimatedStyle]}>
        <Text>Otvori za poklon</Text>
      </Animated.View>
      <Animated.View style={[styles.back, backAnimatedStyle]}>
        <Image source={prize.src} style={styles.image} resizeMode="contain" />
      </Animated.View>
    </TouchableOpacity>
  );
};

export default Card;

const styles = StyleSheet.create({
  card: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
  },
  front: {
    height: 255,
    width: 575,
    backgroundColor: '#D8D9CF',
    borderRadius: 16,
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 15,
  },
  back: {
    height: 255,
    width: 575,
    backgroundColor: '#7CFAB1',
    borderRadius: 16,
    backfaceVisibility: 'hidden',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 15,
  },
  image: {
    width: 445,
    height: '100%',
  },
});
