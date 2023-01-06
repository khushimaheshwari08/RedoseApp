import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Image} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Lottie from 'lottie-react-native';

const OrderHistory = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.parent}>
        <View style={styles.Profile}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Icon name="arrow-back" size={25} style={styles.iconColor} />
          </TouchableOpacity>
          <Text style={styles.heading}>Order History</Text>
        </View>
      </View>
      <Lottie
        style={styles.noResultImg}
        source={require('../../assets/no_result.json')}
        autoPlay
        loop
      />
      <Text style={styles.notLocation}>No Records found</Text>
      <Text style={styles.textTry}>
        Sorry. We couldn't find anything. You can try another search
      </Text>
    </View>
  );
};

export default OrderHistory;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f2f2',
    padding: 10,
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
  noResultImg: {
    height: 350,
    marginLeft: 30,
    marginTop: 8,
  },
  notLocation: {
    fontSize: 23,
    color: '#ff2746',
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 32,
  },
  textTry: {
    textAlign: 'center',
    color: 'black',
    marginTop: 10,
    fontStyle: 'italic',
    fontWeight: '500',
    marginBottom: 20,
  },
});
