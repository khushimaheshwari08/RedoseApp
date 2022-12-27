import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useRef, useState } from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import Icon from "react-native-vector-icons/MaterialIcons"
import Modal from 'react-native-modal'
import FlashMessage, { showMessage, hideMessage } from "react-native-flash-message";

const MyOffice = () => {
    const navigation = useNavigation();
    const [isModalVisible, setIsModalVisible] = useState(false)
    const flashMessage = useRef();

    const toggleModal = () =>{
    setIsModalVisible(!isModalVisible)
  }
  const onAlert =()=>{
    flashMessage.current.showMessage({
      message: "Alert",
      description: "Please add credit to place order",
      type: "danger",
      style: styles.flashMessageAlert,
      titleStyle: styles.flashTitle,
      textStyle: styles.flashDes,
      duration:	2000
    });
  }
  return (
    <View style={styles.container}>
         <View style={styles.parentWing}>
                <TouchableOpacity style={styles.afteradddBuilding} onPress={toggleModal}>
                    <Text style={styles.WingHeading}>Binori - A - 101 </Text>
                    <Text style={{color:'black',marginRight:20,  fontSize:18}}>(Dummy)</Text>
                      <Icon name="keyboard-arrow-down" size={26} style={styles.searchIcon}/>
                </TouchableOpacity>
                <Text style={styles.WingSubHeading}>Friends Avenue, Bodakdev, Ahmedabad,Gujarat 380054</Text>
          </View>
          <FlashMessage position="bottom" ref={flashMessage} /> 
        <TouchableOpacity onPress={onAlert}>
        <Image
            source={require('../../assets/img/buzzer.png')}
            style={{width: 300, height: 300,marginTop:20,marginLeft:10}}
        />
        </TouchableOpacity>
        <Text style={styles.tea}>Love tea everyday?</Text>
       <TouchableOpacity style={styles.SectionStyle} onPress={()=>navigation.navigate('autoSchedule')}>
        <Text style={styles.otp}>Auto-Schedule Chhotu Calls</Text>
      </TouchableOpacity>
      <Modal
                onBackdropPress={()=> setIsModalVisible(false)}
                onBackButtonPress={()=> setIsModalVisible(false)}
                isVisible={isModalVisible}
                swipeDirection="down"
                onSwipeComplete={toggleModal}
                animationIn='bounceInUp'
                animationOut='bounceOutDown'
                style={{width: '100%', marginLeft: -2}}
                >   
                 <View style={styles.modalContent}>
                    <View style={styles.swipeIcon}></View>
                      <View style={styles.swipeTop}>
                        <View style={styles.swipeHeader}>
                            <Text style={styles.textIndianRs}>Change Office </Text>
                        </View>
                        <TouchableOpacity onPress={()=> navigation.navigate('newLocation')}><Text style={styles.usedText}>+ Add new office</Text></TouchableOpacity>
                      </View>
                      <View style={styles.divider2}></View>
                      <View style={styles.iconParent}>
                        <View style={styles.iconsubParent}>
                          <View style={styles.icon}><Icon name="my-location" size={25} style={styles.searchIcon}/></View>  
                            <Text style={styles.profileSettings}>Binori (Dummy)</Text>
                          </View>
                        <View style={styles.locationAddress}>
                          <Text style={styles.locationAddressText}>Friends Avenue, Bodakdev, Ahmedabad,Gujarat 380054</Text>
                        </View>
                      </View>
                  </View>
                </Modal>
    </View>
    // <View style={styles.container}>
    //     <View style={styles.parent}>
    //         <View>
    //             <Text style={styles.noOffice} >No Office Added </Text>
    //         </View>
    //         <TouchableOpacity style={styles.addOffice} onPress={()=>navigation.navigate('newLocation')} >
    //             <Icon name="add" size={22} style={styles.searchIcon}/>
    //             <Text style={styles.addOfficeText}>Add new office</Text>
    //         </TouchableOpacity>
    //     </View>
        
    //     <TouchableOpacity onPress={()=>navigation.navigate('newLocation')}>
    //     <Image
    //         source={require('../../assets/img/buzzer.png')}
    //         style={{width: 300, height: 300,marginTop:20,marginLeft:10}}
    //     />
    //     </TouchableOpacity>
    //     <Text style={styles.tea}>Love tea everyday?</Text>
    //     <TouchableOpacity style={styles.SectionStyle} onPress={()=>navigation.navigate('newLocation')}>
    //     <Text style={styles.otp}>Auto-Schedule Chhotu Calls</Text>
    //   </TouchableOpacity>
    // </View>
  )
}

