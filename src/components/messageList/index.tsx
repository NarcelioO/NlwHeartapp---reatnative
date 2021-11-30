import React from "react";
import {ScrollView} from 'react-native';
import { style } from "./style";

import {Message} from '../message'
export function  MessageList(){
    const message = {
        id:'1',
        text:'teste',
        user:{
            nome:'narcelio',
            avatar_url:'https://github.com/NarcelioO.png'
        }
    }
    return(
        <ScrollView 
        style={style.container}
            contentContainerStyle={style.content}
            keyboardShouldPersistTaps="never"
        >
           <Message data={message}/>
           <Message data={message}/>
           <Message data={message}/>
           <Message data={message}/>
           <Message data={message}/>

        </ScrollView>
    )
}