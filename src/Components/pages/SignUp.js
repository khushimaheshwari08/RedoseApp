import {useRoute} from '@react-navigation/native';
import React, { useEffect, useRef, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import AntDesignIcon from "react-native-vector-icons/AntDesign"
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


  return (
    <View style={styles.container}>
       <TouchableOpacity onPress={() => navigation.goBack()}>
      <Image
              source={require('../../assets/icons/goBack.png')}
              style={{width: 20, height: 20, marginTop: 10}}
            />
            </TouchableOpacity>
      <Text style={styles.signUp}>Sign Up</Text>
      <Text style={styles.textInfo}>
        Enter your information to create your account
      </Text>
      <View style={styles.SectionStyle}>
        <AntDesignIcon name="user" size={27} style={styles.searchIcon} /> 
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
            <AntDesignIcon name="mobile1" size={25} style={styles.searchIcon}/>
              <Text style={styles.inputStyle}>1234567890</Text>
      </View>
      <TouchableOpacity style={styles.SectionStyle}  
      disabled={name ? false: true}
       onPress={()=> navigation.navigate('homeScreen',
      //  { name:name,
      //    phoneNo:route.params.phoneNo}
        )}>
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
    position:'relative'
  },
  inputStyle: {
    color: 'gray',
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
  searchIcon:{
    position: 'absolute',
    right:20,
    top: 16,
    color: '#ff2746',
    zIndex:9
  },
});


 
