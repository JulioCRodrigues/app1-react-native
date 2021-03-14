import React from 'react';
import {StyleSheet,Text, View} from 'react-native';
import Estilos from '../estilos/estilos.js'

export default function(props){
    return(
        
        <View>
            <Text style={Estilos.textoCursos}>JC Cursos - Curso de {props.curso} </Text>
        </View>
    )
}
