import {useRoute} from '@react-navigation/native';
import React from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

const SignUp = () => {
    const route = useRoute();

  return (
    <View style={styles.container}>
      <Text style={styles.signUp}>Sign Up</Text>
      <Text style={styles.textInfo}>
        Enter your information to create your account
      </Text>
      <View style={styles.SectionStyle}>
        <TextInput
          style={styles.inputStyle}
          placeholder="Name"
          placeholderTextColor="gray"
          autoFocus={true}
        />
      </View>
      <View style={styles.SectionStyle}>
        <Text style={styles.inputStyle}>{route.params.phoneNo}</Text>
      </View>
      <TouchableOpacity style={styles.SectionStyle}>
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
  },
  signUp: {
    color: '#ff2746',
    fontWeight: 'bold',
    fontSize: 25,
    marginTop: 70,
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
});
