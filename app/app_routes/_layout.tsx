import { Stack } from "expo-router";
import { View } from "react-native";

export default function AppRoutesLayout(){
  return (
    <View className="flex-1">
      <View className="w-screen bg-green-200 rounded-b-xl h-44"></View>

      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name='home' />
      </Stack>
    </View>
  )
}