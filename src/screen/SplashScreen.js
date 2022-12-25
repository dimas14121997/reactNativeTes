import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { StackActions } from '@react-navigation/native';

class SplashScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    componentDidMount(){
        setTimeout(() => {
            this.props.navigation.dispatch(StackActions.replace('Home'))            
        }, 3000);
    }
    render() {
        return (
            <Text>
                Splash Screen
            </Text>
        );
    }
}

export default SplashScreen;