//import React, { Component } from 'react';
import React, {useState} from 'react';
import {StyleSheet, View,Text,Button} from 'react-native';
import Estilos from './estilos/estilos';
import CarroF from './componentes/CarroF';
import CarroC from './componentes/CarroC';

export default function app1() {



  return(
    <View style={Estilos.conteiner}>
   
        <View>
          <Text> Julio Rodrigues - Cursos</Text>
          <Text> Curso de React Native</Text>
          <CarroC nome="Pampa"/>
          <CarroF nome="Fox"/>
          <CarroF nome="Gol"/>
        </View>


    </View>
  );
};

const estilos = StyleSheet.create({
  logo:{
    width: 250,
    resizeMode: 'contain' // ajusta a imagem em relação ao width
  }, 

})