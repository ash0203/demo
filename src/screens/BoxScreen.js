import React from 'react';
import {Text , View , StyleSheet} from 'react-native'
import { getActiveChildNavigationOptions } from 'react-navigation';

const BoxScreen=()=>{
return(
<View style={style.viewParentStyle}>

<View style={style.ViewOneStyle}/>

<View style={style.ViewTwoStyle}/>
<View style={style.ViewThreeStyle}/>

</View>)

};

const style=StyleSheet.create({
viewParentStyle:{
borderWidth:3,
borderColor:'black',
flexDirection:'row',
height:100,
justifyContent:'space-between'
},
ViewOneStyle:{
height:50,
width:50,
backgroundColor:'red'

},
ViewTwoStyle:{
height:50,
width:50,
backgroundColor:'green',
alignSelf:'flex-end'
},
ViewThreeStyle:{
height:50,
width:50,
backgroundColor:'purple'

}


});

export default BoxScreen;