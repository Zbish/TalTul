import React, { Component } from 'react';
import { StyleSheet, View, Text, Button, Image, ImageBackground, TouchableOpacity, TouchableHighlight } from 'react-native';
import { addImage } from '../utils'

export default class HomeScreen extends Component {
    constructor() {
        super()
        this.state = {
            bigImage: false
        }
    }
    onPress() {
        this.setState({ bigImage: true })
        setTimeout(() => { this.setState({ bigImage: false }) }, 2000)
    }
    render() {

        return (
            <ImageBackground source={require('../images/forest.jpg')} style={styles.container}>
                {this.state.bigImage && <Image style={{ width: 400, height: 400, flex: 1 }} source={require('../images/taltula.png')}></Image>}
                {!this.state.bigImage &&
                    <View style={{ flex: 1 }}>
                        <Text style={styles.text}> בוקר טוב טלטול אל תשכחי לחייך היום</Text>
                        <TouchableOpacity style={styles.press} onPress={() => this.onPress()}>
                            <Image style={styles.image} source={require('../images/cheer-bear.png')} />
                            <Text style={styles.text}> תלטפי אותי !!!</Text>
                        </TouchableOpacity>
                    </View>}
            </ImageBackground>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center'
    },
    text: {
        marginTop: 35,
        color: '#F44336',
        fontSize: 35,
        fontWeight: 'bold',
    },
    image: {
        width: 250,
        height: 300,

    },
    press: {
        position: 'absolute',
        bottom: 40,
        left: 90,
    }
});