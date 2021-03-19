import React,{useState} from 'react'
import {Text, View, Button, Modal, StyleSheet} from 'react-native'

export default function(){

    const [visivel, setVisivel] = useState(true)

    const fechar = () => {
        setVisivel(false)
    }

    const abrir = () => {
        setVisivel(true)
    }


    return(
        <View>
            <Modal
                animationType="fade"
                transparent={true}
                visible={visivel}
                style={{}}
            >
                <View style={estilos.modal}>
                    <Text style={estilos.textoModal}>Julieta Maria</Text>
                    <Text style={estilos.textoModal}>Curso de Modal</Text>
                    <Button
                        title="Fechar"
                        onPress={fechar}
                />
                </View>
            </Modal>
            <Button
                    title="Mostrar"
                    onPress={abrir}
                />
        </View>
    )
}

const estilos = StyleSheet.create({
    modal:{
        backgroundColor:'#000',
        margin: 20,
        borderRadius: 20,
        padding: 20,
        elevation: 10
    },

    textoModal:{
        color:'#fff',
        textAlign:'center'
    }
})