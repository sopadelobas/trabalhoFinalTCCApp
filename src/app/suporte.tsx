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

export default function SuporteScreen() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [assunto, setAssunto] = useState('');

  const handleEnviar = () => {
    if (!email || !assunto) {
      Alert.alert('Atenção', 'Por favor, preencha todos os campos.');
      return;
    }

    Alert.alert('Sucesso', 'Sua mensagem foi enviada com sucesso!');
    setEmail('');
    setAssunto('');
    router.back();
  };

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={{ flex: 1 }}
      >
        <ScrollView contentContainerStyle={styles.scrollContent} bounces={false}>
          {/* Cabeçalho Azul */}
          <View style={styles.header}>
            <TouchableOpacity style={styles.backBtn} onPress={() => router.back()}>
              <Ionicons name="chevron-back" size={28} color="#FFF" />
            </TouchableOpacity>

            <Text style={styles.title}>ALGUM{'\n'}PROBLEMA?</Text>
            <Text style={styles.subtitle}>
              Nos mande uma mensagem descrevendo{'\n'}sua dificuldade e te responderemos!
            </Text>
          </View>

          {/* Card Branco com Formulário */}
          <View style={styles.whiteCard}>
            <TextInput
              style={styles.input}
              placeholder="Email"
              placeholderTextColor="#169BBA"
              keyboardType="email-address"
              autoCapitalize="none"
              value={email}
              onChangeText={setEmail}
            />

            <TextInput
              style={[styles.input, styles.textArea]}
              placeholder="Assunto..."
              placeholderTextColor="#169BBA"
              multiline
              numberOfLines={4}
              textAlignVertical="top"
              value={assunto}
              onChangeText={setAssunto}
            />

            <TouchableOpacity style={styles.submitBtn} onPress={handleEnviar}>
              <Text style={styles.submitBtnText}>ENVIAR</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#169BBA',
  },
  scrollContent: {
    flexGrow: 1,
  },
  header: {
    paddingHorizontal: 25,
    paddingTop: 30,
    paddingBottom: 40,
    alignItems: 'center',
  },
  backBtn: {
    alignSelf: 'flex-start',
    marginBottom: 20,
  },
  title: {
    color: '#FFF',
    fontSize: 26,
    fontWeight: 'bold',
    textAlign: 'center',
    letterSpacing: 1,
    lineHeight: 32,
    marginBottom: 15,
  },
  subtitle: {
    color: '#FFF',
    fontSize: 13,
    textAlign: 'center',
    lineHeight: 18,
    opacity: 0.9,
  },
  whiteCard: {
    flex: 1,
    backgroundColor: '#FFF',
    borderTopLeftRadius: 35,
    borderTopRightRadius: 35,
    paddingHorizontal: 30,
    paddingTop: 40,
    paddingBottom: 30,
    alignItems: 'center',
  },
  input: {
    width: '100%',
    borderWidth: 1.5,
    borderColor: '#169BBA',
    borderRadius: 15,
    paddingHorizontal: 18,
    paddingVertical: 14,
    fontSize: 15,
    color: '#169BBA',
    marginBottom: 20,
  },
  textArea: {
    height: 120,
    paddingTop: 14,
  },
  submitBtn: {
    backgroundColor: '#169BBA',
    borderRadius: 15,
    width: '100%',
    paddingVertical: 15,
    alignItems: 'center',
    marginTop: 20,
  },
  submitBtnText: {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 16,
    letterSpacing: 1,
  },
});