
import React from "react";
import {TouchableOpacity,TouchableOpacityProps,Text,ColorValue,ActivityIndicator} from 'react-native';
import { style } from "./style";
import {AntDesign} from '@expo/vector-icons'

type Props = TouchableOpacityProps &{
    title:string,
    color:ColorValue,
    backgroundColor:ColorValue,
    icon?:React.ComponentProps<typeof AntDesign>['name'],
    isloading?:boolean 
   
}
export function  Button({title,color,backgroundColor,icon ,isloading=false,...rest}:Props){

    return(
        <TouchableOpacity 
        style={[style.button,{backgroundColor}]}
        activeOpacity={0.7}
        disabled={isloading}
        {...rest}
        >   
            {isloading ? <ActivityIndicator color={color}/>:
            <>
            <AntDesign name={icon} size={24} style={style.icon}/>
            <Text style={[style.title,{color}]}>
                {title}
            </Text>
            </>}
        </TouchableOpacity>
    )
}