import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useRef, useState } from 'react'
import { View ,Text, TouchableOpacity, StyleSheet, Image, TextInput,} from 'react-native'
import Icon from "react-native-vector-icons/MaterialIcons"
import FlashMessage, { showMessage, hideMessage } from "react-native-flash-message";
import FeatherIcon from "react-native-vector-icons/Feather"


const AccountProfile = () => {
    const navigation = useNavigation();
    const [change, setChange] = useState(true);
    const flashMessage = useRef();

   const saveProfile=()=>{
        setChange(true)
        if(change == false){
            flashMessage.current.showMessage({
          message: "Success",
          description: "Profile updated successfully",
          type: "success",
          style: styles.flashMessage,
          titleStyle: styles.flashTitle,
          textStyle: styles.flashDes,
          duration:	2000
        });
    }
}
  
  return (
    <View style={styles.container}>
        <FlashMessage position="bottom" ref={flashMessage} /> 
            <View style={styles.parent}>
            <View style={styles.Profile}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Icon name="arrow-back" size={25} style={styles.iconColor}/>
                </TouchableOpacity>
                <Text style={styles.heading}>Profile</Text>
            </View>
            </View>
            <View style={styles.main}>
                <View style={styles.invoice}>
                    <View style={styles.invoiceParent}><Text style={styles.invoiceText}>Name:</Text></View>
                   {change ? 
                   <Text style={styles.invoiceTextclr}>Dummy </Text>
                   :
                   <TextInput 
                    style={styles.textInput}
                    // placeholder="Dummy"
                    // placeholderTextColor="black"
                    >Dummy</TextInput>
                   }
                    </View>
                <View style={styles.divider2}></View>
                    <View style={styles.invoice}>
                    <View style={styles.invoiceParent}><Text style={styles.invoiceText}>Email:</Text></View>
                    {change ? 
                        <Text style={styles.invoiceTextclr}></Text>
                        :
                        <TextInput 
                         style={styles.textInput}
                         placeholder="Email"
                         placeholderTextColor="gray"
                         />
                        }
                    </View>
                    <View style={styles.divider2}></View>
                    <View style={styles.invoice}>
                    <View style={styles.invoiceParent}><Text style={styles.invoiceText}>Phone Number:</Text></View>
                      <Text style={styles.invoiceTextclr}>1234567890</Text>
                    </View>
                    <View style={styles.divider2}></View>
                    <View>
                    <TouchableOpacity style={styles.SectionStyle} onPress={()=> setChange(false)}> 
                    {change ? 
                    <Text style={styles.otp}> <FeatherIcon name="edit" size={20} style={styles.iconaddColor}/>Make Change</Text>
                    :
                    <TouchableOpacity onPress={saveProfile}><Text style={styles.otp}><FeatherIcon name="save" size={20} style={styles.iconaddColor}/>Save</Text></TouchableOpacity>
                    }
                    </TouchableOpacity>
          </View>
                    </View>
    </View>
  )
}

export default AccountProfile

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

      main:{
        height:210,
        backgroundColor:'white',
        borderRadius:20,
        marginTop:20
      },
      divider2:{
        width:340,
        borderWidth:0.3,
        borderColor:'lightgray'
      },
    
      invoice:{
        flexDirection:'row',
        padding:10
      },
      invoiceParent:{
        width:120
      },
      invoiceText:{
        color:'gray',
        marginTop:5,
      
      },
      invoiceTextclr:{
        color:'black',
        marginTop:5,
        padding:3,
        fontWeight:'bold',
      }, 
      SectionStyle: {
        marginLeft: 100,
        marginRight:100,
        backgroundColor:'#ff2746',
        height:35,
        borderRadius: 10,
        marginTop:10,
        padding:5
      },
      otp:{
        color:'white',
        textAlign:'center',
        fontSize:15,
        fontWeight:'bold',
        paddingBottom:4,
      },
      iconaddColor:{
        color:'white',
      },
      textInput:{
        color:'black',
        borderWidth:0.5,
        height:30,
        width:170,
        borderRadius:5,
        fontSize:13,
        padding:7
      }, 
      flashMessage: {
        borderRadius: 9,
        // opacity: 0.8,
        shadowColor: 'gray',
        shadowOffset: {width: -2, height: 4},
        shadowOpacity: 0.2,
        shadowRadius: 3,
        elevation:1,
        margin: 12,
        backgroundColor:'white',
        marginBottom:40,
        borderLeftWidth:5,
        borderLeftColor:'green',
        height:65
      },
      flashTitle: {
        fontWeight: 'bold',
        fontSize: 13,
        color:'black'
      },
      flashDes: {
        fontSize: 10,
        color:'gray'
      }
})