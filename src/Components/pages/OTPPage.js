import React, { useState ,useRef,useEffect} from 'react'
import { Text, View,StyleSheet, TouchableOpacity, TextInput } from 'react-native'
import { useRoute } from '@react-navigation/native';
import FlashMessage, { showMessage, hideMessage } from "react-native-flash-message";


const OTPPage = () => {
  const route = useRoute();
  const firstInput = useRef();
  const secondInput = useRef();
  const thirdInput = useRef();
  const fourInput = useRef();
  const [message, setMessage] = useState(false)

  const OtpData = ()=>{
    setMessage(true)
    // showMessage({
    //   message: "Success",
    //   description: "OTP sent successfully",
    //   type: "success",
    //   backgroundColor: "white", 
    //   color: "black",   
    //   duration:	3000
    // });
  }
  useEffect(() => {
    showMessage({
      message: "Success",
      description: "OTP sent successfully",
      type: "success",
      backgroundColor: "white", 
      color: "black",   
      duration:	3000
    });
  }, [])
  return (
  <View style={styles.container}>
    <Text style={styles.verify}>Verify OTP</Text>
     <Text style={[styles.mobileNo,styles.mobileNoText]}>Please enter OTP sent on your mobile number</Text>
      <Text  style={styles.mobileNo}>{route.params.phoneNo}</Text>
      {message === true ? ( 
        <View style={styles.dotParent}>
          <View style={styles.dot}></View>
          <View style={styles.dot}></View>
          <View style={styles.dot}></View>
          <View style={styles.dot}></View>
      </View>
      
      ):(
      <View style={styles. inputParent}>
        <TextInput style={styles.input}
         autoFocus={true}
        onChangeText={text=>{
          text && secondInput.current.focus();
        }}
        ref={firstInput}
        keyboardType="number-pad"
        maxLength={1}
        />
         <TextInput style={styles.input}
           onChangeText={text=>{
          text ? thirdInput.current.focus()
          : firstInput.current.focus();
            }}
         ref={secondInput}
          keyboardType="number-pad"
          maxLength={1}
        />
         <TextInput style={styles.input}
          onChangeText={text=>{
           text ? fourInput.current.focus()
          : secondInput.current.focus();
    }}
         ref={thirdInput}
          keyboardType="number-pad"
          maxLength={1}
        />
         <TextInput style={styles.input}
          onChangeText={text=>{
          text ? fourInput.current.focus()
            : secondInput.current.focus();
            !text && thirdInput.current.focus();
          }}
         ref={fourInput}
          keyboardType="number-pad"
          maxLength={1}
        />
      </View>
      
      )}
        <FlashMessage position="bottom" /> 
           <TouchableOpacity style={styles.SectionStyle} onPress={OtpData} disabled={message ? true:false}>
              <Text style={styles.otp}>
               Verify & Submit
               </Text>
           </TouchableOpacity>
           <Text style={[styles.mobileNo,styles.mobileNoText]}>Resend OTP in seconds</Text>
  </View>
  )
}


export default OTPPage

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'white'
    },
    verify:{
      color:'#ff2746',
      fontWeight:'bold',
      fontSize:25,
      marginTop:70,
      textAlign:'center'
    },
    mobileNoText:{
      marginTop:20
    },
    mobileNo:{
      textAlign:'center',
      color:'gray',
    },
    
    SectionStyle: {
      height: 60,
      marginTop: 20,
      marginLeft: 35,
      marginRight: 35,
      margin: 10,
    },
    otp:{
      color:'white',
      height:60,
      textAlign:'center',
      borderRadius: 30,
      fontSize:15,
      fontWeight:'bold',
      paddingTop:18,
      backgroundColor:'#ff2746'
    },
    inputParent:{
      flexDirection:'row',
    },
    input:{
      backgroundColor:'#f2f2f2',
      height:60,
      width:60,
      marginLeft:20,
      borderRadius: 10,
      marginTop:20,
      color:'#ff2746',
      fontSize:20,
      paddingLeft:25
    },
    dot:{
      backgroundColor:'#ff2746',
      marginLeft:30,
      marginRight:30,
      borderRadius:30,
      height:12,
      width:12,
      marginTop:30,
      marginBottom:30
    },
    dotParent:{
      flexDirection:'row',
      justifyContent:'center',
    }

  })