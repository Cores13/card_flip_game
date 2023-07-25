import {StyleSheet, Text, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import Animated, {
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import res from '../res';

import IOrientation from '../interfaces/orientation';
import {selectOrientation} from '../redux/slices/orientationSlice';
import {useSelector} from 'react-redux';

const Card = ({prize, selected, setSelected, setPrize, setShowReset}: any) => {
  const orientation: IOrientation = useSelector(selectOrientation);
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

  const styles = StyleSheet.create({
    card: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'white',
    },
    front: {
      height: orientation.orientation === 'portrait' ? 255 : 500,
      width: orientation.orientation === 'portrait' ? 575 : 300,
      backgroundColor: 'rgb(235, 235, 245)',
      borderRadius: 16,
      position: 'absolute',
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: orientation.orientation === 'portrait' ? 15 : 5,
    },
    frontText: {
      fontSize: 18,
      fontWeight: 'bold',
    },
    back: {
      height: orientation.orientation === 'portrait' ? 255 : 500,
      width: orientation.orientation === 'portrait' ? 575 : 300,
      backgroundColor: '#7CFAB1',
      borderRadius: 16,
      backfaceVisibility: 'hidden',
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: orientation.orientation === 'portrait' ? 15 : 5,
    },
    frontImage: {
      width: orientation.orientation === 'portrait' ? 445 : 200,
      height: '65%',
    },
    image: {
      width: orientation.orientation === 'portrait' ? 445 : 250,
      height: '100%',
    },
  });

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
