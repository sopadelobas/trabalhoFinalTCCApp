// src/app/historico.tsx

import React, { useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { Feather, Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

import AccountMenu from '@/components/AccountMenu';

interface DoacaoItem {
  id: string;
  ong: string;
  doacao: string;
  data: string;
  hora: string;
}

export default function HistoricoScreen() {
  const router = useRouter();
  const [menuVisible, setMenuVisible] = useState(false);

  // Lista de doações conforme o layout
  const doacoes: DoacaoItem[] = [
    {
      id: '1',
      ong: '@ONG_Unidos',
      doacao: 'R$80 - Cesta Básica',
      data: '16/08/2026',
      hora: '14h33',
    },
    {
      id: '2',
      ong: '@JUNTOS',
      doacao: '2kg de arroz',
      data: '16/08/2026',
      hora: '09h12',
    },
    {
      id: '3',
      ong: '@PARAnós',
      doacao: 'R$20 - Cesta Básica',
      data: '13/08/2026',
      hora: '20h17',
    },
    {
      id: '4',
      ong: '@E.E12',
      doacao: '1kg de feijão',
      data: '12/08/2026',
      hora: '06h25',
    },
  ];

  const handleVoltar = () => {
    if (router.canGoBack()) {
      router.back();
    } else {
      router.replace('/home-v' as any);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* TopBar com botão Voltar e Foto de Perfil */}
      <View style={styles.topBar}>
        <TouchableOpacity onPress={handleVoltar} activeOpacity={0.7} style={styles.backBtn}>
          <Feather name="chevron-left" size={28} color="#FFF" />
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.profileCircle} 
          onPress={() => setMenuVisible(true)}
          activeOpacity={0.7}
        >
          <View style={styles.innerProfileCircle} />
        </TouchableOpacity>
      </View>

      {/* Cartão Principal Branco */}
      <View style={styles.cardContainer}>
        <ScrollView 
          showsVerticalScrollIndicator={false} 
          contentContainerStyle={styles.scrollContent}
        >
          {/* Título Principal */}
          <Text style={styles.title}>HISTÓRICO</Text>
          <Text style={styles.subtitle}>SUAS DOAÇÕES</Text>

          {/* Lista de Cards de Doação */}
          <View style={styles.listContainer}>
            {doacoes.map((item) => (
              <View key={item.id} style={styles.doacaoCard}>
                <Text style={styles.ongName}>{item.ong}</Text>
                <Text style={styles.doacaoText}>
                  <Text style={styles.boldLabel}>DOAÇÃO: </Text>
                  {item.doacao}
                </Text>
                
                <View style={styles.dateTimeRow}>
                  <Text style={styles.dateTimeText}>{item.data}</Text>
                  <Text style={styles.dateTimeText}>{item.hora}</Text>
                </View>
              </View>
            ))}
          </View>

          {/* Três pontinhos decorativos do rodapé */}
          <View style={styles.dotsContainer}>
            <Ionicons name="ellipsis-horizontal" size={24} color="#169BBA" />
          </View>
        </ScrollView>
      </View>

      {/* Menu Lateral integrado */}
      <AccountMenu 
        visible={menuVisible} 
        onClose={() => setMenuVisible(false)} 
        userType="voluntario"
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#169BBA',
  },
  topBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 15,
    paddingBottom: 20,
  },
  backBtn: {
    padding: 4,
  },
  profileCircle: {
    padding: 2,
  },
  innerProfileCircle: {
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: '#FFF',
  },
  cardContainer: {
    flex: 1,
    backgroundColor: '#FFF',
    borderTopLeftRadius: 35,
    borderTopRightRadius: 35,
    paddingHorizontal: 25,
    paddingTop: 25,
    marginHorizontal: 15,
  },
  scrollContent: {
    alignItems: 'center',
    paddingBottom: 25,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#169BBA',
    marginTop: 5,
    letterSpacing: 0.5,
  },
  subtitle: {
    fontSize: 11,
    fontWeight: 'bold',
    color: '#333',
    marginTop: 2,
    marginBottom: 20,
    letterSpacing: 0.5,
  },
  listContainer: {
    width: '100%',
    gap: 15,
  },
  doacaoCard: {
    borderWidth: 1.5,
    borderColor: '#73C7D9',
    borderRadius: 20,
    paddingVertical: 12,
    paddingHorizontal: 16,
    backgroundColor: '#FFF',
  },
  ongName: {
    fontSize: 13,
    color: '#555',
    fontWeight: '500',
    marginBottom: 2,
  },
  doacaoText: {
    fontSize: 13,
    color: '#333',
    marginBottom: 10,
  },
  boldLabel: {
    fontWeight: 'bold',
    color: '#222',
  },
  dateTimeRow: {
    flexDirection: 'row',
    gap: 30,
  },
  dateTimeText: {
    fontSize: 12,
    color: '#666',
  },
  dotsContainer: {
    marginTop: 15,
    alignItems: 'center',
  },
});