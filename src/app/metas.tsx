import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useMenu } from '../components/context/MenuContext';

interface Meta {
  id: string;
  item: string;
  quantidadeTotal: number;
  quantidadeAtual: number;
  dataInicio: string;
  prazoFinal: string;
  concluida: boolean;
}

export default function MetasScreen() {
  const router = useRouter();
  const { openMenu } = useMenu();

  const [metas] = useState<Meta[]>([
    {
      id: '1',
      item: 'Cestas Básicas',
      quantidadeTotal: 30,
      quantidadeAtual: 30,
      dataInicio: '01/10/2026',
      prazoFinal: '30/10/2026',
      concluida: true,
    },
    {
      id: '2',
      item: 'Sacos de Ração',
      quantidadeTotal: 100,
      quantidadeAtual: 16,
      dataInicio: '05/10/2026',
      prazoFinal: '15/11/2026',
      concluida: false,
    },
  ]);

  const handleBack = () => {
    if (router.canGoBack()) {
      router.back();
    } else {
      router.push('/home');
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
      <View style={styles.headerIconContainer}>
        <Text style={styles.headerTitle}>METAS DA ONG</Text>
      </View>

      {/* Card Branco */}
      <View style={styles.whiteCard}>
        <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
          {metas.map((meta) => {
            const porcentagem = Math.min(
              100,
              Math.round((meta.quantidadeAtual / meta.quantidadeTotal) * 100)
            );

            return (
              <View key={meta.id} style={styles.metaCard}>
                <Text style={styles.metaTitle}>
                  {meta.quantidadeTotal} {meta.item}
                </Text>

                <View style={styles.datesRow}>
                  <Text style={styles.dateText}>Início: {meta.dataInicio}</Text>
                  <Text style={styles.dateText}>Prazo: {meta.prazoFinal}</Text>
                </View>

                <View style={styles.progressBg}>
                  <View style={[styles.progressFill, { width: `${porcentagem}%` }]} />
                </View>
                <Text style={styles.percentText}>{porcentagem}% Concluído</Text>

                {meta.concluida ? (
                  <TouchableOpacity
                    style={styles.outlineBtn}
                    onPress={() => router.push('/historico')}
                  >
                    <Text style={styles.outlineBtnText}>VER HISTÓRICO DE DOAÇÕES</Text>
                  </TouchableOpacity>
                ) : (
                  <TouchableOpacity
                    style={styles.outlineBtn}
                    onPress={() => router.push('/aumentaMeta')}
                  >
                    <Text style={styles.outlineBtnText}>ATUALIZAR PROGRESSO</Text>
                  </TouchableOpacity>
                )}
              </View>
            );
          })}

          <TouchableOpacity
            style={styles.btnCriarMeta}
            onPress={() => router.push('/criar-meta')}
          >
            <Ionicons name="add-circle-outline" size={20} color="#FFF" />
            <Text style={styles.btnCriarMetaText}>CRIAR NOVA META</Text>
          </TouchableOpacity>
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
  headerIconContainer: {
    alignItems: 'center',
    marginVertical: 10,
  },
  headerTitle: {
    color: '#FFF',
    fontSize: 18,
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
    gap: 20,
  },
  metaCard: {
    borderWidth: 1.5,
    borderColor: '#169BBA',
    borderRadius: 20,
    padding: 16,
    backgroundColor: '#FAFAFA',
  },
  metaTitle: {
    color: '#169BBA',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  datesRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 8,
  },
  dateText: {
    fontSize: 12,
    color: '#666',
    fontWeight: '500',
  },
  progressBg: {
    width: '100%',
    height: 16,
    backgroundColor: '#E0E0E0',
    borderRadius: 8,
    overflow: 'hidden',
    marginTop: 4,
  },
  progressFill: {
    height: '100%',
    backgroundColor: '#169BBA',
  },
  percentText: {
    color: '#169BBA',
    fontSize: 13,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 6,
    marginBottom: 10,
  },
  outlineBtn: {
    borderWidth: 1.5,
    borderColor: '#169BBA',
    borderRadius: 15,
    width: '100%',
    paddingVertical: 10,
    alignItems: 'center',
    marginTop: 5,
  },
  outlineBtnText: {
    color: '#169BBA',
    fontWeight: 'bold',
    fontSize: 12,
  },
  btnCriarMeta: {
    backgroundColor: '#169BBA',
    borderRadius: 20,
    width: '100%',
    paddingVertical: 14,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 8,
    marginTop: 10,
  },
  btnCriarMetaText: {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 14,
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