//import React, { Component } from 'react';
import React from 'react';
import {StyleSheet, View,Text} from 'react-native';
import Caixa from './componentes/caixas'
import Estilos from './estilos/estilos'


export default function app1() {
  return(
    <View style={Estilos.conteiner}>
      <Caixa/>
      <Text style={Estilos.textoTitulo}> Julio Rodrigues - Cursos</Text>
    </View>
  );
};