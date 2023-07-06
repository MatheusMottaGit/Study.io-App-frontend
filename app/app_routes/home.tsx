import React, { useEffect, useState } from 'react'

import { api } from '../../src/lib/api'
import { useRouter } from 'expo-router'
import { Text, View, Image, TouchableOpacity } from 'react-native' 

import * as SecureStore from 'expo-secure-store'

interface User {
  sub: string
  name: string
  avatarUrl: string
}

export default function Home() {

  const router = useRouter()

  const [user, setUser] = useState<User>({} as User)

  useEffect(() => {
    async function getUser(){
      const token = await SecureStore.getItemAsync('token')

      if(!token){
        throw new Error('Unauthorized.')
      }

      const response = await api.get('/me', {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      setUser(response.data.user)
    }

    getUser()
  }, [])

  async function signOut(){
    await SecureStore.deleteItemAsync('token')

    router.push('/')
  }
  
  return (
    <View className='flex-1 items-center justify-center'>
      <Image 
        source={{ uri: user.avatarUrl }}
        className='h-44 w-44 rounded-full'
      />

      <Text>{user.name}</Text>

      <TouchableOpacity onPress={() => signOut()}>
        <Text className='underline'>sign-out</Text>
      </TouchableOpacity>
    </View>
  )
}