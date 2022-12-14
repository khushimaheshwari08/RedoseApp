
import React, {useRef, useState} from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Dimensions,
  ImageBackground,
  Image,
} from 'react-native';
import Carousel from 'react-native-anchor-carousel';
import {SimplePaginationDot} from './index'

const {width: windowWidth} = Dimensions.get('window');

const data = [
  {
    uri: 'https://i.imgur.com/GImvG4q.jpg',
    title: 'Hygienic beverages; Amazing Taste',
    content:
      'Whether you love tea, coffee or cold coffee, we have got everything to satisfy your cravings ',
  },
  {
    uri: 'https://i.imgur.com/Pz2WYAc.jpg',
    title: 'Lorem ipsum ',
    content: 'Neque porro quisquam est qui dolorem ipsum ',
  },
  {
    uri: 'https://i.imgur.com/IGRuEAa.jpg',
    title: 'Lorem ipsum dolor',
    content:
      'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...',
  },
  {
    uri: 'https://i.imgur.com/fRGHItn.jpg',
    title: 'Lorem ipsum dolor',
    content: 'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet',
  },
  {
    uri: 'https://i.imgur.com/WmenvXr.jpg',
    title: 'Lorem ipsum ',
    content: 'Neque porro quisquam est qui dolorem ipsum quia dolor ',
  },
];

const INITIAL_INDEX = 0;
export default function ImageCarousel(props) {
  const carouselRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(INITIAL_INDEX);

  function handleCarouselScrollEnd(item, index) {
    setCurrentIndex(index);
  }

  function renderItem({item, index}) {
    const {uri, title, content} = item;
    return (
      <TouchableOpacity
        activeOpacity={1}
        style={styles.item}
        onPress={() => {
          carouselRef.current.scrollToIndex(index);
        }}>
        {/* <ImageBackground source={{uri: uri}} style={styles.imageBackground}>
          <View style={styles.rightTextContainer}>
            <Text style={styles.rightText}>Lorem</Text>
          </View>
        </ImageBackground> */}
                 <Image
                  source={require('../assets/screen1.png')}
                  style={{
                    width: 300,
                    height: 300,
                    // marginTop:30,
                    left:45
                  }}
                />
        <View style={styles.lowerContainer}>
          <Text style={styles.titleText}>{title}</Text>
          <Text style={styles.contentText}>{content}</Text>
        </View>
      </TouchableOpacity>
      
    );
  }

  return (
    <View style={styles.container}>
      <Carousel
        style={styles.carousel}
        data={data}
        renderItem={renderItem}
        itemWidth={ windowWidth}
        inActiveOpacity={0.3}
        containerWidth={windowWidth}
        onScrollEnd={handleCarouselScrollEnd}
        ref={carouselRef}
      />
      <SimplePaginationDot currentIndex={currentIndex} length={data.length} />
      <TouchableOpacity
              style={styles.buttonStyle}
              >
              <Text style={styles.buttonTextStyle}>
                Next
                </Text>
            </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {backgroundColor: 'white', paddingVertical: 20,flex:1},
  carousel: {
    backgroundColor: 'white',
    aspectRatio: 1.5,
    // flexGrow: 0,
    flex:1,
    marginBottom: 20,
  },
  item: {
    borderWidth: 2,
    backgroundColor: 'white',
    flex: 1,
    borderRadius: 5,
    borderColor: 'white',
    elevation: 3,
  },
  imageBackground: {
    flex: 2,
    backgroundColor: '#EBEBEB',
    borderWidth: 5,
    borderColor: 'white',
  },
  rightTextContainer: {
    marginLeft: 'auto',
    marginRight: -2,
    backgroundColor: 'rgba(49, 49, 51,0.5)',
    padding: 3,
    marginTop: 3,
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
  },
  rightText: {color: 'white'},
  lowerContainer: {
    flex: 1,
    margin: 10,
  },
  titleText: {
    fontWeight: 'bold',
    color:'black',
    fontSize:20,
marginTop:15
  },
  contentText: {
    marginTop: 10,
    color:'gray',
    textAlign:'center',
    fontSize:15,
    marginLeft:10,
    marginRight:10,
    marginTop:20
  },
  buttonStyle: {
    backgroundColor: 	'#ff2746',
    color: '#FFFFFF',
    borderColor: '#7DE24E',
    height: 53,
    alignItems: 'center',
    borderRadius: 30,
    marginLeft: 20,
    marginRight: 20,
    marginTop: 20,
    marginBottom: 25,
  },
  buttonTextStyle: {
    color: '#FFFFFF',
    fontSize: 16,
    marginTop:17,
    fontWeight:'bold'
  },
});

