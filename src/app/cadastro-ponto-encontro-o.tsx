// src/app/cadastro-ponto-encontro.tsx

import React, { useState } from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

import AccountMenu from '@/components/AccountMenu';

export default function CadastroPontoEncontroScreen() {
  const router = useRouter();
  const [menuVisible, setMenuVisible] = useState(false);

  const [organizacao, setOrganizacao] = useState('');
  const [endereco, setEndereco] = useState('');
  const [cep, setCep] = useState('');
  const [dataInicio, setDataInicio] = useState('');
  const [dataEncerramento, setDataEncerramento] = useState('');
  const [horario, setHorario] = useState('');

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.topBar}>
        <TouchableOpacity onPress={() => router.back()} activeOpacity={0.7} style={styles.backBtn}>
          <Feather name="chevron-left" size={28} color="#FFF" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.profileCircle} onPress={() => setMenuVisible(true)}>
          <View style={styles.innerProfileCircle} />
        </TouchableOpacity>
      </View>

      <Text style={styles.headerTitle}>Cadastre seu{'\n'}ponto de encontro</Text>

      <View style={styles.cardContainer}>
        <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
          <TextInput style={styles.input} placeholder="Organização" placeholderTextColor="#888" value={organizacao} onChangeText={setOrganizacao} />
          <TextInput style={styles.input} placeholder="Endereço" placeholderTextColor="#888" value={endereco} onChangeText={setEndereco} />
          <TextInput style={styles.input} placeholder="CEP" placeholderTextColor="#888" value={cep} onChangeText={setCep} keyboardType="numeric" />
          <TextInput style={styles.input} placeholder="Data de Início" placeholderTextColor="#888" value={dataInicio} onChangeText={setDataInicio} />
          <TextInput style={styles.input} placeholder="Data de Encerramento" placeholderTextColor="#888" value={dataEncerramento} onChangeText={setDataEncerramento} />
          <TextInput style={styles.input} placeholder="Horário de Funcionamento" placeholderTextColor="#888" value={horario} onChangeText={setHorario} />

          <TouchableOpacity 
            style={styles.submitBtn} 
            onPress={() => router.push('/necessidade-anexo')}
            activeOpacity={0.8}
          >
            <Text style={styles.submitBtnText}>Próximo</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>

      <AccountMenu visible={menuVisible} onClose={() => setMenuVisible(false)} userType="ong" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#169BBA' },
  topBar: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 20, paddingTop: 15, paddingBottom: 10 },
  backBtn: { padding: 4 },
  profileCircle: { padding: 2 },
  innerProfileCircle: { width: 28, height: 28, borderRadius: 14, backgroundColor: '#FFF' },
  headerTitle: { color: '#FFF', fontSize: 18, fontWeight: 'bold', textAlign: 'center', marginVertical: 15 },
  cardContainer: { flex: 1, backgroundColor: '#FFF', borderTopLeftRadius: 35, borderTopRightRadius: 35, paddingHorizontal: 25, paddingTop: 25 },
  scrollContent: { gap: 12, paddingBottom: 25 },
  input: { borderWidth: 1.5, borderColor: '#169BBA', borderRadius: 20, paddingHorizontal: 16, paddingVertical: 10, fontSize: 13, color: '#333' },
  submitBtn: { backgroundColor: '#169BBA', paddingVertical: 12, borderRadius: 15, alignItems: 'center', marginTop: 15 },
  submitBtnText: { color: '#FFF', fontWeight: 'bold', fontSize: 14 },
});