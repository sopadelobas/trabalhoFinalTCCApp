import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React from 'react';
import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useMenu } from '../components/context/MenuContext';

export default function ConfirmadaVoluntarioScreen() {
  const router = useRouter();
  const { openMenu } = useMenu();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.topBar}>
        <TouchableOpacity style={styles.backBtn} onPress={() => router.push('/encontros')}>
          <Ionicons name="chevron-back" size={24} color="#FFF" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.profileCircle} onPress={openMenu}>
          <Ionicons name="person-circle-outline" size={24} color="#169BBA" />
        </TouchableOpacity>
      </View>

      <Text style={styles.headerTitle}>PRESENÇA {'\n'}CONFIRMADA!</Text>

      <View style={styles.whiteCard}>
        <View style={styles.content}>
          <Text style={styles.infoText}>
            Fique atento a data e aos horários para que seu encontro seja um sucesso!
          </Text>

          <TouchableOpacity style={styles.btnChat} onPress={() => router.push('/canais')}>
            <Text style={styles.btnChatText}>Ir para o Chat</Text>
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
  topBar: { flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 20, paddingTop: 15 },
  backBtn: { padding: 5 },
  profileCircle: { width: 36, height: 36, borderRadius: 18, backgroundColor: '#FFF', justifyContent: 'center', alignItems: 'center' },
  headerTitle: { color: '#FFF', fontSize: 20, fontWeight: 'bold', textAlign: 'center', marginVertical: 20, lineHeight: 26 },
  whiteCard: { flex: 1, backgroundColor: '#FFF', borderTopLeftRadius: 35, borderTopRightRadius: 35, paddingHorizontal: 25, paddingTop: 50, justifyContent: 'space-between' },
  content: { alignItems: 'center', gap: 30 },
  infoText: { color: '#169BBA', fontSize: 13, fontWeight: 'bold', textAlign: 'center', lineHeight: 18, paddingHorizontal: 15 },
  btnChat: { backgroundColor: '#169BBA', borderRadius: 20, paddingVertical: 12, paddingHorizontal: 30 },
  btnChatText: { color: '#FFF', fontWeight: 'bold', fontSize: 13 },
  footer: { paddingVertical: 10, alignItems: 'center' },
  footerText: { color: '#888', fontSize: 11 },
});