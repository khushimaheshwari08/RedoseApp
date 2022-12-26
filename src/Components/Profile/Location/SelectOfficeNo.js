import { useNavigation } from '@react-navigation/native';
import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import Icon from "react-native-vector-icons/MaterialIcons"

const SelectOfficeNo = () => {
    const navigation = useNavigation();
  return (
    <View style={styles.container}>
        <View style={styles.parent}>
            <View style={styles.Profile}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                <Icon name="arrow-back" size={25} style={styles.iconColor}/>
                </TouchableOpacity>
            <Text style={styles.heading}>Select Your Office No</Text>
            </View>
        </View>
        <View style={styles.parentWing}>
        <Text style={styles.WingHeading}>Binori - A</Text>
        <Text style={styles.WingSubHeading}>Friends Avenue, Bodakdev, Ahmedabad,Gujarat 380054</Text>
        <View style={styles.WingSelectParent}>
        <TouchableOpacity onPress={()=> navigation.navigate('addOfficeName')}>
        <View style={styles.WingSelect}><Text style={[styles.WingSelectText,{marginTop:23}]}>101</Text></View>
        </TouchableOpacity>
        <TouchableOpacity>
        <View style={styles.WingSelect}><Text style={[styles.WingSelectText,{marginTop:23}]}>102</Text></View>
        </TouchableOpacity>
        <TouchableOpacity>
        <View style={styles.WingSelect}><Text style={[styles.WingSelectText,{marginTop:23}]}>103</Text></View>
        </TouchableOpacity>
        </View>
        </View>
    </View>
  )
}

export default SelectOfficeNo

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#ffffff',
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
    iconColor:{
      color:'#4a4949',
    },
    parentWing:{
        margin:15
    },
    WingHeading:{
        color:'black',
        fontSize:18,
       fontWeight:'bold'
    },
    WingSubHeading:{
        color:'black',
        fontSize:14,
    },
    WingSelect:{
        backgroundColor:'#f2f2f2',
        height:95,
        width:95,
        marginTop:20,
        borderRadius:5
    },
    WingSelectParent:{
        flexDirection:'row',
        justifyContent:'space-between',
    },
    WingSelectText:{
        color:'black',
        fontWeight:'bold',
        textAlign:'center',
        fontSize:30,
    }
})