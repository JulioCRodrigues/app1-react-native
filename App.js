//import React, { Component } from 'react';
import React, {useState} from 'react';
import {StyleSheet, View,SafeAreaView,Text,Button} from 'react-native';
import Estilos from './estilos/estilos';
import CT from './componentes/caixaDeTexto';


export default function app1() {



  return(
    <View style={Estilos.conteiner}>
   
        <SafeAreaView>
          <Text> Julio Rodrigues - Cursos</Text>
          <Text> Curso de React Native</Text>
          <CT/>
        </SafeAreaView>


    </View>
  );
};

const estilos = StyleSheet.create({
  logo:{
    width: 250,
    resizeMode: 'contain' // ajusta a imagem em relação ao width
  }, 

})