import { useNavigation, useRoute } from '@react-navigation/native';
import React from 'react'
import { StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import UserAvatar from 'react-native-user-avatar';

const HomeScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();
  return (
    <View style={styles.container}>
      <View style={styles.parent}>
      <Text style={styles.userName}>Hi, {route.params.name}</Text>
      <View style={styles.subParent}>
      <Text style={{color:'black',marginRight:20}}>Qr</Text>
      <TouchableOpacity onPress={()=> navigation.navigate('profileScreen',{
        name:route.params.name,
        phoneNo:route.params.phoneNo
      })}>
        <UserAvatar style={styles.userAvatar} size={35}  name={route.params.name} />
      </TouchableOpacity>     
      </View>
      </View>
      </View>
  )
}

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding:12
  },
  parent:{
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center'
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
  }
})