// import {SimplePaginationDot} from './index'
// import React, {useRef, useState} from 'react';
// import {
//   StyleSheet,
//   Text,
//   TouchableOpacity,
//   View,
//   Dimensions,
//   ImageBackground,
//   Image,
// } from 'react-native';
// import Carousel from 'react-native-anchor-carousel';

// const {width: windowWidth} = Dimensions.get('window');

// const data = [
//   {
//     uri: 'https://i.imgur.com/GImvG4q.jpg',
//     title: 'Hygienic beverages; Amazing Taste',
//     content:
//       'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...',
//   },
//   {
//     uri: 'https://i.imgur.com/Pz2WYAc.jpg',
//     title: '1 Click desk delivery',
//     content: 'Neque porro quisquam est qui dolorem ipsum ',
//   },
//   {
//     uri: 'https://i.imgur.com/IGRuEAa.jpg',
//     title: 'Great Savings ',
//     content:
//       'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...',
//   },
// ];

// const INITIAL_INDEX = 0;
// export default function ImageCarousel(props) {
//   const carouselRef = useRef(null);
//   const [currentIndex, setCurrentIndex] = useState(INITIAL_INDEX);

//   function handleCarouselScrollEnd(item, index) {
//     setCurrentIndex(index);
//   }

//   function renderItem({item, index}) {
//     const {uri, title, content} = item;
//     return (
//       <TouchableOpacity
//         activeOpacity={1}
//         style={styles.item}
//         onPress={() => {
//           carouselRef.current.scrollToIndex(index);
//         }}>
//         {/* <ImageBackground source={{uri: uri}} style={styles.imageBackground}>
//           <View style={styles.rightTextContainer}>
//             <Text style={styles.rightText}>Lorem</Text>
//           </View>
//         </ImageBackground> */}
//          <Image
//                   source={require('../assets/screen1.png')}
//                   style={{
//                     width: 100,
//                     height: 100,
//                     // marginTop:30,
//                     left:45
//                   }}
//                 />
//         <View style={styles.lowerContainer}>
//           <Text style={styles.titleText}>{title}</Text>
//           <Text style={styles.contentText}>{content}</Text>
//         </View>
//       </TouchableOpacity>
//     );
//   }

//   return (
//     <View style={styles.container}>
//       <Carousel
//         style={styles.carousel}
//         data={data}
//         renderItem={renderItem}
//         itemWidth={ windowWidth}
//         inActiveOpacity={0.3}
//         containerWidth={windowWidth}
//         onScrollEnd={handleCarouselScrollEnd}
//         ref={carouselRef}
//       />
//       <SimplePaginationDot currentIndex={currentIndex} length={data.length} />
//       <TouchableOpacity
//               style={styles.buttonStyle}
//               >
//               <Text style={styles.buttonTextStyle}>
//                 Next
//                 </Text>
//             </TouchableOpacity>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {backgroundColor: 'white', paddingVertical: 20,flex:1},
//   carousel: {
//     backgroundColor: 'white',
//     aspectRatio: 1.5,
//     // flexGrow: 0,
//     marginBottom: 300,
//   },
//   item: {
//     borderWidth: 2,
//     backgroundColor: 'white',
//     flex: 1,
//     borderRadius: 5,
//     borderColor: 'white',
//     elevation: 3,
//   },
//   imageBackground: {
//     flex: 2,
//     backgroundColor: '#EBEBEB',
//     borderWidth: 5,
//     borderColor: 'white',
//   },
//   rightTextContainer: {
//     marginLeft: 'auto',
//     marginRight: -2,
//     backgroundColor: 'rgba(49, 49, 51,0.5)',
//     padding: 3,
//     marginTop: 3,
//     borderTopLeftRadius: 5,
//     borderBottomLeftRadius: 5,
//   },
//   rightText: {color: 'white'},
//   lowerContainer: {
//     flex: 1,
//     margin: 10,
//   },
//   titleText: {
//     fontWeight: 'bold',
//     fontSize: 18,
//     color:'black'
//   },
//   contentText: {
//     marginTop: 10,
//     fontSize: 12,
//     color:'black'
//   },
//   buttonStyle: {
//     backgroundColor: 	'#ff2746',
//     color: '#FFFFFF',
//     borderColor: '#7DE24E',
//     height: 53,
//     alignItems: 'center',
//     borderRadius: 30,
//     marginLeft: 20,
//     marginRight: 20,
//     marginTop: 20,
//     marginBottom: 25,
//   },
//   buttonTextStyle: {
//     color: '#FFFFFF',
//     fontSize: 16,
//     marginTop:17,
//     fontWeight:'bold'
//   },
// });
