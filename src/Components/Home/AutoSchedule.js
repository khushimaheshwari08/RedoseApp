import {useNavigation} from '@react-navigation/native';
import React, {useEffect, useRef, useState} from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Switch,
  Image,
  ScrollView,
  Dimensions,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Modal from 'react-native-modal';
import CommonModal from '../../Common/Modal/Modal';
import Lottie from 'lottie-react-native';
import FlashMessage, {
  showMessage,
  hideMessage,
} from 'react-native-flash-message';
import SwitchSelector from 'react-native-switch-selector';
import {BlurView} from '@react-native-community/blur';
import {alertTypeStyle} from '../../utils/constants';

const AutoSchedule = () => {
  const navigation = useNavigation();
  const [blurType, setBlurType] = useState('light');

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [toggle, setToggle] = useState(false);
  const [week, setWeek] = useState('');
  const [modalTimeSlot, setModalTimeSlot] = useState(false);
  const [radioState, setRadioState] = useState(false);
  const [loading, setLoading] = useState(false);
  const [isSelected, setIsSelected] = useState(false);

  const cols = 2;
  const marginHorizontal = 5;
  const width =
    Dimensions.get('window').width / cols - marginHorizontal * (cols + 1);

  const weekday = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];
  const d = new Date();
  let day = weekday[d.getDay()];

  useEffect(() => {
    setWeek(day);
  }, []);

  const toggleModal = () => {
    setIsModalVisible(!isModalVisible);
  };

  const onYes = () => {
    setRadioState(true);
    setModalTimeSlot(!modalTimeSlot);
  };

  const SwitchHandler = () => {
    setToggle(!toggle);
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  };

  const onAlert = () => {
    showMessage({
      message: 'Success',
      description: 'Updated Successfully',
      style: alertTypeStyle.success,
    });
    navigation.navigate('homeScreen');
  };

  const handleClick = () => {
    setIsSelected(current => !current);
  };

  const options = [
    {
      value: 0,
      customIcon:
        toggle === 0 ? (
          <MaterialCommunityIcons
            name="briefcase-clock-outline"
            size={23}
            style={{color: 'black'}}
          />
        ) : null,
    },
    {
      value: 1,
      customIcon:
        toggle === 1 ? (
          <Image
            source={require('../../assets/icons/beach.png')}
            style={{width: 28, height: 28}}
          />
        ) : null,
    },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.parent}>
        <View style={styles.Profile}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Icon name="arrow-back" size={25} style={styles.iconColor} />
          </TouchableOpacity>
          <Text style={styles.heading}>Auto Schedule</Text>
        </View>
      </View>
      <ScrollView style={{marginTop: 5, paddingLeft: 9}}>
        <View style={styles.parentWing}>
          <TouchableOpacity
            style={styles.afteradddBuilding}
            onPress={toggleModal}>
            <Text style={styles.WingHeading}>Binori - A - 101 </Text>
            <Text style={{color: 'black', marginRight: 20, fontSize: 18}}>
              (Dummy)
            </Text>
            <Icon
              name="keyboard-arrow-down"
              size={26}
              style={styles.searchIcon}
            />
          </TouchableOpacity>
          <Text style={styles.WingSubHeading}>
            Friends Avenue, Bodakdev, Ahmedabad,Gujarat 380054
          </Text>
        </View>
        <View style={styles.regularTeaParent}>
          <View style={{width: 255}}>
            <Text style={{color: 'black', fontWeight: 'bold', fontSize: 15}}>
              Get regular tea at your desk without even calling anyone
            </Text>
          </View>

          <TouchableOpacity
            style={[
              styles.switch,
              {
                backgroundColor: toggle == false ? '#404541' : '#d1cdcd',
                borderColor: toggle == false ? 'black' : '#ff2746',
              },
            ]}
            onPress={SwitchHandler}>
            {toggle == false ? (
              <TouchableOpacity
                onPress={SwitchHandler}
                style={{
                  backgroundColor: 'white',
                  width: 30,
                  borderRadius: 22,
                  alignItems: 'center',
                  height: 26,
                }}>
                <MaterialCommunityIcons
                  name="briefcase-clock-outline"
                  size={20}
                  style={{color: 'black'}}
                />
              </TouchableOpacity>
            ) : (
              <TouchableOpacity onPress={SwitchHandler}>
                <Image
                  source={require('../../assets/icons/beach.png')}
                  style={{width: 30, height: 25, left: 30}}
                />
              </TouchableOpacity>
            )}
          </TouchableOpacity>
        </View>

        <View style={styles.mainWeekView}>
          <TouchableOpacity
            style={[
              styles.weekView,
              {borderWidth: week === 'Monday' ? 1.5 : 0},
            ]}
            onPress={() => setWeek('Monday')}>
            <Text style={styles.weekText}>M</Text>
            <Image
              source={require('../../assets/icons/tea.png')}
              style={{
                width: 30,
                height: 30,
                marginTop: 10,
              }}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.weekView,
              styles.forml,
              {borderWidth: week === 'Tuesday' ? 1.5 : 0},
            ]}
            onPress={() => setWeek('Tuesday')}>
            <Text style={styles.weekText}>T</Text>
            <Image
              source={require('../../assets/icons/tea.png')}
              style={{
                width: 30,
                height: 30,
                marginTop: 10,
              }}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.weekView,
              styles.forml,
              {borderWidth: week === 'Wednesday' ? 1.5 : 0},
            ]}
            onPress={() => setWeek('Wednesday')}>
            <Text style={styles.weekText}>W</Text>
            <Image
              source={require('../../assets/icons/tea.png')}
              style={{
                width: 30,
                height: 30,
                marginTop: 10,
              }}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.weekView,
              styles.forml,
              {borderWidth: week === 'Thursday' ? 1.5 : 0},
            ]}
            onPress={() => setWeek('Thursday')}>
            <Text style={styles.weekText}>T</Text>
            <Image
              source={require('../../assets/icons/tea.png')}
              style={{
                width: 30,
                height: 30,
                marginTop: 10,
              }}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.weekView,
              styles.forml,
              {borderWidth: week === 'Friday' ? 1.5 : 0},
            ]}
            onPress={() => setWeek('Friday')}>
            <Text style={styles.weekText}>F</Text>
            <Image
              source={require('../../assets/icons/tea.png')}
              style={{
                width: 30,
                height: 30,
                marginTop: 10,
              }}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.weekView,
              styles.forml,
              {borderWidth: week === 'Saturday' ? 1.5 : 0},
            ]}
            onPress={() => setWeek('Saturday')}>
            <Text style={styles.weekText}>S</Text>
            <Image
              source={require('../../assets/icons/tea.png')}
              style={{
                width: 30,
                height: 30,
                marginTop: 10,
              }}
            />
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          style={styles.setScheduleParent}
          onPress={() => setModalTimeSlot(true)}>
          <View style={{width: 270}}>
            <Text style={{color: 'black'}}>
              Set your daily schedule to get tea/coffee at your desk
            </Text>
          </View>
          {radioState ? (
            <View style={styles.RedCoupon}>
              <Lottie
                source={require('../../assets/LottieData/successcolor.json')}
                autoPlay
                loop={false}
              />
            </View>
          ) : (
            <View style={styles.forRadioButton}></View>
          )}
        </TouchableOpacity>
        <CommonModal
          open={modalTimeSlot}
          onClose={() => setModalTimeSlot(!modalTimeSlot)}
          title={`You want to apply ${week} timeslot to other days also!`}
          heading="Are you sure"
          onYes={onYes}
          onNo={() => setModalTimeSlot(!modalTimeSlot)}
        />

        <View style={styles.timeMain}>
          <TouchableOpacity
            style={[
              styles.timeParent,
              {backgroundColor: isSelected ? '#ff2746' : '#f2f2f2'},
            ]}
            onPress={handleClick}>
            <Icon
              name="access-time"
              size={30}
              style={[
                styles.searchIcon,
                {color: isSelected ? 'white' : '#ff2746'},
              ]}
            />
            <Text
              style={[
                styles.timeText,
                {color: isSelected ? 'white' : 'black'},
              ]}>
              09:00 AM to 09:30 AM
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.timeParent,
              styles.forml,
              {backgroundColor: isSelected ? '#ff2746' : '#f2f2f2'},
            ]}
            onPress={handleClick}>
            <Icon
              name="access-time"
              size={30}
              style={[
                styles.searchIcon,
                {color: isSelected ? 'white' : '#ff2746'},
              ]}
            />
            <Text
              style={[
                styles.timeText,
                {color: isSelected ? 'white' : 'black'},
              ]}>
              09:30 AM to 10:00 AM
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.timeParent, styles.forMt]}>
            <Icon name="access-time" size={30} style={styles.searchIcon} />
            <Text style={styles.timeText}>10:00 AM to 10:30 AM</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.timeParent, styles.forml, styles.forMt]}>
            <Icon name="access-time" size={30} style={styles.searchIcon} />
            <Text style={styles.timeText}>10:30 AM to 11:00 AM</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.timeParent, styles.forMt]}>
            <Icon name="access-time" size={30} style={styles.searchIcon} />
            <Text style={styles.timeText}>11:00 AM to 11:30 AM</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.timeParent, styles.forml, styles.forMt]}>
            <Icon name="access-time" size={30} style={styles.searchIcon} />
            <Text style={styles.timeText}>11:30 AM to 12:00 PM</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.timeParent, styles.forMt]}>
            <Icon name="access-time" size={30} style={styles.searchIcon} />
            <Text style={styles.timeText}>12:00 PM to 12:30 PM</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.timeParent, styles.forml, styles.forMt]}>
            <Icon name="access-time" size={30} style={styles.searchIcon} />
            <Text style={styles.timeText}>12:30 PM to 01:00 PM</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.timeParent, styles.forMt]}>
            <Icon name="access-time" size={30} style={styles.searchIcon} />
            <Text style={styles.timeText}>01:00 PM to 01:30 PM</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.timeParent, styles.forml, styles.forMt]}>
            <Icon name="access-time" size={30} style={styles.searchIcon} />
            <Text style={styles.timeText}>01:30 PM to 02:00 PM</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.timeParent, styles.forMt]}>
            <Icon name="access-time" size={30} style={styles.searchIcon} />
            <Text style={styles.timeText}>02:00 PM to 02:30 PM</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.timeParent, styles.forml, styles.forMt]}>
            <Icon name="access-time" size={30} style={styles.searchIcon} />
            <Text style={styles.timeText}>02:30 PM to 03:00 PM</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.timeParent, styles.forMt]}>
            <Icon name="access-time" size={30} style={styles.searchIcon} />
            <Text style={styles.timeText}>03:00 PM to 03:30 PM</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.timeParent, styles.forml, styles.forMt]}>
            <Icon name="access-time" size={30} style={styles.searchIcon} />
            <Text style={styles.timeText}>03:30 PM to 04:00 PM</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.timeParent, styles.forMt]}>
            <Icon name="access-time" size={30} style={styles.searchIcon} />
            <Text style={styles.timeText}>04:00 PM to 04:30 PM</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.timeParent, styles.forml, styles.forMt]}>
            <Icon name="access-time" size={30} style={styles.searchIcon} />
            <Text style={styles.timeText}>04:30 PM to 05:00 PM</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.timeParent, styles.forMt]}>
            <Icon name="access-time" size={30} style={styles.searchIcon} />
            <Text style={styles.timeText}>05:00 PM to 05:30 PM</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.timeParent, styles.forml, styles.forMt]}>
            <Icon name="access-time" size={30} style={styles.searchIcon} />
            <Text style={styles.timeText}>05:30 PM to 06:00 PM</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.timeParent, styles.forMt]}>
            <Icon name="access-time" size={30} style={styles.searchIcon} />
            <Text style={styles.timeText}>06:00 PM to 06:30 PM</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.timeParent, styles.forml, styles.forMt]}>
            <Icon name="access-time" size={30} style={styles.searchIcon} />
            <Text style={styles.timeText}>06:30 PM to 07:00 PM</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.timeParent, styles.forMt]}>
            <Icon name="access-time" size={30} style={styles.searchIcon} />
            <Text style={styles.timeText}>07:00 PM to 07:30 PM</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.timeParent, styles.forml, styles.forMt]}>
            <Icon name="access-time" size={30} style={styles.searchIcon} />
            <Text style={styles.timeText}>07:30 PM to 08:00 PM</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.timeParent, styles.forMt]}>
            <Icon name="access-time" size={30} style={styles.searchIcon} />
            <Text style={styles.timeText}>08:00 PM to 08:30 PM</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.timeParent, styles.forml, styles.forMt]}>
            <Icon name="access-time" size={30} style={styles.searchIcon} />
            <Text style={styles.timeText}>08:30 PM to 09:00 PM</Text>
          </TouchableOpacity>
        </View>
        {/* <View style={styles.WingSelectParent}>
          <TouchableOpacity onPress={() => navigation.navigate('addOfficeName')}>
            <View style={[styles.WingSelect, {width: width}]}>
              <Text style={styles.WingSelectText}>101</Text>
            </View>
          </TouchableOpacity>
          <View style={[styles.WingSelect, {width: width}]}>
            <Text style={styles.WingSelectText}>102</Text>
          </View>
          <View style={[styles.WingSelect, {width: width}]}>
            <Text style={styles.WingSelectText}>103</Text>
          </View>
          <View style={[styles.WingSelect, {width: width}]}>
            <Text style={styles.WingSelectText}>104</Text>
          </View>
        </View> */}
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            marginBottom: 35,
            marginTop: 30,
          }}>
          <TouchableOpacity style={styles.saveView} onPress={onAlert}>
            <Text style={{color: 'white', fontWeight: 'bold'}}>Save</Text>
          </TouchableOpacity>
        </View>
        <Modal
          onBackdropPress={() => setIsModalVisible(false)}
          onBackButtonPress={() => setIsModalVisible(false)}
          isVisible={isModalVisible}
          swipeDirection="down"
          onSwipeComplete={toggleModal}
          animationIn="bounceInUp"
          animationOut="bounceOutDown"
          style={{width: '100%', marginLeft: -2}}>
          <View style={styles.modalContent}>
            <View style={styles.swipeIcon}></View>
            <View style={styles.swipeTop}>
              <View style={styles.swipeHeader}>
                <Text style={styles.textIndianRs}>Change Office </Text>
              </View>
              <TouchableOpacity
                onPress={() => navigation.navigate('newLocation')}>
                <Text style={styles.usedText}>+ Add new office</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.divider2}></View>
            <View style={styles.iconParent}>
              <View style={styles.iconsubParent}>
                <View style={styles.icon}>
                  <Icon
                    name="my-location"
                    size={25}
                    style={styles.searchIcon}
                  />
                </View>
                <Text style={styles.profileSettings}>Binori (Dummy)</Text>
              </View>
              <View style={styles.locationAddress}>
                <Text style={styles.locationAddressText}>
                  Friends Avenue, Bodakdev, Ahmedabad,Gujarat 380054
                </Text>
              </View>
            </View>
          </View>
        </Modal>
        {loading ? (
          <View>
            <Lottie
              style={styles.barCode}
              source={require('../../assets/LottieData/airplanearoundworldcolor.json')}
              autoPlay={true}
              loop={false}
            />
          </View>
        ) : null}

        {toggle || loading ? (
          <BlurView
            style={styles.blurViewStyle}
            blurRadius={1}
            blurType={blurType}
          />
        ) : null}
      </ScrollView>
    </View>
  );
};

