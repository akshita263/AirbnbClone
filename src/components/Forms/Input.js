import React, { Component } from 'react'
import { Text, StyleSheet, View, TextInput, ScrollView, KeyboardAvoidingView } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import colors from '../../styles/colors'
import { PropTypes } from 'prop-types'


export default class Input extends Component {

    render() {
        const {labelText, labelTextSize, labelColor, textColor, bottomBorder, inputType} = this.props;
        const fontSize = labelTextSize || 20;
        const color = labelColor || 'white';
        const inputColor = textColor || 'white';
        const borderBottomColor = bottomBorder || 'white';
        return (
            <View>
                <Text style= {[{fontSize}, {color},  styles.label]}> {labelText} </Text>
                <TextInput 
                    style={[{color : inputColor}, {borderBottomColor}, styles.input]}
                    secureTextEntry={inputType === 'PASSWORD' ? true : false}
                />
            </View>
        )
    }
}

Input.propTypes= {
    labelText: PropTypes.string.isRequired,
    labelTextSize: PropTypes.number,
    labelColor: PropTypes.string,
    textColor : PropTypes.string,
    bottomBorder : PropTypes.string,
    inputType: PropTypes.string.isRequired,
}

const styles = StyleSheet.create({
    label :{
        fontWeight: '700',
        marginBottom: 10,
    },
    input:{
        borderBottomWidth: 0.8,
        paddingTop: 12,
        paddingBottom: 12,
        fontSize: 20,
        marginBottom: 15,
    }
})
