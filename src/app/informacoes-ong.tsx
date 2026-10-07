import { Ionicons } from '@expo/vector-icons';
import { useLocalSearchParams, useRouter } from 'expo-router';
import React, { useEffect, useState } from 'react';
import {
  ActivityIndicator,
  Alert,
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { useMenu } from '../components/context/MenuContext';

// 1. Interface que define a estrutura dos dados vindos da API/Backend
export interface Fundador {
  id: string;
  nome: string;
  fotoUrl?: string;
}

export interface MetaSemana {
  id: string;
  titulo: string;
  quantidadeTotal: number;
  quantidadeAtual: number;
}

export interface OngDetalhes {
  id: string;
  nome: string;
  identificador: string; // Ex: @ONG_Unidos
  subtitulo: string; // Ex: Lugar certo: ONG
  fotoPerfilUrl?: string;
  sobre: string;
  fundadores: Fundador[];
  fotosGaleria: string[]; // URLs das imagens da galeria
  metaAtual?: MetaSemana;
}

export default function InformacoesOngScreen() {
  const router = useRouter();
  const { openMenu } = useMenu();

  // Recebe o ID da ONG passado pela rota (ex: router.push({ pathname: '/informacoes-ong', params: { id: '123' } }))
  const { id } = useLocalSearchParams<{ id: string }>();

  const [ong, setOng] = useState<OngDetalhes | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  // 2. Requisição ao backend para buscar os dados da ONG
  useEffect(() => {
    async function carregarDadosOng() {
      try {
        setLoading(true);

        // Substitua a URL abaixo pelo endpoint da sua API no backend
        // const response = await fetch(`https://sua-api.com/ongs/${id}`);
        // const data = await response.json();
        // setOng(data);

        // --- SIMULAÇÃO DE RESPOSTA DO BACKEND ---
        await new Promise((resolve) => setTimeout(resolve, 800)); // Simula delay de rede

        const mockData: OngDetalhes = {
          id: id || '1',
          nome: 'ONG Unidos',
          identificador: '@ONG_Unidos',
          subtitulo: 'Lugar certo: ONG',
          fotoPerfilUrl: '', // URL da foto do perfil (se houver)
          sobre:
            'Nossa ONG trabalha para transformar vidas e fortalecer a comunidade por meio de ações sociais, apoio às pessoas em situação de vulnerabilidade e projetos que promovem educação, inclusão e cidadania.',
          fundadores: [
            { id: '1', nome: 'Camila' },
            { id: '2', nome: 'João' },
            { id: '3', nome: 'Maria' },
          ],
          fotosGaleria: [], // Array de URLs das fotos de projetos
          metaAtual: {
            id: '101',
            titulo: '100 sacos de ração',
            quantidadeTotal: 100,
            quantidadeAtual: 14,
          },
        };

        setOng(mockData);
      } catch (error) {
        Alert.alert('Erro', 'Não foi possível carregar as informações da ONG.');
      } finally {
        setLoading(false);
      }
    }

    if (id) {
      carregarDadosOng();
    } else {
      // Caso acesse sem ID, carrega dados padrão/mock
      carregarDadosOng();
    }
  }, [id]);

  const handleBack = () => {
    if (router.canGoBack()) {
      router.back();
    } else {
      router.push('/nichos-v');
    }
  };

  // Cálculo da porcentagem da meta dinamicamente com base nos dados do backend
  const porcentagemMeta =
    ong?.metaAtual && ong.metaAtual.quantidadeTotal > 0
      ? Math.min(
          100,
          Math.round(
            (ong.metaAtual.quantidadeAtual / ong.metaAtual.quantidadeTotal) * 100
          )
        )
      : 0;

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

      {/* Se estiver carregando os dados do backend */}
      {loading ? (
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" color="#FFF" />
          <Text style={styles.loadingText}>Carregando informações...</Text>
        </View>
      ) : ong ? (
        <>
          {/* Header com os dados vindos do Backend */}
          <View style={styles.headerProfile}>
            <View style={styles.avatarCircle}>
              {ong.fotoPerfilUrl ? (
                <Image
                  source={{ uri: ong.fotoPerfilUrl }}
                  style={styles.avatarImage}
                />
              ) : (
                <Ionicons name="business-outline" size={46} color="#169BBA" />
              )}
            </View>
            <Text style={styles.ongName}>{ong.nome}</Text>
            <Text style={styles.ongSubtext}>{ong.subtitulo}</Text>
          </View>

          {/* Card Branco com Informações Dinâmicas */}
          <View style={styles.whiteCard}>
            <ScrollView
              showsVerticalScrollIndicator={false}
              contentContainerStyle={styles.scrollContent}
            >
              {/* Seção: Sobre a ONG */}
              <Text style={styles.sectionTitle}>Sobre a ONG:</Text>
              <View style={styles.infoBox}>
                <Text style={styles.infoText}>{ong.sobre}</Text>
              </View>

              {/* Seção: Fundadores */}
              {ong.fundadores && ong.fundadores.length > 0 && (
                <>
                  <Text style={styles.sectionTitle}>Fundadores:</Text>
                  <View style={styles.fundadoresRow}>
                    {ong.fundadores.map((fundador) => (
                      <View key={fundador.id} style={styles.fundadorItem}>
                        <View style={styles.fundadorAvatar}>
                          {fundador.fotoUrl ? (
                            <Image
                              source={{ uri: fundador.fotoUrl }}
                              style={styles.fundadorImage}
                            />
                          ) : (
                            <Ionicons name="person-outline" size={22} color="#169BBA" />
                          )}
                        </View>
                        <Text style={styles.fundadorNome}>{fundador.nome}</Text>
                      </View>
                    ))}
                  </View>
                </>
              )}

              {/* Seção: Fotos da Galeria */}
              <Text style={styles.sectionTitle}>Fotos:</Text>
              <View style={styles.galleryRow}>
                {ong.fotosGaleria && ong.fotosGaleria.length > 0 ? (
                  ong.fotosGaleria.map((url, index) => (
                    <Image
                      key={index}
                      source={{ uri: url }}
                      style={styles.photoImage}
                    />
                  ))
                ) : (
                  <>
                    <View style={styles.photoPlaceholder}>
                      <Ionicons name="image-outline" size={32} color="#B0BEC5" />
                    </View>
                    <View style={styles.photoPlaceholder}>
                      <Ionicons name="image-outline" size={32} color="#B0BEC5" />
                    </View>
                  </>
                )}
              </View>

              {/* Seção: Metas da Semana */}
              {ong.metaAtual && (
                <>
                  <Text style={styles.sectionTitle}>Metas da Semana:</Text>
                  <View style={styles.metaBox}>
                    <Text style={styles.metaTitle}>{ong.metaAtual.titulo}</Text>
                    <View style={styles.progressBg}>
                      <View
                        style={[
                          styles.progressFill,
                          { width: `${porcentagemMeta}%` },
                        ]}
                      />
                    </View>
                    <View style={styles.metaFooterRow}>
                      <Text style={styles.percentText}>{porcentagemMeta}%</Text>
                      <TouchableOpacity
                        style={styles.btnVerMetas}
                        onPress={() =>
                          router.push({
                            pathname: '/metas',
                            params: { ongId: ong.id },
                          })
                        }
                      >
                        <Text style={styles.btnVerMetasText}>IR VER METAS</Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                </>
              )}
            </ScrollView>

            <View style={styles.footer}>
              <Text style={styles.footerText}>Todos os direitos reservados ©</Text>
            </View>
          </View>
        </>
      ) : null}
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
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 12,
  },
  loadingText: {
    color: '#FFF',
    fontSize: 14,
    fontWeight: '500',
  },
  headerProfile: {
    alignItems: 'center',
    marginVertical: 10,
  },
  avatarCircle: {
    width: 76,
    height: 76,
    borderRadius: 38,
    backgroundColor: '#FFF',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 6,
    overflow: 'hidden',
  },
  avatarImage: {
    width: '100%',
    height: '100%',
  },
  ongName: {
    color: '#FFF',
    fontSize: 20,
    fontWeight: 'bold',
  },
  ongSubtext: {
    color: '#E0F7FA',
    fontSize: 12,
  },
  whiteCard: {
    flex: 1,
    backgroundColor: '#FFF',
    borderTopLeftRadius: 35,
    borderTopRightRadius: 35,
    paddingHorizontal: 20,
    paddingTop: 20,
    justifyContent: 'space-between',
  },
  scrollContent: {
    paddingBottom: 20,
    gap: 12,
  },
  sectionTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#666',
    marginTop: 4,
  },
  infoBox: {
    borderWidth: 1.5,
    borderColor: '#169BBA',
    borderRadius: 18,
    padding: 14,
    backgroundColor: '#FAFAFA',
  },
  infoText: {
    fontSize: 13,
    color: '#444',
    lineHeight: 18,
    textAlign: 'justify',
  },
  fundadoresRow: {
    flexDirection: 'row',
    gap: 14,
  },
  fundadorItem: {
    alignItems: 'center',
    gap: 4,
  },
  fundadorAvatar: {
    width: 46,
    height: 46,
    borderRadius: 23,
    backgroundColor: '#E0F7FA',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#169BBA',
    overflow: 'hidden',
  },
  fundadorImage: {
    width: '100%',
    height: '100%',
  },
  fundadorNome: {
    fontSize: 11,
    color: '#555',
  },
  galleryRow: {
    flexDirection: 'row',
    gap: 12,
  },
  photoImage: {
    width: 90,
    height: 80,
    borderRadius: 12,
  },
  photoPlaceholder: {
    width: 90,
    height: 80,
    borderRadius: 12,
    backgroundColor: '#F0F4F8',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#E0E0E0',
  },
  metaBox: {
    gap: 8,
    marginTop: 4,
  },
  metaTitle: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
  },
  progressBg: {
    width: '100%',
    height: 16,
    backgroundColor: '#E0E0E0',
    borderRadius: 8,
    overflow: 'hidden',
  },
  progressFill: {
    height: '100%',
    backgroundColor: '#169BBA',
  },
  metaFooterRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  percentText: {
    color: '#169BBA',
    fontSize: 13,
    fontWeight: 'bold',
  },
  btnVerMetas: {
    backgroundColor: '#169BBA',
    borderRadius: 15,
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  btnVerMetasText: {
    color: '#FFF',
    fontSize: 11,
    fontWeight: 'bold',
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