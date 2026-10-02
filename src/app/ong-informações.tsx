import React from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { useMenu } from '../components/context/MenuContext';

export default function OngInformacoesScreen() {
  const router = useRouter();
  const { openMenu } = useMenu();

  // Dados mockados (no futuro virão da API/Backend)
  const ongData = {
    nome: 'Casa de Cuidados Nossa Senhora',
    cnpj: '00.000.000/0001-00',
    responsavel: 'Maria Silva',
    cep: '12345-678',
    alvara: 'ALV-2026-9988',
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.topBar}>
        <TouchableOpacity style={styles.backBtn} onPress={() => router.back()}>
          <Ionicons name="chevron-back" size={24} color="#FFF" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.profileCircle} onPress={openMenu}>
          <Ionicons name="person" size={16} color="#169BBA" />
        </TouchableOpacity>
      </View>

      <Text style={styles.headerTitle}>INFORMAÇÕES REGISTRADAS{'\n'}DA ONG</Text>

      <View style={styles.whiteCard}>
        <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
          <View style={styles.infoContainer}>
            <Text style={styles.label}>Nome escolhido para a ONG:</Text>
            <Text style={styles.value}>{ongData.nome}</Text>

            <Text style={styles.label}>CNPJ:</Text>
            <Text style={styles.value}>{ongData.cnpj}</Text>

            <Text style={styles.label}>Responsável/Fundador:</Text>
            <Text style={styles.value}>{ongData.responsavel}</Text>

            <Text style={styles.label}>CEP:</Text>
            <Text style={styles.value}>{ongData.cep}</Text>

            <Text style={styles.label}>Alvará de funcionamento:</Text>
            <Text style={styles.value}>{ongData.alvara}</Text>
          </View>

          <TouchableOpacity 
            style={styles.primaryBtn} 
            onPress={() => router.push('/ong-editar-informacoes')}
          >
            <Text style={styles.primaryBtnText}>Alterar informações</Text>
          </TouchableOpacity>
        </ScrollView>

        <View style={styles.footer}>
          <Text style={styles.footerText}>Todos os direitos reservados ©</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#169BBA' },
  topBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  backBtn: { padding: 5 },
  profileCircle: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#FFF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerTitle: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 25,
    lineHeight: 22,
  },
  whiteCard: {
    flex: 1,
    backgroundColor: '#FFF',
    borderTopLeftRadius: 35,
    borderTopRightRadius: 35,
    paddingHorizontal: 25,
    paddingTop: 25,
    justifyContent: 'space-between',
  },
  scrollContent: { alignItems: 'center' },
  infoContainer: {
    borderWidth: 1.5,
    borderColor: '#169BBA',
    borderRadius: 20,
    width: '100%',
    padding: 20,
    alignItems: 'center',
    marginBottom: 20,
  },
  label: { color: '#333', fontSize: 13, fontWeight: 'bold', textAlign: 'center', marginTop: 10 },
  value: { color: '#666', fontSize: 13, textAlign: 'center', marginBottom: 5 },
  primaryBtn: {
    backgroundColor: '#169BBA',
    borderRadius: 15,
    width: '100%',
    paddingVertical: 14,
    alignItems: 'center',
  },
  primaryBtnText: { color: '#FFF', fontWeight: 'bold', fontSize: 14 },
  footer: { paddingVertical: 15, alignItems: 'center' },
  footerText: { color: '#888', fontSize: 11 },
});