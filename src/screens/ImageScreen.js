
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ImageDetail from '../components/ImageDetails'

const ImageScreen = () => {
    return (

    <View>
       <ImageDetail
         title="Forest"
         imageSource={require('../../assests/forest.jpg')}
         score='5'
         />
       <ImageDetail
         title="Beach"
        imageSource={require('../../assests/beach.jpg')}
        score='6'
       />
       <ImageDetail
         title="Mountain"
         imageSource={require('../../assests/mountain.jpg')} 
         score='7'
       />
       </View>
  );
};

const styles = StyleSheet.create({});

export default ImageScreen;