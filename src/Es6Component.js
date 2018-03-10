/**
 * HelloComponent  es6
 * create by younger brother
 */
'use strict'

import React,{Component} from "react";
import {Text} from 'react-native'

class  HelloCompont extends Component{
    render(){
    return(<Text style={{fontSize:20,backgroundColor:'red'}}>Hello,World ..... {this.props.name}</Text>)
    }
}


export default HelloCompont;