import React, { useState } from 'react';
import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { useMenu } from '../components/context/MenuContext';

interface Conversa {
  id: string;
  usuario: string;
  ultimaMensagem: string;
}

const CONVERSAS_MOCK: Conversa[] = [
  { id: '1', usuario: 'João Silva', ultimaMensagem: 'Olá! Como posso ajudar na ONG hoje?' },
  { id: '2', usuario: 'Maria Oliveira', ultimaMensagem: 'Enviei o comprovante de doação!' },
  { id: '3', usuario: 'Carlos Eduardo', ultimaMensagem: 'Qual o horário do voluntariado?' },
  { id: '4', usuario: 'Ana Paula', ultimaMensagem: 'Muito obrigada pelo retorno.' },
];

export default function MensagensListaScreen() {
  const router = useRouter();
  const { openMenu } = useMenu();
  const [busca, setBusca] = useState('');

  const conversasFiltradas = CONVERSAS_MOCK.filter((c) =>
    c.usuario.toLowerCase().includes(busca.toLowerCase())
  );

  const handleAbrirChat = (conversa: Conversa) => {
    // Envia os dados da conversa para a tela de chat
    router.push({
      pathname: '/mensagens-chat' as any,
      params: { 
        id: conversa.id, 
        usuario: conversa.usuario 
      },
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.topBar}>
        <TouchableOpacity onPress={() => router.back()} style={styles.iconBtn}>
          <Ionicons name="chevron-back" size={24} color="#FFF" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.profileCircle} onPress={openMenu}>
          <Ionicons name="person" size={16} color="#169BBA" />
        </TouchableOpacity>
      </View>

      <Text style={styles.headerTitle}>MENSAGENS</Text>

      <View style={styles.whiteCard}>
        <View style={styles.searchContainer}>
          <TextInput
            style={styles.searchInput}
            placeholder="Pesquisar..."
            placeholderTextColor="#888"
            value={busca}
            onChangeText={setBusca}
          />
          <Ionicons name="search" size={20} color="#169BBA" style={styles.searchIcon} />
        </View>

        <FlatList
          data={conversasFiltradas}
          keyExtractor={(item) => item.id}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ gap: 12, paddingBottom: 20 }}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.chatCard}
              onPress={() => handleAbrirChat(item)}
            >
              <View style={styles.avatarPlaceholder} />
              <View style={styles.chatInfo}>
                <Text style={styles.usernameText}>{item.usuario}</Text>
                <Text style={styles.lastMsgText} numberOfLines={1}>
                  {item.ultimaMensagem}
                </Text>
              </View>
            </TouchableOpacity>
          )}
        />

        <View style={styles.footer}>
          <Text style={styles.footerText}>Todos os direitos reservados ©</Text>
        </View>
      </View>
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
    paddingTop: 20,
  },
  iconBtn: { padding: 5 },
  profileCircle: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#FFF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerTitle: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 20,
  },
  whiteCard: {
    flex: 1,
    backgroundColor: '#FFF',
    borderTopLeftRadius: 35,
    borderTopRightRadius: 35,
    paddingHorizontal: 20,
    paddingTop: 25,
    justifyContent: 'space-between',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1.5,
    borderColor: '#169BBA',
    borderRadius: 20,
    paddingHorizontal: 15,
    height: 42,
    marginBottom: 20,
  },
  searchInput: { flex: 1, fontSize: 14, color: '#333' },
  searchIcon: { marginLeft: 5 },
  chatCard: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1.5,
    borderColor: '#169BBA',
    borderRadius: 15,
    padding: 12,
  },
  avatarPlaceholder: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#E0E0E0',
    marginRight: 12,
  },
  chatInfo: { flex: 1 },
  usernameText: { fontSize: 14, fontWeight: 'bold', color: '#169BBA' },
  lastMsgText: { fontSize: 12, color: '#666', marginTop: 2 },
  footer: { paddingVertical: 15, alignItems: 'center' },
  footerText: { color: '#888', fontSize: 11 },
});