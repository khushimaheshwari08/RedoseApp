import { useNavigation } from '@react-navigation/native';
import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import Icon from "react-native-vector-icons/MaterialIcons"


const AddNewLocation = () => {
    const navigation = useNavigation();
  return (
    <View style={styles.container}>
    <View style={styles.parent}>
    <View style={styles.Profile}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
        <Icon name="arrow-back" size={25} style={styles.iconColor}/>
        </TouchableOpacity>
        <View style={styles.textParent}>
      <Text style={styles.heading}>Choose Your Building</Text>
      <Text style={styles.add}>Add your routine sitting location</Text>
      </View>
      </View>
      <View>
              <TouchableOpacity style={styles.icon}><Icon name="search" size={32} style={styles.searchIcon}/></TouchableOpacity>  
        </View>
      </View>
      <TouchableOpacity onPress={()=> navigation.navigate('selectWing')}>
                 <View style={styles.iconParent}>
                  <View style={styles.iconsubParent}>
                    <View style={styles.icon}><Icon name="my-location" size={25} style={styles.searchIcon}/></View>  
                      <Text style={styles.profileSettings}>Binori</Text>
                  </View>
                  <View style={styles.locationAddress}>
                    <Text style={styles.locationAddressText}>Friends Avenue, Bodakdev, Ahmedabad,Gujarat 380054</Text>
                  </View>
                </View>
       </TouchableOpacity>
                <TouchableOpacity onPress={()=> navigation.navigate('selectWing')}>
                 <View style={styles.iconParent}>
                  <View style={styles.iconsubParent}>
                    <View style={styles.icon}><Icon name="my-location" size={25} style={styles.searchIcon}/></View>  
                      <Text style={styles.profileSettings}>Binori</Text>
                  </View>
                  <View style={styles.locationAddress}>
                    <Text style={styles.locationAddressText}>Friends Avenue, Bodakdev, Ahmedabad,Gujarat 380054 Friends Avenue, Bodakdev, Ahmedabad,Gujarat 380054Friends Avenue, Bodakdev, Ahmedabad,Gujarat 380054Friends Avenue, Bodakdev, Ahmedabad,Gujarat 380054</Text>
                  </View>
                </View>
                </TouchableOpacity>
      </View>
  )
}

export default AddNewLocation

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#f2f2f2',
      padding:12
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
        fontSize:22,
        color: '#ff2746',
        fontWeight:'bold',
        marginLeft:12
    },
    add:{
        marginLeft:12,
        color:'black' ,
        fontSize:15,
    },
    iconColor:{
        color:'#4a4949',
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
      },
      iconParent:{  
        justifyContent:'space-between',
        borderColor:'white',
        borderWidth:1,
        borderRadius:10,
        backgroundColor: 'white',
        marginTop:10,
        paddingBottom:30,
      },
      iconsubParent:{
        flexDirection:'row',
        alignItems:'center',
      },
      profileSettings:{
        fontSize:18,
        color:  '#ff2746',
        fontWeight:'bold',
      },
      locationAddress:{
        marginLeft:15
      },
      locationAddressText:{
        color:'black',
        fontSize:12
      }
})