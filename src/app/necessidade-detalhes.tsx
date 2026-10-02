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
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { useMenu } from '../components/context/MenuContext';

const necessidadesLista = [
  'Dinheiro',
  'Doações de alimentos perecíveis',
  'Doações de remédios',
  'Doações de roupas',
];

export default function NecessidadeDetalhesScreen() {
  const router = useRouter();
  const { openMenu } = useMenu();
  const [selecionados, setSelecionados] = useState<string[]>([]);
  const [infoAdicional, setInfoAdicional] = useState('');

  const toggleSelecao = (item: string) => {
    if (selecionados.includes(item)) {
      setSelecionados(selecionados.filter((i) => i !== item));
    } else {
      setSelecionados([...selecionados, item]);
    }
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

        <View style={styles.whiteCard}>
          <ScrollView showsVerticalScrollIndicator={false}>
            <Text style={styles.sectionTitle}>A instituição precisa de:</Text>

            <View style={styles.listContainer}>
              {necessidadesLista.map((item) => {
                const active = selecionados.includes(item);
                return (
                  <TouchableOpacity
                    key={item}
                    style={styles.checkboxRow}
                    onPress={() => toggleSelecao(item)}
                  >
                    <View style={[styles.square, active && styles.squareActive]} />
                    <Text style={styles.itemText}>{item}</Text>
                  </TouchableOpacity>
                );
              })}
            </View>

            <Text style={styles.sectionTitle}>Informações adicionais</Text>
            <View style={styles.textInputBox}>
              <TextInput
                style={styles.textInput}
                placeholder="Ex: Nome de um remédio específico, alimentos que estejam em falta etc"
                placeholderTextColor="#A0A0A0"
                multiline
                numberOfLines={4}
                textAlignVertical="top"
                value={infoAdicional}
                onChangeText={setInfoAdicional}
              />
            </View>

            <TouchableOpacity
              style={styles.primaryBtn}
              onPress={() => router.push('/necessidade-up')}
            >
              <Text style={styles.primaryBtnText}>CONTINUAR</Text>
            </TouchableOpacity>
          </ScrollView>
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
    paddingTop: 40,
    paddingBottom: 15,
    marginVertical: 30,
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
  whiteCard: {
    flex: 1,
    backgroundColor: '#FFF',
    borderTopLeftRadius: 35,
    borderTopRightRadius: 35,
    paddingHorizontal: 25,
    paddingTop: 30,
    marginVertical: 30,
  },
  sectionTitle: {
    color: '#333',
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 15,
    marginTop: 30,
  },
  listContainer: { marginBottom: 20, gap: 12 },
  checkboxRow: { flexDirection: 'row', alignItems: 'center' },
  square: {
    width: 14,
    height: 14,
    backgroundColor: '#169BBA',
    marginRight: 10,
  },
  squareActive: { backgroundColor: '#FFC107' },
  itemText: { color: '#333', fontSize: 14, fontWeight: '600' },
  textInputBox: {
    backgroundColor: '#FFF8D6',
    borderRadius: 15,
    padding: 12,
    marginBottom: 25,
  },
  textInput: {
    fontSize: 14,
    color: '#333',
    minHeight: 90,
  },
  primaryBtn: {
    backgroundColor: '#169BBA',
    borderRadius: 15,
    paddingVertical: 14,
    alignItems: 'center',
    marginBottom: 20,
    marginVertical: 50,
  },
  primaryBtnText: { color: '#FFF', fontWeight: 'bold', fontSize: 15, letterSpacing: 1 },
});