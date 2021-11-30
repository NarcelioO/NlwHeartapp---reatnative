import React from "react";
import {View, Text,TouchableOpacity} from 'react-native';
import { style } from "./style";
import { UserPhoto } from "../UserPhoto";
import {MotiView} from 'moti'
export type MessageProps = {
    id:string,
    text:string,
    user:{
        nome:string,
        avatar_url:string
    }
}


type Props ={
    data:MessageProps
}
export function  Message({data}:Props){

    return(
        <MotiView 
            animate={{opacity:1,translateY:0}}
            style={style.container}
            from={{opacity:0,translateY:-50}}
            transition={{type:'timing',duration:700}}
            
            
        >
            <Text style={style.message}>
                {data.text}
            </Text>
            <View style={style.footer}>
            <UserPhoto 
            imageUri={data.user.avatar_url}
            sizes="SMALL"/>
            <Text style={style.username}>
               {data.user.nome}
            </Text>
            </View>
        </MotiView>
    )
}