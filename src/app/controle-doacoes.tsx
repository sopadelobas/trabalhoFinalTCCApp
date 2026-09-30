import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React from 'react';
import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function ControleDoacoesScreen() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity style={styles.backBtn} onPress={() => router.back()}>
        <Ionicons name="chevron-back" size={28} color="#FFF" />
      </TouchableOpacity>

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
  backBtn: { position: 'absolute', top: 40, left: 20 },
  title: { color: '#FFF', fontSize: 20, fontWeight: 'bold', marginTop: 100, marginBottom: 40 },
  whiteCard: {
    flex: 1,
    backgroundColor: '#FFF',
    width: '100%',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    alignItems: 'center',
    paddingTop: 50,
    gap: 20,
  },
  button: {
    borderWidth: 1,
    borderColor: '#169BBA',
    borderRadius: 15,
    width: '75%',
    paddingVertical: 15,
    alignItems: 'center',
  },
  buttonText: { color: '#169BBA', fontWeight: 'bold', fontSize: 16 },
});