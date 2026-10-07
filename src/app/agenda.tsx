import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { useMenu } from '../components/context/MenuContext';

interface EventoInscrito {
  id: string;
  titulo: string;
  ong: string;
  data: string;
  horario: string;
  local: string;
  tipo: 'Ponto de Coleta' | 'Ação Comunitária' | 'Mutirão';
}

export default function AgendaVoluntarioScreen() {
  const router = useRouter();
  const { openMenu } = useMenu();

  const [eventos] = useState<EventoInscrito[]>([
    {
      id: '1',
      titulo: 'Arrecadação de Mantimentos',
      ong: '@ONG_Unidos',
      data: '15/10/2026',
      horario: '09:00 - 13:00',
      local: 'Praça Central, Tenda 02',
      tipo: 'Ponto de Coleta',
    },
    {
      id: '2',
      titulo: 'Distribuição de Cestas Básicas',
      ong: '@JUNTOS',
      data: '22/10/2026',
      horario: '14:00 - 17:30',
      local: 'Sede da ONG Juntos',
      tipo: 'Ação Comunitária',
    },
  ]);

  const handleBack = () => {
    if (router.canGoBack()) {
      router.back();
    } else {
      router.push('/home-v');
    }
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

      {/* Título da Página */}
      <View style={styles.headerContainer}>
        <Ionicons name="calendar-outline" size={42} color="#FFF" />
        <Text style={styles.headerTitle}>MINHA AGENDA</Text>
      </View>

      {/* Card Branco com Lista da Agenda */}
      <View style={styles.whiteCard}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.scrollContent}
        >
          {eventos.map((evento) => (
            <View key={evento.id} style={styles.eventoCard}>
              <View style={styles.cardHeader}>
                <Text style={styles.ongBadge}>{evento.ong}</Text>
                <Text style={styles.tipoBadge}>{evento.tipo}</Text>
              </View>

              <Text style={styles.eventoTitle}>{evento.titulo}</Text>

              <View style={styles.detailRow}>
                <Ionicons name="calendar-sharp" size={16} color="#169BBA" />
                <Text style={styles.detailText}>{evento.data}</Text>
                <Ionicons name="time-sharp" size={16} color="#169BBA" style={{ marginLeft: 10 }} />
                <Text style={styles.detailText}>{evento.horario}</Text>
              </View>

              <View style={styles.detailRow}>
                <Ionicons name="location-sharp" size={16} color="#169BBA" />
                <Text style={styles.detailText}>{evento.local}</Text>
              </View>

              <TouchableOpacity
                style={styles.outlineBtn}
                onPress={() => router.push('/ong-informacoes')}
              >
                <Text style={styles.outlineBtnText}>VER DETALHES DA ONG</Text>
              </TouchableOpacity>
            </View>
          ))}
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
    paddingTop: 20,
    paddingBottom: 10,
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
  headerContainer: {
    alignItems: 'center',
    marginVertical: 10,
    gap: 4,
  },
  headerTitle: {
    color: '#FFF',
    fontSize: 20,
    fontWeight: 'bold',
  },
  whiteCard: {
    flex: 1,
    backgroundColor: '#FFF',
    borderTopLeftRadius: 35,
    borderTopRightRadius: 35,
    paddingHorizontal: 20,
    paddingTop: 25,
    justifyContent: 'space-between',
  },
  scrollContent: {
    paddingBottom: 20,
    gap: 16,
  },
  eventoCard: {
    borderWidth: 1.5,
    borderColor: '#169BBA',
    borderRadius: 20,
    padding: 16,
    backgroundColor: '#FAFAFA',
    gap: 8,
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  ongBadge: {
    color: '#169BBA',
    fontWeight: 'bold',
    fontSize: 13,
  },
  tipoBadge: {
    fontSize: 11,
    color: '#666',
    backgroundColor: '#E0F7FA',
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 10,
  },
  eventoTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  detailRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  detailText: {
    fontSize: 12,
    color: '#555',
  },
  outlineBtn: {
    borderWidth: 1.5,
    borderColor: '#169BBA',
    borderRadius: 15,
    width: '100%',
    paddingVertical: 10,
    alignItems: 'center',
    marginTop: 6,
  },
  outlineBtnText: {
    color: '#169BBA',
    fontWeight: 'bold',
    fontSize: 12,
  },
  footer: {
    paddingVertical: 12,
    alignItems: 'center',
  },
  footerText: {
    color: '#888',
    fontSize: 11,
  },
});