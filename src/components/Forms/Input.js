import React, { Component } from 'react'
import { Text, StyleSheet, View, TextInput, TouchableOpacity, Animated, Easing} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import colors from '../../styles/colors'
import { PropTypes } from 'prop-types'


export default class Input extends Component {
    constructor(props){
        super(props);
        this.state= {
            secureInput: props.inputType === 'TEXT' || props.inputType === 'EMAIL' ? false : true ,
            scaleCheckmarkValue: new Animated.Value(0),
        };
        this.showPassword = this.showPassword.bind(this);
    }

    scaleCheckmark(value){
        Animated.timing(
            this.state.scaleCheckmarkValue,
            {
                toValue: value,
                duration: 40,
                easing: Easing.easeOutBack,
                useNativeDriver: true
            }
        ).start();
    }

    showPassword(){
        this.setState({ secureInput: !this.state.secureInput });
    }

    render() {
        const {labelText, labelTextSize, labelColor, textColor, bottomBorder, inputType,
            customStyles, onChangeText, showCheckmark, autoCapitalize, autoFocus} = this.props;
        const { secureInput, scaleCheckmarkValue }= this.state;
        const fontSize = labelTextSize || 20;
        const color = labelColor || 'white';
        const inputColor = textColor || 'white';
        const borderBottomColor = bottomBorder || 'white';
        const keyboardType = inputType === 'EMAIL' ? 'email-address' : 'default';

        const iconScale = scaleCheckmarkValue.interpolate({
            inputRange: [0, 0.5, 1],
            outputRange: [0, 0.6, 1]
        });

        const scaleValue= showCheckmark ? 1 : 0 ;
        this.scaleCheckmark(scaleValue);
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
                
                <Animated.View style={[{transform: [{scale: iconScale}]},styles.checkContainer]}>
                    <Icon 
                        name= "check" color= 'white' size={20} 
                    />
                </Animated.View>
                <TextInput 
                    style={[{color : inputColor}, {borderBottomColor}, styles.input]}
                    secureTextEntry={secureInput}
                    onChangeText ={onChangeText}  
                    keyboardType = {keyboardType}
                    autoFocus={autoFocus}
                    autoCapitalize= {autoCapitalize}
                    autoCorrect={false}
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
    showCheckmark: PropTypes.bool.isRequired,
    autoFocus: PropTypes.bool,
    autoCapitalize: PropTypes.string,
}

const styles = StyleSheet.create({
    container:{
        display: 'flex',
    },
    label :{
        fontWeight: '700',
        marginBottom: 10,
    },
    checkContainer:{
      position: 'absolute'  ,
        right: 0,
        bottom: 28
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
