import React, { Component } from 'react'
import { Text, StyleSheet, View, ScrollView, KeyboardAvoidingView } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import colors from '../styles/colors'
import { PropTypes } from 'prop-types'
import Input from '../components/Forms/Input'
import NextArrow from '../components/Buttons/NextArrow'
import Notifications from '../components/Notifications'
import Loader from '../components/Loader'

export default class ForgotPass extends Component {
    constructor(props){
        super(props);
        this.state= {
            formValid : true,
            validEmail: false,
            emailAdd: '',
            loadingVisible: false
        };
        this.handleEmailChange =this.handleEmailChange.bind(this);
        this.goToNext =this.goToNext.bind(this);
        this.handleCloseNotification =this.handleCloseNotification.bind(this);

    }
    
    handleEmailChange(email){
        const re =   /^\s*(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))\s*$/;

        this.setState ({emailAdd: email});

        if(re.test(email)){
            this.setState ({validEmail: true});
        }
        else{
            if(!re.test(email)){
                this.setState({validEmail: false});
            }
        }
    }

    goToNext(){
        this.setState ({loadingVisible: true})
        setTimeout(() => {
            if(this.state.emailAdd === 'wrong@email.com'){
                this.setState({
                    loadingVisible: false,
                    formValid: false
                })
            }else{
                this.setState({
                    loadingVisible: false,
                    formValid: true
                })
            }
        }, 2000);
    }

    handleCloseNotification(){
        this.setState( {formValid: true} )
    }
    render() {
        const { loadingVisible, formValid, validEmail } = this.state;
        const backgroundColor = formValid ? colors.red1 : colors.darkOrange;
        const showNotification = formValid ? false : true;
        const notificationMargin = showNotification ? 10 : 0;

        return (
            <KeyboardAvoidingView
                style={[{backgroundColor},styles.container]}
                behavior= "padding"
            >
                <View style={styles.form}>
                    <Text style={styles.header}> Forgot your Password?</Text>
                    <Text style={styles.subhead}>Enter your email to find your account</Text>
                    <Input 
                        labelText= "EMAIL ADDRESS"
                        inputType= "EMAIL"
                        onChangeText = {this.handleEmailChange}
                        autoFocus= {true}
                        autoCapitalize= 'none'
                        showCheckmark ={validEmail}
                    />
                </View>
                <View style= {styles.next}>
                    <NextArrow 
                        handleNextButton= {this.goToNext}
                        disabled ={!validEmail}
                    />
                </View> 
                <View style={[{marginTop: notificationMargin}, styles.notificationContainer]}>
                    <Notifications 
                        showNotification= {showNotification}
                        handleCloseNotification= {this.handleCloseNotification}
                        type= "ERROR"
                        firstLine= "No account exist for requested "
                        secondLine= "Email Address, "
                    />
                </View>
                <Loader 
                    modalVisible= {loadingVisible}
                    animationType= "fade"
                />
            </KeyboardAvoidingView>
        )
    }
}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        display : 'flex',
    },
    form:{
        flex:1,
        marginTop: 70,
        paddingLeft: 20, 
        paddingRight: 20,

    },
    header:{
        color: 'white',
        fontSize: 32,
        fontWeight: '300'
    },
    subhead:{
        color: 'white',
        fontSize: 17,
        fontWeight: '600',
        marginTop: 7,
        marginBottom: 90
    },
    next:{
        alignItems: 'flex-end',
        right: 25, 
        bottom: 20,
        position: 'absolute'
    },
    notificationContainer:{
        position: 'absolute',
        bottom: 0,
        width: '100%'
    },
})
