import React, { Component } from 'react'
import { Text, StyleSheet, View, ScrollView, KeyboardAvoidingView } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import colors from '../styles/colors'
import { PropTypes } from 'prop-types'
import Input from '../components/Forms/Input'
import NextArrow from '../components/Buttons/NextArrow'
import Notifications from '../components/Notifications'
import Loader from '../components/Loader'

export default class Login extends Component {
    constructor(props){
        super(props);
        this.state={
            formValid : true,
            validEmail: false,
            emailAdd: '',
            validPass: false,
            loadingVisible: false
        }
        this.handleCloseNotification =this.handleCloseNotification.bind(this);
        this.handleEmailChange =this.handleEmailChange.bind(this);
        this.handleNextButton =this.handleNextButton.bind(this);
        this.handlePasswordChange =this.handlePasswordChange.bind(this);
        this.toggleNextBtn =this.toggleNextBtn.bind(this);
    }

    handleNextButton(){
        this.setState({loadingVisible: true});

        setTimeout(() => {
            if(this.state.emailAdd === 'Hello@abc.com' && this.state.validPass){
                alert('success')
                this.setState ({formValid: true, loadingVisible: false})
            }else{
                this.setState({ formValid: false, loadingVisible: false })
            }
        }, 2000);
    }

    handleCloseNotification(){
        this.setState( {formValid: true} )
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

    handlePasswordChange(password){
        if(password.length > 4){
            this.setState({ validPass: true})
        }else if(password.length <= 4){
            this.setState({validPass: false})
        } 
    }

    toggleNextBtn(){
        const {validEmail, validPass} = this.state;
        if(validEmail && validPass){
            return false;
        }else{
            return true;
        }
    }

    render() {
        const { formValid, loadingVisible, validEmail, validPass } = this.state;
        const backgroundColor = formValid ? colors.red1 : colors.darkOrange;
        const notificationMargin = showNotification ? 10 : 0;
        const showNotification = formValid ? false : true;

        return (
            <KeyboardAvoidingView style={[{backgroundColor}, styles.container]}>
                <View style= {styles.scrollContainer}> 
                    <ScrollView style= {styles.scroll}>
                        <Text style= {styles.header}>
                            Log in
                        </Text>
                        <Input
                            inputType ="EMAIL" 
                            labelText= "EMAIL ADDRESS"
                            onChangeText ={this.handleEmailChange}
                            showCheckmark ={validEmail}
                            autoFocus= {true}
                            autoCapitalize= 'none'
                        />
                        <Input 
                            inputType ="PASSWORD"
                            labelText= "PASSWORD"
                            onChangeText= {this.handlePasswordChange}
                            showCheckmark = {validPass}
                            autoCapitalize= 'none'
                        />
                    </ScrollView>
                    <View style={styles.next}>
                        <NextArrow 
                            handleNextButton= {this.handleNextButton}
                            disabled ={this.toggleNextBtn()}
                        />
                    </View>
                    <View style={[{marginTop: notificationMargin}, styles.notificationContainer]}>
                        <Notifications 
                            showNotification= {showNotification}
                            handleCloseNotification={this.handleCloseNotification}
                            type= "ERROR! "
                            firstLine= "Those credendials do not look right. "
                            secondLine= "Please, Try Again."
                        />
                    </View>
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
    container:{
        flex:1,
        display: 'flex',

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
    next:{
        alignItems: 'flex-end',
        right: 25, 
        bottom: 20,
    },
    notificationContainer:{
        position: 'absolute',
        bottom: 0,
    }
})
