/**
 * App.js
 * Sister React Native App
 * 
 * Create by younger brother
 */
"use strict";
import React from "react";
import{
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Button
}from 'react-native';
import{
    StackNavigator,
}from 'react-navigation';
import Hello from './Es6Component'
import Hello5 from './Es5Component'
import HelloF from './FunctionComponent'

class App extends React.Component{
    render(){
        return(
            <View style={styles.container}>
            <Text style={styles.hello}> Hello,World </Text>
            <Hello name='xiaopming '/>
            <Hello5 name='小明'/>
            <HelloF name='baby'/>
            </View>
        )
    }
}
var styles=StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
    },
    hello:{
        fontSize:20,
        textAlign:'center',
        margin:10,
    }
});

export default App