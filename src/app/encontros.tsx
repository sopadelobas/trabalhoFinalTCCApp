import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useMenu } from '../components/context/MenuContext';

export default function EncontrosScreen() {
  const router = useRouter();
  const { openMenu } = useMenu();

  const encontros = [
    { id: '1', titulo: 'CAFÉ COMUNITÁRIO\nONG AJUDA', data: '21/09 AS 14H', icone: 'cafe-outline' },
    { id: '2', titulo: 'ZUMBA\nONG +IDOSO', data: '10/08 AS 09H', icone: 'fitness-outline' },
    { id: '3', titulo: 'RODA LEITURA\nONG PROINFÂNCIA', data: '15/10 AS 10H', icone: 'book-outline' },
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

      <Text style={styles.headerTitle}>Encontros</Text>

      <View style={styles.whiteCard}>
        <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
          {encontros.map((e) => (
            <TouchableOpacity
              key={e.id}
              style={styles.cardEncontro}
              onPress={() => router.push({ pathname: '/presenca-encontro', params: { titulo: e.titulo } })}
            >
              <View style={styles.imagePlaceholder}>
                <Ionicons name={e.icone as any} size={36} color="#169BBA" />
              </View>
              <View style={styles.infoBox}>
                <Text style={styles.tituloText}>{e.titulo}</Text>
                <Text style={styles.dataBadge}>{e.data}</Text>
              </View>
            </TouchableOpacity>
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
  cardEncontro: { borderWidth: 1.5, borderColor: '#169BBA', borderRadius: 20, padding: 12, flexDirection: 'row', alignItems: 'center', gap: 12 },
  imagePlaceholder: { width: 80, height: 70, backgroundColor: '#E0F7FA', borderRadius: 12, justifyContent: 'center', alignItems: 'center' },
  infoBox: { flex: 1, gap: 6 },
  tituloText: { color: '#169BBA', fontWeight: 'bold', fontSize: 13 },
  dataBadge: { color: '#169BBA', fontSize: 11, fontWeight: '600' },
  footer: { paddingVertical: 10, alignItems: 'center' },
  footerText: { color: '#888', fontSize: 11 },
});