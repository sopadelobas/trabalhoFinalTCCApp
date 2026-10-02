import React from 'react';
import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { useMenu } from '../components/context/MenuContext';

export default function NecessidadeUpScreen() {
  const router = useRouter();
  const { openMenu } = useMenu();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.topBar}>
        <TouchableOpacity style={styles.backBtn} onPress={() => router.back()}>
          <Ionicons name="chevron-back" size={24} color="#FFF" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.profileCircle} onPress={openMenu}>
          <Ionicons name="person" size={16} color="#169BBA" />
        </TouchableOpacity>
      </View>

      <Text style={styles.headerTitle}>SUPERDOAÇÕES!</Text>

      <View style={styles.whiteCard}>
        <View style={styles.centerContent}>
          <Text style={styles.subTitle}>Precisa de ajuda o mais rápido{'\n'}possível?</Text>

          <Text style={styles.highlightText}>Dê um up por apenas{'\n'}R$4,99!</Text>

          <TouchableOpacity
            style={styles.primaryBtn}
            onPress={() => router.push('/necessidade-pagamento')}
          >
            <Text style={styles.primaryBtnText}>DAR UM UP!</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.noThanksBtn}
            onPress={() => router.push('/necessidade-postada')}
          >
            <Text style={styles.noThanksText}>Não, obrigada!</Text>
          </TouchableOpacity>
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
    marginVertical: 20,
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
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 40,
    letterSpacing: 1,
  },
  whiteCard: {
    flex: 1,
    backgroundColor: '#FFF',
    borderTopLeftRadius: 35,
    borderTopRightRadius: 35,
    paddingHorizontal: 30,
    justifyContent: 'flex-start',
    marginVertical: 30,
    paddingTop: 50,
  },
  centerContent: { alignItems: 'center' },
  subTitle: {
    color: '#169BBA',
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
    marginBottom: 25,
    lineHeight: 22,
    marginVertical: 5,
  },
  highlightText: {
    color: '#169BBA',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 35,
    lineHeight: 26,
  },
  primaryBtn: {
    backgroundColor: '#169BBA',
    borderRadius: 15,
    width: '100%',
    paddingVertical: 14,
    alignItems: 'center',
    marginBottom: 30,
  },
  primaryBtnText: { color: '#FFF', fontWeight: 'bold', fontSize: 15, letterSpacing: 1, marginBottom: 10, },
  noThanksBtn: { paddingVertical: 10 },
  noThanksText: { color: '#169BBA', fontSize: 12, fontWeight: '500' },
});