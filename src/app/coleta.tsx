import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useMenu } from '../components/context/MenuContext';

export default function PontosColetaScreen() {
  const router = useRouter();
  const { openMenu } = useMenu();

  const pontos = [
    { id: '1', ong: 'ONG AMMA', endereco: 'Rua xxxxxxx, nº xx\nbairro xxxxxxx, SP', horario: 'Abre às: 09h\nFecha às: 18h' },
    { id: '2', ong: 'ONG AMMA', endereco: 'Rua xxxxxxx, nº xx\nbairro xxxxxxx, SP', horario: 'Abre às: 09h\nFecha às: 18h' },
    { id: '3', ong: 'ONG AMMA', endereco: 'Rua xxxxxxx, nº xx\nbairro xxxxxxx, SP', horario: 'Abre às: 09h\nFecha às: 18h' },
  ];

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

      <Text style={styles.headerTitle}>Pontos de coleta</Text>

      <View style={styles.whiteCard}>
        <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
          <Ionicons name="storefront-outline" size={32} color="#169BBA" style={{ alignSelf: 'center', marginBottom: 10 }} />
          {pontos.map((p) => (
            <View key={p.id} style={styles.cardPonto}>
              <Text style={styles.ongTitle}>{p.ong}</Text>
              <View style={styles.row}>
                <Text style={styles.addressText}>{p.endereco}</Text>
                <View style={styles.timeBox}>
                  <Ionicons name="time-outline" size={16} color="#169BBA" />
                  <Text style={styles.timeText}>{p.horario}</Text>
                </View>
              </View>
            </View>
          ))}
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
  topBar: { flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 20, paddingTop: 15 },
  backBtn: { padding: 5 },
  profileCircle: { width: 36, height: 36, borderRadius: 18, backgroundColor: '#FFF', justifyContent: 'center', alignItems: 'center' },
  headerTitle: { color: '#FFF', fontSize: 20, fontWeight: 'bold', textAlign: 'center', marginVertical: 15 },
  whiteCard: { flex: 1, backgroundColor: '#FFF', borderTopLeftRadius: 35, borderTopRightRadius: 35, paddingHorizontal: 20, paddingTop: 20, justifyContent: 'space-between' },
  scrollContent: { gap: 15, paddingBottom: 15 },
  cardPonto: { borderWidth: 1.5, borderColor: '#169BBA', borderRadius: 20, padding: 15, backgroundColor: '#FFF' },
  ongTitle: { color: '#169BBA', fontWeight: 'bold', fontSize: 13, textAlign: 'center', marginBottom: 8 },
  row: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  addressText: { color: '#555', fontSize: 11, flex: 1, lineHeight: 15 },
  timeBox: { flexDirection: 'row', alignItems: 'center', gap: 4 },
  timeText: { color: '#169BBA', fontSize: 10, lineHeight: 13 },
  footer: { paddingVertical: 10, alignItems: 'center' },
  footerText: { color: '#888', fontSize: 11 },
});