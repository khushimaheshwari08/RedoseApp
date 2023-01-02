import {
  Animated,
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useRef, useState} from 'react';
import Slides from '../data';
import SlideItem from './SlideItem';
import Pagination from './Pagination';
import {useNavigation} from '@react-navigation/native';

const Slider = () => {
  const navigation = useNavigation();
  const [index, setIndex] = useState(0);
  const scrollX = useRef(new Animated.Value(0)).current;
  const slidesRef = useRef(null);

  const handleOnScroll = event => {
    Animated.event(
      [
        {
          nativeEvent: {
            contentOffset: {
              x: scrollX,
            },
          },
        },
      ],
      {
        useNativeDriver: false,
      },
    )(event);
  };

  const handleOnViewableItemsChanged = useRef(({viewableItems}) => {
    // console.log('viewableItems', viewableItems);
    setIndex(viewableItems[0].index);
  }).current;

  const viewabilityConfig = useRef({
    itemVisiblePercentThreshold: 50,
  }).current;

  const onNext = () => {
    if (index < Slides.length - 1) {
      slidesRef.current.scrollToIndex({index: index + 1});
    }
  };
  return (
    <View style={styles.container}>
      <FlatList
        data={Slides}
        renderItem={({item}) => <SlideItem item={item} />}
        horizontal
        pagingEnabled
        snapToAlignment="center"
        showsHorizontalScrollIndicator={false}
        onScroll={handleOnScroll}
        onViewableItemsChanged={handleOnViewableItemsChanged}
        viewabilityConfig={viewabilityConfig}
        ref={slidesRef}
      />
      <Pagination data={Slides} scrollX={scrollX} index={index} />
      {index === Slides.length - 1 ? (
        <TouchableOpacity
          style={styles.buttonStyle}
          onPress={() => navigation.navigate('login')}>
          <Text style={styles.buttonTextStyle}>Get Started</Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity style={styles.buttonStyle} onPress={onNext}>
          <Text style={styles.buttonTextStyle}>Next</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

export default Slider;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  buttonStyle: {
    backgroundColor: '#ff2746',
    color: '#FFFFFF',
    borderColor: '#7DE24E',
    alignItems: 'center',
    borderRadius: 30,
    marginBottom: 25,
    marginLeft: 20,
    marginRight: 20,
    height: 50,
  },
  buttonTextStyle: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
    paddingTop: 15,
  },
});
