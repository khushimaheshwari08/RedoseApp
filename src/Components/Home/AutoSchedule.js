import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react'
import { StyleSheet, Text, TouchableOpacity, View,Switch, Image, ScrollView,} from 'react-native'
import Icon from "react-native-vector-icons/MaterialIcons"
import Modal from 'react-native-modal'

const AutoSchedule = () => {
    const navigation = useNavigation();
    const [isModalVisible, setIsModalVisible] = useState(false)
    const [isEnabled, setIsEnabled] =useState(false);
    const [week, setWeek] = useState('Monday')

    const toggleModal = () =>{
        setIsModalVisible(!isModalVisible)
      }
      const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  return (
    <View style={styles.container}>
                <View style={styles.parent}>
                    <View style={styles.Profile}>
                        <TouchableOpacity onPress={() => navigation.goBack()}>
                        <Icon name="arrow-back" size={25} style={styles.iconColor}/>
                        </TouchableOpacity>
                        <Text style={styles.heading}>Auto Schedule</Text>
                    </View>
                </View>
                <ScrollView>
                    <View style={styles.parentWing}>
                        <TouchableOpacity style={styles.afteradddBuilding} onPress={toggleModal}>
                            <Text style={styles.WingHeading}>Binori - A - 101 </Text>
                            <Text style={{color:'black',marginRight:20,  fontSize:18,}}>(Dummy)</Text>
                            <Icon name="keyboard-arrow-down" size={26} style={styles.searchIcon}/>
                        </TouchableOpacity>
                            <Text style={styles.WingSubHeading}>Friends Avenue, Bodakdev, Ahmedabad,Gujarat 380054</Text>
                    </View>
                    <View style={styles.regularTeaParent}>
                        <View style={{width:270}}>
                            <Text style={{color:'black',fontWeight:'bold',fontSize:15}}>Get regular tea at your desk without even calling anyone</Text>
                        </View>
                        <Switch
                            trackColor={{false: '#767577', true: 'red'}}
                            thumbColor={isEnabled ? 'white' : '#f4f3f4'}
                            onValueChange={toggleSwitch}
                            value={isEnabled}
                            style={{marginLeft:15}}
                    />
                    </View>
                    <View style={styles.mainWeekView}>
                        <TouchableOpacity style={[styles.weekView,{borderWidth: week === 'Monday' ? 1.5: 0}]} onPress={()=> setWeek('Monday')}>
                            <Text style={styles.weekText}>M</Text>
                            <Image
                            source={require('../../assets/icons/tea.png')}
                            style={{
                                width: 30,
                                height: 30,
                                marginTop:10
                            }}
                            />
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.weekView,styles.forml,{borderWidth: week === 'Tuesday' ?  1.5: 0}]} onPress={()=> setWeek('Tuesday')}>
                            <Text style={styles.weekText}>T</Text>
                            <Image
                            source={require('../../assets/icons/tea.png')}
                            style={{
                                width: 30,
                                height: 30,
                                marginTop:10
                            }}
                            />
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.weekView,styles.forml,{borderWidth: week === 'Wednesday' ?  1.5: 0}]} onPress={()=> setWeek('Wednesday')}>
                            <Text style={styles.weekText}>W</Text>
                            <Image
                            source={require('../../assets/icons/tea.png')}
                            style={{
                                width: 30,
                                height: 30,
                                marginTop:10
                            }}
                            />
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.weekView,styles.forml,{borderWidth: week === 'Thursday' ?  1.5: 0}]} onPress={()=> setWeek('Thursday')}>
                            <Text style={styles.weekText}>T</Text>
                            <Image
                            source={require('../../assets/icons/tea.png')}
                            style={{
                                width: 30,
                                height: 30,
                                marginTop:10
                            }}
                            />
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.weekView,styles.forml,{borderWidth: week === 'Friday' ?  1.5: 0}]} onPress={()=> setWeek('Friday')}>
                            <Text style={styles.weekText}>F</Text>
                            <Image
                            source={require('../../assets/icons/tea.png')}
                            style={{
                                width: 30,
                                height: 30,
                                marginTop:10
                            }}
                            />
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.weekView,styles.forml,{borderWidth: week === 'Saturday' ?  1.5: 0}]} onPress={()=> setWeek('Saturday')}>
                            <Text style={styles.weekText}>S</Text>
                            <Image
                            source={require('../../assets/icons/tea.png')}
                            style={{
                                width: 30,
                                height: 30,
                                marginTop:10
                            }}
                            />
                        </TouchableOpacity>
                    </View>
                    <TouchableOpacity style={styles.setScheduleParent}>
                        <View style={{width:270}}>
                            <Text style={{color:'black'}}>Set your daily schedule to get tea/coffee at your desk</Text>
                        </View>
                        <View style={styles.forRadioButton}></View>
                    </TouchableOpacity>
                    <View style={styles.timeMain}>
                        <TouchableOpacity style={styles.timeParent}>
                        <Icon name="access-time" size={30} style={styles.searchIcon}/>
                        <Text style={styles.timeText}>09:00 AM to 09:30 AM</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.timeParent,styles.forml]}>
                        <Icon name="access-time" size={30} style={styles.searchIcon}/>
                        <Text style={styles.timeText}>09:30 AM to 10:00 AM</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.timeParent,styles.forMt]}>
                        <Icon name="access-time" size={30} style={styles.searchIcon}/>
                        <Text style={styles.timeText}>09:00 AM to 09:30 AM</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.timeParent,styles.forml,styles.forMt]}>
                        <Icon name="access-time" size={30} style={styles.searchIcon}/>
                        <Text style={styles.timeText}>09:30 AM to 10:00 AM</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.timeParent,styles.forMt]}>
                        <Icon name="access-time" size={30} style={styles.searchIcon}/>
                        <Text style={styles.timeText}>09:00 AM to 09:30 AM</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.timeParent,styles.forml,styles.forMt]}>
                        <Icon name="access-time" size={30} style={styles.searchIcon}/>
                        <Text style={styles.timeText}>09:30 AM to 10:00 AM</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.timeParent,styles.forMt]}>
                        <Icon name="access-time" size={30} style={styles.searchIcon}/>
                        <Text style={styles.timeText}>09:00 AM to 09:30 AM</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.timeParent,styles.forml,styles.forMt]}>
                        <Icon name="access-time" size={30} style={styles.searchIcon}/>
                        <Text style={styles.timeText}>09:30 AM to 10:00 AM</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.timeParent,styles.forMt]}>
                        <Icon name="access-time" size={30} style={styles.searchIcon}/>
                        <Text style={styles.timeText}>09:00 AM to 09:30 AM</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.timeParent,styles.forml,styles.forMt]}>
                        <Icon name="access-time" size={30} style={styles.searchIcon}/>
                        <Text style={styles.timeText}>09:30 AM to 10:00 AM</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.timeParent,styles.forMt]}>
                        <Icon name="access-time" size={30} style={styles.searchIcon}/>
                        <Text style={styles.timeText}>09:00 AM to 09:30 AM</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.timeParent,styles.forml,styles.forMt]}>
                        <Icon name="access-time" size={30} style={styles.searchIcon}/>
                        <Text style={styles.timeText}>09:30 AM to 10:00 AM</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.timeParent,styles.forMt]}>
                        <Icon name="access-time" size={30} style={styles.searchIcon}/>
                        <Text style={styles.timeText}>09:00 AM to 09:30 AM</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.timeParent,styles.forml,styles.forMt]}>
                        <Icon name="access-time" size={30} style={styles.searchIcon}/>
                        <Text style={styles.timeText}>09:30 AM to 10:00 AM</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.timeParent,styles.forMt]}>
                        <Icon name="access-time" size={30} style={styles.searchIcon}/>
                        <Text style={styles.timeText}>09:00 AM to 09:30 AM</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.timeParent,styles.forml,styles.forMt]}>
                        <Icon name="access-time" size={30} style={styles.searchIcon}/>
                        <Text style={styles.timeText}>09:30 AM to 10:00 AM</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.timeParent,styles.forMt]}>
                        <Icon name="access-time" size={30} style={styles.searchIcon}/>
                        <Text style={styles.timeText}>09:00 AM to 09:30 AM</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.timeParent,styles.forml,styles.forMt]}>
                        <Icon name="access-time" size={30} style={styles.searchIcon}/>
                        <Text style={styles.timeText}>09:30 AM to 10:00 AM</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.timeParent,styles.forMt]}>
                        <Icon name="access-time" size={30} style={styles.searchIcon}/>
                        <Text style={styles.timeText}>09:00 AM to 09:30 AM</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.timeParent,styles.forml,styles.forMt]}>
                        <Icon name="access-time" size={30} style={styles.searchIcon}/>
                        <Text style={styles.timeText}>09:30 AM to 10:00 AM</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.timeParent,styles.forMt]}>
                        <Icon name="access-time" size={30} style={styles.searchIcon}/>
                        <Text style={styles.timeText}>09:00 AM to 09:30 AM</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.timeParent,styles.forml,styles.forMt]}>
                        <Icon name="access-time" size={30} style={styles.searchIcon}/>
                        <Text style={styles.timeText}>09:30 AM to 10:00 AM</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.timeParent,styles.forMt]}>
                        <Icon name="access-time" size={30} style={styles.searchIcon}/>
                        <Text style={styles.timeText}>09:00 AM to 09:30 AM</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.timeParent,styles.forml,styles.forMt]}>
                        <Icon name="access-time" size={30} style={styles.searchIcon}/>
                        <Text style={styles.timeText}>09:30 AM to 10:00 AM</Text>
                        </TouchableOpacity>
                       
                    </View>
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
                </ScrollView>
    </View>
  )
}

