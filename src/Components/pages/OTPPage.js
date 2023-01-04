import React, {useState, useRef, useEffect} from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Image,
  ActivityIndicator,
} from 'react-native';
import {useNavigation, useRoute} from '@react-navigation/native';
import FlashMessage, {
  showMessage,
  hideMessage,
} from 'react-native-flash-message';
import {alertTypeStyle} from '../../utils/constants';
import Icon from 'react-native-vector-icons/MaterialIcons';
import RnOtpTimer from 'rn-otp-timer';

const OTPPage = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const firstInput = useRef();
  const secondInput = useRef();
  const thirdInput = useRef();
  const fourInput = useRef();
  const [loading, setLoading] = useState(false);
  const [disable, setDisable] = useState(false);
  const [firstInputNum, setFirstInputNum] = useState();
  const [secondInputNum, setSecondInputNum] = useState();
  const [thirdInputNum, setThirdInputNum] = useState();
  const [fourInputNum, setfourInputNum] = useState();
  const [second, setSecond] = useState(59);

  const OtpData = () => {
    let otpNum = firstInputNum + secondInputNum + thirdInputNum + fourInputNum;
    if (otpNum.length !== 4) {
      showMessage({
        message: 'Alert',
        description: 'Please enter otp',
        style: alertTypeStyle.error,
      });
      return;
    }
    setLoading(true);
    setDisable(true);
    setTimeout(() => {
      navigation.navigate('signUp');
      // { phoneNo:route.params.phoneNo}
      showMessage({
        message: 'Success',
        description: 'OTP verified successfully',
        style: alertTypeStyle.success,
      });
      setLoading(false);
      setDisable(false);
    }, 1000);
  };

  const onResendAlert = () => {
    setSecond(59);
    showMessage({
      message: 'Success',
      description: 'OTP sent successfully',
      style: alertTypeStyle.success,
    });
  };

  useEffect(() => {
    if (second !== 0) {
      setTimeout(() => {
        setSecond(second - 1);
      }, 1000);
    }
  }, [second]);

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.goBack()} style={{width: 40}}>
        <Icon name="arrow-back" size={25} style={styles.iconColor} />
      </TouchableOpacity>
      <Text style={styles.verify}>Verify OTP</Text>
      <Text style={[styles.mobileNo, styles.mobileNoText]}>
        Please enter OTP sent on your mobile number
      </Text>

      <Text style={styles.mobileNo}>
        123*****90
        {/* {route.params.phoneNo} */}
      </Text>
      {/* {message ? (
        <View style={styles.dotParent}>
          <View style={styles.dot}></View>
          <View style={styles.dot}></View>
          <View style={styles.dot}></View>
          <View style={styles.dot}></View>
        </View>
      ) : ( */}
      <View style={styles.inputParent}>
        {firstInputNum ? (
          <TouchableOpacity
            onPress={() => setFirstInputNum('')}
            style={styles.dotParent}>
            <View style={styles.dot}></View>
          </TouchableOpacity>
        ) : (
          <TextInput
            style={styles.input}
            autoFocus={true}
            selectionColor={'#ff2746'}
            onChangeText={text => {
              setFirstInputNum(text);
              text && secondInput.current.focus();
            }}
            ref={firstInput}
            keyboardType="number-pad"
            maxLength={1}
          />
        )}

        {secondInputNum ? (
          <TouchableOpacity
            onPress={() => setSecondInputNum('')}
            style={styles.dotParent}>
            <View style={styles.dot}></View>
          </TouchableOpacity>
        ) : (
          <TextInput
            style={styles.input}
            selectionColor={'#ff2746'}
            onChangeText={text => {
              setSecondInputNum(text);
              text ? thirdInput.current.focus() : firstInput.current.focus();
            }}
            ref={secondInput}
            keyboardType="number-pad"
            maxLength={1}
          />
        )}

        {thirdInputNum ? (
          <TouchableOpacity
            onPress={() => setThirdInputNum('')}
            style={styles.dotParent}>
            <View style={styles.dot}></View>
          </TouchableOpacity>
        ) : (
          <TextInput
            style={styles.input}
            selectionColor={'#ff2746'}
            onChangeText={text => {
              setThirdInputNum(text);
              text ? fourInput.current.focus() : secondInput.current.focus();
            }}
            ref={thirdInput}
            keyboardType="number-pad"
            maxLength={1}
          />
        )}

        {fourInputNum ? (
          <TouchableOpacity
            onPress={() => setfourInputNum('')}
            style={styles.dotParent}>
            <View style={styles.dot}></View>
          </TouchableOpacity>
        ) : (
          <TextInput
            style={styles.input}
            selectionColor={'#ff2746'}
            onChangeText={text => {
              setfourInputNum(text);
              text ? fourInput.current.focus() : secondInput.current.focus();
              !text && thirdInput.current.focus();
            }}
            ref={fourInput}
            keyboardType="number-pad"
            maxLength={1}
          />
        )}
      </View>
      {/* )} */}

      <TouchableOpacity style={styles.SectionStyle}  disabled={!disable ? false : true} onPress={OtpData}>
        <View style={[styles.otp,{ backgroundColor: !disable ? '#ff2746' : '#f7656c',}]}>
          <Text style={styles.textStyle}>
            {loading == true ? (
              <ActivityIndicator size="small" color="#fff" />
            ) : (
              'Verify & Submit'
            )}
          </Text>
        </View>
      </TouchableOpacity>
      <View
        style={{
          justifyContent: 'center',
          flexDirection: 'row',
          marginTop: 30,
          alignItems: 'center',
        }}>
        {second !== 0 ? (
          <Text style={[styles.resend]}>
            Resend OTP in <Text style={[styles.timestyle]}>00:{second < 10 ?  `0${second}` : second}</Text>
          </Text>
        ) : (
          <Text style={[styles.buttonText]} onPress={onResendAlert}>
            Resend
          </Text>
        )}
        {/* <View style={styles.time}>
          <RnOtpTimer
            minutes={0}
            seconds={59}
            resendButtonText="Resend"
            resendButtonStyle={styles.button}
            resendButtonTextStyle={styles.buttonText}
            timerStyle={styles.timestyle}
            resendButtonAction={() => {
              showMessage({
                message: 'Success',
                description: 'OTP sent successfully',
                style: alertTypeStyle.success,
              });
            }}
          />
        </View> */}
      </View>
    </View>
  );
};

