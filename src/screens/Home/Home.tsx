import React from "react";
import {View, Text} from 'react-native'
import { Header } from "../../components/header";
import { MessageList } from "../../components/messageList";
import { SendMessageForm } from "../../components/sendmessageform";
import { SigninBox } from "../../components/signinbox";
import { style } from "./style";

export function Home(){
 return(
     <View style={style.container}>
         <Header/>  
         <MessageList/>
         <SigninBox/>
     </View>
 )
}