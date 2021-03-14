//import React, { Component } from 'react';
import React from 'react';
import {StyleSheet, View,Text} from 'react-native';
import C1 from './componentes/comp1'


/*
export default class App1 extends Component{

  render(){
    return(
      <View>
          <Text>Olá mundo das Natashas</Text>
      </View>
    );
  }

} 

*/
export default function app1() {
  return(
    <View style={estilo.conteiner}>
      <C1 curso="React Native"/>
      <C1 curso="Java"/>
      <C1 curso="Python"/>
      <C1 curso="Dart"/>
      <Text style={estilo.txt0}> Bounacera</Text>
    </View>
  );
};


const estilo = StyleSheet.create({

    conteiner:{
      backgroundColor: '#ddd',
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center'
    },

    txt0:{
      color: '#080',
      fontSize: 10,
    }
});