import React,{createContext,ReactNode,useContext, useState} from "react";
import * as AuthSessions from 'expo-auth-session'

const CLIENTE_ID ='96de0e940554f48b9661'
const SCOPE = 'read:user'

type User = {
    id:string,
    avatar_url:string,
    name:string,
    login:string
}

type AuthcContextData = {
    user:User | null;
    isSigningIng:boolean
    signIn:()=>Promise<void>
    signOut:()=>Promise<void>
}

type AuthProvideProps={
    children:React.ReactNode 
}

type AuthResponse = {
    token:string,
    user:User
}

type AutorizationResponse = {
    params:{
        code?:string
    }
}

export const AuthContext = createContext({} as AuthcContextData)







function AuthProvider({children}:AuthProvideProps){
    const  [isSigningIng,setisSigningIng] =useState(false)
    const [user, setuser] = useState<User | null>(null)
    
    async function signIn() {
        setisSigningIng(true);
        const authUrl = `https://github.com/login/oauth/authorize?client_id=${CLIENTE_ID}&scope=${SCOPE}`;
        const {params} = await AuthSessions.startAsync({authUrl}) as AutorizationResponse
        
        if(params && params.code){
           
        }

        setisSigningIng(false)

    }
    async function signOut() {
        
    } 
    return(
        <AuthContext.Provider value={{
            signIn,
            signOut,
            user,
            isSigningIng
        }}>
        {children}
        </AuthContext.Provider>

    )
        
}


function useAuth(){
    const context = useContext(AuthContext)
    
    return context
}

export{AuthProvider,useAuth}