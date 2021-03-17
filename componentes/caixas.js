import React from 'react';
import {View} from 'react-native';


export default function(props){
    return(
        
        <View style={{width:'100%', height:300,flexDirection: 'column', justifyContent:'center', alignItems:'stretch'}}>
            <View style={{flexGrow: 1, backgroundColor:'#00F'}}></View>
            <View style={{flexGrow: 1, backgroundColor:'#00a'}}></View>
            <View style={{flexGrow: 1, backgroundColor:'#005'}}></View>
        </View>
    )
}
