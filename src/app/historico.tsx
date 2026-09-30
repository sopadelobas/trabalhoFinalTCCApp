import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React from 'react';
import AccountMenu from '../components/AccountMenu';
import { FlatList, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const doacoes = [
  { id: '1', usuario: '@julio09', tipo: 'DOAÇÃO: R$80 - Cesta Básica', data: '16/08/2026', hora: '14h33' },
  { id: '2', usuario: '@catarina.souza', tipo: 'DOAÇÃO: 2kg de arroz', data: '16/08/2026', hora: '09h12' },
  { id: '3', usuario: '@Gilsos', tipo: 'DOAÇÃO: R$20 - Cesta Básica', data: '15/08/2026', hora: '20h17' },
  { id: '4', usuario: '@Elis.guedes', tipo: 'DOAÇÃO: 1kg de feijão', data: '12/08/2026', hora: '06h23' },
];

export default function HistoricoScreen() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity style={styles.backBtn} onPress={() => router.back()}>
        <Ionicons name="chevron-back" size={28} color="#FFF" />
      </TouchableOpacity>

      <View style={styles.whiteCard}>
        <Text style={styles.title}>HISTÓRICO</Text>

        <FlatList
          data={doacoes}
          keyExtractor={(item) => item.id}
          contentContainerStyle={{ gap: 12, paddingBottom: 20 }}
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
  container: { flex: 1, backgroundColor: '#169BBA' },
  backBtn: { position: 'absolute', top: 40, left: 20, zIndex: 10 },
  whiteCard: {
    flex: 1,
    backgroundColor: '#FFF',
    marginTop: 80,
    marginHorizontal: 15,
    marginVertical: 50,
    borderRadius: 25,
    padding: 30,
    alignItems: 'center',
  },
  title: { color: '#169BBA', fontSize: 18, fontWeight: 'bold', marginBottom: 20 },
  itemCard: {
    borderWidth: 1,
    borderColor: '#169BBA',
    borderRadius: 15,
    padding: 12,
    width: 280,
  },
  userText: { fontSize: 12, color: '#888' },
  typeText: { fontSize: 13, fontWeight: 'bold', color: '#333', marginVertical: 4 },
  dateRow: { flexDirection: 'row', justifyContent: 'space-between' },
  dateText: { fontSize: 11, color: '#aaa' },
});