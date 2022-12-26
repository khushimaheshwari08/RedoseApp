import { useNavigation } from '@react-navigation/native';
import React from 'react'
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import Icon from "react-native-vector-icons/MaterialIcons"

const AddOfficeName = () => {
    const navigation = useNavigation();
  return (
    
    <View style={styles.container}>
        <View style={styles.parent}>
            <View style={styles.Profile}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                <Icon name="arrow-back" size={25} style={styles.iconColor}/>
                </TouchableOpacity>
            <Text style={styles.heading}>Add Your Office Name</Text>
            </View>
        </View>
            <View style={styles.parentWing}>
                <Text style={styles.WingHeading}>Binori - A - 101</Text>
                <Text style={styles.WingSubHeading}>Friends Avenue, Bodakdev, Ahmedabad,Gujarat 380054</Text>
            </View>
        <TextInput 
        style={styles.main} 
        placeholder="Office Name"
        placeholderTextColor="gray"
        autoFocus={true}
        />
         <TouchableOpacity style={styles.callChhotuParent} onPress={()=> navigation.navigate('homeScreen')}><Text style={styles.callChhotuParentText}>Ready to call Chhotu</Text></TouchableOpacity>
    </View>
  )
}

export default AddOfficeName

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
    main: {
      margin:15,
      height: 55,
      borderRadius: 30,
      backgroundColor: '#f2f2f2',
      alignItems:'center',
      paddingLeft:20,
      color:'black'
    },
    callChhotuParent:{
        margin:15,
        height: 55,
        borderRadius: 30,
        backgroundColor: '#ff2746',
        alignItems:'center',
    },
    callChhotuParentText:{
        fontSize:17,
        color:'white',
        marginTop:14,
        fontWeight:'bold'
        }
})