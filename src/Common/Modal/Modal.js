import React from 'react';
import { View ,Text, TouchableOpacity, StyleSheet, Modal,Alert} from 'react-native'
import Icon from "react-native-vector-icons/MaterialIcons"
const CommonModal = ({open,onClose,title,onYes,onNo}) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={open}
    >
    <View style={styles.container}>
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <TouchableOpacity
            onPress={onClose}
            style={styles.closeArrowParent}>
            <Text style={styles.closeArrow}>
              <Icon name="close" size={40} />
            </Text>
          </TouchableOpacity>
          <Text style={styles.modalTextAlert}>Alert!</Text>
          <Text style={styles.modalText}>
           {title}
          </Text>
          <View style={styles.buttonParent}>
            <TouchableOpacity
              style={[styles.button, styles.buttonClose]}
              onPress={onYes}>
              <Text style={styles.textStyle}>Yes</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.button, styles.buttonClose]}
              onPress={onNo}>
              <Text style={styles.textStyle}>No</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      </View>
    </Modal>
  );
};

export default CommonModal;
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#e3f2fd',
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