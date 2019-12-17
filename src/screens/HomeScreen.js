import React from 'react';
import {Text,View,StyleSheet,Button} from 'react-native';

const HomeScreen= ({navigation})=>{
    
return(
    <View>
   <Button
   title="GO TO Component demo"
   onPress={()=>navigation.navigate('Component')} />
   <Button
   title="Go to list demo"
   onPress={()=>navigation.navigate("List")}
   />
   <Button
   title="GO to Image Demo"
   onPress={()=>navigation.navigate("Image")}/>

   <Button
   title="Go to Counter Demo"
   onPress={()=>navigation.navigate('Counter')}
   />

   <Button
   title="Go to Color Demo"
   onPress={()=>navigation.navigate('Color')}
   />

   <Button
   title="go to Square demo"
   onPress={()=>navigation.navigate('Square')}
   />

   <Button
   title="go to Text demo"
   onPress={()=>navigation.navigate('Text')}
   />

   <Button
   title="go to Box demo"
   onPress={()=>navigation.navigate('Box')}
   />
   
    </View>
);
};

const styles=StyleSheet.create({
text:{
    fontSize:30
}
});

export default HomeScreen;