export default MyOffice

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'white',
      paddingLeft:12,
      paddingRight:12,
    },
    parent:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        marginTop:10
    },
    noOffice:{
        color:'black',
        fontWeight:'600',
        fontSize:18
    },
    addOfficeText:{
        color: '#ff2746',
        fontSize:16,
        fontWeight:'700'
    },
    addOffice:{
        flexDirection:'row',
    },
    searchIcon:{
        color: '#ff2746',
      },
      tea:{
        textAlign:'center',
        color:'black',
        fontSize:19,
        fontWeight:'600',
        marginTop:10
      },
      SectionStyle: {
        marginTop: 10,
        marginLeft: 20,
        marginRight: 20,
        margin: 10,
      },
      otp: {
        color: '#ff2746',
        height: 60,
        textAlign: 'center',
        borderRadius: 30,
        fontSize: 15,
        fontWeight: 'bold',
        paddingTop: 18,
        backgroundColor:'white' ,
        borderWidth:1,
        borderColor:'#ff2746'
      },
      parentWing:{
          margin:15
      },
      WingHeading:{
          color:'black',
          fontSize:18,
         fontWeight:'bold',
      },
      WingSubHeading:{
          color:'black',
          fontSize:12,
      },
      afteradddBuilding:{
        flexDirection:'row',
        alignItems:'center'
      },
      
  modalContent:{
    backgroundColor:'#f2f2f2',
    minHeight:190,
    marginTop:495,
    borderTopLeftRadius:20,
    borderTopRightRadius:20
  },
  swipeIcon:{
    backgroundColor:'gray',
    alignItems:'center',
    marginTop:10,
    marginRight:160,
    marginLeft:160,
    height:7,
    borderRadius:20
  },
  blurViewStyle: {
    position: 'absolute',
    left: 0,
    top: 0,
    bottom: 0,
    right: 0,
  },
  swipeHeader:{
    flexDirection:'row',
    alignItems:'center',
    marginLeft:20,
  },
  textIndianRs:{
    color: '#ff2746',
    fontWeight:'bold',
    fontSize:22
  },
  swipeTop:{
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    marginTop:10
  },
  usedText:{
    color: '#ff2746',
    marginRight:10,
    fontWeight:'bold',
    fontSize:16
  },
  usedAmountText:{
    textAlign:'center',
    color:'gray',
    marginTop:20,
    fontSize:17
  },
  modalFooter:{
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    marginTop:20,
  },
  statusText:{
    color:'gray',
    marginLeft:20,
    fontSize:17
  },
  
  divider2:{
    width:335,
    borderWidth:0.3,
    borderColor:'lightgray',
    marginTop:7,
    marginLeft:20,
  },
  icon:{
    backgroundColor:'#ffffff',
    height:45,
    width:45,
    alignItems:'center',
    justifyContent:'center',
    borderRadius:25,
  },
  iconParent:{  
    justifyContent:'space-between',
    borderColor:'white',
    borderWidth:1,
    borderRadius:10,
    backgroundColor: 'white',
    marginTop:10,
    paddingBottom:30,
    marginLeft:20,
    marginRight:10
  },
  iconsubParent:{
    flexDirection:'row',
    alignItems:'center',
  },
  profileSettings:{
    fontSize:17,
    color:  '#ff2746',
    fontWeight:'bold',
  },
  locationAddress:{
    marginLeft:15
  },
  locationAddressText:{
    color:'black',
    fontSize:12
  },
  flashTitle: {
    fontWeight: 'bold',
    fontSize: 13,
    color:'black'
  },
  flashDes: {
    fontSize: 10,
    color:'gray'
  },
  flashMessageAlert:{
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
    borderLeftColor:'red',
    height:65
  }
})