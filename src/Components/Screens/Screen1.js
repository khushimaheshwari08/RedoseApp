import React from 'react'
import { Text, View,StyleSheet, Image, TouchableOpacity, Dimensions} from 'react-native';
import Carousel from 'react-native-anchor-carousel';

const Screen1 = () => {

  return (
    <View style={styles.container}>
         <Image
                  source={require('../../assets/screen1.png')}
                  style={{
                    width: 350,
                    height: 350,
                    marginTop:30,
                    left:25
                  }}
                />
        <Text style={styles.heading}>Hygienic beverages; Amazing Taste</Text>
        <Text style={styles.subHeading}>Whether you love tea, coffee or cold coffee, we've got everything to satisfy your cravings </Text>
        
         
        <TouchableOpacity
              style={styles.buttonStyle}
              >
              <Text style={styles.buttonTextStyle}>
                Next
                </Text>
            </TouchableOpacity>
  
    </View>
  )
}

export default Screen1;

const styles = StyleSheet.create({
    container:{
      flex:1,
      backgroundColor:'white' ,
       
    },
   heading:{
        color:'black',
        fontSize:22,
        fontWeight:'bold',
        marginTop:20
   },
   subHeading:{
    color:'gray',
    textAlign:'center',
    fontSize:16,
    marginLeft:10,
    marginRight:10,
    marginTop:20
   } ,
   buttonStyle: {
    backgroundColor: 	'#ff2746',
    color: '#FFFFFF',
    borderColor: '#7DE24E',
    height: 53,
    alignItems: 'center',
    borderRadius: 30,
    marginLeft: 20,
    marginRight: 20,
    marginTop: 20,
    marginBottom: 25,
  },
  buttonTextStyle: {
    color: '#FFFFFF',
    fontSize: 16,
    marginTop:17,
    fontWeight:'bold'
  },
  });