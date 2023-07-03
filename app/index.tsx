import { api } from "../src/lib/api";
import { useEffect } from "react";
import { useRouter } from "expo-router";
import { makeRedirectUri } from "expo-auth-session";
import { TouchableOpacity, View, Text } from "react-native";

import Logo from "../src/components/Logo";
import SignInForm from "../src/components/signIn/SignInForm";

import * as Google from 'expo-auth-session/providers/google'
import * as AuthSession from 'expo-auth-session'
import * as SecureStore from 'expo-secure-store'

export default function App(){

  const router = useRouter()

  const [, response, signInWithGoogle] = Google.useAuthRequest({
    clientId: '75442975614-g3gdhejorkvi38j663id9n90844a31ob.apps.googleusercontent.com',
    redirectUri: makeRedirectUri({ 
      scheme: 'study.io'
    }),
    scopes: ['profile', 'email']
  })

  async function handleGoogleToken(access_token: string){
    const tokenResponse = await api.post('/register', access_token)

    const { token } = tokenResponse.data

    api.defaults.headers.common['Authorization'] = `Bearer ${token}` 

    await SecureStore.setItemAsync('token', token)

    router.push('/home')
  }

  useEffect(() => {
    if(response?.type === 'success' && response.authentication?.accessToken){
      handleGoogleToken(response.authentication.accessToken)
    }
  }, [response])
  

  return (
    <View className="flex-1 items-center justify-center bg-green-200 p-4">
      <View className="w-2/3 h-2/3 flex flex-col items-center justify-center gap-y-8"> 
        <Logo />

        <SignInForm />

        <View className="flex flex-row gap-x-1.5">
          <Text className="text-white">Connect with</Text>

          <TouchableOpacity onPress={() => signInWithGoogle()}>
            <Text className="underline text-gray-600">Google</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}