import React, { Component } from 'react';
import { StyleSheet,View,Text,Button } from 'react-native';
import {addImage} from '../utils' 

export default class HomeScreen extends Component {
  render() {
    
    return (
     <View style={{flex:1,justifyContent:'center'}}>
         <Text> i am homescrren</Text>
         <Button title={'תלחצי '} onPress={()=>addImage()} >
             
         </Button>
     </View>
    );
  }
}

const styles = StyleSheet.create({
 
});