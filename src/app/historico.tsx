import React from 'react';
import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { useMenu } from '../components/context/MenuContext'; // Ajuste o caminho do MenuContext se necessário

export default function HistoricoScreen() {
  const router = useRouter();
  const { openMenu } = useMenu();

  // Dados de exemplo para o histórico de doações
  const doacoes = [
    { id: '1', usuario: 'João Silva', tipo: 'Doação de R$ 50,00', data: '12/10/2026', hora: '14:30' },
    { id: '2', usuario: 'Maria Oliveira', tipo: 'Alimentos não perecíveis', data: '11/10/2026', hora: '10:15' },
    { id: '3', usuario: 'Carlos Eduardo', tipo: 'Roupas e Cobertores', data: '10/10/2026', hora: '16:45' },
  ];

  return (
    <SafeAreaView style={styles.container}>
      {/* TopBar com botão voltar e ícone de perfil na direita */}
      <View style={styles.topBar}>
        <TouchableOpacity onPress={() => router.back()} style={styles.backBtn}>
          <Ionicons name="chevron-back" size={24} color="#FFF" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.profileCircle} onPress={openMenu}>
          <Ionicons name="person" size={16} color="#169BBA" />
        </TouchableOpacity>
      </View>

      <View style={styles.whiteCard}>
        <Text style={styles.title}>HISTÓRICO</Text>

        <FlatList
          data={doacoes}
          keyExtractor={(item) => item.id}
          contentContainerStyle={{ gap: 12, paddingBottom: 20 }}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => (
            <View style={styles.itemCard}>
              <Text style={styles.userText}>{item.usuario}</Text>
              <Text style={styles.typeText}>{item.tipo}</Text>
              <View style={styles.dateRow}>
                <Text style={styles.dateText}>{item.data}</Text>
                <Text style={styles.dateText}>{item.hora}</Text>
              </View>
            </View>
          )}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#169BBA',
  },
  topBar: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 15,
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
  whiteCard: {
    flex: 1,
    backgroundColor: '#FFF',
    borderTopLeftRadius: 35,
    borderTopRightRadius: 35,
    paddingHorizontal: 20,
    paddingTop: 25,
  },
  title: {
    color: '#169BBA',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  itemCard: {
    borderWidth: 1.5,
    borderColor: '#169BBA',
    borderRadius: 15,
    padding: 15,
  },
  userText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#169BBA',
  },
  typeText: {
    fontSize: 14,
    color: '#444',
    marginVertical: 4,
  },
  dateRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 6,
  },
  dateText: {
    fontSize: 12,
    color: '#888',
  },
});