export default AutoSchedule

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'white',
      padding:20,
      paddingTop:8
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
        marginTop:10
    },
   
    WingHeading:{
        color:'black',
        fontSize:18,
       fontWeight:'bold',
    },
    WingSubHeading:{
        color:'black',
        fontSize:13,
    },
    afteradddBuilding:{
      flexDirection:'row',
      alignItems:'center'
    },
    searchIcon:{
        color: '#ff2746',
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
      regularTeaParent:{
        flexDirection:'row',
        alignItems:'center',
        marginTop:20
      },
      mainWeekView:{
        flexDirection:'row',
      },
      forml:{
        marginLeft:8
      },
      weekView:{
        backgroundColor:'#f2f2f2',
        height:100,
        width:47,
        alignItems:'center',
        borderRadius:5,
        marginTop:15,
        // borderWidth:0,
        borderStyle: 'dashed',
        borderColor:'#ff2746'
      },
      weekText:{
        color:'black',
        fontWeight:'bold',
        marginTop:20,
        fontSize:20
      },
      setScheduleParent:{
        backgroundColor:'#f2f2f2',
        marginTop:15,
        borderRadius:10,
        padding:10,  
        flexDirection:'row',
        alignItems:'center',
      },
      forRadioButton:{
        borderColor:'#ff2746',
        borderWidth:1.5,
        height:24,
        width:24,
        borderRadius:20,
        marginLeft:7
      },
      timeMain:{
        marginTop:20,
        flexDirection:'row',
        flexWrap:'wrap',
      },
      timeParent:{
        backgroundColor:'#f2f2f2',
        width:155,
        height:50,
        borderRadius:7,
        flexDirection:'row',
        alignItems:'center',
        paddingLeft:7,
      },
      timeText:{
        color:'black',
        fontWeight:'700',
        flex:1,
        flexWrap:'wrap',
        marginLeft:7,
        fontSize:12
      },
      forMt:{
        marginTop:10
      }
})