import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useMenu } from '../components/context/MenuContext'; // Import do useMenu correto

export default function MetaAlcancadaScreen() {
  const router = useRouter();
  const { openMenu } = useMenu(); // Acesso à função de abrir o menu

  return (
    <SafeAreaView style={styles.container}>
      {/* Barra de navegação do topo */}
      <View style={styles.topBar}>
        <TouchableOpacity style={styles.backBtn} onPress={() => router.back()}>
          <Ionicons name="chevron-back" size={24} color="#FFF" />
        </TouchableOpacity>

        {/* Botão de Perfil que abre o Menu Lateral */}
        <TouchableOpacity style={styles.profileCircle} onPress={openMenu}>
          <Ionicons name="person-circle-outline" size={24} color="#169BBA" />
        </TouchableOpacity>
      </View>

      {/* Ícone de Alvo no topo azul */}
      <View style={styles.headerIconContainer}>
        <View style={styles.targetIconCircle}>
          <Ionicons name="navigate-outline" size={48} color="#FFF" />
        </View>
      </View>

      {/* Card Branco Arredondado */}
      <View style={styles.whiteCard}>
        <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
          <Text style={styles.mainTitle}>UMA META FOI{'\n'}ALCANÇADA!</Text>
          <Text style={styles.subTitle}>30 Cestas Básicas</Text>

          {/* Barra de Progresso 100% */}
          <View style={styles.progressBg}>
            <View style={styles.progressFill} />
          </View>

          <Text style={styles.percentText}>100%</Text>
          <Text style={styles.statusText}>Concluída!</Text>

          {/* Ícone menor no centro */}
          <View style={styles.centerIcon}>
            <Ionicons name="navigate-outline" size={28} color="#169BBA" />
          </View>

          {/* Botões de Ação */}
          <TouchableOpacity 
            style={styles.outlineBtn}
            onPress={() => router.push('/historico')}
          >
            <Text style={styles.outlineBtnText}>VER HISTÓRICO DE DOAÇÕES</Text>
          </TouchableOpacity>

          <TouchableOpacity 
            style={styles.outlineBtn}
            onPress={() => router.push('/metas')}
          >
            <Text style={styles.outlineBtnText}>DEFINIR NOVA META</Text>
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
  },
  topBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 40,
  },
  backBtn: {
    padding: 5,
  },
  profileCircle: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#FFF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerIconContainer: {
    alignItems: 'center',
    marginVertical: 15,
  },
  targetIconCircle: {
    width: 80,
    height: 80,
    borderRadius: 40,
    borderWidth: 2,
    borderColor: '#FFF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  whiteCard: {
    flex: 1,
    backgroundColor: '#FFF',
    borderTopLeftRadius: 35,
    borderTopRightRadius: 35,
    paddingHorizontal: 25,
    paddingTop: 30,
    justifyContent: 'space-between',
  },
  scrollContent: {
    alignItems: 'center',
  },
  mainTitle: {
    color: '#169BBA',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    letterSpacing: 0.5,
    marginBottom: 8,
  },
  subTitle: {
    color: '#333',
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 20,
  },
  progressBg: {
    width: '100%',
    height: 22,
    backgroundColor: '#E0E0E0',
    borderRadius: 11,
    overflow: 'hidden',
  },
  progressFill: {
    width: '100%',
    height: '100%',
    backgroundColor: '#169BBA',
  },
  percentText: {
    color: '#169BBA',
    fontSize: 26,
    fontWeight: 'bold',
    marginTop: 12,
  },
  statusText: {
    color: '#666',
    fontSize: 14,
    marginBottom: 10,
  },
  centerIcon: {
    marginVertical: 10,
  },
  outlineBtn: {
    borderWidth: 1.5,
    borderColor: '#169BBA',
    borderRadius: 20,
    width: '100%',
    paddingVertical: 12,
    alignItems: 'center',
    marginVertical: 6,
  },
  outlineBtnText: {
    color: '#169BBA',
    fontWeight: 'bold',
    fontSize: 13,
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