
import React from 'react';
import {  ImageBackground, StyleSheet, Text, View, Image, TextInput, Alert } from 'react-native';
import { Button } from 'react-native-elements';
import Menu from '../components/Menu'

const Login = (props) => {
  return (
    <ImageBackground source={require('../../assets/backgroundLogin.jpg')} style={styles.background}>
    <Menu navigation={props.navigation}/>
    <View style={styles.body}>
      <View style={styles.navbar}>
      <Image source={require('../../assets/logo2.png')} style={styles.logo}/>
      </View>
      <View style={styles.container}>
        <Text>Seja bem-vindo!</Text>
        <Text>Acesse o menu e confira nossos produtos</Text>
      </View>
    </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  body:{
    flex: 1,
    backgroundColor: 'rgba(255, 247, 0, 0.800)',
    color: '#fff',
  },
  background:{
    width: '100%',
    height: '100%',
    justifyContent: 'center',
  },
  logo:{
    marginTop: '150px',
    width: '250px',
    height: '100px'
  },

  navbar:{
    
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});


export default Login;