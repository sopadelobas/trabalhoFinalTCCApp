import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import {
  Alert,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { useMenu } from '../components/context/MenuContext';

export default function CriarMetaScreen() {
  const router = useRouter();
  const { openMenu } = useMenu();

  const [itemNecessario, setItemNecessario] = useState('');
  const [quantidade, setQuantidade] = useState('');
  const [dataInicio, setDataInicio] = useState('');
  const [prazoFinal, setPrazoFinal] = useState('');

  const handleBack = () => {
    if (router.canGoBack()) {
      router.back();
    } else {
      router.push('/metas');
    }
  };

  const handleSalvarMeta = () => {
    if (!itemNecessario || !quantidade || !dataInicio || !prazoFinal) {
      Alert.alert('Atenção', 'Por favor, preencha todos os campos!');
      return;
    }

    Alert.alert('Sucesso', 'Nova meta cadastrada com sucesso!', [
      { text: 'OK', onPress: () => router.push('/metas') },
    ]);
  };

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={{ flex: 1 }}
      >
        {/* TopBar */}
        <View style={styles.topBar}>
          <TouchableOpacity style={styles.backBtn} onPress={handleBack}>
            <Ionicons name="chevron-back" size={24} color="#FFF" />
          </TouchableOpacity>

          <TouchableOpacity style={styles.profileCircle} onPress={openMenu}>
            <Ionicons name="person-circle-outline" size={24} color="#169BBA" />
          </TouchableOpacity>
        </View>

        <Text style={styles.headerTitle}>CRIAR NOVA META</Text>

        {/* Card Branco */}
        <View style={styles.whiteCard}>
          <ScrollView
            showsVerticalScrollIndicator={false}
            contentContainerStyle={styles.scrollContent}
          >
            {/* O que é necessário */}
            <View style={styles.inputGroup}>
              <Text style={styles.label}>O que é necessário?</Text>
              <TextInput
                style={styles.input}
                placeholder="Ex: Cestas básicas, Leite, Cobertores"
                placeholderTextColor="#999"
                value={itemNecessario}
                onChangeText={setItemNecessario}
              />
            </View>

            {/* Quantidade */}
            <View style={styles.inputGroup}>
              <Text style={styles.label}>Quantidade almejada</Text>
              <TextInput
                style={styles.input}
                placeholder="Ex: 50"
                placeholderTextColor="#999"
                keyboardType="numeric"
                value={quantidade}
                onChangeText={setQuantidade}
              />
            </View>

            {/* Data de Início com ícone de Calendário */}
            <View style={styles.inputGroup}>
              <Text style={styles.label}>Data de Início</Text>
              <View style={styles.dateInputContainer}>
                {Platform.OS === 'web' ? (
                  <input
                    type="date"
                    value={dataInicio}
                    onChange={(e) => setDataInicio(e.target.value)}
                    style={{
                      width: '100%',
                      border: 'none',
                      outline: 'none',
                      fontSize: '14px',
                      color: '#333',
                      backgroundColor: 'transparent',
                      fontFamily: 'inherit',
                    }}
                  />
                ) : (
                  <TextInput
                    style={styles.dateInputText}
                    placeholder="DD/MM/AAAA"
                    placeholderTextColor="#999"
                    value={dataInicio}
                    onChangeText={setDataInicio}
                  />
                )}
                <Ionicons name="calendar-outline" size={20} color="#169BBA" />
              </View>
            </View>

            {/* Prazo Final com ícone de Calendário */}
            <View style={styles.inputGroup}>
              <Text style={styles.label}>Prazo Final</Text>
              <View style={styles.dateInputContainer}>
                {Platform.OS === 'web' ? (
                  <input
                    type="date"
                    value={prazoFinal}
                    onChange={(e) => setPrazoFinal(e.target.value)}
                    style={{
                      width: '100%',
                      border: 'none',
                      outline: 'none',
                      fontSize: '14px',
                      color: '#333',
                      backgroundColor: 'transparent',
                      fontFamily: 'inherit',
                    }}
                  />
                ) : (
                  <TextInput
                    style={styles.dateInputText}
                    placeholder="DD/MM/AAAA"
                    placeholderTextColor="#999"
                    value={prazoFinal}
                    onChangeText={setPrazoFinal}
                  />
                )}
                <Ionicons name="calendar-outline" size={20} color="#169BBA" />
              </View>
            </View>

            {/* Botão de Cadastrar */}
            <TouchableOpacity style={styles.btnSalvar} onPress={handleSalvarMeta}>
              <Text style={styles.btnSalvarText}>CADASTRAR META</Text>
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
  container: {
    flex: 1,
    backgroundColor: '#169BBA',
    alignItems: 'stretch',
  },
  topBar: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 10,
  },
  backBtn: {
    padding: 5,
  },
  profileCircle: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: '#FFF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerTitle: {
    color: '#FFF',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 15,
  },
  whiteCard: {
    flex: 1,
    backgroundColor: '#FFF',
    borderTopLeftRadius: 35,
    borderTopRightRadius: 35,
    paddingHorizontal: 25,
    paddingTop: 30,
    justifyContent: 'space-between',
  },
  scrollContent: {
    paddingBottom: 20,
    gap: 16,
  },
  inputGroup: {
    width: '100%',
  },
  label: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#169BBA',
    marginBottom: 6,
  },
  input: {
    borderWidth: 1.5,
    borderColor: '#169BBA',
    borderRadius: 15,
    paddingHorizontal: 15,
    paddingVertical: 12,
    fontSize: 14,
    color: '#333',
  },
  dateInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderWidth: 1.5,
    borderColor: '#169BBA',
    borderRadius: 15,
    paddingHorizontal: 15,
    paddingVertical: 12,
  },
  dateInputText: {
    flex: 1,
    fontSize: 14,
    color: '#333',
  },
  btnSalvar: {
    backgroundColor: '#169BBA',
    borderRadius: 20,
    width: '100%',
    paddingVertical: 14,
    alignItems: 'center',
    marginTop: 10,
  },
  btnSalvarText: {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 14,
  },
  footer: {
    paddingVertical: 15,
    alignItems: 'center',
  },
  footerText: {
    color: '#888',
    fontSize: 11,
  },
});