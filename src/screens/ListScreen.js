
import React from 'react';
import {Text, StyleSheet,View ,FlatList}from 'react-native';
import { Item } from 'native-base';



const ListScreen= ()=>{
const friend=[
{name: 'friend1',age: '10' },
{name:'friend2' ,age:   '20'   },
{name:'friend3', age:   '30'   },
{name:'friend4',    age:'40'   },
{name:'friend5', age:'50' },
{name:'friend6', age:'60' },
{name:'friend7', age:'70'},

];


// return (
//     <FlatList 
//     data={friend}
//     renderItem={({item})=>{
//         return<Text>{item.name}</Text>
//     }}
// />
// )

return(
<FlatList
showsVerticalScrollIndicator={false}
keyExtractor={(friend)=> friend.name}
data={friend}
renderItem={({item})=>
{
return(
    <View>
    <Text style={styles.textStyle}>{item.name}-Age{item.age}</Text>
    </View>
)

}
}
/>
)


};

const styles=StyleSheet.create({
textStyle:{
    marginVertical:50
}

});


export default ListScreen;

