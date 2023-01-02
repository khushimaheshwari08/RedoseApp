import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Modal,
  Alert,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {BlurView} from '@react-native-community/blur';

const CommonModal = ({open, onClose, title, onYes, onNo, heading}) => {
  const [blurType, setBlurType] = useState('dark');
  return (
    <Modal animationType="slide" transparent={true} visible={open}>
      <BlurView
        style={styles.blurViewStyle}
        blurRadius={1}
        blurType={blurType}
      />
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <View
            style={{
              flex: 1,
              justifyContent: 'flex-end',
              alignItems: 'flex-end',
            }}>
            <TouchableOpacity onPress={onClose} style={styles.closeArrowParent}>
              <Text style={styles.closeArrow}>
                <Icon name="close" size={30} />
              </Text>
            </TouchableOpacity>
          </View>
          <Text style={styles.modalTextAlert}>{heading}</Text>
          <Text style={styles.modalText}>{title}</Text>
          <View style={styles.buttonParent}>
            <TouchableOpacity
              style={[styles.button,]}
              onPress={onYes}>
              <Text style={styles.textStyle}>Yes</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.button, styles.buttonClose]}
              onPress={onNo}>
              <Text style={styles.textStyle}>No</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default CommonModal;
const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalView: {
    backgroundColor: 'white',
    height: 190,
    width: 320,
    borderRadius: 20,
    paddingRight: 20,
    paddingLeft:20,
    paddingBottom:20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  closeArrow: {
    color: 'black',
  },
  closeArrowParent: {
    marginRight:-10,
    height: 30,
    width: 30,
  },
  buttonParent: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginBottom:10
  },
  button: {
    borderRadius: 20,
    justifyContent:'center',
    height: 35,
    width: 110,
    borderWidth: 1,
    borderColor: '#ff2746',
  },
  buttonOpen: {
    backgroundColor: '#ffffff',
  },
  buttonClose: {
    marginLeft: 10,
  },
  textStyle: {
    color: '#ff2746',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
    color: 'black',
    marginTop: 8,
  },
  modalTextAlert: {
    textAlign: 'center',
    color: '#ff2746',
    fontSize: 25,
    fontWeight: 'bold',
  },

  blurViewStyle: {
    position: 'absolute',
    left: 0,
    top: 0,
    bottom: 0,
    right: 0,
  },
});
