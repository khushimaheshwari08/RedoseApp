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
import OrderHistory from './src/Components/Profile/OrderHistory';
import BillingStatement from './src/Components/Profile/BillingStatement/BillingStatement';
import RechargeHistory from './src/Components/Profile/Recharge/RechargeHistory';
import MyBuddies from './src/Components/Profile/MyBuddies/MyBuddies';
import Help from './src/Components/Profile/HelpandFaq/Help';
import MyAccount from './src/Components/Profile/MyAccount/MyAccount';
import ManageLocation from './src/Components/Profile/Location/ManageLocation';
import AddNewLocation from './src/Components/Profile/Location/AddNewLocation';
import QRIcon from './src/Components/Home/QRIcon';
import AddCredit from './src/Components/Profile/AddCredit/AddCredit';
import AccountStatement from './src/Components/Profile/BillingStatement/AccountStatement';

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
                name="qrIconScreen"
                component={QRIcon}
                />
                <Stack.Screen
               options={{headerShown: false}}
                name="profileScreen"
                component={ProfileScreen}
                />
                 <Stack.Screen
               options={{headerShown: false}}
                name="addCredit"
                component={AddCredit}
                />
                <Stack.Screen
               options={{headerShown: false}}
                name="manageLocation"
                component={ManageLocation}
                />
                <Stack.Screen
               options={{headerShown: false}}
                name="newLocation"
                component={AddNewLocation}
                />
                <Stack.Screen
                options={{headerShown: false}}
                name="orderHistory"
                component={OrderHistory}
                />
                <Stack.Screen
               options={{headerShown: false}}
                name="billingStatement"
                component={BillingStatement}
                />
                <Stack.Screen
               options={{headerShown: false}}
                name="accountStatement"
                component={AccountStatement}
                />
                <Stack.Screen
               options={{headerShown: false}}
                name="rechargeHistory"
                component={RechargeHistory}
                />
                <Stack.Screen
               options={{headerShown: false}}
                name="myBuddies"
                component={MyBuddies}
                />
                <Stack.Screen
               options={{headerShown: false}}
                name="help&FAQ"
                component={Help}
                />
                <Stack.Screen
               options={{headerShown: false}}
                name="myAccount"
                component={MyAccount}
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