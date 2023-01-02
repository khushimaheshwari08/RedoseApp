import {useRoute} from '@react-navigation/native';
import React, {useEffect, useRef, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import AntDesignIcon from 'react-native-vector-icons/AntDesign';
import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  ActivityIndicator,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const SignUp = () => {
  const navigation = useNavigation();
  const [name, setName] = useState('');
  const route = useRoute();
  const [loading, setLoading] = useState(false);

  const onHomeScreen = () => {
    setLoading(true)
    setTimeout(() => {
      navigation.navigate('homeScreen');
      setLoading(false)
    }, 1000);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.goBack()} style={{width: 40}}>
        <Icon name="arrow-back" size={25} style={styles.iconColor} />
      </TouchableOpacity>
      <Text style={styles.signUp}>Sign Up</Text>
      <Text style={styles.textInfo}>
        Enter your information to create your account
      </Text>
      <View style={styles.SectionStyle}>
        <AntDesignIcon name="user" size={27} style={styles.searchIcon} />
        <TextInput
          style={[styles.inputStyle, {color: 'black'}]}
          placeholder="Name"
          placeholderTextColor="gray"
          autoFocus={true}
          value={name}
          onChangeText={name => setName(name)}
        />
      </View>
      <View style={styles.SectionStyle}>
        <AntDesignIcon name="mobile1" size={25} style={styles.searchIcon} />
        <Text style={styles.inputStyle}>1234567890</Text>
      </View>
      <TouchableOpacity
        style={styles.SectionStyle}
        disabled={name ? false : true}
        onPress={() => onHomeScreen()}>
        <View style={styles.otp}>
          <Text style={styles.textStyle}>
            {loading == true ? (
              <ActivityIndicator size="small" color="#fff" />
            ) : (
              'Continue'
            )}
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingTop: 12,
    paddingRight: 12,
    paddingLeft: 12,
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
    position: 'relative',
  },
  inputStyle: {
    color: 'gray',
    paddingLeft: 18,
    paddingTop: 20,
    // paddingBottom: 20,
    backgroundColor: '#f2f2f2',
    borderRadius: 30,
    width: 300,
    marginLeft: -20,
    marginTop: 10,
    height: 60,
    elevation: 10,
    shadowColor: '#171717',
  },
  otp: {
    height: 60,
    textAlign: 'center',
    borderRadius: 30,
    paddingTop: 18,
    backgroundColor: '#ff2746',
    elevation: 15,
    shadowColor: '#171717',
    width: 300,
    marginLeft: -20,
    marginTop: 10,
  },
  searchIcon: {
    position: 'absolute',
    right: 20,
    top: 25,
    color: '#ff2746',
    zIndex: 9,
  },
  iconColor: {
    color: '#4a4949',
  },
  textStyle: {
    textAlign: 'center',
    fontSize: 15,
    fontWeight: 'bold',
    color: 'white',
  },
});
