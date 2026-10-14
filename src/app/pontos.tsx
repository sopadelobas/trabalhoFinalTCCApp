// src/app/pontos.tsx

import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Feather, Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

import AccountMenu from '@/components/AccountMenu';

export default function PontosScreen() {
  const router = useRouter();
  const [menuVisible, setMenuVisible] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      {/* TopBar */}
      <View style={styles.topBar}>
        <TouchableOpacity onPress={() => router.back()} activeOpacity={0.7} style={styles.backBtn}>
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

      {/* Cartão Branco Principal */}
      <View style={styles.cardContainer}>
        <View style={styles.contentWrapper}>
          <Text style={styles.title}>O que você gostaria de{'\n'}fazer?</Text>

          <View style={styles.buttonsGroup}>
            <TouchableOpacity 
              style={styles.actionCard}
              activeOpacity={0.8}
              onPress={() => router.push('/cadastro-ponto-coleta')}
            >
              <Text style={styles.actionCardText}>PUBLICAR PONTOS DE{'\n'}COLETA</Text>
              <Ionicons name="cube-outline" size={28} color="#169BBA" />
            </TouchableOpacity>

            <TouchableOpacity 
              style={styles.actionCard}
              activeOpacity={0.8}
              onPress={() => router.push('/cadastro-ponto-encontro')}
            >
              <Text style={styles.actionCardText}>ENCONTRO COM{'\n'}DOADORES</Text>
              <Ionicons name="people-outline" size={28} color="#169BBA" />
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.footer}>
          <Text style={styles.footerText}>Todos os direitos reservados ©</Text>
        </View>
      </View>

      <AccountMenu 
        visible={menuVisible} 
        onClose={() => setMenuVisible(false)} 
        userType="ong" 
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    backgroundColor: '#169BBA' 
  },
  topBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 15,
    paddingBottom: 15,
  },
  backBtn: { padding: 4 },
  profileCircle: { padding: 2 },
  innerProfileCircle: { width: 28, height: 28, borderRadius: 14, backgroundColor: '#FFF' },
  cardContainer: {
    flex: 1,
    backgroundColor: '#FFF',
    borderTopLeftRadius: 35,
    borderTopRightRadius: 35,
    paddingHorizontal: 25,
    paddingTop: 40,
    paddingBottom: 15,
    justifyContent: 'space-between',
  },
  contentWrapper: {
    width: '100%',
    alignItems: 'center',
    gap: 35, // Controla a distância entre o título e os botões
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#169BBA',
    textAlign: 'center',
    lineHeight: 26,
  },
  buttonsGroup: { 
    gap: 20, 
    width: '100%', 
    alignItems: 'center' 
  },
  actionCard: {
    borderWidth: 2,
    borderColor: '#169BBA',
    borderRadius: 22,
    paddingVertical: 26, // Aumenta a altura do botão
    paddingHorizontal: 20,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 14,
    backgroundColor: '#FFF',
  },
  actionCardText: { 
    color: '#169BBA', 
    fontSize: 15, 
    fontWeight: 'bold', 
    textAlign: 'center',
    lineHeight: 20,
  },
  footer: { 
    paddingVertical: 10, 
    alignItems: 'center' 
  },
  footerText: { 
    color: '#888', 
    fontSize: 11 
  },
});