import React from 'react'
import { Text, View,StyleSheet } from 'react-native'
import OtpInputs from 'react-native-otp-inputs';

const OTPPage = () => {
  return (
    <View style={styles.container}>
    <OtpInputs
    //   handleChange={(code) => console.log(code)}
    //   numberOfInputs={6}
    />
  </View>
  )
}

export default OTPPage

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'white'
    },
})