import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { useMenu } from '../components/context/MenuContext';

export default function CanaisScreen() {
  const router = useRouter();
  const { openMenu } = useMenu();
  const [busca, setBusca] = useState('');

  const conversas = [
    { id: '1', ong: '@ONG_Unidos', msg: 'Olá! Você conseguiu?', hora: '08:12' },
    { id: '2', ong: '@Amigos_amor', msg: 'Simm, vamos fazer!', hora: '12:00' },
    { id: '3', ong: '@FCC', msg: 'Vocês podem agora?', hora: '12:00' },
    { id: '4', ong: '@Por_Você', msg: 'ok!', hora: '' },
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

      <Text style={styles.headerTitle}>Canais</Text>

      <View style={styles.whiteCard}>
        <View style={styles.searchBox}>
          <Ionicons name="search-outline" size={18} color="#169BBA" />
          <TextInput
            style={styles.searchInput}
            placeholder="Buscar ONG'S ..."
            placeholderTextColor="#999"
            value={busca}
            onChangeText={setBusca}
          />
        </View>

        <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
          {conversas.map((c) => (
            <TouchableOpacity
              key={c.id}
              style={styles.chatRow}
              onPress={() => router.push({ pathname: '/chat-mensagem' as any, params: { ong: c.ong } })}
            >
              <View style={styles.avatar}>
                <Ionicons name="person-outline" size={20} color="#169BBA" />
              </View>
              <View style={styles.chatInfo}>
                <Text style={styles.ongText}>{c.ong}</Text>
                <Text style={styles.msgText}>{c.msg}</Text>
              </View>
              {c.hora !== '' && <Text style={styles.timeText}>{c.hora}</Text>}
            </TouchableOpacity>
          ))}
        </ScrollView>

        <TouchableOpacity style={styles.reqLink} onPress={() => router.push('/requisicoes')}>
          <Text style={styles.reqLinkText}>requisições</Text>
        </TouchableOpacity>

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
  searchBox: { flexDirection: 'row', alignItems: 'center', borderWidth: 1.5, borderColor: '#169BBA', borderRadius: 20, paddingHorizontal: 15, paddingVertical: 8, gap: 8, marginBottom: 15 },
  searchInput: { flex: 1, fontSize: 13, color: '#333' },
  scrollContent: { gap: 15 },
  chatRow: { flexDirection: 'row', alignItems: 'center', gap: 12 },
  avatar: { width: 40, height: 40, borderRadius: 20, backgroundColor: '#E0F7FA', justifyContent: 'center', alignItems: 'center', borderWidth: 1, borderColor: '#169BBA' },
  chatInfo: { flex: 1 },
  ongText: { color: '#169BBA', fontWeight: 'bold', fontSize: 13 },
  msgText: { color: '#777', fontSize: 11, marginTop: 2 },
  timeText: { color: '#999', fontSize: 10 },
  reqLink: { alignSelf: 'flex-end', marginVertical: 10 },
  reqLinkText: { color: '#555', fontSize: 11, textDecorationLine: 'underline' },
  footer: { paddingVertical: 10, alignItems: 'center' },
  footerText: { color: '#888', fontSize: 11 },
});