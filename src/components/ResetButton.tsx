import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import StartScreen from '../screens/StartScreen';

const ResetButton = () => {
  const [isPressed, setIsPressed] = useState(false);
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
      backgroundColor: isPressed ? 'rgba(0, 0, 0, 0.5)' : 'rgba(0, 0, 0, 0.1)',
      margin: 0,
      padding: 0,
      zIndex: 100,
    },
    resetButton: {
      height: 150,
      width: 275,
      backgroundColor: '#F0E900',
      borderRadius: 16,
      alignItems: 'center',
      justifyContent: 'center',
      borderWidth: 3,
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
  });

  useEffect(() => {
    setIsPressed(false);
  }, []);

  return (
    <View style={styles.container}>
      {!isPressed ? (
        <TouchableOpacity
          style={styles.preResetButton}
          onPress={() => {
            setIsPressed(true);
          }}
        />
      ) : (
        <TouchableOpacity
          style={styles.resetButton}
          onPress={() => navigation.navigate('StartScreen')}>
          <Text style={styles.buttonText}>Restart</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

export default ResetButton;
