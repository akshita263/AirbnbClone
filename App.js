import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'
import LoggedOut from './src/screens/LoggedOut'

export default class App extends Component {
  render() {
    return (
      <View>
        <LoggedOut />
      </View>
    )
  }
}

const styles = StyleSheet.create({})
