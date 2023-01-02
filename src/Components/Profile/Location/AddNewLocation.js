import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import AntDesignIcon from 'react-native-vector-icons/AntDesign';

const AddNewLocation = () => {
  const navigation = useNavigation();
  const [search, setSearch] = useState(false);

  const onSearch = () => {
    setSearch(true);
  };
  const onSearchClose = () => {
    setSearch(false);
  };
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
          <View style={styles.Profile}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Icon name="arrow-back" size={25} style={styles.iconColor} />
            </TouchableOpacity>
            <View style={styles.textParent}>
              <Text style={styles.heading}>Choose Your Building</Text>
              <Text style={styles.add}>Add your routine sitting location</Text>
            </View>
            <TouchableOpacity
              onPress={onSearch}
              style={[styles.icon, {marginLeft: 30}]}>
              <Icon name="search" size={32} style={styles.searchIcon} />
            </TouchableOpacity>
          </View>
        )}
        {/* <View>
                  <TouchableOpacity style={styles.icon}><Icon name="search" size={32} style={styles.searchIcon}/></TouchableOpacity>  
                  </View> */}
      </View>

      <TouchableOpacity onPress={() => navigation.navigate('selectWing')}>
        <View style={styles.iconParent}>
          <View style={styles.iconsubParent}>
            <View style={styles.icon}>
              <Icon name="my-location" size={25} style={styles.searchIcon} />
            </View>
            <Text style={styles.profileSettings}>Binori</Text>
          </View>
          <View style={styles.locationAddress}>
            <Text style={styles.locationAddressText}>
              Friends Avenue, Bodakdev, Ahmedabad,Gujarat 380054
            </Text>
          </View>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('selectWing')}>
        <View style={styles.iconParent}>
          <View style={styles.iconsubParent}>
            <View style={styles.icon}>
              <Icon name="my-location" size={25} style={styles.searchIcon} />
            </View>
            <Text style={styles.profileSettings}>Binori</Text>
          </View>
          <View style={styles.locationAddress}>
            <Text style={styles.locationAddressText}>
              Friends Avenue, Bodakdev, Ahmedabad,Gujarat 380054 Friends Avenue,
              Bodakdev, Ahmedabad,Gujarat 380054Friends Avenue, Bodakdev,
              Ahmedabad,Gujarat 380054Friends Avenue, Bodakdev,
              Ahmedabad,Gujarat 380054
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default AddNewLocation;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f2f2',
    padding: 12,
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
    fontSize: 22,
    color: '#ff2746',
    fontWeight: 'bold',
    marginLeft: 12,
  },
  add: {
    marginLeft: 12,
    color: 'black',
    fontSize: 15,
  },
  iconColor: {
    color: '#4a4949',
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
    marginTop: 10,
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
  searchParent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
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
