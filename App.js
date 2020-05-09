import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'
import LoggedOut from './src/screens/LoggedOut'
import Login from './src/screens/Login'

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Login />
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
