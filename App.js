import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'
import LoggedOut from './src/screens/LoggedOut'
import Login from './src/screens/Login'
import ForgotPass from './src/screens/ForgotPass'

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <ForgotPass />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    display: 'flex',
  }
})
