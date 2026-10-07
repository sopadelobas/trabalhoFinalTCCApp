import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { useMenu } from '../components/context/MenuContext';

export default function DoacaoSucessoScreen() {
  const router = useRouter();
  const { openMenu } = useMenu();

  return (
    <SafeAreaView style={styles.container}>
      {/* TopBar */}
      <View style={styles.topBar}>
        <TouchableOpacity style={styles.backBtn} onPress={() => router.push('/home-v')}>
          <Ionicons name="chevron-back" size={24} color="#FFF" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.profileCircle} onPress={openMenu}>
          <Ionicons name="person-circle-outline" size={24} color="#169BBA" />
        </TouchableOpacity>
      </View>

      <Text style={styles.headerTitle}>DOAÇÃO FEITA!</Text>

      {/* Card Branco */}
      <View style={styles.whiteCard}>
        <View style={styles.content}>
          <Text style={styles.subTitle}>
            Um passo a mais para um{'\n'}mundo melhor!
          </Text>

          <TouchableOpacity
            style={styles.btnVoltarHome}
            onPress={() => router.push('/home-v')}
          >
            <Text style={styles.btnVoltarHomeText}>VOLTAR À HOME</Text>
          </TouchableOpacity>
        </View>

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
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 15,
    paddingBottom: 5,
  },
  backBtn: {
    padding: 5,
  },
  profileCircle: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: '#FFF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerTitle: {
    color: '#FFF',
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 25,
  },
  whiteCard: {
    flex: 1,
    backgroundColor: '#FFF',
    borderTopLeftRadius: 35,
    borderTopRightRadius: 35,
    paddingHorizontal: 25,
    paddingTop: 50,
    justifyContent: 'space-between',
  },
  content: {
    alignItems: 'center',
    gap: 30,
  },
  subTitle: {
    color: '#169BBA',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    lineHeight: 26,
  },
  btnVoltarHome: {
    backgroundColor: '#169BBA',
    borderRadius: 20,
    paddingHorizontal: 30,
    paddingVertical: 12,
  },
  btnVoltarHomeText: {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 13,
  },
  footer: {
    paddingVertical: 10,
    alignItems: 'center',
  },
  footerText: {
    color: '#888',
    fontSize: 11,
  },
});