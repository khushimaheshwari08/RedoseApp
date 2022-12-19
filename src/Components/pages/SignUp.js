import {useRoute} from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import FlashMessage, { showMessage, hideMessage } from "react-native-flash-message";
import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

const SignUp = () => {
  const navigation = useNavigation();
  const [name, setName] = useState('')
  const route = useRoute();

    useEffect(() => {
      showMessage({
        message: "Success",
        description: "OTP verified successfully",
        type: "success",
        style: styles.flashMessage,
        titleStyle: styles.flashTitle,
        textStyle: styles.flashDes,
        duration:	2000
      });
    }, [])

  return (
    <View style={styles.container}>
       <TouchableOpacity onPress={() => navigation.goBack()}>
      <Image
              source={require('../../assets/icons/goBack.png')}
              style={{width: 20, height: 20, marginTop: 10}}
            />
            </TouchableOpacity>
      <Text style={styles.signUp}>Sign Up</Text>
      <FlashMessage position="bottom" /> 
      <Text style={styles.textInfo}>
        Enter your information to create your account
      </Text>
      <View style={styles.SectionStyle}>
        <TextInput
          style={styles.inputStyle}
          placeholder="Name"
          placeholderTextColor="gray"
          autoFocus={true}
          value={name}
          onChangeText={name=> setName(name)}
        />
      </View>
      <View style={styles.SectionStyle}>
        <Text style={styles.inputStyle}>{route.params.phoneNo}</Text>
      </View>
      <TouchableOpacity style={styles.SectionStyle}  disabled={name ? false: true} onPress={()=> navigation.navigate('homeScreen',{
        name:name,
        phoneNo:route.params.phoneNo
      })}>
        <Text style={styles.otp}>Continue</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding:15
  },
  signUp: {
    color: '#ff2746',
    fontWeight: 'bold',
    fontSize: 25,
    marginTop: 35,
    textAlign: 'center',
  },
  textInfo: {
    textAlign: 'center',
    color: 'gray',
    marginTop: 20,
  },
  SectionStyle: {
    height: 60,
    marginTop: 20,
    marginLeft: 35,
    marginRight: 35,
    margin: 10,
  },
  inputStyle: {
    color: 'black',
    paddingLeft: 18,
    paddingTop: 20,
    paddingBottom: 20,
    backgroundColor: '#f2f2f2',
    borderRadius: 30,
  },
  otp: {
    color: 'white',
    height: 60,
    textAlign: 'center',
    borderRadius: 30,
    fontSize: 15,
    fontWeight: 'bold',
    paddingTop: 18,
    backgroundColor: '#ff2746',
  },
  flashMessage: {
    borderRadius: 9,
    // opacity: 0.8,
    shadowColor: 'gray',
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation:1,
    margin: 12,
    backgroundColor:'white',
    marginBottom:40,
    borderLeftWidth:5,
    borderLeftColor:'green',
    height:65
  },
  flashTitle: {
    fontWeight: 'bold',
    fontSize: 13,
    color:'black'
  },
  flashDes: {
    fontSize: 10,
    color:'gray'
  }
});
