import React, { useState } from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Alert
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { useMenu } from '../components/context/MenuContext';

export default function OngEditarInformacoesScreen() {
  const router = useRouter();
  const { openMenu } = useMenu();

  // Estados dos campos formulário
  const [nome, setNome] = useState('Casa de Cuidados Nossa Senhora');
  const [cnpj, setCnpj] = useState('00.000.000/0001-00');
  const [responsavel, setResponsavel] = useState('Maria Silva');
  const [cep, setCep] = useState('12345-678');
  const [alvara, setAlvara] = useState('ALV-2026-9988');

  const handleSalvar = () => {
    // Aqui no futuro será feita a requisição PUT/PATCH para o Backend
    Alert.alert('Sucesso', 'Informações atualizadas com sucesso!', [
      { text: 'OK', onPress: () => router.back() }
    ]);
  };

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={{ flex: 1 }}
      >
        <View style={styles.topBar}>
          <TouchableOpacity style={styles.backBtn} onPress={() => router.back()}>
            <Ionicons name="chevron-back" size={24} color="#FFF" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.profileCircle} onPress={openMenu}>
            <Ionicons name="person" size={16} color="#169BBA" />
          </TouchableOpacity>
        </View>

        <Text style={styles.headerTitle}>EDITAR INFORMAÇÕES{'\n'}DA ONG</Text>

        <View style={styles.whiteCard}>
          <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
            <View style={styles.formGroup}>
              <Text style={styles.label}>Nome da ONG</Text>
              <TextInput
                style={styles.input}
                value={nome}
                onChangeText={setNome}
                placeholder="Nome da instituição"
              />
            </View>

            <View style={styles.formGroup}>
              <Text style={styles.label}>CNPJ</Text>
              <TextInput
                style={styles.input}
                value={cnpj}
                onChangeText={setCnpj}
                keyboardType="numeric"
                placeholder="00.000.000/0000-00"
              />
            </View>

            <View style={styles.formGroup}>
              <Text style={styles.label}>Responsável/Fundador</Text>
              <TextInput
                style={styles.input}
                value={responsavel}
                onChangeText={setResponsavel}
                placeholder="Nome do responsável"
              />
            </View>

            <View style={styles.formGroup}>
              <Text style={styles.label}>CEP</Text>
              <TextInput
                style={styles.input}
                value={cep}
                onChangeText={setCep}
                keyboardType="numeric"
                placeholder="00000-000"
              />
            </View>

            <View style={styles.formGroup}>
              <Text style={styles.label}>Alvará de funcionamento</Text>
              <TextInput
                style={styles.input}
                value={alvara}
                onChangeText={setAlvara}
                placeholder="Número do alvará"
              />
            </View>

            <TouchableOpacity style={styles.primaryBtn} onPress={handleSalvar}>
              <Text style={styles.primaryBtnText}>SALVAR ALTERAÇÕES</Text>
            </TouchableOpacity>
          </ScrollView>

          <View style={styles.footer}>
            <Text style={styles.footerText}>Todos os direitos reservados ©</Text>
          </View>
        </View>
      </KeyboardAvoidingView>
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
    marginVertical: 20,
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
  scrollContent: { paddingBottom: 20 },
  formGroup: { marginBottom: 15 },
  label: { color: '#169BBA', fontSize: 13, fontWeight: 'bold', marginBottom: 6 },
  input: {
    borderWidth: 1.5,
    borderColor: '#169BBA',
    borderRadius: 15,
    paddingHorizontal: 15,
    paddingVertical: 10,
    fontSize: 13,
    color: '#333',
  },
  primaryBtn: {
    backgroundColor: '#169BBA',
    borderRadius: 15,
    paddingVertical: 14,
    alignItems: 'center',
    marginTop: 10,
  },
  primaryBtnText: { color: '#FFF', fontWeight: 'bold', fontSize: 14, letterSpacing: 0.5 },
  footer: { paddingVertical: 15, alignItems: 'center' },
  footerText: { color: '#888', fontSize: 11 },
});