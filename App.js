//import React, { Component } from 'react';
import React, {useState} from 'react';
import {StyleSheet, View,SafeAreaView,Text,Button} from 'react-native';
import Estilos from './estilos/estilos';
import CarroF from './componentes/CarroF';


export default function app1() {



  return(
    <View style={Estilos.conteiner}>
   
        <SafeAreaView>
          <Text> Julio Rodrigues - Cursos</Text>
          <Text> Curso de React Native</Text>
          <CarroF nome="Fox"/>
          <CarroF nome="Gol"/>
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