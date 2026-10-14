// src/app/perfil-ong-detalhes.tsx

import React, { useState } from 'react';
import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

import AccountMenu from '@/components/AccountMenu';

// Interfaces preparadas para integração com o Backend / API
interface Fundador {
  id: string;
  nome: string;
  fotoUrl?: string | null;
}

interface MetaSemanal {
  titulo: string;
  metaTotal: number;
  progressoAtual: number;
}

interface OngPerfilData {
  nomeOng: string;
  fundadores: Fundador[];
  fotosGaleria: string[]; // URLs das imagens da galeria
  metaSemanal: MetaSemanal;
}

export default function PerfilOngDetalhesScreen() {
  const router = useRouter();
  const [menuVisible, setMenuVisible] = useState(false);

  // Mock de dados que virão da API / Backend
  const [ongData] = useState<OngPerfilData>({
    nomeOng: 'Casa de Cuidados',
    fundadores: [
      { id: '1', nome: 'Maria', fotoUrl: null },
      { id: '2', nome: 'João', fotoUrl: null },
      { id: '3', nome: 'Ana', fotoUrl: null },
    ],
    fotosGaleria: [], // Se vazio, renderiza o placeholder elegante
    metaSemanal: {
      titulo: '100 sacos de ração',
      metaTotal: 100,
      progressoAtual: 14, // 14%
    },
  });

  const porcentagemMeta = Math.min(
    Math.round((ongData.metaSemanal.progressoAtual / ongData.metaSemanal.metaTotal) * 100),
    100
  );

  const handleVoltar = () => {
    if (router.canGoBack()) {
      router.back();
    } else {
      router.replace('/minhas-ongs' as any);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* TopBar Azul com Botão Voltar e Acesso ao Menu */}
      <View style={styles.topBar}>
        <TouchableOpacity onPress={handleVoltar} activeOpacity={0.7} style={styles.backBtn}>
          <Feather name="chevron-left" size={28} color="#FFF" />
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.profileCircle} 
          onPress={() => setMenuVisible(true)}
          activeOpacity={0.7}
        >
          <View style={styles.innerProfileCircle} />
        </TouchableOpacity>
      </View>

      {/* Cartão Arredondado do Conteúdo Principal */}
      <View style={styles.cardContainer}>
        <ScrollView 
          showsVerticalScrollIndicator={false} 
          contentContainerStyle={styles.scrollContent}
        >
          {/* Seção 1: Fundadores */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Fundadores:</Text>
            <View style={styles.fundadoresRow}>
              {ongData.fundadores.map((fundador) => (
                <View key={fundador.id} style={styles.avatarWrapper}>
                  {fundador.fotoUrl ? (
                    <Image source={{ uri: fundador.fotoUrl }} style={styles.avatarImage} />
                  ) : (
                    <View style={styles.avatarPlaceholder}>
                      <Feather name="user" size={26} color="#169BBA" />
                    </View>
                  )}
                </View>
              ))}
            </View>
          </View>

          {/* Seção 2: Galeria de Fotos */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Fotos:</Text>
            
            {ongData.fotosGaleria.length > 0 ? (
              <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.galeriaScroll}>
                {ongData.fotosGaleria.map((foto, index) => (
                  <Image key={index} source={{ uri: foto }} style={styles.fotoItem} />
                ))}
              </ScrollView>
            ) : (
              <View style={styles.fotoPlaceholderCard}>
                <Feather name="image" size={42} color="#B0C4DE" />
                <Text style={styles.fotoPlaceholderText}>Nenhuma foto cadastrada ainda</Text>
              </View>
            )}
          </View>

          {/* Seção 3: Metas da Semana */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Metas da Semana:</Text>

            <View style={styles.metaCard}>
              <Text style={styles.metaTitle}>{ongData.metaSemanal.titulo}</Text>

              {/* Barra de Progresso Customizada */}
              <View style={styles.progressBarBackground}>
                <View style={[styles.progressBarFill, { width: `${porcentagemMeta}%` }]} />
              </View>

              {/* Porcentagem e Botão de Ação alinhados */}
              <View style={styles.metaFooterRow}>
                <Text style={styles.porcentagemText}>{porcentagemMeta}% concluído</Text>

                <TouchableOpacity 
                  style={styles.irVerMetasBtn}
                  activeOpacity={0.8}
                  onPress={() => router.push('/metas' as any)}
                >
                  <Text style={styles.irVerMetasText}>ir ver metas</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </ScrollView>
      </View>

      {/* Componente AccountMenu Integrado */}
      <AccountMenu 
        visible={menuVisible} 
        onClose={() => setMenuVisible(false)} 
        userType="voluntario"
      />
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
    paddingTop: 15,
    paddingBottom: 15,
  },
  backBtn: {
    padding: 4,
  },
  profileCircle: {
    padding: 2,
  },
  innerProfileCircle: {
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: '#FFF',
  },
  cardContainer: {
    flex: 1,
    backgroundColor: '#FFF',
    borderTopLeftRadius: 35,
    borderTopRightRadius: 35,
    paddingHorizontal: 25,
    paddingTop: 25,
  },
  scrollContent: {
    paddingBottom: 30,
    gap: 28,
  },
  section: {
    width: '100%',
  },
  sectionTitle: {
    fontSize: 15,
    color: '#555',
    fontWeight: '600',
    marginBottom: 12,
  },
  fundadoresRow: {
    flexDirection: 'row',
    gap: 16,
    alignItems: 'center',
  },
  avatarWrapper: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 4,
    elevation: 2,
  },
  avatarPlaceholder: {
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: '#E0F2F7',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1.5,
    borderColor: '#BCE3EA',
  },
  avatarImage: {
    width: 56,
    height: 56,
    borderRadius: 28,
  },
  galeriaScroll: {
    gap: 12,
  },
  fotoItem: {
    width: 120,
    height: 90,
    borderRadius: 15,
  },
  fotoPlaceholderCard: {
    width: '100%',
    height: 110,
    borderRadius: 20,
    backgroundColor: '#F7FAFC',
    borderWidth: 1.5,
    borderColor: '#E2E8F0',
    borderStyle: 'dashed',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 6,
  },
  fotoPlaceholderText: {
    fontSize: 12,
    color: '#A0AEC0',
  },
  metaCard: {
    backgroundColor: '#F8FDFF',
    borderRadius: 20,
    borderWidth: 1.5,
    borderColor: '#D0ECF3',
    padding: 16,
  },
  metaTitle: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#222',
    textAlign: 'center',
    marginBottom: 12,
  },
  progressBarBackground: {
    width: '100%',
    height: 24,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#169BBA',
    backgroundColor: '#FFF',
    overflow: 'hidden',
    padding: 2,
  },
  progressBarFill: {
    height: '100%',
    backgroundColor: '#169BBA',
    borderRadius: 10,
  },
  metaFooterRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 12,
  },
  porcentagemText: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#169BBA',
  },
  irVerMetasBtn: {
    backgroundColor: '#DDF0F5',
    paddingVertical: 7,
    paddingHorizontal: 16,
    borderRadius: 12,
  },
  irVerMetasText: {
    color: '#169BBA',
    fontSize: 12,
    fontWeight: '700',
  },
});