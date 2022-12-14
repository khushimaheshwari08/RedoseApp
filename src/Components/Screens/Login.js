import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'

const Login = () => {
  return (
    <View style={styles.container}>
           <Image
                  source={require('../../assets/logo-light.png')}
                  style={{
                    width: 50,
                    height: 50,
                  }}
                />
    </View>
  )
}

export default Login

const styles = StyleSheet.create({
    container: {
      flex: 1,
        backgroundColor: '#fff',

    },
})