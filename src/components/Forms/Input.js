import React, { Component } from 'react'
import { Text, StyleSheet, View, TextInput, TouchableOpacity, KeyboardAvoidingView, TouchableWithoutFeedback } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import colors from '../../styles/colors'
import { PropTypes } from 'prop-types'


export default class Input extends Component {
    constructor(props){
        super(props);
        this.state= {
            secureInput: props.inputType === 'TEXT' || props.inputType === 'EMAIL' ? false : true ,
        };
        this.showPassword = this.showPassword.bind(this);
    }

    showPassword(){
        this.setState({ secureInput: !this.state.secureInput });
    }
    render() {
        const {labelText, labelTextSize, labelColor, textColor, bottomBorder, inputType, customStyles, onChangeText} = this.props;
        const { secureInput }= this.state;
        const fontSize = labelTextSize || 20;
        const color = labelColor || 'white';
        const inputColor = textColor || 'white';
        const borderBottomColor = bottomBorder || 'white';
        return (
            <View style= {[styles.container, {customStyles}]}>
                <Text style= {[{fontSize}, {color},  styles.label]}> {labelText} </Text>
                {inputType === 'PASSWORD' ? 
                <TouchableOpacity 
                    style= {styles.showbtn}
                    onPress= {this.showPassword}>
                    <Text style={styles.showbtnText}>{secureInput ? 'SHOW' : 'HIDE'}</Text>
                </TouchableOpacity>
                : null}
                <TextInput 
                    style={[{color : inputColor}, {borderBottomColor}, styles.input]}
                    secureTextEntry={secureInput}
                    onChangeText ={onChangeText}  
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
    customStyles: PropTypes.object,
    onChangeText: PropTypes.func,
}

const styles = StyleSheet.create({
    container:{
        display: 'flex',
    },
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
    },
    showbtn: {
        position: 'absolute',
        right: 10,
    },
    showbtnText:{
        color: 'white',
        fontWeight: '700'
    }
})
