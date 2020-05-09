import React, { Component } from 'react'
import { Text, StyleSheet, View, ScrollView, KeyboardAvoidingView } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import colors from '../styles/colors'
import { PropTypes } from 'prop-types'
import Input from '../components/Forms/Input'

export default class Login extends Component {
    render() {
        return (
            <KeyboardAvoidingView style={styles.container}>
                <View style= {styles.scrollContainer}> 
                    <ScrollView style= {styles.scroll}>
                        <Text 
                        style= {styles.header}>
                            Log in
                        </Text>
                        <Input
                        inputType ="EMAIL" 
                        labelText= "EMAIL ADDRESS"/>
                        <Input 
                        inputType ="PASSWORD"
                        labelText= "PASSWORD"/>
                    </ScrollView>
                </View>
               
            </KeyboardAvoidingView>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        display: 'flex',
        backgroundColor: colors.red1
    },
    scrollContainer: {
        flex:1,
        marginTop: 70,
    },
    scroll:{
        flex:1,
        padding: 30,
        paddingTop: 20,
        paddingBottom: 0
    },
    header:{
        color: 'white',
        fontSize: 45,
        fontWeight: '300',
        marginBottom :40,
    },
    end:{
        marginBottom: 900
    }
})
