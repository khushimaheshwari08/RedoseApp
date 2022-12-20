import { useNavigation } from '@react-navigation/native';
import React from 'react'
import { View ,Text, TouchableOpacity, StyleSheet, Image,} from 'react-native'
import Icon from "react-native-vector-icons/MaterialIcons"

const ManageLocation = () => {
    const navigation = useNavigation();
  return (
    <View style={styles.container}>
            <View style={styles.parent}>
            <View style={styles.Profile}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                <Icon name="arrow-back" size={25} style={styles.iconColor}/>
                </TouchableOpacity>
              <Text style={styles.heading}>Manage Location</Text>
              </View>
              <View>
              <TouchableOpacity style={styles.icon}><Icon name="search" size={32} style={styles.searchIcon}/></TouchableOpacity>  
              </View>
              </View>
              <Image
                    source={require('../../../assets/img/location.png')}
                    style={{width: 300, height: 300,marginTop:45,marginLeft:20}}
                />
                <Text style={styles.notLocation}>Not Location Found</Text>
                <Text style={styles.text}>Sorry.We couldn't find anything. You can try another search or location</Text>
                <TouchableOpacity onPress={()=> navigation.navigate('newLocation')}>
                  <Text style={styles.otp}>Add New Location</Text>
                </TouchableOpacity>
        </View>
  )
}

export default ManageLocation

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
      notLocation:{
        fontSize:23,
        color: '#ff2746',
        fontWeight:'bold',
        textAlign:'center',
        marginTop:32
      },
      text:{
        textAlign:'center',
        color:'black',
        marginTop:10,
        fontStyle:'italic',
        fontWeight:'500',
      },
      
      otp: {
        marginTop:93,
        color: 'white',
        height: 60,
        textAlign: 'center',
        borderRadius: 30,
        fontSize: 15,
        fontWeight: 'bold',
        paddingTop: 18,
        backgroundColor: '#ff2746',
        margin:10
      },
      icon:{
        backgroundColor:'#ffffff',
        height:45,
        width:45,
        alignItems:'center',
        justifyContent:'center',
        borderRadius:25,
      },
      searchIcon:{
        color: '#ff2746',
      }
    })