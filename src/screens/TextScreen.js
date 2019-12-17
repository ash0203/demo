import React,{useState} from 'react';
import {Text,StyleSheet,View,TextInput} from 'react-native';

const TextScreen=()=>
{
const [password,setPassword]=useState('');
return(
<View>
<Text>Password</Text>
<TextInput style={style.input}
autoCapitalize="none"
autoCorrect={false}
value={password}
onChangeText={newName=>setPassword(newName)}
/>
{password.length<4 ? <Text>password must be 4 character long</Text>:null}
</View>
);

};

const style=StyleSheet.create({
    input:{
        margin:15,
        borderColor:'black',
        borderWidth:1


    }
});

export default TextScreen;