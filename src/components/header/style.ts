import { StyleSheet } from "react-native";
import { getStatusBarHeight } from "react-native-iphone-x-helper";
import {COLORS, FONTS} from '../../theme'
export const style =  StyleSheet.create({
    container:{
        
        width:'100%',
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
        paddingHorizontal:20
       
    },
    logoutButton:{
        flexDirection:"row",
        alignItems:"center",
        
    },
    logoutext:{
        fontSize:15,
        fontFamily:FONTS.REGULAR,
        color:COLORS.WHITE,
        marginRight:20
        
    }
})