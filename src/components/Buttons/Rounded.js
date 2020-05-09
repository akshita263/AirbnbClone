import React, { Component } from 'react'
import { Text, StyleSheet, View, TouchableHighlight } from 'react-native'
import colors from '../../styles/colors'
import PropTypes from 'prop-types'

export default class Rounded extends Component {
    render(){
        const {text, background, textColor, icon, handleOnPress} = this.props;
        const backgroundColor = background || 'transparent';
        const color = textColor || 'black';
        return (
                <TouchableHighlight 
                onPress= {handleOnPress}
                style={[{backgroundColor} ,styles.container]}>
                    <View style={styles.btnTextContainer}>
                        {icon}
                        <Text style={[{color}, styles.btnText]}> {text} </Text>
                    </View>
                </TouchableHighlight>
        )
    }
}

Rounded.propTypes= {
    text: PropTypes.string.isRequired,
    background: PropTypes.string,
    textColor: PropTypes.string,
    icon : PropTypes.object,
    handleOnPress: PropTypes.func.isRequired, 
}

const styles = StyleSheet.create({
    container:{
        display: 'flex',
        padding:15,
        borderColor: 'white',
        borderRadius: 40,
        borderWidth: 1,
        marginTop: 15,
        alignItems: 'center'

    },
    btnTextContainer:{
        flexDirection: 'row',
        justifyContent: 'flex-end',
        
    },
    btnText:{
        fontSize: 20,
        textAlign: 'center',
        width: '100%',
    },
});