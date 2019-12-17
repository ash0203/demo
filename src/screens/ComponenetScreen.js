import React from 'react';
import {Text, StyleSheet,View }from 'react-native';

const ComponentScreen =()=>{
    const ANONYMOUS='abc';
return <View>
<Text style={styles.textStyle}>Getting started with react-native</Text>


<Text style={styles.textStyle2}> my name is {ANONYMOUS}</Text>


</View>
};

const styles=StyleSheet.create({
textStyle:{
    fontSize:45
},
textStyle2:{
    fontSize:20



}
});

export default ComponentScreen;