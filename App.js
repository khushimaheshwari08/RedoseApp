import React from 'react'
import { Text, View, StyleSheet} from 'react-native'
// import Screen1 from './src/Components/Screens/Screen1'
import ImageCarousel from './src/Components/ImageCarousel'
import Login from './src/Components/Screens/Login'

const App = () => {
  return (
    // <Screen1/>
    // <View><Text>Hy</Text></View>
    <View style={styles.container}>
    <ImageCarousel/>
    </View>
    // <Login/>
  )
}

export default App
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})