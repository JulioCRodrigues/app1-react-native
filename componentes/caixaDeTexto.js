import React, {useState} from 'react';
import {Text, SafeAreaView, TextInput, } from 'react-native';

export default function(){

const [nome, setNome]=useState("")

    return(
        <SafeAreaView>
            <Text>Digite seu nome:</Text>
            <TextInput
                style={{borderWidth:1, borderColor:'#000'}}
                value={nome}
                onChangeText={text => setNome(text)}
            />
            <Text>{nome}</Text>
            
        </SafeAreaView>
    )
}