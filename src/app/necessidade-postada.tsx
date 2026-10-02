import React from 'react';
import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { useMenu } from '../components/context/MenuContext';

export default function NecessidadePostadaScreen() {
  const router = useRouter();
  const { openMenu } = useMenu();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.topBar}>
        <TouchableOpacity style={styles.backBtn} onPress={() => router.push('/home')}>
          <Ionicons name="chevron-back" size={24} color="#FFF" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.profileCircle} onPress={openMenu}>
          <Ionicons name="person" size={16} color="#169BBA" />
        </TouchableOpacity>
      </View>

      <Text style={styles.headerTitle}>EMERGÊNCIA POSTADA!</Text>

      <View style={styles.whiteCard}>
        <Text style={styles.messageText}>
          Aguarde pelas próximas{'\n'}horas a chegada das doações
        </Text>

        <View style={styles.statusBox}>
          <Text style={styles.statusText}>Não possui doações :(</Text>
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
  backBtn: { padding: 5 },
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
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 40,
    letterSpacing: 0.5,
  },
  whiteCard: {
    flex: 1,
    backgroundColor: '#FFF',
    borderTopLeftRadius: 35,
    borderTopRightRadius: 35,
    paddingHorizontal: 25,
    paddingTop: 50,
    alignItems: 'center',
  },
  messageText: {
    color: '#169BBA',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    lineHeight: 22,
    marginBottom: 35,
  },
  statusBox: {
    borderWidth: 1.5,
    borderColor: '#169BBA',
    borderRadius: 15,
    width: '100%',
    paddingVertical: 14,
    alignItems: 'center',
  },
  statusText: { color: '#169BBA', fontSize: 14, fontWeight: '500' },
});