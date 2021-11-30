import React from "react";
import {View, Text,TouchableOpacity} from 'react-native';
import {style} from './style';
import LogoSvg from '../../assets/logo.svg'
import {UserPhoto} from '../UserPhoto'
export function  Header(){

    return(
        <View style={style.container}>
            <LogoSvg/>
            <View style={style.logoutButton}> 
                <TouchableOpacity>
                    <Text style={style.logoutext}>Sair</Text>
                </TouchableOpacity>
                <UserPhoto imageUri="https://github.com/NarcelioO.png"/>
            </View> 
            
            
        </View>
    )
}