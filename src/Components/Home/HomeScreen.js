import { useNavigation, useRoute } from '@react-navigation/native';
import React, { useState } from 'react'
import { StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import UserAvatar from 'react-native-user-avatar';
import MyOffice from './MyOffice';
import RedoseSpot from './RedoseSpot';
import Icon from "react-native-vector-icons/MaterialIcons"

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
        <TouchableOpacity onPress={()=> navigation.navigate('qrIconScreen')} >
      <Icon name="qr-code-2" size={30} style={styles.Icon}/>
      </TouchableOpacity>
      <TouchableOpacity onPress={()=> navigation.navigate('profileScreen',{
        // name:route.params.name,
        phoneNo:route.params.phoneNo
      })}>
        <UserAvatar style={styles.userAvatar} size={35} 
        //  name={route.params.name} 
         />
      </TouchableOpacity>     
      </View>
      </View>
        <View style={styles.main}>
          <TouchableOpacity style={[styles.parentOffice,{backgroundColor: toggle === 1 ? '#ff2746':'#d9d8d7'}]} onPress={()=>setToggle(1)}>
          <Text style={[styles.text,{color: toggle === 1 ? '#ffffff':'black'}]}>My Office </Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.parentRedoseSpot,{backgroundColor: toggle === 2 ? '#ff2746':'#d9d8d7'}]} onPress={()=>setToggle(2)}>
          <Text style={[styles.text,{color: toggle === 2 ? '#ffffff':'black'}]}>Redose Spot </Text>
          </TouchableOpacity>
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
    padding:12
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
    marginRight:10
  },
  main: {
    marginTop:15,
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
  }
})