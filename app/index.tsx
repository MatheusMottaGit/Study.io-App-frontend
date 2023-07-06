import { api } from "../src/lib/api";
import { useEffect } from "react";
import { useRouter } from "expo-router";
import { TouchableOpacity, View, Text, Image } from "react-native";

import Logo from "../src/components/Logo";
import GoogleLogo from '../src/assets/google.svg'
import SignInForm from "../src/components/signIn/SignInForm";

import * as Google from 'expo-auth-session/providers/google'
import * as WebBrowser from 'expo-web-browser'
import * as SecureStore from 'expo-secure-store'
import * as AuthSession from 'expo-auth-session'

WebBrowser.maybeCompleteAuthSession()

export default function App(){

  const router = useRouter()

  const [, response, promptAsync] = Google.useAuthRequest(
    {
      clientId: '75442975614-g3gdhejorkvi38j663id9n90844a31ob.apps.googleusercontent.com',
      scopes: ['profile', 'email'],
      redirectUri: 'https://auth.expo.io/@matheus_motta_18/study.io-frontend'
    },
  )

  async function signIn(){
    try {
      await promptAsync()
    } catch (error) {
      console.log(error)
    }
  }

  async function signInWithGoogle(access_token: string){
    const response = await api.post('/register', { access_token })

    api.defaults.headers.common['Authorization'] = `Bearer ${access_token}`

    const { token } = response.data

    await SecureStore.setItemAsync('token', token)

    router.push('app_routes/home')
  }

  useEffect(() => {
    if(response?.type === "success" && response.authentication?.accessToken){
      signInWithGoogle(response.authentication.accessToken)
    }
  }, [response])


  return (
    <View className="flex-1 items-center justify-center bg-green-200 p-4">
      <View className="w-2/3 h-2/3 flex flex-col items-center justify-between gap-y-8"> 
        <Logo />
        
        <TouchableOpacity className="bg-white w-full items-center justify-center space-x-2 p-2 flex-row" onPress={() => signIn()}>
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