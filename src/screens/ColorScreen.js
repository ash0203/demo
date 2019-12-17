import React,{useState} from 'react';
import {View,StyleSheet,Button} from 'react-native';


const ColorScreen=()=>{
    const [color,Setcolor]=useState([]);
    console.log(color);
    return(
<View >
<Button
title='Button color' 
onPress={()=>{
Setcolor([...color,Randomrgb()])

}}
/>
<View style={{height:100, width:100 , backgroundColor:Randomrgb()}}></View>
</View>
);};

const Randomrgb=()=>{
const red=Math.floor(Math.random()*256);
const yellow=Math.floor(Math.random()*256);
const blue=Math.floor(Math.random()*256);
return `rgb(${red},${blue},${yellow})`;
};


const styles=StyleSheet.create({});
export default ColorScreen;