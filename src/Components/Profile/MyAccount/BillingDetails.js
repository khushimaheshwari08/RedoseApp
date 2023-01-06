import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  TextInput,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import FeatherIcon from 'react-native-vector-icons/Feather';

const BillingDetails = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.parent}>
        <View style={styles.Profile}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Icon name="arrow-back" size={25} style={styles.iconColor} />
          </TouchableOpacity>
          <Text style={styles.heading}>Billing Details</Text>
        </View>
      </View>
      <View style={styles.main}>
        <View style={styles.invoice}>
          <View style={styles.invoiceParent}>
            <Text style={styles.invoiceText}>Company Name:</Text>
          </View>
          <TextInput
            style={styles.textInput}
            placeholder="Company Name"
            placeholderTextColor="gray"
          />
        </View>
        <View style={styles.divider2}></View>
        <View style={styles.invoice}>
          <View style={styles.invoiceParent}>
            <Text style={styles.invoiceText}>GSTIN:</Text>
          </View>
          <TextInput
            style={styles.textInput}
            placeholder="GST Number"
            placeholderTextColor="gray"
          />
        </View>
        <View style={styles.divider2}></View>
        <View style={styles.invoice}>
          <View style={styles.invoiceParent}>
            <Text style={styles.invoiceText}>Address:</Text>
          </View>
          <TextInput
            style={styles.textInput}
            placeholder="Billing Address"
            placeholderTextColor="gray"
          />
        </View>
        <View style={styles.divider2}></View>
        <View style={styles.invoice}>
          <View style={styles.invoiceParent}>
            <Text style={styles.invoiceText}>State:</Text>
          </View>
          <TextInput
            style={styles.textInput}
            placeholder="State"
            placeholderTextColor="gray"
          />
        </View>
        <View style={styles.divider2}></View>
        <View style={styles.invoice}>
          <View style={styles.invoiceParent}>
            <Text style={styles.invoiceText}>GSTIN:</Text>
          </View>
          <TextInput
            style={styles.textInput}
            placeholder="GST Number"
            placeholderTextColor="gray"
          />
        </View>
        <View style={styles.divider2}></View>
        <View style={styles.invoice}>
          <View style={styles.invoiceParent}>
            <Text style={styles.invoiceText}>Billing City:</Text>
          </View>
          <TextInput
            style={styles.textInput}
            placeholder="City"
            placeholderTextColor="gray"
          />
        </View>
        <View style={styles.divider2}></View>
        <View style={styles.invoice}>
          <View style={styles.invoiceParent}>
            <Text style={styles.invoiceText}>Pincode:</Text>
          </View>
          <TextInput
            style={styles.textInput}
            placeholder="Billing Pincode"
            placeholderTextColor="gray"
            keyboardType="numeric"
          />
        </View>
        <View style={styles.divider2}></View>
        <View>
          <TouchableOpacity style={styles.SectionStyle}>
            <Text style={styles.otp}>
              <FeatherIcon name="save" size={20} style={styles.iconaddColor} />
              Save
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default BillingDetails;
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
  main: {
    height: 410,
    backgroundColor: 'white',
    borderRadius: 20,
    marginTop: 20,
  },
  divider2: {
    width: 340,
    borderWidth: 0.3,
    borderColor: 'lightgray',
  },

  invoice: {
    flexDirection: 'row',
    padding: 10,
  },
  invoiceParent: {
    width: 120,
  },
  invoiceText: {
    color: 'gray',
    marginTop: 5,
  },
  invoiceTextclr: {
    color: 'black',
    marginTop: 5,
    padding: 3,
    fontWeight: 'bold',
  },
  SectionStyle: {
    marginLeft: 100,
    marginRight: 100,
    backgroundColor: '#ff2746',
    height: 35,
    borderRadius: 10,
    marginTop: 10,
    padding: 5,
  },
  otp: {
    color: 'white',
    textAlign: 'center',
    fontSize: 15,
    fontWeight: 'bold',
    paddingBottom: 4,
  },
  iconaddColor: {
    color: 'white',
  },
  textInput: {
    color: 'black',
    borderWidth: 0.5,
    height: 30,
    width: 170,
    borderRadius: 5,
    fontSize: 13,
    padding: 7,
  },
});
