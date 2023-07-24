import {StyleSheet, Text, TouchableOpacity, Image} from 'react-native';
import React, {useEffect} from 'react';
import Animated, {
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import res from '../res';

const Card = ({prize, selected, setSelected, setPrize, setShowReset}: any) => {
  const spin = useSharedValue<number>(0);

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
          setPrize(prize);
          setSelected(true);
          setTimeout(() => {
            setShowReset(true);
          }, 1500);
        }
      }}
      key={prize.id}>
      <Animated.View style={[styles.front, frontAnimatedStyle]}>
        <Image
          source={res.icons.gift}
          style={styles.frontImage}
          resizeMode="contain"
        />
        <Text style={styles.frontText}>Otvori za poklon</Text>
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
    backgroundColor: 'rgb(235, 235, 245)',
    borderRadius: 16,
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 15,
  },
  frontText: {
    fontSize: 18,
    fontWeight: 'bold',
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
  frontImage: {
    width: 445,
    height: '65%',
  },
  image: {
    width: 445,
    height: '100%',
  },
});
