import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { useMenu } from '../components/context/MenuContext'; // Ajuste o caminho se necessário
import React from 'react';
import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function ControleDoacoesScreen() {
  const router = useRouter();
  const { openMenu } = useMenu();

  return (
    <SafeAreaView style={styles.container}>
  <View style={styles.topBar}>
    <TouchableOpacity onPress={() => router.back()} style={styles.backBtn}>
      <Ionicons name="chevron-back" size={24} color="#FFF" />
    </TouchableOpacity>

    <TouchableOpacity style={styles.profileCircle} onPress={openMenu}>
      <Ionicons name="person" size={16} color="#169BBA" />
    </TouchableOpacity>
  </View>

  <Text style={styles.title}>CONTROLE DE DOAÇÕES</Text>

      <View style={styles.whiteCard}>
        <TouchableOpacity style={styles.button} onPress={() => router.push('/historico')}>
          <Text style={styles.buttonText}>HISTÓRICO</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={() => router.push('/metas')}>
          <Text style={styles.buttonText}>META</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#169BBA', alignItems: 'center' },
  title: { color: '#FFF', fontSize: 20, fontWeight: 'bold', marginTop: 100, marginBottom: 80 },
  whiteCard: {
    flex: 1,
    backgroundColor: '#FFF',
    width: '100%',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    alignItems: 'center',
    paddingTop: 70,
    gap: 20,
  },
  topBar: {
  width: '100%',
  flexDirection: 'row',
  justifyContent: 'space-between', // Empurra a seta para a esquerda e o perfil para a direita
  alignItems: 'center',
  paddingHorizontal: 20,
  paddingTop: 20,
},
backBtn: {
  padding: 5,
},
profileCircle: {
  width: 32,
  height: 32,
  borderRadius: 16,
  backgroundColor: '#FFF',
  justifyContent: 'center',
  alignItems: 'center',
},
  button: {
    borderWidth: 1,
    borderColor: '#169BBA',
    borderRadius: 15,
    width: '75%',
    paddingVertical: 30,
    alignItems: 'center',
  },
  buttonText: { color: '#169BBA', fontWeight: 'bold', fontSize: 16 },
});