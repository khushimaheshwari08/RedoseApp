import { useNavigation } from '@react-navigation/native';
import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import Icon from "react-native-vector-icons/MaterialIcons"

const MyOffice = () => {
    const navigation = useNavigation();
  return (
    <View style={styles.container}>
        <View style={styles.parent}>
            <View>
                <Text style={styles.noOffice} >No Office Added </Text>
            </View>
            <TouchableOpacity style={styles.addOffice} onPress={()=>navigation.navigate('newLocation')} >
                <Icon name="add" size={22} style={styles.searchIcon}/>
                <Text style={styles.addOfficeText}>Add new office</Text>
            </TouchableOpacity>
        </View>
        <TouchableOpacity onPress={()=>navigation.navigate('newLocation')}>
        <Image
            source={require('../../assets/img/buzzer.png')}
            style={{width: 300, height: 300,marginTop:20,marginLeft:10}}
        />
        </TouchableOpacity>
        <Text style={styles.tea}>Love tea everyday?</Text>
        <TouchableOpacity style={styles.SectionStyle} onPress={()=>navigation.navigate('newLocation')}>
        <Text style={styles.otp}>Auto-Schedule Chhotu Calls</Text>
      </TouchableOpacity>
    </View>
  )
}

export default MyOffice

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'white',
      paddingLeft:12,
      paddingRight:12,
      paddingTop:8
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
})