import {
    Image,
    StyleSheet,
    Text,
    View,
    Dimensions,
    Animated,
    Easing,
    TouchableOpacity,
  } from 'react-native';
  import React from 'react';
  
  const {width, height} = Dimensions.get('screen');
  
  const SlideItem = ({item}) => {
    return (
      <View style={styles.container}>
        <Image
          source={item.img}
          resizeMode="contain"
        style={styles.image}
        />
        <View>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.description}>{item.description}</Text>
        </View>
      </View>
    );
  };
  
  export default SlideItem;
  
  const styles = StyleSheet.create({
    container: {
      width,
      height,
      alignItems: 'center',
      backgroundColor:'white'
    },
    image: {
      flex: 0.6,
      width: '100%',
    },
    title: {
      fontWeight: 'bold',
      color:'black',
      textAlign:'center',
      fontSize:22,
    },
    description: {
      color:'gray',
      textAlign:'center',
      fontSize:15,
      marginLeft:10,
      marginRight:10,
      marginTop:20
    },
  });