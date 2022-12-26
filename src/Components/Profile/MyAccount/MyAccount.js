import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react'
import { View ,Text, TouchableOpacity, StyleSheet, Image, Switch, Modal,Alert} from 'react-native'
import Icon from "react-native-vector-icons/MaterialIcons"
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Octicons from "react-native-vector-icons/Octicons"
import BillingIcon from 'react-native-vector-icons/FontAwesome';
import CommonModal from '../../../Common/Modal/Modal';

const MyAccount = () => {
  const navigation = useNavigation();
  const [isEnabled, setIsEnabled] = useState(false);
  const [modalVisibleDelete, setModalVisibleDelete] = useState(false);
  const [modalVisibleLogout, setModalVisibleLogout] = useState(false);
  
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
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
          
                 <View style={[styles.iconParent,styles.forMargin]}>
                    <View style={styles.iconsubParent}>
                      <View style={styles.icon }><MaterialCommunityIcons name="two-factor-authentication" size={25} style={styles.iconColor}/></View>  
                        <Text style={styles.profileSettings}>Required Order Verification</Text>
                      </View>
                          <Switch
                            style={styles.switch}
                            trackColor={{false: '#767577', true: 'red'}}
                            thumbColor={isEnabled ? 'white' : '#f4f3f4'}
                            onValueChange={toggleSwitch}
                            value={isEnabled}
                          />
                </View>
            <TouchableOpacity  onPress={()=> navigation.navigate('accountProfile')}>
                 <View style={[styles.iconParent]}>
                    <View style={styles.iconsubParent}>
                      <View style={styles.icon}><Octicons name="person" size={25} style={styles.iconColor}/></View>  
                        <Text style={styles.profileSettings}>Profile</Text>
                      </View>
                        <Text style={styles.rightArrow}><Icon name="keyboard-arrow-right" size={40} /></Text>  
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=> navigation.navigate('billingDetails')}>
                 <View style={[styles.iconParent]}>
                    <View style={styles.iconsubParent}>
                      <View style={styles.icon}><BillingIcon name="file-text" size={20} style={styles.iconColor}/></View>  
                        <Text style={styles.profileSettings}>Billing Details</Text>
                      </View>
                        <Text style={styles.rightArrow}><Icon name="keyboard-arrow-right" size={40} /></Text>  
                </View>
            </TouchableOpacity>
            <CommonModal open={modalVisibleDelete} 
            onClose={() => setModalVisibleDelete(!modalVisibleDelete)} 
            title="Are you sure you want to delete your account?"
              onYes={() => setModalVisibleDelete(!modalVisibleDelete)}
              onNo={() => setModalVisibleDelete(!modalVisibleDelete)}
            />
            <TouchableOpacity  onPress={() => setModalVisibleDelete(true)}>
                 <View style={[styles.iconParent]}>
                    <View style={styles.iconsubParent}>
                      <View style={styles.icon}><Icon name="delete-outline" size={25} style={styles.iconColor}/></View>  
                        <Text style={styles.profileSettings}>Account Delete</Text>
                      </View>
                        <Text style={styles.rightArrow}><Icon name="keyboard-arrow-right" size={40} /></Text>  
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setModalVisibleLogout(true)}>
                 <View style={[styles.iconParent]}>
                    <View style={styles.iconsubParent}>
                      <View style={styles.icon}><Icon name="logout" size={25} style={styles.iconColor}/></View>  
                        <Text style={styles.profileSettings}>Logout</Text>
                      </View>
                        <Text style={styles.rightArrow}><Icon name="keyboard-arrow-right" size={40} /></Text>  
                </View>
            </TouchableOpacity>
            <CommonModal open={modalVisibleLogout} 
            onClose={() => setModalVisibleLogout(!modalVisibleLogout)} 
            title="Are you sure you want to logout?"
              onYes={() => setModalVisibleLogout(!modalVisibleLogout)}
              onNo={() => setModalVisibleLogout(!modalVisibleLogout)}
            />
            
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

    iconParent:{
      flexDirection:'row',
      alignItems:'center',  
      justifyContent:'space-between',
      borderColor:'white',
      borderWidth:1,
      borderRadius:10,
      backgroundColor: 'white',
      marginRight:10,
      padding:7,
      paddingLeft:10,
      marginTop:10
    },
    iconsubParent:{
      flexDirection:'row',
      alignItems:'center',
    },
    icon:{
      backgroundColor:'#ded9d9',
      height:40,
      width:40,
      alignItems:'center',
      justifyContent:'center',
      borderRadius:20,
    },
    profileSettings:{
      fontSize:16,
      color:'#4a4949',
      fontWeight:'600',
      marginLeft:20
    },
    rightArrow:{
      color:'black',
    },
    forMargin:{
      marginTop:20
    },
    centeredView: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
    },
    modalView: {
      margin: 9,
      backgroundColor: "white",
      borderRadius: 20,
      padding: 20,
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5
    },
    buttonParent:{
      flexDirection:'row',
      justifyContent:'space-evenly'
    },
    button: {
      borderRadius: 20,
      padding: 10,
      // elevation: 2,
      height:40,
      width:100,
      borderWidth:1,
      borderColor:'#ff2746',
    
    },
    buttonOpen: {
      backgroundColor: "#ffffff",
    },
    buttonClose: {
      backgroundColor: "#ffffff",
      marginRight:10
    },
    textStyle: {
      color: '#ff2746',
      fontWeight: "bold",
      textAlign: "center"
    },
    modalText: {
      marginBottom: 15,
      textAlign: "center",
      color: 'black',
      marginTop:10
    },
    modalTextAlert:{
      textAlign: "center",
      color: '#ff2746',
      fontSize:25,
      fontWeight:'bold'
    },
    closeArrow:{
      color:'black',
    },
    closeArrowParent:{
      alignItems:'flex-end',
      justifyContent:'flex-end',
    },
  })