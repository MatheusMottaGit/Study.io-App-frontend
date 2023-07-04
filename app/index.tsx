import { styled } from "nativewind";
import { useEffect } from "react";
import { useRouter } from "expo-router";
import { TouchableOpacity, View, Text, Image } from "react-native";

import Logo from "../src/components/Logo";
import GoogleLogo from '../src/assets/google.svg'
import SignInForm from "../src/components/signIn/SignInForm";

import * as AuthSession from 'expo-auth-session'
import * as Google from 'expo-auth-session/providers/google'

export default function App(){

  const router = useRouter()

  // const [, response, signInWithGoogle] = Google.useAuthRequest({
  //   clientId: '75442975614-g3gdhejorkvi38j663id9n90844a31ob.apps.googleusercontent.com',
  //   redirectUri: 'https://auth.expo.io/@matheus_motta_18/study.io-frontend',
  //   scopes: ['profile', 'email']
  // })

  // async function handleGoogleToken(access_token: string){
    
  // }

  // useEffect(() => {
    
  // }, [])
  

  return (
    <View className="flex-1 items-center justify-center bg-green-200 p-4">
      <View className="w-2/3 h-2/3 flex flex-col items-center justify-center gap-y-8"> 
        <Logo />

        <SignInForm />

        <TouchableOpacity className="bg-white w-full items-center justify-center space-x-2 p-2 flex-row" onPress={() => {}}>
          <GoogleLogo 
            width={20} 
            height={20}
          />

          <Text className="text-gray-400">Sign with Google</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}