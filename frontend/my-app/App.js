import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import 'react-native-gesture-handler';

import SignInScreen from './component/screen/signInScreen';
import HomeScreen from './component/screen/homeScreen';
import Timeline from './component/icon/timeline';
const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name="SignIn" 
          component={SignInScreen} 
          options={{ headerShown: false }} // Hide the header
        />
        <Stack.Screen 
          name="HomeScreen" 
          component={HomeScreen}
          options={{ headerShown: false }} // Hide the header
        />
        <Stack.Screen 
          name="Timeline" 
          component={Timeline} // Add the Timeline screen component
          options={{ headerShown: false }} // Hide the header
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
