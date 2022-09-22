import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Image, ImageBackground, LogBox,TextInput, Button } from 'react-native';
import React,{useState} from 'react';
import image from './assets/background.png'

const someText = "GROW\nYOUR BUSINESS"
const someText2 = "We will help you to grow your business using \nonline server"
const txt="how we work?"




export default function App() {
  return (
    <View style={styles.container}>
<ImageBackground source={image} resizeMode="cover" style={styles.image}>
  <View style={styles.overlayContainer}>
    <View style={styles.top}><Image source={require('./assets/blackcricle.png')} style={styles.logo} /></View>
    <View style={styles.title}><Text style={styles.text}>{someText}</Text></View>
    <View ><Text style={styles.more}>{someText2}</Text></View>
    <View style={styles.bottom}>
      <Image source={require('./assets/login.png')} style={styles.Button} />
      <Image source={require('./assets/login.png')} style={styles.ButtonRight} />
      <View >
      <Text style={styles.textinbtn}>LOGIN</Text>
      <Text style={styles.textinbtnright}>SIGN UP</Text>
      </View>
      <Text style={styles.textbot}>HOW WE WORK?</Text>
      
      

    </View>

    <View style={styles.bottom}></View>
   
  </View>

  {/* <View style={styles.down}> <Text style={styles.text}>{txt}</Text></View> */}
 
</ImageBackground>

    </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: "center", // ignore this - we'll come back to it
    // justifyContent: "center", // ignore this - we'll come back to it
    // flexDirection: "row",
    // textAlign: 'center'
  },
  image:{
   flex:1,
   justifyContent:'center',
   resizeMode:'contain',
   width:null,
   heightL:null
  },
  // overlayContainer:{
  //   flex:1,
  //   backgroundColor:'rgba(47,163,218, .4)'
  // },
  top:{
    height:'50%',
    alignItems:'center',
    justifyContent:'center',
    bottom:60
  },
  logo:{
    flex:1,
    justifyContent:'center',
    resizeMode:'contain',
    width:200,
    heightL:200,
  },
  text:{
    fontFamily:'Roboto',
    width:700,
    fontSize: 25,
    alignItems:'center',
    lineHeight:25,
    fontStyle: 'normal',
    lineHeight:29,
    textAlign:'center',
    paddingRight:275,
    fontWeight:'bold',
    top:-30,
    paddingBottom:30
  },
  more:{
      fontFamily:'Roboto',
      width:700,
      fontSize: 17,
      alignItems:'center',
      lineHeight:25,
      fontStyle: 'normal',
      lineHeight:29,
      textAlign:'center',
      paddingRight:275,
      fontWeight:'bold',
      top: 1
    },
    Button:{
      top:50,
      left:35,
       
    },
    ButtonRight:{
      left:250,
      top:5
      
     
    },
    bottom:{
      width:400,
      height:20,
      

    },
    down:{
      fontFamily:'Roboto',
      fontSize:'normal',
      fontWeight:'bold',
      fontSize:18,
      lineHeight:21,
      textAlign:'center'
    },
    textinbtn:{
      bottom:27,
      left:80,
      fontFamily:'Roboto',
      
      fontWeight:'bold',

    },
    textinbtnright:{
      fontFamily:'Roboto',
      fontWeight:'bold',
      bottom:45,
      left:285
    },
    textbot:{
      fontFamily:'Roboto',
      fontWeight:'bold',
      fontSize:20,
      paddingLeft:125
      
    }
   
});
