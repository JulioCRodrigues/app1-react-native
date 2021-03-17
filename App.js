//import React, { Component } from 'react';
import React from 'react';
import {StyleSheet, View,Text, Image, Button, Alert} from 'react-native';
import Caixa from './componentes/caixas'
import Estilos from './estilos/estilos'

const dobro = n =>{
  return n * 2;
}

const soma = (n1, n2) =>{
  return n1 + n2;
}


const fexibir = (vp1) =>{
  if(vp1 == true){
    return <Text>Curso de React Native</Text>
  } else{
    return <Text>- - -</Text>
  }
}

export default function app1() {
  return(
    <View style={Estilos.conteiner}>
      <Text>{dobro(6)}</Text>
      <Text>{soma(5,5)}</Text>
        <Image
          style={estilos.logo}
          source={require('./assets/logocanal.png')}
        />
      <Text style={Estilos.textoTitulo}> Julio Rodrigues - Cursos</Text>
      {fexibir(false)}
    </View>
  );
};

const estilos = StyleSheet.create({
  logo:{
    width: 250,
    resizeMode: 'contain' // ajusta a imagem em relação ao width
  }
})