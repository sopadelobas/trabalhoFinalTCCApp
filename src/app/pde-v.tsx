import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React from 'react';
import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useMenu } from '../components/context/MenuContext';

export default function FortalecerLacosScreen() {
  const router = useRouter();
  const { openMenu } = useMenu();

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

      <Text style={styles.headerTitle}>Fortaleça laços</Text>

      <View style={styles.whiteCard}>
        <View style={styles.content}>
          <Text style={styles.subtext}>
            Ache encontros e procure pontos de coletas para as doações.
          </Text>

          <TouchableOpacity
            style={styles.actionBtn}
            onPress={() => router.push('/coleta')}
          >
            <Text style={styles.btnText}>Ponto de doações</Text>
            <Ionicons name="location-outline" size={20} color="#169BBA" />
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.actionBtn}
            onPress={() => router.push('/encontros')}
          >
            <Text style={styles.btnText}>Encontros</Text>
            <Ionicons name="calendar-outline" size={20} color="#169BBA" />
          </TouchableOpacity>
        </View>

        <View style={styles.footer}>
          <Text style={styles.footerText}>Todos os direitos reservados ©</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#169BBA' },
  topBar: { flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 20, paddingTop: 15, paddingBottom: 5 },
  backBtn: { padding: 5 },
  profileCircle: { width: 36, height: 36, borderRadius: 18, backgroundColor: '#FFF', justifyContent: 'center', alignItems: 'center' },
  headerTitle: { color: '#FFF', fontSize: 22, fontWeight: 'bold', textAlign: 'center', marginVertical: 20 },
  whiteCard: { flex: 1, backgroundColor: '#FFF', borderTopLeftRadius: 35, borderTopRightRadius: 35, paddingHorizontal: 25, paddingTop: 35, justifyContent: 'space-between' },
  content: { alignItems: 'center', gap: 20 },
  subtext: { color: '#777', fontSize: 13, textAlign: 'center', paddingHorizontal: 20, marginBottom: 15 },
  actionBtn: { borderWidth: 1.5, borderColor: '#169BBA', borderRadius: 25, paddingVertical: 14, paddingHorizontal: 20, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: '100%' },
  btnText: { color: '#169BBA', fontSize: 15, fontWeight: 'bold' },
  footer: { paddingVertical: 10, alignItems: 'center' },
  footerText: { color: '#888', fontSize: 11 },
});