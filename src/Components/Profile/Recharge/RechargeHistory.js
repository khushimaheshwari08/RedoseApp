import {useFocusEffect, useNavigation} from '@react-navigation/native';
import React, {useCallback, useRef, useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  TextInput,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import RupeeIcon from 'react-native-vector-icons/FontAwesome';
import FeatherIcon from 'react-native-vector-icons/Feather';
import Lottie from 'lottie-react-native';
import Modal from 'react-native-modal';
import {BlurView} from '@react-native-community/blur';

const RechargeHistory = () => {
  const navigation = useNavigation();
  const [isModalVisible, setIsModalVisible] = useState(false);
  const animation = useRef();

  useFocusEffect(
    useCallback(() => {
      if (animation.current !== null && animation.current !== undefined) {
        animation.current.play(5, 82);
      }
    }, []),
  );

  const toggleModal = () => {
    setIsModalVisible(!isModalVisible);
  };
  return (
    <View style={styles.container}>
      <View>
        <View style={styles.parent}>
          <View style={styles.Profile}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Icon name="arrow-back" size={25} style={styles.iconColor} />
            </TouchableOpacity>
            <Text style={styles.heading}>Recharge History</Text>
          </View>
        </View>
        <View style={styles.teaBlock}>
          <View>
            <Text style={styles.available}>Available Balance</Text>
            <Text style={styles.amount}>₹0</Text>
          </View>
          <View style={styles.iconbg}>
            {/* <RupeeIcon name="rupee" size={40} style={styles.rupeeiconColor}/> */}
            {/* <Lottie style={styles.barCode} source={require('../../assets/LottieData/barcode-mask.json')} autoPlay loop />  */}
            <Lottie
              source={require('../../../assets/LottieData/rupee.json')}
              ref={animation}
              autoPlay
              loop={false}
            />
          </View>
        </View>
        <Text style={styles.past}>PAST TRANSACTIONS</Text>
        <View style={styles.divider2}></View>
        <TouchableOpacity onPress={toggleModal}>
          <View style={styles.transactionBlock}>
            <View style={styles.transactionLeft}>
              <View style={styles.uploadiconbg}>
                <FeatherIcon
                  name="upload"
                  size={30}
                  style={styles.uploadiconColor}
                />
              </View>
              <View style={styles.lefttext}>
                <Text style={{color: '#ff2746', fontWeight: 'bold'}}>Used</Text>
                <Text style={{color: 'gray'}}>Date</Text>
              </View>
            </View>
            <View style={styles.transactionRight}>
              <View style={styles.righttext}>
                <Text style={{color: 'black', fontSize: 18}}>₹0</Text>
                <Text
                  style={{color: 'green', fontSize: 10, fontWeight: 'bold'}}>
                  COMPLETED
                </Text>
              </View>
              <Text style={styles.rightArrow}>
                <Icon name="keyboard-arrow-right" size={30} />
              </Text>
            </View>
          </View>
        </TouchableOpacity>
      </View>
      <View>
        <TouchableOpacity
          style={styles.SectionStyle}
          onPress={() => navigation.navigate('addCredit')}>
          <Icon name="add" size={25} style={styles.iconaddColor} />
          <Text style={styles.otp}>Add Credit</Text>
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
        {/* <BlurView
                    style={styles.blurViewStyle}
                    blurRadius={1}
                    blurType={blurType}
                  /> */}

        <View style={styles.modalContent}>
          <View style={styles.swipeIcon}></View>
          <View style={styles.swipeTop}>
            <View style={styles.swipeHeader}>
              <View style={styles.iconbgsmall}>
                {/* <RupeeIcon name="rupee" size={20} style={styles.rupeeiconColor}/> */}
                <Lottie
                  source={require('../../../assets/LottieData/rupee.json')}
                  autoPlay
                  loop={false}
                />
              </View>
              <Text style={styles.textIndianRs}>Indian Rupee</Text>
            </View>
            <Text style={styles.usedText}>Used</Text>
          </View>
          <View style={styles.divider2}></View>
          <Text style={styles.usedAmountText}>USED AMOUNT </Text>
          <Text style={[styles.amount, {textAlign: 'center'}]}> 0 INR</Text>
          <View style={styles.modalFooter}>
            <Text style={styles.statusText}>Status</Text>
            <Text style={{color: 'black', fontSize: 17, marginRight: 20}}>
              COMPLETED
            </Text>
          </View>
          <View style={styles.divider2}></View>
          <View style={styles.modalFooter}>
            <Text style={styles.statusText}>Status</Text>
            <Text style={{color: 'black', fontSize: 17, marginRight: 20}}>
              DAY DATE
            </Text>
          </View>
          <View style={styles.divider2}></View>
        </View>
      </Modal>
    </View>
  );
};

export default RechargeHistory;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f2f2',
    padding: 10,
    justifyContent: 'space-between',
  },

  parent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  Profile: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  heading: {
    fontSize: 23,
    color: '#ff2746',
    fontWeight: 'bold',
    marginLeft: 15,
  },
  iconColor: {
    color: '#4a4949',
  },
  teaBlock: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderColor: 'white',
    borderWidth: 1,
    borderRadius: 10,
    backgroundColor: 'white',
    marginRight: 10,
    padding: 12,
    marginTop: 10,
    height: 100,
  },
  amount: {
    fontSize: 18,
    color: 'black',
    fontWeight: 'bold',
    marginTop: 10,
  },
  available: {
    color: 'gray',
    fontSize: 17,
    fontWeight: 'bold',
  },
  iconbg: {
    height: 60,
    width: 60,
    backgroundColor: '#ff2746',
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  rupeeiconColor: {
    color: 'white',
  },
  past: {
    color: 'gray',
    marginTop: 12,
  },
  divider2: {
    width: 335,
    borderWidth: 0.3,
    borderColor: 'lightgray',
    marginTop: 7,
  },
  transactionBlock: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderColor: 'white',
    borderWidth: 1,
    borderRadius: 10,
    backgroundColor: 'white',
    marginRight: 10,
    padding: 12,
    marginTop: 10,
    height: 80,
  },
  transactionLeft: {
    flexDirection: 'row',
  },
  lefttext: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 20,
  },
  transactionRight: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rightArrow: {
    color: 'black',
  },
  righttext: {
    flexDirection: 'column',
    alignItems: 'flex-end',
    marginRight: 10,
  },
  incomeBlockCredit: {
    height: 40,
    width: 160,
    borderRadius: 40,
    backgroundColor: '#ff2746',
    marginTop: 200,
  },

  addCredit: {
    textAlign: 'center',
    fontSize: 12,
    color: '#ffffff',
    padding: 10,
    fontWeight: 'bold',
    fontSize: 15,
  },
  SectionStyle: {
    marginLeft: 70,
    marginRight: 70,
    marginBottom: 20,
    backgroundColor: '#ff2746',
    borderRadius: 30,
    justifyContent: 'center',
    flexDirection: 'row',
    padding: 10,
  },
  otp: {
    color: 'white',
    fontSize: 19,
    fontWeight: 'bold',
  },
  iconaddColor: {
    color: 'white',
  },
  uploadiconbg: {
    height: 45,
    width: 45,
    backgroundColor: '#f58473',
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  uploadiconColor: {
    color: '#ff2746',
  },
  modalContent: {
    backgroundColor: '#ffffff',
    minHeight: 270,
    marginTop: 420,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  swipeIcon: {
    backgroundColor: 'gray',
    alignItems: 'center',
    marginTop: 10,
    marginRight: 140,
    marginLeft: 140,
    height: 8,
    borderRadius: 20,
  },
  blurViewStyle: {
    position: 'absolute',
    left: 0,
    top: 0,
    bottom: 0,
    right: 0,
  },

  iconbgsmall: {
    height: 30,
    width: 30,
    backgroundColor: '#ff2746',
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  swipeHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 20,
  },
  textIndianRs: {
    color: 'black',
    marginLeft: 10,
    fontWeight: 'bold',
    fontSize: 17,
  },
  swipeTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
  },
  usedText: {
    color: 'gray',
    marginRight: 20,
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
});
