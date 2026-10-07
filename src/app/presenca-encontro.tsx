import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { useMenu } from '../components/context/MenuContext';

export default function PresencaEncontroScreen() {
  const router = useRouter();
  const { openMenu } = useMenu();
  const [nome, setNome] = useState('');
  const [telefone, setTelefone] = useState('');

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.topBar}>
        <TouchableOpacity style={styles.backBtn} onPress={() => router.back()}>
          <Ionicons name="chevron-back" size={24} color="#FFF" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.profileCircle} onPress={openMenu}>
          <Ionicons name="person-circle-outline" size={24} color="#169BBA" />
        </TouchableOpacity>
      </View>

      <Text style={styles.headerTitle}>Faça sua inscrição</Text>

      <View style={styles.whiteCard}>
        <View style={styles.formContainer}>
          <Ionicons name="person-outline" size={32} color="#169BBA" style={{ marginBottom: 20 }} />

          <TextInput
            style={styles.input}
            placeholder="Nome completo"
            placeholderTextColor="#999"
            value={nome}
            onChangeText={setNome}
          />

          <TextInput
            style={styles.input}
            placeholder="Telefone"
            placeholderTextColor="#999"
            keyboardType="phone-pad"
            value={telefone}
            onChangeText={setTelefone}
          />

          <TouchableOpacity style={styles.btnConfirmar} onPress={() => router.push('/confirmada-v')}>
            <Text style={styles.btnText}>CONFIRMAR PRESENÇA</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.footer}>
          <Text style={styles.footerText}>Todos os direitos reservados ©</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#169BBA' },
  topBar: { flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 20, paddingTop: 15 },
  backBtn: { padding: 5 },
  profileCircle: { width: 36, height: 36, borderRadius: 18, backgroundColor: '#FFF', justifyContent: 'center', alignItems: 'center' },
  headerTitle: { color: '#FFF', fontSize: 20, fontWeight: 'bold', textAlign: 'center', marginVertical: 25 },
  whiteCard: { flex: 1, backgroundColor: '#FFF', borderTopLeftRadius: 35, borderTopRightRadius: 35, paddingHorizontal: 25, paddingTop: 40, justifyContent: 'space-between' },
  formContainer: { alignItems: 'center', gap: 15, width: '100%' },
  input: { borderWidth: 1.5, borderColor: '#169BBA', borderRadius: 20, paddingHorizontal: 20, paddingVertical: 12, width: '100%', fontSize: 13, color: '#333' },
  btnConfirmar: { backgroundColor: '#169BBA', borderRadius: 20, paddingVertical: 12, paddingHorizontal: 25, marginTop: 15 },
  btnText: { color: '#FFF', fontWeight: 'bold', fontSize: 13 },
  footer: { paddingVertical: 10, alignItems: 'center' },
  footerText: { color: '#888', fontSize: 11 },
});