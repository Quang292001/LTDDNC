import * as React from 'react';
import { Text, View, StyleSheet,TextInput,KeyboardAvoidingView } from 'react-native';
import Constants from 'expo-constants';
import {StatusBar} from 'expo-status-bar'



export default class Login extends React.Component {
  
  render() {
    return (
    <View style={{with: "100%", height: "100%", justifyContent:"center",alignSelf:"center",alignContent:"center",
    alignItems:"center" }}>
    <TextInput placeholder={"Nhập tên"}
    onChangeText={(value)=>this.setState({})}
    style={{height:42,width:"80%",borderBottomWidth:1}}/>
   
    );
  }
}



