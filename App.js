//import React, { Component } from 'react';
import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Pilha = createStackNavigator()



function telaHome({ navigation }) {

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Tela Home</Text>
      <Text>Julio Rodrigues</Text>
      <Button
        title="Tela Canal"
        onPress={() => navigation.navigate('Canal')}
      />

<Button
        title="Cursos"
        onPress={() => navigation.navigate('Cursos')}
      />
    </View>
  )
}

function telaCanal({ navigation }) {

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Tela Canal</Text>
      <Text>Linkedin </Text>
      <Button
        title="Cursos"
        onPress={() => navigation.navigate('Cursos')}
      />
      <Button
        title="Voltar"
        onPress={() => navigation.goBack()}
      />
    </View>
  )
}

function telaCursos({ navigation }) {

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Tela Canal</Text>
      <Text>Linkedin </Text>
      <Button
        title="React Native"
        onPress={() => navigation.navigate('CursoReactNative', {aulas: 100, autor:'Julio'})}
      />

    </View>
  )
}

function telaCursoReactNative({ route,navigation }) {

  const {aulas} = route.params;
  const {autor} = route.params;

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Curso de React Native</Text>
      <Text>Aulas - {aulas} </Text>
      <Text>Autor - {autor} </Text>

      <Button
        title="Home"
        onPress={() => navigation.navigate('Home')}
      />

<Button
        title="Voltar para cursos"
        onPress={() => navigation.goBack()}
      />

    </View>
  )
}



export default function app1() {


  return (
    <NavigationContainer>
      <Pilha.Navigator initialRouteName={telaCanal}>
        <Pilha.Screen
          name="Home"
          component={telaHome}
          options={{ title: "Tela inicial" }}
        />

        <Pilha.Screen
          name="Canal"
          component={telaCanal}
          options={{ title: "Tela canal" }}
        />

        <Pilha.Screen
          name="Cursos"
          component={telaCursos}
          options={{ title: "Cursos do canal" }}
        />

        <Pilha.Screen
          name="CursoReactNative"
          component={telaCursoReactNative}
          options={{ title: "Cursos de React Native" }}
        />
      </Pilha.Navigator>
    </NavigationContainer>
  );
};



/*

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





const estilos = StyleSheet.create({
  logo:{
    width: 250,
    resizeMode: 'contain' // ajusta a imagem em relação ao width
  },

  texto1:{
    fontWeight:'bold'
  }

})

*/