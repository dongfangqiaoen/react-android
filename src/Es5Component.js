/**
 * Es5Component 
 * create by yonger brother
 */
'use strict'
import React from'react';
import {
    Text
}from 'react-native'
var HelloComponent = React.createClass({
    render(){
        return <Text style={{fontSize:40,backgroundColor:'green'}}>Hello {this.props.name}</Text>
    }

})
module.exports=HelloComponent;