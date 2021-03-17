//import React, { Component } from 'react';
import React from 'react';
import {StyleSheet, View,Text, ImageBackground} from 'react-native';
import Caixa from './componentes/caixas'
import Estilos from './estilos/estilos'
import ListaPlana from './componentes/flatlist'

const imgBack1 = './assets/bg1.jpg'
const imgBack2 = './assets/bg2.jpg'

export default function app1() {
  return(
    <View style={Estilos.conteiner}>
     <ImageBackground
     
     source={require(imgBack1)}
     style={() => {}}
     
     >
          <Text> Julio Rodrigues - Cursos</Text>
          <Text> Curso de React Native</Text>
          <ListaPlana/>
     </ImageBackground>
    </View>
  );
};

const estilos = StyleSheet.create({
  logo:{
    width: 250,
    resizeMode: 'contain' // ajusta a imagem em relação ao width
  }, 

})