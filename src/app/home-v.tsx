import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { useMenu } from '../components/context/MenuContext';

export default function HomeScreen() {
  const router = useRouter();
  const { openMenu } = useMenu();

  return (
    <SafeAreaView style={styles.container}>
      {/* TopBar com o botão de perfil na direita */}
      <View style={styles.topBar}>
        <TouchableOpacity style={styles.profileCircle} onPress={openMenu}>
          <Ionicons name="person-circle-outline" size={24} color="#169BBA" />
        </TouchableOpacity>
      </View>

      {/* Cabeçalho de Boas-Vindas */}
      <View style={styles.headerArea}>
        <Text style={styles.greetingText}>Olá, Luiza</Text>

        {/* Botão Branco do Topo */}
        <TouchableOpacity
          style={styles.cardAjude}
          onPress={() => router.push('/nichos-v')}
        >
          <Ionicons name="heart-outline" size={22} color="#169BBA" />
          <Text style={styles.cardAjudeText}>Ajude uma pessoa</Text>
        </TouchableOpacity>
      </View>

      {/* Card Branco com os botões de ação */}
      <View style={styles.whiteCard}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.scrollContent}
        >
          {/* Botão 1: Busque auxílio */}
          <TouchableOpacity
            style={styles.actionBtn}
            onPress={() => router.push('/ConvocarOng')}
          >
            <Ionicons name="hand-left-outline" size={22} color="#169BBA" />
            <Text style={styles.actionBtnText}>Busque auxílio</Text>
          </TouchableOpacity>

          {/* Botão 2: Fortalecer os laços */}
          <TouchableOpacity
            style={styles.actionBtn}
            onPress={() => router.push('/pde-v')}
          >
            <Ionicons name="people-outline" size={22} color="#169BBA" />
            <View style={styles.btnTextContainer}>
              <Text style={styles.actionBtnText}>Fortalecer os laços</Text>
              <Text style={styles.subtext}>encontros ou coleta</Text>
            </View>
          </TouchableOpacity>

          {/* Botão 3: Canais */}
          <TouchableOpacity
            style={styles.actionBtn}
            onPress={() => router.push('/canais')}
          >
            <Ionicons name="chatbubbles-outline" size={22} color="#169BBA" />
            <Text style={styles.actionBtnText}>Canais</Text>
          </TouchableOpacity>
        </ScrollView>

        {/* Rodapé */}
        <View style={styles.footer}>
          <Text style={styles.footerText}>Todos os direitos reservados ©</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#169BBA',
    alignItems: 'stretch',
  },
  topBar: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 10,
  },
  profileCircle: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: '#FFF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerArea: {
    paddingHorizontal: 25,
    paddingTop: 10,
    paddingBottom: 30,
    gap: 15,
  },
  greetingText: {
    color: '#FFF',
    fontSize: 20,
    fontWeight: 'bold',
  },
  cardAjude: {
    backgroundColor: '#FFF',
    borderRadius: 15,
    paddingVertical: 14,
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  cardAjudeText: {
    color: '#169BBA',
    fontSize: 16,
    fontWeight: 'bold',
  },
  whiteCard: {
    flex: 1,
    backgroundColor: '#FFF',
    borderTopLeftRadius: 35,
    borderTopRightRadius: 35,
    paddingHorizontal: 25,
    paddingTop: 35,
    justifyContent: 'space-between',
  },
  scrollContent: {
    gap: 20,
    paddingBottom: 20,
  },
  actionBtn: {
    borderWidth: 1.5,
    borderColor: '#169BBA',
    borderRadius: 25,
    paddingVertical: 14,
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 14,
    backgroundColor: '#FFF',
  },
  btnTextContainer: {
    flexDirection: 'column',
  },
  actionBtnText: {
    color: '#169BBA',
    fontSize: 15,
    fontWeight: 'bold',
  },
  subtext: {
    color: '#777',
    fontSize: 11,
    marginTop: 1,
  },
  footer: {
    paddingVertical: 15,
    alignItems: 'center',
  },
  footerText: {
    color: '#888',
    fontSize: 11,
  },
});