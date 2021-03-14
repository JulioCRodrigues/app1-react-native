import React from 'react';
import {StyleSheet,Text, View} from 'react-native';

export default function(){
    return(
        
        <View>
            <Text style={estilos.txt2}>Julio César Rodrigues</Text>
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