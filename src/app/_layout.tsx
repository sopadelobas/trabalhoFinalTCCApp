import { Stack } from 'expo-router';
import { StatusBar } from 'react-native';
import { MenuProvider } from '../components/context/MenuContext';

export default function Layout() {
  return (
    <MenuProvider>
      <StatusBar barStyle="light-content" backgroundColor="#169BBA" />
      <Stack
        initialRouteName="index"
        screenOptions={{
          headerShown: false,
          animation: 'fade',
        }}
      >
        <Stack.Screen name="index" />
        <Stack.Screen name="home" />
        <Stack.Screen name="suporte" />
        <Stack.Screen name="meta-alcancada" />
        <Stack.Screen name="necessidade-urgencia" />
        <Stack.Screen name="necessidade-detalhes" />
        <Stack.Screen name="necessidade-up" />
        <Stack.Screen name="necessidade-pagamento" />
        <Stack.Screen name="necessidade-postada" />
        <Stack.Screen name="ong-editar-informacoes"/>
      </Stack>
    </MenuProvider>
  );
}
