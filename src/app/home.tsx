import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React, { useState, useEffect} from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import AccountMenu from '../components/AccountMenu';
import Loading from '../components/loading';

export default function HomeScreen() {
  const router = useRouter();
  const [menuVisible, setMenuVisible] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simula uma requisição à API ou carregamento de dados
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loading mensagem="A carregar dados..." />;
  }

  return (
    <SafeAreaView style={styles.container}>
      {/* Cabeçalho com o botão de menu lateral */}
      <View style={styles.header}>
        <Text style={styles.greeting}>Olá, AUJUDA</Text>
        <TouchableOpacity style={styles.profileCircle} onPress={() => setMenuVisible(true)}>
          <Ionicons name="person" size={20} color="#169BBA" />
        </TouchableOpacity>
      </View>

      <ScrollView contentContainerStyle={styles.content}>
        <TouchableOpacity style={styles.cardHeader}
        onPress={() => router.push('/controle-doacoes')}>
          <Ionicons name="people-outline" size={24} color="#169BBA" />
          <Text style={styles.cardHeaderText}>Pessoas alcançadas</Text>
        </TouchableOpacity>

        <View style={styles.whiteContainer}>
          <TouchableOpacity 
            style={styles.actionButton} 
            onPress={() => router.push('/necessidade')}
          >
            <Ionicons name="heart-outline" size={20} color="#169BBA" />
            <Text style={styles.actionButtonText}>Sua ajuda me fortalece</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.actionButton}
          onPress={() => router.push('/pontos')}>
            <Ionicons name="people-outline" size={20} color="#169BBA" />
            <Text style={styles.actionButtonText}>Fortalecer os laços</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>

      {/* Componente da Aba Conta */}
      <AccountMenu visible={menuVisible} onClose={() => setMenuVisible(false)} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#169BBA' },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 70,
    paddingBottom: 60,
  },
  greeting: { color: '#FFF', fontSize: 18, fontWeight: 'bold' },
  profileCircle: {
    width: 36,
    height: 37,
    borderRadius: 18,
    backgroundColor: '#FFF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: { flexGrow: 1, alignItems: 'center' },
  cardHeader: {
    backgroundColor: '#FFF',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    borderRadius: 15,
    width: '85%',
    gap: 10,
    marginBottom: 20,
  },
  cardHeaderText: { color: '#169BBA', fontWeight: 'bold' },
  whiteContainer: {
    flex: 1,
    backgroundColor: '#FFF',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    width: '100%',
    alignItems: 'center',
    paddingTop: 70,
    gap: 50,
  },
  actionButton: {
    borderWidth: 1,
    borderColor: '#169BBA',
    borderRadius: 20,
    paddingVertical: 20,
    paddingHorizontal: 20,
    width: '80%',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  actionButtonText: { color: '#169BBA', fontSize: 14 },
});