import React from 'react';
import {View,StyleSheet,Text,Image} from 'react-native';


const ImageDetails = ({imageSource,title,score})=>{   
return(
<View>
<Image source={imageSource}/>
<Text>{title}-image score is {score}</Text>
</View>
);
};

const styles=StyleSheet.create({});

export default ImageDetails;