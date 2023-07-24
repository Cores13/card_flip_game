import {View, Text, TouchableOpacity, StyleSheet, Image} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useNavigation} from '@react-navigation/native';

const ResetButton = ({prize}: any) => {
  const navigation = useNavigation();

  const styles = StyleSheet.create({
    container: {
      position: 'absolute',
      width: '100%',
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      margin: 0,
      padding: 0,
      zIndex: 100,
    },
    modal: {
      backgroundColor: 'white',
      width: '50%',
      height: '50%',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'space-between',
      borderRadius: 16,
      margin: 0,
      padding: 10,
      zIndex: 100,
    },
    resetButton: {
      height: 90,
      width: 275,
      backgroundColor: '#7CFAB1',
      borderRadius: 16,
      alignItems: 'center',
      justifyContent: 'center',
      borderWidth: 1,
      borderColor: 'black',
      borderStyle: 'solid',
    },
    preResetButton: {
      height: '100%',
      width: '100%',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 0,
    },
    buttonText: {
      color: 'black',
      fontWeight: '700',
      fontSize: 24,
    },
    image: {
      width: 270,
      height: '50%',
    },
  });

  return (
    <View style={styles.container}>
      <View style={styles.modal}>
        <Image source={prize.src} style={styles.image} resizeMode="contain" />
        <Text>Osvojili ste nagradu od kompanije {prize.name}</Text>
        <TouchableOpacity
          style={styles.resetButton}
          onPress={() => navigation.navigate('StartScreen')}>
          <Text style={styles.buttonText}>Restart</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ResetButton;
