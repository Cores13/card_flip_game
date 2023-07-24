import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {
  createStackNavigator,
  StackNavigationOptions,
} from '@react-navigation/stack';
import StartScreen from './src/screens/StartScreen';
import GameScreen from './src/screens/GameScreen';
import {Text} from 'react-native';

const Stack = createStackNavigator();

const defaultStackScreenOptions: StackNavigationOptions = {
  headerShown: true,
  headerTitleAlign: 'center',
  headerTitleStyle: {
    fontWeight: '300',
    paddingTop: 15,
    fontSize: 16,
  },
  headerBackTitleVisible: false,
  headerTitle: (props: any) => (
    // eslint-disable-next-line react-native/no-inline-styles
    <Text {...props} style={{color: 'black', fontWeight: 'bold', fontSize: 24}}>
      {props.children}
    </Text>
  ),
};

function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{...defaultStackScreenOptions}}>
        <Stack.Screen
          name="StartScreen"
          component={StartScreen}
          options={{
            title: 'Škoda Energy Experience',
          }}
        />
        <Stack.Screen
          name="GameScreen"
          component={GameScreen}
          options={{
            title: 'Škoda Energy Experience',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigator;
