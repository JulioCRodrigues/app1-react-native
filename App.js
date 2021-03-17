//import React, { Component } from 'react';
import React from 'react';
import {StyleSheet, View,Text, Image, Button, Alert} from 'react-native';
import Caixa from './componentes/caixas'
import Estilos from './estilos/estilos'




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
      <Button
        title="Mostrar mensagem"
        onPress={() => Alert.alert('Mensagem:','Curso de React Native')}
              />
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