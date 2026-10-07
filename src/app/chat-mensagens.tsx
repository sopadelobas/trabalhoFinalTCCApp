import { Ionicons } from '@expo/vector-icons';
import { useLocalSearchParams, useRouter } from 'expo-router';
import React, { useState } from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { useMenu } from '../components/context/MenuContext';

export default function ChatMensagemScreen() {
  const router = useRouter();
  const { openMenu } = useMenu();
  const params = useLocalSearchParams<{ ong?: string }>();
  const [mensagem, setMensagem] = useState('');

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

      <Text style={styles.headerTitle}>Chat</Text>

      <View style={styles.whiteCard}>
        {/* Header do Chat com Nome da ONG */}
        <View style={styles.ongHeaderBadge}>
          <Text style={styles.ongHeaderText}>{params.ong || 'ONG_Unidos'}</Text>
        </View>

        <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.messagesContainer}>
          <View style={styles.msgLeft}>
            <Text style={styles.msgTextLeft}>simm, vou fazer!</Text>
            <Text style={styles.timeText}>08:12</Text>
          </View>

          <View style={styles.msgRight}>
            <Text style={styles.msgTextRight}>Onde podemos nos encontrar?</Text>
            <Text style={styles.timeTextRight}>08:12</Text>
          </View>

          <View style={styles.msgRight}>
            <Text style={styles.msgTextRight}>No parque mesmo?</Text>
            <Text style={styles.timeTextRight}>08:16</Text>
          </View>

          <View style={styles.msgLeft}>
            <Text style={styles.msgTextLeft}>Pode ser sim, que horas?</Text>
            <Text style={styles.timeText}>09:09</Text>
          </View>

          <Text style={styles.centerTimeBadge}>12:00</Text>
        </ScrollView>

        {/* Campo de Digitação */}
        <View style={styles.inputContainer}>
          <TouchableOpacity style={styles.plusIcon}>
            <Ionicons name="add" size={20} color="#169BBA" />
          </TouchableOpacity>
          <TextInput
            style={styles.chatInput}
            placeholder="Digite uma mensagem..."
            placeholderTextColor="#999"
            value={mensagem}
            onChangeText={setMensagem}
          />
          <TouchableOpacity onPress={() => setMensagem('')}>
            <Ionicons name="send-outline" size={18} color="#169BBA" />
          </TouchableOpacity>
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
  whiteCard: { flex: 1, backgroundColor: '#FFF', borderTopLeftRadius: 35, borderTopRightRadius: 35, paddingHorizontal: 20, paddingTop: 15, paddingBottom: 15, justifyContent: 'space-between' },
  ongHeaderBadge: { borderWidth: 1.5, borderColor: '#169BBA', borderRadius: 15, paddingVertical: 6, paddingHorizontal: 20, alignSelf: 'center', marginBottom: 15 },
  ongHeaderText: { color: '#169BBA', fontWeight: 'bold', fontSize: 13 },
  messagesContainer: { gap: 10, paddingBottom: 10 },
  msgLeft: { backgroundColor: '#E0F7FA', borderRadius: 15, padding: 10, alignSelf: 'flex-start', maxWidth: '80%' },
  msgTextLeft: { color: '#333', fontSize: 12 },
  msgRight: { backgroundColor: '#B2EBF2', borderRadius: 15, padding: 10, alignSelf: 'flex-end', maxWidth: '80%' },
  msgTextRight: { color: '#333', fontSize: 12 },
  timeText: { color: '#888', fontSize: 9, alignSelf: 'flex-end', marginTop: 2 },
  timeTextRight: { color: '#666', fontSize: 9, alignSelf: 'flex-end', marginTop: 2 },
  centerTimeBadge: { alignSelf: 'center', backgroundColor: '#B2EBF2', color: '#169BBA', fontSize: 10, fontWeight: 'bold', paddingHorizontal: 8, paddingVertical: 2, borderRadius: 10, marginVertical: 8 },
  inputContainer: { flexDirection: 'row', alignItems: 'center', borderWidth: 1.5, borderColor: '#169BBA', borderRadius: 20, paddingHorizontal: 12, paddingVertical: 6, gap: 8 },
  plusIcon: { padding: 2 },
  chatInput: { flex: 1, fontSize: 12, color: '#333' },
});