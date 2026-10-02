import React, { useEffect } from 'react';
import { Alert, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { useMenu } from '../components/context/MenuContext';

export default function NecessidadePagamentoScreen() {
  const router = useRouter();
  const { openMenu } = useMenu();
  const pixCode = 'Gkd9390209B45JGR9DJjpix';

  // Redireciona automaticamente após 3 segundos
  useEffect(() => {
    const timer = setTimeout(() => {
      router.push('/necessidade-postada');
    }, 3000); // 3000ms = 3 segundos (ajusta o tempo como preferires)

    return () => clearTimeout(timer); // Limpa o timer se o utilizador sair da tela antes
  }, []);

  const handleCopyPix = () => {
    Alert.alert('Copiado!', 'Código PIX copiado para a área de transferência.');
  };

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
        <Text style={styles.cardTitle}>Copie o código PIX</Text>

        <TouchableOpacity style={styles.pixBox} onPress={handleCopyPix}>
          <View style={styles.pixIconContainer}>
            <Ionicons name="qr-code-outline" size={20} color="#169BBA" />
          </View>
          <Text style={styles.pixCodeText} numberOfLines={1}>
            {pixCode}
          </Text>
        </TouchableOpacity>

        <Text style={styles.infoText}>
          Quando o pix for processado você será automaticamente levado para a próxima página e seu
          post terá up!
        </Text>
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
    paddingHorizontal: 35,
    paddingTop: 45,
    marginVertical: 35,
    alignItems: 'center',
  },
  cardTitle: {
    color: '#169BBA',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 25,
  },
  pixBox: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1.5,
    borderColor: '#169BBA',
    borderRadius: 20,
    paddingHorizontal: 15,
    paddingVertical: 15,
    width: '100%',
    marginBottom: 40,
  },
  pixIconContainer: { marginRight: 10 },
  pixCodeText: { color: '#169BBA', fontSize: 13, flex: 1, fontWeight: '500' },
  infoText: {
    color: '#169BBA',
    fontSize: 11,
    textAlign: 'center',
    lineHeight: 16,
    paddingHorizontal: 10,
  },
});