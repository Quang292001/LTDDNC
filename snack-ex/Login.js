import * as React from 'react';
import { Text, View, StyleSheet,TextInput,KeyboardAvoidingView } from 'react-native';
import Constants from 'expo-constants';

const LoginScreen=()=>{
  return (

<KeyboardAvoidingView style={styles.container} behavior="padding">
<View style={styles.inputContainer}>
<TextInput placeholder="Nhập họ tên" style={styles.input} />
</View>

<View style={styles.buttonContainer}>
<TouchableOpacity onPress={()=>{}}
style={styles.button}>
<Text style={styles.button}>Show</Text>
</TouchableOpacity>
</View>
</KeyboardAvoidingView>

  )
}

export default LoginScreen
const styles= StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',

  },
  inputContainer:{
    width:'80%'
  },
  input:{
    backgroundColor:'white',
    paddingHorizontal:15,
    paddingVertical:10,
    borderRadius:10,
    marginTop:5,
  },
  buttonContainer:{
    width:'60%',
    justifyContent:'center',
    alignItems:'center',
    marginTop:40,

  }

})