export default OTPPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingTop: 12,
    paddingRight: 12,
    paddingLeft: 12,
  },
  verify: {
    color: '#ff2746',
    fontWeight: 'bold',
    fontSize: 25,
    marginTop: 35,
    textAlign: 'center',
  },
  mobileNoText: {
    marginTop: 20,
  },
  mobileNo: {
    textAlign: 'center',
    color: 'gray',
  },

  SectionStyle: {
    height: 60,
    marginTop: 20,
    marginLeft: 35,
    marginRight: 35,
    margin: 10,
  },
  otp: {
    height: 60,
    borderRadius: 30,
    fontWeight: 'bold',
    paddingTop: 18,
    // backgroundColor: '#ff2746',
    elevation: 15,
    shadowColor: '#171717',
    width: 300,
    marginLeft: -20,
    marginTop: 10,
  },
  inputParent: {
    flexDirection: 'row',
    paddingLeft: 15,
  },
  input: {
    backgroundColor: '#f2f2f2',
    height: 60,
    width: 60,
    marginLeft: 12,
    borderRadius: 10,
    marginTop: 20,
    color: '#ff2746',
    fontSize: 20,
    paddingLeft: 25,
    elevation: 5,
  },
  dotParent:{
    // borderWidth:1,
    height: 60,
    width: 60,
    marginTop: 20,
    justifyContent:'center',
    alignItems:'center',
    marginLeft: 12,
  },
  dot: {
    backgroundColor: '#ff2746',
    // marginLeft: 30,
    // marginRight: 30,
    borderRadius: 30,
    height: 12,
    width: 12,
    // marginTop: 40,
    // marginBottom: 30,
  },

  iconColor: {
    color: '#4a4949',
  },
  buttonText: {
    color: '#ff2746',
    fontWeight: 'bold',
  },
  timestyle: {
    color: '#ff2746',
    fontWeight: 'bold',
  },
  resend: {
    color: 'gray',
    fontSize: 16,
  },
  time: {
    marginLeft: 5,
  },
  textStyle: {
    textAlign: 'center',
    fontSize: 15,
    fontWeight: 'bold',
    color: 'white',
  },
});
