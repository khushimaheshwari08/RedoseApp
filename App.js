import React from 'react'
import { Text, View, StyleSheet} from 'react-native'
import Slider from './src/Components/Slider'
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from './src/Components/pages/Login';
import OTPPage from './src/Components/pages/OTPPage';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
       <Stack.Navigator initialRouteName={'slider'}>
              <Stack.Screen
               options={{headerShown: false}}
                name="slider"
                component={Slider}
                />
                <Stack.Screen
               options={{headerShown: false}}
                name="login"
                component={Login}
                />
                <Stack.Screen
               options={{headerShown: false}}
                name="otp"
                component={OTPPage}
                />
                </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})