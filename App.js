//import React, { Component } from 'react';
import React from 'react';
import {StyleSheet, View,Text, Image, Button, Alert} from 'react-native';
import Caixa from './componentes/caixas'
import Estilos from './estilos/estilos'
import ListaPlana from './componentes/flatlist'

export default function app1() {
  return(
    <View style={Estilos.conteiner}>
      <Text> Julio Rodrigues - Cursos</Text>
      <Text> Curso de React Native</Text>
      <ListaPlana/>
    </View>
  );
};

const estilos = StyleSheet.create({
  logo:{
    width: 250,
    resizeMode: 'contain' // ajusta a imagem em relação ao width
  }
})