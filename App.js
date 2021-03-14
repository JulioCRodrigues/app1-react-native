//import React, { Component } from 'react';
import React from 'react';
import {StyleSheet, View,Text} from 'react-native';
import Nome from './componentes/nome'


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
    <View>
      <Nome/>
      <Nome/>
      <Nome/>
      <Text style={estilo.txt0}> Bounacera</Text>
    </View>
  );
};


const estilo = StyleSheet.create({

    txt0:{
      color: '#080',
      fontSize: 10,
    }
});