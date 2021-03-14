import React from 'react';
import {StyleSheet,Text, View} from 'react-native';

export default function(props){
    return(
        
        <View>
            <Text style={estilos.txt2}>JC Cursos - Curso de {props.curso} </Text>
        </View>
    )
}

const estilos = StyleSheet.create({
    txt1:{
        color: '#F00',
        fontSize: 20,
    },

    txt2:{
        color: '#00F',
        fontSize: 15,
    }
});