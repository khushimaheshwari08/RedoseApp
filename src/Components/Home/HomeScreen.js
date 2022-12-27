import { useNavigation, useRoute } from '@react-navigation/native';
import React, { useState } from 'react'
import { StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import UserAvatar from 'react-native-user-avatar';
import MyOffice from './MyOffice';
import RedoseSpot from './RedoseSpot';
import Icon from "react-native-vector-icons/MaterialIcons"
import Lottie from 'lottie-react-native';
import SwitchSelector from "react-native-switch-selector";
const HomeScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const [toggle, setToggle] = useState(1);
  return (
    <View style={styles.container}>
      <View style={styles.parent}>
      <Text style={styles.userName}>Hi,Dummy
      {/* {route.params.name} */}
      </Text>
      <View style={styles.subParent}>
        <TouchableOpacity onPress={()=> navigation.navigate('qrIconScreen')}  >
        <Lottie style={styles.qrCode} source={require('../../assets/LottieData/qr-code.json')} autoPlay loop={false} />
      </TouchableOpacity>
      <TouchableOpacity onPress={()=> navigation.navigate('profileScreen',
        // {name:route.params.name,
        // phoneNo:route.params.phoneNo}
      )}>
        <UserAvatar style={styles.userAvatar} size={35} 
        //  name={route.params.name} 
         />
      </TouchableOpacity>     
      </View>
      </View>
      <View style={{paddingHorizontal: 30}}>
        <SwitchSelector
          // selectedColor={'white'}
          selectedTextStyle={{fontWeight: 'bold'}}
          initial={0}
          height={55}
          backgroundColor={'#f2f2f2'}
          valuePadding={5}
          buttonColor={'#ff2746'}
          borderWidth={0}
          textStyle={{fontWeight: 'bold'}}
          onPress={val => setToggle(val)}
          hasPadding
          options={[
            {label: 'My Office', value: 1},
            {label: 'Redose Spot', value: 2},
          ]}
        />
      </View>     
        {toggle === 1 ? <MyOffice/> : null}
        {toggle === 2 ? <RedoseSpot/> : null}
      </View>
  )
}

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  parent:{
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    padding:12,
    paddingTop:2
  },
  subParent:{
    flexDirection:'row',
    alignItems:'center'
  },
  userName:{
      fontSize:23,
      color: '#ff2746',
  },
  userAvatar:{
    height:35,
    width:35,
  },
  Icon:{
    color:'black',
    marginRight:10,
  },
  main: {
    marginLeft:30,
    marginRight:30,
    height: 55,
    borderRadius: 30,
    backgroundColor: '#d9d8d7',
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center'
  },
  parentOffice:{
    // backgroundColor: '#ff2746',
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    borderRadius: 25,
    height:45,
    marginLeft:7
  },
  parentRedoseSpot:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    height:45,
    borderRadius: 25,
    marginRight:7
  },
  text:{
    fontWeight:'bold',
    fontSize:15
  },
  qrCode:{
    height:60,
    backgroundColor:'white',
  }
})