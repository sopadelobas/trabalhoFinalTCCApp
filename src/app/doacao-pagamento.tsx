import { Ionicons } from '@expo/vector-icons';
import { useLocalSearchParams, useRouter } from 'expo-router';
import React, { useState } from 'react';
import {
  Alert,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { useMenu } from '../components/context/MenuContext';

export default function DoacaoPagamentoScreen() {
  const router = useRouter();
  const { openMenu } = useMenu();
  const params = useLocalSearchParams<{ total: string }>();

  const [pixCode] = useState('Gkd9390209845JGR9DJpix');

  const handleBack = () => {
    if (router.canGoBack()) {
      router.back();
    } else {
      router.push('/doacao-finalizar');
    }
  };

  const handleCopiarPix = () => {
    Alert.alert('PIX Copiado!', 'Código PIX copiado para a área de transferência.');
    // Simula confirmação do pagamento após copiar
    setTimeout(() => {
      router.push('/doacao-sucesso');
    }, 1200);
  };

  const handleGerarBoleto = () => {
    Alert.alert('Boleto Gerado!', 'O boleto foi enviado para o seu e-mail.');
    router.push('/doacao-sucesso');
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* TopBar */}
      <View style={styles.topBar}>
        <TouchableOpacity style={styles.backBtn} onPress={handleBack}>
          <Ionicons name="chevron-back" size={24} color="#FFF" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.profileCircle} onPress={openMenu}>
          <Ionicons name="person-circle-outline" size={24} color="#169BBA" />
        </TouchableOpacity>
      </View>

      <Text style={styles.headerTitle}>Copie o código PIX</Text>

      <View style={styles.whiteCard}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.scrollContent}
        >
          {/* Caixa do Código PIX */}
          <TouchableOpacity style={styles.pixBox} onPress={handleCopiarPix}>
            <Ionicons name="qr-code-outline" size={28} color="#169BBA" />
            <Text style={styles.pixText} numberOfLines={1}>
              {pixCode}
            </Text>
          </TouchableOpacity>

          <Text style={styles.orText}>Ou pague com boleto</Text>

          {/* Botão Gerar Boleto */}
          <TouchableOpacity style={styles.btnBoleto} onPress={handleGerarBoleto}>
            <Text style={styles.btnBoletoText}>GERAR BOLETO</Text>
          </TouchableOpacity>

          <Text style={styles.autoRedirectText}>
            Quando o pagamento for processado você será automaticamente levado para a próxima página!
          </Text>
        </ScrollView>

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
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 20,
  },
  whiteCard: {
    flex: 1,
    backgroundColor: '#FFF',
    borderTopLeftRadius: 35,
    borderTopRightRadius: 35,
    paddingHorizontal: 25,
    paddingTop: 40,
    justifyContent: 'space-between',
  },
  scrollContent: {
    alignItems: 'center',
    gap: 20,
  },
  pixBox: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1.5,
    borderColor: '#169BBA',
    borderRadius: 20,
    paddingHorizontal: 15,
    paddingVertical: 12,
    gap: 10,
    width: '100%',
  },
  pixText: {
    color: '#169BBA',
    fontSize: 14,
    fontWeight: '500',
    flex: 1,
  },
  orText: {
    color: '#555',
    fontSize: 13,
    marginTop: 10,
  },
  btnBoleto: {
    borderWidth: 1.5,
    borderColor: '#169BBA',
    borderRadius: 20,
    width: '80%',
    paddingVertical: 12,
    alignItems: 'center',
  },
  btnBoletoText: {
    color: '#169BBA',
    fontWeight: 'bold',
    fontSize: 13,
  },
  autoRedirectText: {
    color: '#90A4AE',
    fontSize: 11,
    textAlign: 'center',
    marginTop: 30,
    lineHeight: 16,
    paddingHorizontal: 10,
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