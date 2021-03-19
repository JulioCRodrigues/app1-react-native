import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableHighlight} from 'react-native';

export default function(){

const [cont, setCont] = useState(0)

const contar = () =>{
    setCont(cont + 1);
}


    return(
        <View>
            <TouchableHighlight style={estilos.botao} onPress={contar} underlayColor="#008">
                <Text style={estilos.bola}>Bola</Text>
                
            </TouchableHighlight>
            <Text>{cont}</Text>
        </View>
    )
}

const estilos = StyleSheet.create({
    botao:{
        alignItems: 'center',
        backgroundColor: '#eee',
        padding: 10,
    
    }, 

    bola:{
        color:'#000'
    }
})