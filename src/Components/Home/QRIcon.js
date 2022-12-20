import { useNavigation } from '@react-navigation/native';
import React from 'react'
import { Text, View ,StyleSheet, TouchableOpacity} from 'react-native'
import LinearGradient from 'react-native-linear-gradient';

const QRIcon = () => {
  const navigation = useNavigation();
  return (
    <LinearGradient colors={['#ff2746',  '#000000']} style={styles.linearGradient}>
        <Text style={styles.text}>Please show this QR code to Chhotu (Delivery Boy) to complete your order</Text>
        <TouchableOpacity onPress={()=> navigation.navigate('homeScreen')} style={styles.goBack}>
        <Text style={styles.textGo}>Go Back</Text>
        </TouchableOpacity>
    </LinearGradient>
  )
}

export default QRIcon

const styles = StyleSheet.create({
    linearGradient: {
      flex: 1,
      paddingLeft: 20,
      paddingRight: 20,
    },
    text:{
      marginTop:300,
      textAlign:'center',
      fontWeight:'bold',
      fontSize:18
    },
    goBack:{
      marginTop:170,
      justifyContent:'center',
      backgroundColor:'black',
      margin:80,
      height:40,
      borderRadius:10
    },
    textGo:{
      textAlign:'center',
      fontWeight:'bold',
      fontSize:18
    }
})