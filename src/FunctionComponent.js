/**
 * FunctionComponent 
 * 函数式组件，无状态，不能用this,但是能访问属性
 * create by yonger brother
 */
'use strict'
import React from 'react'
import {
    Text
}from 'react-native'
function Hello(props){
    return <Text style={{fontSize:40,backgroundColor:'yellow'}}>Hello {props.name}</Text>
}
module.exports=Hello;