export default AutoSchedule;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingLeft: 10,
    paddingRight: 5,
  },
  parent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 12,
  },

  Profile: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  heading: {
    fontSize: 22,
    color: '#ff2746',
    fontWeight: 'bold',
    marginLeft: 12,
  },
  iconColor: {
    color: '#4a4949',
  },
  parentWing: {
    marginTop: 10,
  },

  WingHeading: {
    color: 'black',
    fontSize: 18,
    fontWeight: 'bold',
  },
  WingSubHeading: {
    color: 'black',
    fontSize: 12,
  },
  afteradddBuilding: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  searchIcon: {
    color: '#ff2746',
  },
  modalContent: {
    backgroundColor: '#f2f2f2',
    minHeight: 190,
    marginTop: 495,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  swipeIcon: {
    backgroundColor: 'gray',
    alignItems: 'center',
    marginTop: 10,
    marginRight: 160,
    marginLeft: 160,
    height: 7,
    borderRadius: 20,
  },
  blurViewStyle: {
    position: 'absolute',
    left: 0,
    top: 120,
    bottom: 0,
    right: 0,
  },
  swipeHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 20,
  },
  textIndianRs: {
    color: '#ff2746',
    fontWeight: 'bold',
    fontSize: 22,
  },
  swipeTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
  },
  usedText: {
    color: '#ff2746',
    marginRight: 10,
    fontWeight: 'bold',
    fontSize: 16,
  },
  usedAmountText: {
    textAlign: 'center',
    color: 'gray',
    marginTop: 20,
    fontSize: 17,
  },
  modalFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 20,
  },
  statusText: {
    color: 'gray',
    marginLeft: 20,
    fontSize: 17,
  },

  divider2: {
    width: 335,
    borderWidth: 0.3,
    borderColor: 'lightgray',
    marginTop: 7,
    marginLeft: 20,
  },
  icon: {
    backgroundColor: '#ffffff',
    height: 45,
    width: 45,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 25,
  },
  iconParent: {
    justifyContent: 'space-between',
    borderColor: 'white',
    borderWidth: 1,
    borderRadius: 10,
    backgroundColor: 'white',
    marginTop: 10,
    paddingBottom: 30,
    marginLeft: 20,
    marginRight: 10,
  },
  iconsubParent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  profileSettings: {
    fontSize: 17,
    color: '#ff2746',
    fontWeight: 'bold',
  },
  locationAddress: {
    marginLeft: 15,
  },
  locationAddressText: {
    color: 'black',
    fontSize: 12,
  },
  regularTeaParent: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
  },
  mainWeekView: {
    flexDirection: 'row',
  },
  forml: {
    marginLeft: 8,
  },
  weekView: {
    backgroundColor: '#f2f2f2',
    height: 100,
    width: 46,
    alignItems: 'center',
    borderRadius: 5,
    marginTop: 15,
    // borderWidth:0,
    borderStyle: 'dashed',
    borderColor: '#ff2746',
  },
  weekText: {
    color: 'black',
    fontWeight: 'bold',
    marginTop: 20,
    fontSize: 20,
  },
  setScheduleParent: {
    backgroundColor: '#f2f2f2',
    marginTop: 15,
    borderRadius: 8,
    marginRight: 20,
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  forRadioButton: {
    borderColor: '#ff2746',
    borderWidth: 1.5,
    height: 24,
    width: 24,
    borderRadius: 20,
    marginLeft: 7,
  },
  timeMain: {
    marginTop: 20,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  timeParent: {
    backgroundColor: '#f2f2f2',
    width: 155,
    height: 50,
    borderRadius: 7,
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 7,
  },
  timeText: {
    color: 'black',
    fontWeight: '700',
    flex: 1,
    flexWrap: 'wrap',
    marginLeft: 7,
    fontSize: 12,
  },
  forMt: {
    marginTop: 10,
  },
  saveView: {
    backgroundColor: '#ff2746',
    height: 35,
    alignItems: 'center',
    justifyContent: 'center',
    width: 120,
    borderRadius: 20,
    elevation: 10,
    shadowColor: '#171717',
  },
  RedCoupon: {
    backgroundColor: '#E5B4B4',
    height: 30,
    width: 30,
    borderRadius: 20,
    marginLeft: 5,
  },
  flashTitle: {
    fontWeight: 'bold',
    fontSize: 13,
    color: 'black',
  },
  flashDes: {
    fontSize: 10,
    color: 'gray',
  },
  flashMessageAlert: {
    borderRadius: 9,
    // opacity: 0.8,
    shadowColor: 'gray',
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 1,
    margin: 12,
    backgroundColor: 'white',
    marginBottom: 40,
    borderLeftWidth: 5,
    borderLeftColor: 'red',
    height: 65,
  },
  switch: {
    height: 30,
    width: 65,
    borderRadius: 20,
    borderWidth: 2,
  },
  barCode: {
    marginTop: -800,
    zIndex: 999,
  },

  WingSelect: {
    // backgroundColor:'#f2f2f2',
    // height:90,
    // width:90,
    // marginTop:20,
    // borderRadius:5
    padding: 5,
    borderRadius: 8,
    backgroundColor: '#f2f2f2',
    height: 100,
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 4,
    marginVertical: 4,
  },
  WingSelectParent: {
    // flexDirection:'row',
    // flexWrap:'wrap',
    // justifyContent:'space-evenly',
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    marginTop: 4,
    borderWidth: 1,
    marginRight: 20,
  },
  WingSelectText: {
    color: 'black',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 25,
  },
});
