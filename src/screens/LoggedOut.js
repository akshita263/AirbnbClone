import React, { Component } from 'react'
import { Text, StyleSheet, View, Image, TouchableHighlight } from 'react-native'
import colors from '../styles/colors/index'
import Rounded from '../components/Buttons/Rounded'
import Icon from 'react-native-vector-icons/FontAwesome'

export default class LoggedOut extends Component {
    onFacebookPress(){
        alert('Facebook Button Pressed')
    }

    onCreateAccountPress(){
        alert('Create Account Button Pressed')
    }

    onOptionPress(){
        alert('More Options Button Pressed')
    }
    render() {
        return (
            <View style={styles.container}> 
                <View style={styles.container2}>
                    <Image 
                        style={styles.logo}
                        source= {require('../img/logo.jpg')}/>
                    <Text style={styles.welText}>Welcome to Airbnb.</Text>
                    <Rounded 
                        background = 'white'
                        textColor= {colors.red1}
                        icon= {<Icon name= "facebook" size={25}
                        style= {styles.icon} />}
                        handleOnPress= {this.onFacebookPress}
                        text= "Continue With Facebook"/>
                    <Rounded 
                        background = {colors.red1}
                        textColor= 'white'
                        handleOnPress= {this.onCreateAccountPress}
                        text= "Create Account"/>
                    <TouchableHighlight 
                        onPress = {this.onOptionPress}
                        style={styles.optionContainer}>
                        <Text style={styles.optionText}>
                            More Options
                        </Text>
                    </TouchableHighlight>
                    <View style={styles.conditions}>
                        <Text style={styles.conditionsText}>
                            By tapping Continue, Create Account or More Options, I Agree
                        </Text>
                        <Text style={styles.conditionsText}>to Airbnb's </Text>
                        <TouchableHighlight style={styles.link}> 
                            <Text style={styles.conditionsText}>Terms of Service</Text> 
                        </TouchableHighlight>
                        <Text style={{color: 'white'}}>, </Text>
                        <TouchableHighlight style={styles.link}> 
                            <Text style={styles.conditionsText}>Payments Terms of Service</Text>
                        </TouchableHighlight>
                        <Text style={{color: 'white'}}>, </Text>
                        <TouchableHighlight style={styles.link}> 
                            <Text style={styles.conditionsText}>Privacy Policy</Text>
                        </TouchableHighlight>
                        <Text style={{color: 'white'}}>, and </Text>
                        <TouchableHighlight style={styles.link}> 
                            <Text style={styles.conditionsText}>Nondiscrimination Policy </Text>
                        </TouchableHighlight>
                    </View>
                    <View style= {styles.end}></View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        display: 'flex',
        backgroundColor: colors.red1,
    },
    container2:{
        display: 'flex',
        marginTop:30,
        padding: 20

    },
    logo:{
        height: 50,
        width: 50,
        marginTop: 50,
        marginBottom:40, 

    },
    welText:{
        fontSize: 30, 
        color: 'white',
        fontWeight: '300',
        marginBottom: 40,
    },
    icon:{
        position: 'relative',
        color: colors.red1,
        left: 20,
        zIndex:8,
    },
    optionContainer:{
        marginTop:40,
    },
    optionText:{
        color: 'white',
        fontSize: 18
    },
    conditions:{
        flexWrap: 'wrap',
        alignItems: 'flex-start',
        flexDirection: 'row',
        marginTop: 30,
    },
    conditionsText:{
        fontWeight: '600',
        color: 'white',
        fontSize: 14,
    },
    link:{
        borderBottomWidth: 0.5,
        borderBottomColor: 'white'
    },
    end:{
        marginBottom:300
    }
})
