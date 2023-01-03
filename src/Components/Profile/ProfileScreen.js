import {useNavigation, useRoute} from '@react-navigation/native';
import React from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import UserAvatar from 'react-native-user-avatar';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Icons from 'react-native-vector-icons/FontAwesome5';
import BillingIcon from 'react-native-vector-icons/FontAwesome';
import MyBuddiesIcon from 'react-native-vector-icons/Fontisto';

const ProfileScreen = () => {
  const route = useRoute();
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.parent}>
        <View style={styles.Profile}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            {/* <Image
                    source={require('../../assets/icons/goBack.png')}
                    style={{width: 20, height: 20,}}
                /> */}
            <Icon name="arrow-back" size={25} style={styles.iconColor} />
          </TouchableOpacity>
          <Text style={styles.heading}>Profile</Text>
        </View>
        <View style={styles.subParent}>
          <View style={styles.textParent}>
            <Text style={styles.userName}>
              Dummy
              {/* {route.params.name} */}
            </Text>
            <Text style={styles.phnNo}>
              +91 1234567890
              {/* {route.params.phoneNo} */}
            </Text>
          </View>
          <UserAvatar
            style={styles.userAvatar}
            size={35}
            //  name={route.params.name}
          />
        </View>
      </View>
      <ScrollView style={{marginTop: 5, paddingLeft: 9}}>
        <View style={styles.incomeBlock}>
          <Image
            source={require('../../assets/icons/income.png')}
            style={{width: 50, height: 50}}
          />
          <View>
            <Text style={styles.userName}>₹0</Text>
            <Text style={styles.phnNo}>Available Credits</Text>
          </View>
          <TouchableOpacity
            style={styles.incomeBlockCredit}
            onPress={() => navigation.navigate('addCredit')}>
            <Text style={styles.addCredit}>Add Credit</Text>
          </TouchableOpacity>
        </View>
        {/* <View style={styles.teaBlock}>
              <Image
                    source={require('../../assets/icons/tea-red.png')}
                    style={{width: 50, height: 50,marginRight:25}}
                />
                <View>
                 <Text style={styles.userName}>0</Text>
                <Text style={styles.phnNo}>Free Credits Received so far</Text>
                </View>
                </View> */}
        <View style={styles.teaBlock}>
          <Image
            source={require('../../assets/icons/tea-red.png')}
            style={{width: 50, height: 50, marginRight: 25}}
          />
          <View>
            <Text style={styles.userName}>0</Text>
            <Text style={styles.phnNo}>Free Credits Received so far</Text>
          </View>
        </View>
        <View style={[styles.divider2,styles.forMargin]}></View>
        <TouchableOpacity onPress={() => navigation.navigate('manageLocation')}>
          <View style={[styles.iconParent, styles.forMargin]}>
            <View style={styles.iconsubParent}>
              <View style={styles.icon}>
                <Icon name="location-pin" size={25} style={styles.iconColor} />
              </View>
              <Text style={styles.profileSettings}>Manage Locations</Text>
            </View>
            <Text style={styles.rightArrow}>
              <Icon name="keyboard-arrow-right" size={40} />
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('orderHistory')}>
          <View style={styles.iconParent}>
            <View style={styles.iconsubParent}>
              <View style={styles.icon}>
                <Icon name="shopping-cart" size={23} style={styles.iconColor} />
              </View>
              <Text style={styles.profileSettings}>Order History</Text>
            </View>
            <Text style={styles.rightArrow}>
              <Icon name="keyboard-arrow-right" size={40} />
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('billingStatement')}>
          <View style={styles.iconParent}>
            <View style={styles.iconsubParent}>
              <View style={styles.icon}>
                <BillingIcon
                  name="file-text"
                  size={20}
                  style={styles.iconColor}
                />
              </View>
              <Text style={styles.profileSettings}>Billing & Statement</Text>
            </View>
            <Text style={styles.rightArrow}>
              <Icon name="keyboard-arrow-right" size={40} />
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('rechargeHistory')}>
          <View style={styles.iconParent}>
            <View style={styles.iconsubParent}>
              <View style={styles.icon}>
                <Icons name="money-check" size={15} style={styles.iconColor} />
              </View>
              <Text style={styles.profileSettings}>Recharge History</Text>
            </View>
            <Text style={styles.rightArrow}>
              <Icon name="keyboard-arrow-right" size={40} />
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('myBuddies')}>
          <View style={styles.iconParent}>
            <View style={styles.iconsubParent}>
              <View style={styles.icon}>
                <MyBuddiesIcon
                  name="persons"
                  size={20}
                  style={styles.iconColor}
                />
              </View>
              <Text style={styles.profileSettings}>My Buddies</Text>
            </View>
            <Text style={styles.rightArrow}>
              <Icon name="keyboard-arrow-right" size={40} />
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('help&FAQ')}>
          <View style={styles.iconParent}>
            <View style={styles.iconsubParent}>
              <View style={styles.icon}>
                <Icons
                  name="hands-helping"
                  size={20}
                  style={styles.iconColor}
                />
              </View>
              <Text style={styles.profileSettings}>Help and FAQs</Text>
            </View>
            <Text style={styles.rightArrow}>
              <Icon name="keyboard-arrow-right" size={40} />
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('myAccount')}>
          <View style={styles.iconParent}>
            <View style={styles.iconsubParent}>
              <View style={styles.icon}>
                <Icon name="person" size={25} style={styles.iconColor} />
              </View>
              <Text style={styles.profileSettings}>My Account</Text>
            </View>
            <Text style={styles.rightArrow}>
              <Icon name="keyboard-arrow-right" size={40} />
            </Text>
          </View>
        </TouchableOpacity>
        <Text style={styles.version}>Version-3.7</Text>
      </ScrollView>
    </View>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f2f2',
    paddingLeft: 10,
    paddingRight: 5,
  },

  parent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 12,
  },

  Profile: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  subParent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  heading: {
    fontSize: 23,
    color: '#ff2746',
    fontWeight: 'bold',
    marginLeft: 15,
  },
  textParent: {
    flexDirection: 'column',
    alignItems: 'flex-end',
  },
  userName: {
    fontSize: 15,
    color: 'black',
    fontWeight: 'bold',
  },
  phnNo: {
    color: 'gray',
  },
  userAvatar: {
    height: 35,
    width: 35,
    marginLeft: 20,
    marginRight: 10,
  },
  incomeBlock: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
    borderColor: 'white',
    borderWidth: 1,
    borderRadius: 10,
    backgroundColor: 'white',
    marginRight: 10,
    padding: 12,
  },

  incomeBlockCredit: {
    height: 25,
    width: 90,
    borderRadius: 40,
    borderColor: '#ff2746',
    borderWidth: 1.2,
  },
  addCredit: {
    textAlign: 'center',
    fontSize: 12,
    color: '#ff2746',
    marginTop: 2,
  },
  forMargin: {
    marginTop: 15,
  },
  teaBlock: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: 'white',
    borderWidth: 1,
    borderRadius: 10,
    backgroundColor: 'white',
    marginRight: 10,
    padding: 12,
    marginTop: 10,
  },
  iconParent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderColor: 'white',
    borderWidth: 1,
    borderRadius: 10,
    backgroundColor: 'white',
    marginRight: 10,
    padding: 7,
    paddingLeft: 10,
    marginTop: 10,
  },
  iconsubParent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconColor: {
    color: '#4a4949',
  },
  icon: {
    backgroundColor: '#ded9d9',
    height: 40,
    width: 40,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
  },
  profileSettings: {
    fontSize: 15,
    color: 'black',
    fontWeight: 'bold',
    marginLeft: 20,
  },
  rightArrow: {
    color: 'black',
  },
  version: {
    textAlign: 'center',
    color: '#ff2746',
  },
  divider2:{
    width:325,
    borderWidth:0.3,
    borderColor:'lightgray',
  },
});
