import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  Switch,
  TextInput,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import AntDesignIcon from 'react-native-vector-icons/AntDesign';

const ManageLocation = () => {
  const navigation = useNavigation();
  const [isEnabled, setIsEnabled] = useState(true);
  const [search, setSearch] = useState(false);

  const onSearch = () => {
    setSearch(true);
  };
  const onSearchClose = () => {
    setSearch(false);
  };

  // const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  return (
    <View style={styles.container}>
      <View style={styles.parent}>
        {search ? (
          <View style={styles.searchParent}>
            <TouchableOpacity onPress={onSearchClose}>
              <AntDesignIcon
                name="closecircleo"
                size={20}
                style={styles.searchIcon}
              />
            </TouchableOpacity>
            <View style={styles.SearchBar}>
              <AntDesignIcon
                name="search1"
                size={25}
                style={styles.searchIcon1}
              />
              <TextInput
                placeholder="Search..."
                placeholderTextColor="black"
                autoFocus
                style={styles.searchTextinput}
              />
            </View>
          </View>
        ) : (
          <View style={styles.head}>
            <View style={styles.Profile}>
              <TouchableOpacity onPress={() => navigation.goBack()}>
                <Icon name="arrow-back" size={25} style={styles.iconColor} />
              </TouchableOpacity>
              <Text style={styles.heading}>Manage Location</Text>
            </View>
            <TouchableOpacity style={styles.icon} onPress={onSearch}>
              <Icon name="search" size={32} style={styles.searchIcon} />
            </TouchableOpacity>
          </View>
        )}
        <TouchableOpacity
          style={styles.iconParent}
          onPress={() => navigation.navigate('newLocation')}>
          <View style={styles.iconsubParent}>
            <View style={styles.icon}>
              <Icon name="my-location" size={25} style={styles.searchIcon} />
            </View>
            <Text style={styles.profileSettings}>Binori (Dummy)</Text>
            <TouchableOpacity style={styles.switch}>
              <Switch
                trackColor={{false: '#767577', true: 'red'}}
                thumbColor={isEnabled ? 'white' : '#f4f3f4'}
                value={isEnabled}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.locationAddress}>
            <Text style={styles.locationAddressText}>
              Friends Avenue, Bodakdev, Ahmedabad,Gujarat 380054
            </Text>
          </View>
        </TouchableOpacity>
        {/* <Image
                    source={require('../../../assets/img/location.png')}
                    style={{width: 300, height: 300,marginTop:45,marginLeft:20}}
                />
                <Text style={styles.notLocation}>Not Location Found</Text>
                <Text style={styles.text}>Sorry.We couldn't find anything. You can try another search or location</Text> */}
      </View>

      <View>
        <TouchableOpacity onPress={() => navigation.navigate('newLocation')}>
          <Text style={styles.otp}>Add New Location</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ManageLocation;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f2f2',
    padding: 10,
    justifyContent: 'space-between',
  },

  Profile: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  head: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
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
  notLocation: {
    fontSize: 23,
    color: '#ff2746',
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 32,
  },
  text: {
    textAlign: 'center',
    color: 'black',
    marginTop: 10,
    fontStyle: 'italic',
    fontWeight: '500',
  },

  otp: {
    marginTop: 93,
    color: 'white',
    height: 60,
    textAlign: 'center',
    borderRadius: 30,
    fontSize: 15,
    fontWeight: 'bold',
    paddingTop: 18,
    backgroundColor: '#ff2746',
    margin: 10,
  },
  icon: {
    backgroundColor: '#ffffff',
    height: 45,
    width: 45,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 25,
  },
  searchIcon: {
    color: '#ff2746',
  },
  icon: {
    backgroundColor: '#ffffff',
    height: 45,
    width: 45,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 25,
  },
  searchIcon: {
    color: '#ff2746',
  },
  iconParent: {
    justifyContent: 'space-between',
    borderColor: 'white',
    borderWidth: 1,
    borderRadius: 10,
    backgroundColor: 'white',
    paddingBottom: 30,
  },
  iconsubParent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  profileSettings: {
    fontSize: 18,
    color: '#ff2746',
    fontWeight: 'bold',
  },
  locationAddress: {
    marginLeft: 15,
  },
  locationAddressText: {
    color: 'black',
    fontSize: 12,
  },
  switch: {
    marginLeft: 110,
  },
  searchParent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  SearchBar: {
    flexDirection: 'row',
    backgroundColor: '#ffffff',
    width: 300,
    borderRadius: 30,
    marginLeft: 10,
    alignItems: 'center',
  },
  searchIcon1: {
    color: 'black',
    marginLeft: 20,
  },
  searchTextinput: {
    width: 250,
    fontSize: 16,
    marginLeft: 8,
    color: 'black',
  },
});
