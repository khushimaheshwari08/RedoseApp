import { useNavigation } from '@react-navigation/native';
import React from 'react'
import { View ,Text, TouchableOpacity, StyleSheet, Image,} from 'react-native'
import Icon from "react-native-vector-icons/MaterialIcons"


const BillingStatement = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.parent}>
        <View style={styles.Profile}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Icon name="arrow-back" size={25} style={styles.iconColor}/>
            </TouchableOpacity>
            <Text style={styles.heading}>Billing & Statement</Text>
        </View>
      </View>
                <View style={styles.teaBlock}> 
                  <View style={styles.text}>
                    <Text style={[styles.rupee,styles.forMarginRight]}>₹0</Text>
                    <Text style={[styles.rupee,styles.forMarginRight]}>₹0</Text>  
                  </View>
                  <View style={styles.divider}></View>
              </View>
              <Text style={styles.activityHeading}>Previous Activity</Text>
              <View style={styles.activityBlock}>
                <View style={styles.activity}>
                    <View>
                        <Text style={styles.subHead}>Month</Text>
                        <Text style={styles.subHeadDetail}>2022-12</Text>
                    </View>
                    <View >
                        <Text style={styles.subHead}>Free Credits</Text>
                        <Text style={styles.subHeadDetail}>₹0</Text>
                    </View>
                    <View >
                        <Text style={styles.subHead}>Statement</Text>
                        <TouchableOpacity onPress={() => navigation.navigate('accountStatement')}>
                        <Text style={{color:'blue'}}>View Statement</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View>
                <View style={styles.divider2}></View>
                <View style={styles.invoice}>
                    <Text style={styles.invoiceText}>Invoice & Due Amount:</Text>
                    <Text style={styles.invoiceTextclr}> ₹0</Text>
                </View>
                </View>
              </View>
              
    </View>
  )
}

export default BillingStatement

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f2f2',
    padding:12
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
    teaBlock:{
      borderColor:'white',
      borderWidth:1,
      borderRadius:10,
      backgroundColor: 'white',
      marginRight:10,
      padding:12,
      marginTop:15,
      height:80
    },
    rupee:{
      fontSize:17,
      color: 'black',
      fontWeight:'bold',
  },
  text:{
    flex:1,
    flexDirection:'row',
    justifyContent:'space-evenly',
  },
  forMarginRight:{
    marginRight:130
  },
  divider:{
    width:300,
    borderWidth:1,
    borderColor:'lightgray'
  },
  activityHeading:{ 
    fontSize:22,
    color: 'black',
    fontWeight:'bold',
    marginTop:10
  },
  activityBlock:{
    borderColor:'white',
    borderWidth:1,
    borderRadius:10,
    backgroundColor: 'white',
    marginTop:15,
    height:115,
    marginRight:10,
  },
  activity:{
    flexDirection:'row',
    justifyContent:'space-evenly',
    padding:12,
  },
  subHead:{
    color:'gray',
    marginBottom:10
  },
  subHeadDetail:{
    color:'black',
    marginBottom:10
  },
  divider2:{
    width:325,
    borderWidth:0.3,
    borderColor:'lightgray',
  },

  invoice:{
    flexDirection:'row'
  },
  invoiceText:{
    color:'gray',
    marginTop:5,
    marginLeft:30
  },
  invoiceTextclr:{
    color:'black',
    marginTop:5,
    fontWeight:'bold'
  }
  })