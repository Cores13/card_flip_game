import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {
  createStackNavigator,
  StackNavigationOptions,
} from '@react-navigation/stack';
import StartScreen from './src/screens/StartScreen';
import GameScreen from './src/screens/GameScreen';
import {Dimensions, Text} from 'react-native';
import {useDispatch} from 'react-redux';
import {flip} from './src/redux/slices/orientationSlice';

const Stack = createStackNavigator();

const defaultStackScreenOptions: StackNavigationOptions = {
  headerShown: true,
  headerTitleAlign: 'center',
  headerTitleStyle: {
    fontWeight: '300',
    paddingTop: 15,
    fontSize: 16,
  },
  headerLeft: () => null,
  headerBackTitleVisible: false,
  headerTitle: (props: any) => (
    // eslint-disable-next-line react-native/no-inline-styles
    <Text {...props} style={{color: 'black', fontWeight: 'bold', fontSize: 24}}>
      {props.children}
    </Text>
  ),
};

function AppNavigator() {
  const dispatch = useDispatch();

  const isPortrait = () => {
    const dim = Dimensions.get('screen');
    return dim.height >= dim.width;
  };

  // Event Listener for orientation changes
  Dimensions.addEventListener('change', () => {
    dispatch(
      flip({
        orientation: isPortrait() ? 'portrait' : 'landscape',
      }),
    );
  });

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
