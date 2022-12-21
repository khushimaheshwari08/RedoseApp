import { useNavigation } from '@react-navigation/native';
import React from 'react'
import { View ,Text, TouchableOpacity, StyleSheet, Image,} from 'react-native'
import Icon from "react-native-vector-icons/MaterialIcons"

const MyAccount = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
    <View style={styles.parent}>
      <View style={styles.Profile}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Icon name="arrow-back" size={25} style={styles.iconColor}/>
          </TouchableOpacity>
          <Text style={styles.heading}>My Account</Text>
      </View>
    </View>
  </View>
  )
}

export default MyAccount
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f2f2',
    padding:10
  }, 
 
  parent:{
      flexDirection:'row',
      justifyContent:'space-between',
      alignItems:'center'
    },

    Profile:{
      flexDirection:'row',
      alignItems:'center',
    },
    heading:{
      fontSize:23,
      color: '#ff2746',
      fontWeight:'bold',
      marginLeft:15
  },
  iconColor:{
      color:'#4a4949',
    },
  })