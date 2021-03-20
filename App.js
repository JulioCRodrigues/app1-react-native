import React, { Component } from 'react';
//import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Globais from './componentes/globais';

const Guias = createBottomTabNavigator()

export default class  App1 extends Component{

nome = Globais.nome;

  render(){
    return(
      <View>
        <Text>{this.nome}</Text>
      </View>

    )
  }

}

/*
function telaHome({ navigation }) {

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Tela Home</Text>
      <Text>Julio Rodrigues</Text>
      
    </View>
  )
}

function telaCanal({ navigation }) {

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Tela Canal</Text>
      <Text>Linkedin </Text>
    
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
        onPress={() => navigation.goBack()}
      />

    </View>
  )
}


export default function app1() {


  return (
    <NavigationContainer>
      <Guias.Navigator initialRouteName={telaCanal}>
        <Guias.Screen
          name="Home"
          component={telaHome}
          options={{ 
            title: "Tela inicial", 
            headerStyle: {
                backgroundColor: '#080'
            },

            headerTintColor: '#fff',

            headerRight: () => (
                <Button
                    title="Cursos"
                    color='#000'
                    onPress={() => alert('Botão Curso clicado')}
                  
                />
            ),
          
          }}
        />

        <Guias.Screen
          name="Canal"
          component={telaCanal}
          options={{ 
            title: "Tela canal",
            headerStyle:{
              backgroundColor:'#080'
            },

            headerTitleStyle:{
              fontWeight: 'bold'
            },

            headerTintColor: '#fff'
          
          }}
        />

        <Guias.Screen
          name="Cursos"
          component={telaCursos}
          options={{ title: "Cursos do canal" }}
        />

      </Guias.Navigator>
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