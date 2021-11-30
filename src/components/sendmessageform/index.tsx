import { TextInput, View } from "react-native";
import React,{useState} from "react";
import { style } from "./style";
import { COLORS } from "../../theme";
import { Button } from "../button";

export function SendMessageForm(){
    const [message, setMessage] = useState('')
    const [sendingMessage,setsendingMessage ]= useState(false)
    return(
        <View style={style.container}>
            <TextInput 
            keyboardAppearance="dark"
            placeholder="Qual sua espectativa para o evento?"
            placeholderTextColor={COLORS.GRAY_PRIMARY}
            style={style.input}
            multiline
            onChangeText={setMessage }
            value={message}
            maxLength={140}
            editable={!sendingMessage}
            

            
            />
            <Button
                title="ENVIAR MENSAGEM"
                backgroundColor={COLORS.PINK}
                color={COLORS.WHITE}

            />
        </View>
    )
}