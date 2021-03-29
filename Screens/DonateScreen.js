import React from 'react';
import {TouchableOpacity ,View ,Text, TextInput, StyleSheet, Modal, Alert, ScrollView} from 'react-native';
import Myheader from '../Components/Myheader.js';

export default class DonateScreen extends React.Component{
    render(){
        return(
            <View style = {{flex:1}}>
                <Myheader title = "DONATE HERE"/>
                <Text>
                    DONATE HERE
                </Text>
            </View>
        )
    }
}