import React ,{useReducer} from 'react';
import {Text,StyleSheet,View,Button }from 'react-native';


const reducer=(state,action)=>{
    //state==={ count :0}
    //action={type : increment // decrement payload : 1 }

    switch(action.type){
    case 'increment' :
        return {...state,count : state.count+action.payload}
    case 'decrement' :
        return{...state,count : state.count-action.payload}
    default :
    return state;

    }

}

const CountScreen=()=>{
    const[state,dispach]=useReducer(reducer,{count : 0});
 return(
    <View>
    <Button title="Increase" onPress={()=>{
        dispach({type:'increment',payload:1})
       
    }}/>
    <Button title="Decrease"
    onPress={()=>{dispach({type:'decrement', payload:1})    
    }}/>   
    <Text>
    current count {state.count}
    </Text>
    </View>
 );
};
const styles=StyleSheet.create({})

export default CountScreen;
