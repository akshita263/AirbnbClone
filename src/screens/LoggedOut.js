import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'

export default class LoggedOut extends Component {
    render() {
        return (
            <View style={styles.container}> 
                <Text style={styles.text}> hey </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        display: 'flex',
        backgroundColor: '#fd595e'
    },
    text:{
        fontSize: 100,
        
    }
})
