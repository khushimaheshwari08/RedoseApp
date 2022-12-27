import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react'
import { ActivityIndicator, Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View ,Keyboard, KeyboardAvoidingView} from 'react-native'
import AntDesignIcon from "react-native-vector-icons/AntDesign"

const Login = () => {
  const navigation = useNavigation();
  const [phoneNo, setPhoneNo] = useState('')
  return (
  <View style={styles.container}>
    <Image
                  source={require('../../assets/img/bg.png')}
                  style={{
                    width: "100%",
                    height: "66%",
                  }}
                />

                <Text style={styles.loginText}>Login or Sign up to call Chhotu...!</Text>
                <View style={styles.SectionStyle}>
                <Text style={styles.mobileNo}>Mobile Number</Text>
                <View>
                <AntDesignIcon name="mobile1" size={25} style={[styles.searchIcon,{color: phoneNo.length === 10 ? 'green' : '#ff2746'}]}/>
                <TextInput
                style={[styles.inputStyle,{borderColor: phoneNo.length === 10 ? 'green' : '#ff2746'}]}
                maxLength={10}
                placeholder="+91 0000000000"
                placeholderTextColor="gray"
                keyboardType="numeric"
                autoFocus={true}
                value={phoneNo}
                onChangeText={phoneNo=> setPhoneNo(phoneNo)}
                onSubmitEditing={phoneNo.length === 10 ? Keyboard.dismiss() : null}
                />
                </View>
          </View>
          <TouchableOpacity style={styles.SectionStyle} disabled={ phoneNo.length === 10  ? false: true} onPress={() => navigation.navigate('otp', 
          // {phoneNo: phoneNo}
          )} >
              <Text style={[styles.otp,{ backgroundColor: phoneNo.length === 10  ? '#ff2746': '#f7656c'}]}>
                  Get OTP
                </Text>
            </TouchableOpacity>
    </View>
  )
}

export default Login

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'white'
    },
    loginText:{
        color:'gray',
        textAlign:'center',
        fontWeight:'bold',
        marginTop:20,
        fontSize:15
    },
    SectionStyle: {
        height: 60,
        marginTop: 20,
        marginLeft: 35,
        marginRight: 35,
        margin: 10,
      
      },
      mobileNo:{
        color:'gray',
        top:22,
        paddingLeft:20,
        fontSize:12
      },
      inputStyle: {
        color:'black',
        paddingLeft: 18,
        paddingTop:20,
        borderWidth: 1,
        borderRadius: 30,
        
      },
      otp:{
        color:'white',
        height:60,
        textAlign:'center',
        borderRadius: 30,
        fontSize:15,
        fontWeight:'bold',
        paddingTop:18
      },
      searchIcon:{
        position: 'absolute',
        right:20,
        top: 16,
      },
     
})