import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { useMenu } from '../components/context/MenuContext';

const opcoesUrgencia = [
  'Desastres naturais',
  'Violência doméstica',
  'Escassez de materiais',
  'Procedimentos hospitalares',
  'Situações de vulnerabilidade',
];

export default function NecessidadeUrgenciaScreen() {
  const router = useRouter();
  const { openMenu } = useMenu();
  const [selecionado, setSelecionado] = useState<string | null>(null);

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

      <Text style={styles.headerTitle}>Qual a urgência?</Text>

      <View style={styles.whiteCard}>
        <View style={styles.optionsContainer}>
          {opcoesUrgencia.map((opcao) => {
            const isSelected = selecionado === opcao;
            return (
              <TouchableOpacity
                key={opcao}
                style={[styles.optionBtn, isSelected && styles.optionBtnSelected]}
                onPress={() => setSelecionado(opcao)}
              >
                <Text style={[styles.optionText, isSelected && styles.optionTextSelected]}>
                  {opcao}
                </Text>
              </TouchableOpacity>
            );
          })}
        </View>

        <TouchableOpacity
          style={[styles.primaryBtn, !selecionado && styles.btnDisabled]}
          disabled={!selecionado}
          onPress={() => router.push('/necessidade-detalhes')}
        >
          <Text style={styles.primaryBtnText}>CONTINUAR</Text>
        </TouchableOpacity>
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
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 60,
  },
  whiteCard: {
    flex: 1,
    backgroundColor: '#FFF',
    borderTopLeftRadius: 35,
    borderTopRightRadius: 35,
    paddingHorizontal: 25,
    paddingTop: 30,
    paddingBottom: 20,
    justifyContent: 'space-between',
  },
  optionsContainer: { gap: 12 },
  optionBtn: {
    borderWidth: 1.5,
    borderColor: '#169BBA',
    borderRadius: 20,
    paddingVertical: 12,
    alignItems: 'center',
    marginVertical: 10,
  },
  optionBtnSelected: { backgroundColor: '#169BBA' },
  optionText: { color: '#169BBA', fontWeight: '600', fontSize: 14 },
  optionTextSelected: { color: '#FFF' },
  primaryBtn: {
    backgroundColor: '#169BBA',
    borderRadius: 15,
    paddingVertical: 14,
    alignItems: 'center',
    marginTop: 15,
    marginVertical: 75,
  },
  btnDisabled: { opacity: 0.5 },
  primaryBtnText: { color: '#FFF', fontWeight: 'bold', fontSize: 15, letterSpacing: 1 },
});