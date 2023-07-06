import React from 'react'
import { Text, View } from 'react-native'

const Logo = () => {
  return (
    <View className='w-full'>
      <Text className='font-title text-white text-5xl p-2'>
        Study <Text className='text-black'>.io</Text>
      </Text>

      <Text className='text-center font-body text-xs text-gray-400'>
        Sign here and come to see our brand new schedule and goals app!
      </Text>
    </View>
  )
}

export default Logo