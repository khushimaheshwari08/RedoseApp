import React, { useEffect } from 'react';
import {Text, View, StyleSheet, Image} from 'react-native';
import Lottie from 'lottie-react-native';
import {useNavigation} from '@react-navigation/native';





const SplashScreen = () => {
    const navigation = useNavigation();
    useEffect(() => {
        setTimeout(() => {
            navigation.replace('slider')
          }, 3000);
    }, [])
  return (
    <View style={styles.container}>
      <View style={styles.parent}>
        <Lottie
          style={styles.cupOftea}
          source={require('../../assets/LottieData/cup-of-tea.json')}
          autoPlay
          loop={false}
        />
      </View>
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e62e1e',
  },
  parent: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cupOftea: {
    height: 200,
  },
});
