import React, { Component } from 'react'
import { Text, StyleSheet, View, TouchableHighlight } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import colors from '../../styles/colors'
import { PropTypes } from 'prop-types'

export default class NextArrow extends Component {
    render() {
        const {disabled, handleNextButton} = this.props;
        const opacityStyle = disabled ? {backgroundColor: 'rgba(255, 255, 255, 0.2)'} : 
                                        {backgroundColor: 'rgba(255, 255, 255, 0.6)'} 
        return (
            <TouchableHighlight 
                onPress= {handleNextButton }
                style={[opacityStyle , styles.btn]}>
                <Icon 
                    name="angle-right"
                    color= {colors.red1}
                    size= {35}
                    style= {styles.icon}
                />
            </TouchableHighlight>
        )
    }
}

NextArrow.propTypes ={
    disabled: PropTypes.bool,
    handleNextButton: PropTypes.func,
}

const styles = StyleSheet.create({
    btn:{
        height:60,
        width:60,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 50,
    },
    icon: {
        marginRight: -2,
        marginTop: -2,
    }
})
