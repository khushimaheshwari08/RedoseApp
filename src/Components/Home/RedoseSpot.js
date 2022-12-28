import React, {useState} from 'react';
import {
  SafeAreaView,
  Text,
  View,
  Linking,
  TouchableHighlight,
  PermissionsAndroid,
  Platform,
  StyleSheet,
} from 'react-native';
import {CameraScreen} from 'react-native-camera-kit';
import Lottie from 'lottie-react-native';

const RedoseSpot = () => { 
const [qrvalue, setQrvalue] = useState('');
const [opneScanner, setOpneScanner] = useState(false);

const onOpenlink = () => {
  Linking.openURL(qrvalue);
};

const onBarcodeScan = qrvalue => {
  setQrvalue(qrvalue);
  setOpneScanner(false);
};

return (
  <SafeAreaView style={{flex: 1, paddingTop:8}}>
    <View style={{flex: 1,position:'relative'}}>
      <CameraScreen
        scanBarcode={true}
        onReadCode={event => onBarcodeScan(event.nativeEvent.codeStringValue)}
      />
     

    <View style={styles.container}>
      <Lottie style={styles.barCode} source={require('../../assets/LottieData/barcode-mask.json')} autoPlay={true} loop />
      </View>
      {qrvalue ? (
        <View
          style={{
            backgroundColor: 'white',
            padding: 10,
            borderRadius: 10,
          }}>
          <Text style={styles.textStyle}>{'Scanned Result: ' + qrvalue}</Text>
        </View>
      ) : (
        ''
      )}
      {qrvalue.includes('https://') ||
      qrvalue.includes('http://') ||
      qrvalue.includes('geo:') ? (
        <TouchableHighlight onPress={onOpenlink}>
          <Text style={styles.textLinkStyle}>
            {qrvalue.includes('geo:') ? 'Open in Map' : 'Open Link'}
          </Text>
        </TouchableHighlight>
      ) : null}
    </View>
  </SafeAreaView>
);
};

export default RedoseSpot;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  titleText: {
    fontSize: 22,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  textStyle: {
    color: 'black',
    fontSize: 16,
    textAlign: 'center',
  },
  buttonStyle: {
    fontSize: 16,
    color: 'white',
    backgroundColor: 'red',
    padding: 5,
    minWidth: 250,
  },
  buttonTextStyle: {
    padding: 5,
    color: 'white',
    textAlign: 'center',
  },
  textLinkStyle: {
    color: 'blue',
    paddingVertical: 20,
  },
  barCode:{
    marginTop:-150
  }
});
