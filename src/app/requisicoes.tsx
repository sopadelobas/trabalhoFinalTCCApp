import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React from 'react';
import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useMenu } from '../components/context/MenuContext';

export default function RequisicoesScreen() {
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

      <View style={styles.whiteCard}>
        <Text style={styles.title}>REQUISIÇÕES</Text>

        <View style={styles.reqCard}>
          <View style={styles.userRow}>
            <View style={styles.avatar}>
              <Ionicons name="person-outline" size={18} color="#169BBA" />
            </View>
            <Text style={styles.userName}>@Por_Você</Text>
          </View>
          <View style={styles.statusRow}>
            <Text style={styles.reqDesc}>solicitação de ajuda</Text>
            <Text style={styles.statusText}>enviado <Text style={styles.dot}>●</Text></Text>
          </View>
        </View>

        <View style={styles.emptyBadge}>
          <Text style={styles.emptyBadgeText}>sem mais solicitações = (</Text>
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
  topBar: { flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 20, paddingTop: 15 },
  backBtn: { padding: 5 },
  profileCircle: { width: 36, height: 36, borderRadius: 18, backgroundColor: '#FFF', justifyContent: 'center', alignItems: 'center' },
  whiteCard: { flex: 1, backgroundColor: '#FFF', borderTopLeftRadius: 35, borderTopRightRadius: 35, paddingHorizontal: 20, paddingTop: 30, justifyContent: 'space-between', marginTop: 15 },
  title: { color: '#169BBA', fontSize: 16, fontWeight: 'bold', textAlign: 'center', marginBottom: 20 },
  reqCard: { gap: 8 },
  userRow: { flexDirection: 'row', alignItems: 'center', gap: 8 },
  avatar: { width: 30, height: 30, borderRadius: 15, backgroundColor: '#E0F7FA', justifyContent: 'center', alignItems: 'center' },
  userName: { color: '#333', fontSize: 13, fontWeight: 'bold' },
  statusRow: { flexDirection: 'row', justifyContent: 'space-between', paddingLeft: 38 },
  reqDesc: { color: '#777', fontSize: 12 },
  statusText: { color: '#888', fontSize: 11 },
  dot: { color: '#FFD54F' },
  emptyBadge: { backgroundColor: '#B2EBF2', borderRadius: 20, paddingVertical: 8, paddingHorizontal: 20, alignSelf: 'center', marginTop: 40 },
  emptyBadgeText: { color: '#169BBA', fontSize: 12, fontWeight: 'bold' },
  footer: { paddingVertical: 10, alignItems: 'center' },
  footerText: { color: '#888', fontSize: 11 },
});