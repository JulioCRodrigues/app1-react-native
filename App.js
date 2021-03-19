//import React, { Component } from 'react';
import React, {useState} from 'react';
import {StyleSheet, View,SafeAreaView,Text, StatusBar, Button} from 'react-native';
import Estilos from './estilos/estilos';



export default function app1() {

  const [cor, setCor] = useState('black')


  return(
    <View style={Estilos.conteiner}>
        <StatusBar
          backgroundColor={cor} barStyle='dark-content' o
        />
        <SafeAreaView>
          <Text style={estilos.texto1}> Julio Rodrigues - Cursos</Text>
          <Text style={estilos.texto1}> Curso de React Native</Text>
          <Button
            title="Vermelho"
            onPress={() => {
              setCor('red')
            }}
          />
          <Button
            title="Azul"
            onPress={() => {
              setCor('blue')
            }}
          />
          <Button
            title="Verde"
            onPress={() => {
              setCor('green')
            }}
          />
          
        </SafeAreaView>


    </View>
  );
};

const estilos = StyleSheet.create({
  logo:{
    width: 250,
    resizeMode: 'contain' // ajusta a imagem em relação ao width
  }, 

  texto1:{
    fontWeight:'bold'
  }

})