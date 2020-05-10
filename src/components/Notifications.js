import React, { Component } from 'react'
import { Text, StyleSheet, View, TouchableOpacity, Easing, Animated } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import colors from '../styles/colors'
import { PropTypes } from 'prop-types'

export default class Notifications extends Component {
    constructor(props){
        super(props);
        this.state={ 
            positionValue: new Animated.Value(60),
        }
        this.closeNotification =this.closeNotification.bind(this);
        this.animateNotification =this.animateNotification.bind(this);

    }

    animateNotification( value ){
        const {positionValue} = this.state
        Animated.timing(
            positionValue,
            {
                toValue: value,
                duration: 400, 
                velocity: 3, 
                tension: 2,
                friction: 8,
                easing: Easing.easaOutBack,
                useNativeDriver: true,
            }
        ).start();
    }

    closeNotification(){
        this.props.handleCloseNotification();
    }
    render() {
        const {type, firstLine, secondLine, showNotification} = this.props
        const {positionValue} = this.state
        showNotification ? this.animateNotification(0) : this.animateNotification(60)
        return (
            <Animated.View style={[{transform : [{translateY: positionValue}]}, styles.container]}>
                <View style={styles.notificationContent}> 
                    <Text style={styles.errorText}>{type}</Text>
                    <Text style={styles.errorMsg}>{firstLine}</Text>
                    <Text style={styles.errorMsg}>{secondLine}</Text>
                </View>    
                <TouchableOpacity 
                    onPress= {this.closeNotification}
                    style={styles.closeBtn} >
                    <Icon name="close" size={30} color= {colors.lightGrey} />
                </TouchableOpacity>
            </Animated.View>
        )
    }
}

Notifications.propTypes ={
    showNotification: PropTypes.bool.isRequired,
    type: PropTypes.string.isRequired,
    firstLine: PropTypes.string,
    secondLine: PropTypes.string,
    handleCloseNotification: PropTypes.func,
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: 'white',
        height: 60,
        width: '100%',
        paddingTop: 10,
        paddingHorizontal:20
    },
    notificationContent:{
        flexWrap: 'wrap',
        flexDirection: 'row',
        alignItems: 'flex-start',
    },
    errorText:{
        color: colors.darkOrange,
        marginRight: 5, 
        marginBottom:2,
        fontSize: 15
    },
    errorMsg:{
        fontSize: 15,
        marginBottom: 2,
        color: 'grey'
    },
    closeBtn:{
        position: 'absolute',
        right: 20,
        bottom: 15
    }
})
