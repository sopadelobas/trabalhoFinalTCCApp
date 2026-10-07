import { Ionicons } from '@expo/vector-icons';
import { useLocalSearchParams, useRouter } from 'expo-router';
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

export default function DoacaoDeliveryScreen() {
  const router = useRouter();
  const { openMenu } = useMenu();
  const params = useLocalSearchParams<{ itemNome: string; qtd: string }>();

  const handleConfirmarEnvio = () => {
    router.push('/doacao-sucesso');
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.topBar}>
        <TouchableOpacity style={styles.backBtn} onPress={() => router.back()}>
          <Ionicons name="chevron-back" size={24} color="#FFF" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.profileCircle} onPress={openMenu}>
          <Ionicons name="person-circle-outline" size={24} color="#169BBA" />
        </TouchableOpacity>
      </View>

      <Text style={styles.headerTitle}>ENTREGA DO MATERIAL</Text>

      <View style={styles.whiteCard}>
        <ScrollView contentContainerStyle={styles.scrollContent}>
          <Ionicons name="location-outline" size={48} color="#169BBA" />
          <Text style={styles.addressTitle}>Endereço do Ponto de Coleta da ONG:</Text>
          <View style={styles.addressBox}>
            <Text style={styles.addressText}>Rua das Flores, nº 123 - Centro</Text>
            <Text style={styles.addressSubtext}>Horário de atendimento: Seg a Sex, das 08h às 17h</Text>
          </View>

          <Text style={styles.instructionText}>
            Você pode entregar o item diretamente no local ou enviar via serviço de entrega/delivery para o endereço acima.
          </Text>

          <TouchableOpacity style={styles.btnConfirmar} onPress={handleConfirmarEnvio}>
            <Text style={styles.btnConfirmarText}>CONFIRMAR AGENDAMENTO</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#169BBA' },
  topBar: { flexDirection: 'row', justifyContent: 'space-between', padding: 20, paddingTop: 15 },
  backBtn: { padding: 5 },
  profileCircle: { width: 36, height: 36, borderRadius: 18, backgroundColor: '#FFF', justifyContent: 'center', alignItems: 'center' },
  headerTitle: { color: '#FFF', fontSize: 20, fontWeight: 'bold', textAlign: 'center', marginVertical: 20 },
  whiteCard: { flex: 1, backgroundColor: '#FFF', borderTopLeftRadius: 35, borderTopRightRadius: 35, padding: 25 },
  scrollContent: { alignItems: 'center', gap: 15 },
  addressTitle: { color: '#169BBA', fontWeight: 'bold', fontSize: 14 },
  addressBox: { borderWidth: 1.5, borderColor: '#169BBA', borderRadius: 15, padding: 15, width: '100%', alignItems: 'center' },
  addressText: { fontWeight: 'bold', color: '#333' },
  addressSubtext: { color: '#666', fontSize: 12, marginTop: 4 },
  instructionText: { color: '#555', fontSize: 13, textAlign: 'center', lineHeight: 18 },
  btnConfirmar: { backgroundColor: '#169BBA', borderRadius: 20, paddingVertical: 14, paddingHorizontal: 25, marginTop: 15 },
  btnConfirmarText: { color: '#FFF', fontWeight: 'bold', fontSize: 14 },
});