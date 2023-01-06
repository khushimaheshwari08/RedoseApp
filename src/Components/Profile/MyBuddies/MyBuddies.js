import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  TextInput,
  Keyboard,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Lottie from 'lottie-react-native';

const MyBuddies = () => {
  const navigation = useNavigation();
  const [phoneNo, setPhoneNo] = useState('');
  return (
    <View style={styles.container}>
      <View style={styles.parent}>
        <View style={styles.Profile}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Icon name="arrow-back" size={25} style={styles.iconColor} />
          </TouchableOpacity>
          <Text style={styles.heading}>My Buddies</Text>
        </View>
      </View>
      <View style={[styles.SectionStyle, styles.forMargin]}>
        <Icon name="phone-android" size={25} style={styles.redIconColor} />
        <TextInput
          style={styles.enterNo}
          maxLength={10}
          placeholder="Enter Mobile Number"
          placeholderTextColor="gray"
          keyboardType="numeric"
          value={phoneNo}
          onChangeText={phoneNo => setPhoneNo(phoneNo)}
          onSubmitEditing={phoneNo.length === 10 ? Keyboard.dismiss() : null}
        />
      </View>
      <View style={styles.SectionStyle}>
        <Icon name="location-pin" size={25} style={styles.redIconColor} />
        <TextInput
          style={styles.enterNo}
          maxLength={10}
          placeholder="Select an option."
          placeholderTextColor="black"
        />
      </View>
      <View style={styles.SectionStyle1}>
        <Text style={styles.addBuddyText}>Add Buddy </Text>
      </View>
      <Text style={styles.past}>MY BUDDIES</Text>
      <View style={styles.divider2}></View>
      <Lottie
        style={styles.noResultImg}
        source={require('../../../assets/no_result.json')}
        autoPlay
        loop
      />
    </View>
  );
};

export default MyBuddies;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    padding: 10,
  },

  parent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  Profile: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  heading: {
    fontSize: 23,
    color: '#ff2746',
    fontWeight: 'bold',
    marginLeft: 15,
  },
  iconColor: {
    color: '#4a4949',
  },

  forMargin: {
    marginTop: 20,
  },

  SectionStyle: {
    marginTop: 5,
    marginLeft: 20,
    marginRight: 20,
    margin: 10,
    height: 60,
    backgroundColor: '#f2f2f2',
    borderRadius: 30,
    paddingLeft: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  redIconColor: {
    color: '#ff2746',
    paddingRight: 10,
  },

  enterNo: {
    color: 'black',
    fontSize: 15,
  },
  SectionStyle1: {
    marginTop: 25,
    marginLeft: 20,
    marginRight: 20,
    margin: 10,
    height: 50,
    backgroundColor: '#f7656c',
    borderRadius: 30,
  },
  addBuddyText: {
    color: '#ffffff',
    textAlign: 'center',
    fontSize: 15,
    fontWeight: 'bold',
    paddingTop: 12,
    fontSize: 18,
  },
  past: {
    color: 'gray',
    marginTop: 12,
    marginLeft: 20,
    fontSize: 13,
  },
  divider2: {
    width: 290,
    borderWidth: 0.3,
    borderColor: 'lightgray',
    marginTop: 7,
    marginLeft: 20,
  },
  noResultImg: {
    height: 340,
    marginLeft: 30,
    marginBottom: 20,
  },
});
