import React, { Component } from 'react'
import { View, TouchableOpacity, Text, StyleSheet, Image } from 'react-native'

export default function Index(props)
{
    return(
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Image 
                style={{width: 150, height:150}}
                source={{uri: "https://image.freepik.com/vetores-gratis/logotipo-tradicional-americano-fastfood_97761-146.jpg" }}
            />

            <TouchableOpacity 
            style={style.button}
            onPress={() => props.clicarParaEnviar()}
            >
            <Text>Testar notificação</Text>
            </TouchableOpacity>

            <TouchableOpacity 
            style={style.button}
            onPress={() => props.clicarParaEnviar2()}
            >
            <Text>Testar notificação 2</Text>
            </TouchableOpacity>

            <TouchableOpacity 
            style={style.button}
            onPress={() => props.cancelar()}>
            <Text>Cancelar notificações</Text>
            </TouchableOpacity>
        </View>
    )

    
}

const style = StyleSheet.create({
    container: {
      flex: 1, 
      alignItems: 'center',
      justifyContent: 'center'
    },
    button: {
      alignItems: 'center',
      backgroundColor: '#DDDDDD',
      padding: 10,
      width: 200,
      marginTop: 10
    }
  });