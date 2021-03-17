//import React, { Component } from 'react';
import React, {useState} from 'react';
import {StyleSheet, View,Text,Button} from 'react-native';
import Caixa from './componentes/caixas'
import Estilos from './estilos/estilos'
import ListaPlana from './componentes/flatlist'

const imgBack1 = './assets/bg1.jpg'
const imgBack2 = './assets/bg2.jpg'

export default function app1() {

const [ligado, setLigado] = useState(true)



  return(
    <View style={Estilos.conteiner}>
      <Button
        title={ligado?"Desligar":"Ligar"}
        onPress={() =>setLigado(!ligado)}
      />
      {ligado?
        <View>
          <Text> Julio Rodrigues - Cursos</Text>
          <Text> Curso de React Native</Text>
        </View>
        : <Text>Falha ao carregar</Text>
      }
    </View>
  );
};

const estilos = StyleSheet.create({
  logo:{
    width: 250,
    resizeMode: 'contain' // ajusta a imagem em relação ao width
  }, 

})