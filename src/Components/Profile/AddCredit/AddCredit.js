import React, { useState } from 'react'
import { TouchableOpacity, View,Image, StyleSheet, Text, TextInput, ScrollView } from 'react-native'
import UserAvatar from 'react-native-user-avatar';
import Icon from "react-native-vector-icons/MaterialIcons"
import { useNavigation, useRoute } from '@react-navigation/native';
import Lottie from 'lottie-react-native';

const AddCredit = () => {
    const navigation = useNavigation();
    const [amount, setAmount] = useState(0);
    
  return (
    <View style={styles.container}>
        <View style={styles.parent}>
            <View style={styles.Profile}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Icon name="arrow-back" size={25} style={styles.iconColor}/>
                </TouchableOpacity>
                <Text style={styles.heading}>Add Credit</Text>
            </View>
                <View style={styles.subParent}>
                    <View style={styles.textParent}>
                        <Text style={styles.userName}>Dummy</Text>
                        <Text style={styles.phnNo}>+91 1234567890</Text> 
                    </View>
                        <UserAvatar style={styles.userAvatar} size={35}/>
                </View>
      </View>
      <ScrollView>
        <View style={styles.incomeBlock}>
            <Image
            source={require('../../../assets/icons/income.png')}
            style={{width: 50, height: 50,marginRight:30}}
            />
        <View>
         <Text style={styles.userName}>₹0</Text>
        <Text style={styles.phnNo}>Available Credits</Text>
        </View>
        </View> 
            <Text style={styles.addCreditText}>Add Credits</Text>
            
            <View style={styles.rupeeHead}>
                <TouchableOpacity style={[styles.rupeeSubHead,{backgroundColor: amount == 100 ? '#ff2746':'#ded9d9'}]} onPress={()=>setAmount(100)}>
                <Text style={[styles.rupee, {color: amount == 100 ? '#ffffff':'black'}]}>₹100</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.rupeeSubHead,{backgroundColor: amount == 250 ? '#ff2746':'#ded9d9'}]} onPress={()=>setAmount(250)}>
                <Text style={[styles.rupee, {color: amount == 250 ? '#ffffff':'black'}]}>₹250</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.rupeeSubHead,{backgroundColor: amount == 500 ? '#ff2746':'#ded9d9'}]} onPress={()=>setAmount(500)}>
                <Text style={[styles.rupee, {color: amount == 500 ? '#ffffff':'black'}]}>₹500</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.rupeeSubHead,{backgroundColor: amount == 1000 ? '#ff2746':'#ded9d9'}]} onPress={()=>setAmount(1000)}>
                <Text style={[styles.rupee, {color: amount == 1000 ? '#ffffff':'black'}]}>₹1000</Text>
                </TouchableOpacity>
            </View>
            <TouchableOpacity>
               <View style={[styles.iconParent,styles.forMargin]}>
                  <View style={styles.iconsubParent}>
                    <View style={styles.Coupon}><Image
                    source={require('../../../assets/icons/coupon.png')}
                    style={{width: 20, height: 20}}
                    />
                </View>  
                    
                       <Text style={styles.profileSettings}>Apply Promo Code</Text>
                      
                  </View>
                      <Text style={styles.rightArrow}><Icon name="keyboard-arrow-right" size={40} /></Text>  
                </View>
                </TouchableOpacity>
                <View style={styles.main}>
                    <Text style={[styles.rupee,styles.forMarginLeft,styles.fontRupee]}>₹</Text>
                    <TouchableOpacity style={[styles.parentOffice,]}>
                        <TextInput style={[styles.rupee,styles.fontRupee]}  
                        placeholder="0" 
                        placeholderTextColor="gray"
                        keyboardType="numeric"
                        maxLength={5}
                        value={amount}
                        onChangeText={e => setAmount(e)}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.parentRedoseSpot,{ backgroundColor: amount  ? '#ff2746': '#f7656c'}]} disabled={ amount  ? false: true}  >
                        <Text style={[styles.text,]}>Refill Amount </Text>
                    </TouchableOpacity>
                </View>
                <Lottie style={styles.noResultImg} source={require('../../../assets/no_result.json')} autoPlay loop />
                <Text style={styles.notLocation}>No Records found</Text>
                <Text style={styles.textTry}>Sorry. We couldn't find anything. You can try another search</Text>
                </ScrollView>
        </View>
  )
}

export default AddCredit
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#f2f2f2',
      paddingTop:12,
      paddingRight:12,
      paddingLeft:15,
    }, 
   
    parent:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
      },

      Profile:{
        flexDirection:'row',
        alignItems:'center',
      },

      subParent:{
        flexDirection:'row',
        alignItems:'center'
    },
    heading:{
        fontSize:21,
        color: '#ff2746',
        fontWeight:'bold',
        marginLeft:8
    },
    textParent:{
        flexDirection:'column',
        alignItems:'flex-end'
    },
    userName:{
        fontSize:15,
        color: 'black',
        fontWeight:'bold',
    },
    phnNo:{
        color:'gray',
       
    },
    userAvatar:{
        height:35,
        width:35,
        marginLeft:20,
        marginRight:10
      },
      incomeBlock:{
        flexDirection:'row',
        justifyContent:'flex-start',
        alignItems:'center',
        marginTop:10,
        borderColor:'white',
        borderWidth:1,
        borderRadius:10,
        backgroundColor: 'white',
        marginRight:10,
        padding:12,
        marginTop:20
      },
      iconColor:{
        color:'#4a4949',
      },
      iconColor:{
        color:'#4a4949',
      },
      addCreditText:{
        color:'black',
        fontSize:30,
        marginTop:20,
        fontWeight:'bold'
      },
      rupeeHead:{
        flexDirection:'row',
        marginTop:15
      },
      rupeeSubHead:{
        // backgroundColor:'#ded9d9',
        height:35,
        width:72,
        borderRadius:8,
        justifyContent:'center',
        alignItems:'center',
        margin:5,
      },
      rupee:{
        color:'black',
        fontSize:16,
        fontWeight:'bold'
      },
      Coupon:{
            backgroundColor:'#ded9d9',
            height:40,
            width:40,
            alignItems:'center',
            justifyContent:'center',
            borderRadius:20,
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
      profileSettings:{
        fontSize:15,
        color: 'black',
        marginLeft:20
      },
      rightArrow:{
        color:'black',
      },
      forMargin:{
        marginTop:20
      },
      main: {
        marginTop:20,
        marginRight:10,
        height: 55,
        borderRadius: 30,
        backgroundColor: '#d9d8d7',
        flexDirection:'row',
        alignItems:'center'
      },
      parentOffice:{
        flex:1,
        justifyContent:'center',
        borderRadius: 25,
        height:45,
        marginLeft:2
      },
      parentRedoseSpot:{
        flex:1,
        justifyContent:'center',
        backgroundColor: '#f7656c',
        alignItems:'center',
        height:45,
        borderRadius: 25,
        marginRight:7
      },
      text:{
        fontWeight:'bold',
        fontSize:15,
      },
      fontRupee:{
        fontSize:18
      },
      forMarginLeft:{
        marginLeft:20
      },
      noResultImg:{
        height:350,
        marginLeft:30,
        marginTop:8
      },
      notLocation:{
        fontSize:23,
        color: '#ff2746',
        fontWeight:'bold',
        textAlign:'center',
        marginTop:32
      },
      textTry:{
        textAlign:'center',
        color:'black',
        marginTop:10,
        fontStyle:'italic',
        fontWeight:'500',
        marginBottom:20
      },
})