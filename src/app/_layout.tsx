import { Stack } from 'expo-router';
import { StatusBar } from 'react-native';

export default function Layout() {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#169BBA" />
      <Stack
        initialRouteName="index" // <- Força a aplicação a abrir no index.tsx
        screenOptions={{
          headerShown: false,
          animation: 'fade',
        }}
      >
        <Stack.Screen name="index" />
        <Stack.Screen name="home" />
        <Stack.Screen name="suporte" />
      </Stack>
    </>
  );
}
