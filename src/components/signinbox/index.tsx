import React from "react";
import { View } from "react-native";
import { style } from "./style";
import {Button} from '../button'
import { COLORS } from "../../theme";
import {useAuth} from '../../hooks/Auth'
export function  SigninBox(){
   const {signIn} = useAuth()
    return(
      <View style={style.container}>
          <Button title="ENTRAR COM O GITHUB"
            color={COLORS.BLACK_PRIMARY}
            backgroundColor={COLORS.YELLOW}
            icon={'github'}
            onPress={signIn}
          />
      </View>
    )
}