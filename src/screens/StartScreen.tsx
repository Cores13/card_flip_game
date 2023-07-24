import {View, StyleSheet, TouchableOpacity, Text} from 'react-native';
import React from 'react';

const StartScreen = ({navigation}: any) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('GameScreen')}>
        <Text style={styles.buttonText}>Započni igru</Text>
      </TouchableOpacity>
    </View>
  );
};

export default StartScreen;

const styles = StyleSheet.create({
  container: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
    backgroundColor: 'white',
  },
  button: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: 445,
    height: 70,
    backgroundColor: '#7CFAB1',
    borderRadius: 16,
  },
  buttonText: {
    color: 'black',
    fontSize: 24,
    fontWeight: '600',
  },
});
