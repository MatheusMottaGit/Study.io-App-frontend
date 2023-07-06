import * as SecureStore from 'expo-secure-store'
import { api } from './api'

interface User {
  sub: string
  name: string
  avatarUrl: string
}

export async function getUser(): Promise<User>{
  const token = await SecureStore.getItemAsync('token')

  if(!token){
    throw new Error('Unauthorized.')
  }

  const userResponse = await api.get('/me', {
    headers: {
      Authorization: `Bearer ${token}`
    }
  })

  const { user } = userResponse.data

  const userData: User = user

  return userData
}