import React from 'react'
import { Text, View, StyleSheet} from 'react-native'
import Slider from './src/Components/Slider'
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from './src/Components/pages/Login';
import OTPPage from './src/Components/pages/OTPPage';
import SignUp from './src/Components/pages/SignUp';
import HomeScreen from './src/Components/Home/HomeScreen';
import ProfileScreen from './src/Components/Profile/ProfileScreen';

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
                 <Stack.Screen
               options={{headerShown: false}}
                name="signUp"
                component={SignUp}
                />
                <Stack.Screen
               options={{headerShown: false}}
                name="homeScreen"
                component={HomeScreen}
                />
                <Stack.Screen
               options={{headerShown: false}}
                name="profileScreen"
                component={ProfileScreen}
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