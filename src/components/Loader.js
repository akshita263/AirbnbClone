import React, { Component } from 'react'
import { Text, StyleSheet, View, Modal , Image } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import colors from '../styles/colors'
import { PropTypes } from 'prop-types'

export default class Loader extends Component {
    render() {
        const { animationType, modalVisible }  = this.props;
        return (
            <Modal
                animationType={animationType}
                transparent= {true}
                visible= {modalVisible}
            >
                <View style= {styles.container}>
                    <View style={styles.loadingContainer}>
                        <Image 
                            style= {styles.loading}
                            source= {require('../img/loading.gif')}
                        />
                    </View>
                </View>
            </Modal>
        )
    }
}

Loader.propTypes ={
    animationType: PropTypes.string.isRequired,
    modalVisible: PropTypes.bool.isRequired,
}

const styles = StyleSheet.create({
    container:{
        zIndex: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.6)',
        position: 'absolute',
        top: 0,
        left: 0,
        width:'100%',
        height: '100%'
    },
    loadingContainer:{
        width:120,
        height: 120,
        borderRadius: 15,
        position: 'absolute',
        left: '50%',
        top: '50%',
        marginTop: -50,
        marginLeft: -40
    },
    loading:{
        height: 90,
        width:90,
        borderRadius: 15,

    }
})
