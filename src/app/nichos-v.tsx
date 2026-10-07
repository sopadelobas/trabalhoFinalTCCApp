import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { useMenu } from '../components/context/MenuContext';

interface ONG {
  id: string;
  nome: string;
  nicho: string;
  descricao: string;
  icone: keyof typeof Ionicons.glyphMap;
}

const NICHOS = [
  { id: 'todos', label: 'Todos', icon: 'grid-outline' },
  { id: 'animais', label: 'Causa Animal', icon: 'paw-outline' },
  { id: 'fome', label: 'Combate à Fome', icon: 'restaurant-outline' },
  { id: 'idosos', label: 'Apoio a Idosos', icon: 'body-outline' },
  { id: 'criancas', label: 'Infância e Juventude', icon: 'people-outline' },
  { id: 'saude', label: 'Saúde e Doenças', icon: 'medkit-outline' },
];

const ONGS_MOCK: ONG[] = [
  {
    id: '1',
    nome: '@PatasUnidas',
    nicho: 'animais',
    descricao: 'Resgate e acolhimento de cães e gatos em situação de rua.',
    icone: 'paw-outline',
  },
  {
    id: '2',
    nome: '@SopaSolidaria',
    nicho: 'fome',
    descricao: 'Distribuição de marmitas e cestas básicas para famílias carentes.',
    icone: 'restaurant-outline',
  },
 
];

export default function NichosVoluntarioScreen() {
  const router = useRouter();
  const { openMenu } = useMenu();

  const [nichoSelecionado, setNichoSelecionado] = useState('todos');
  const [busca, setBusca] = useState('');

  const handleBack = () => {
    if (router.canGoBack()) {
      router.back();
    } else {
      router.push('/home-v');
    }
  };

  const ongsFiltradas = ONGS_MOCK.filter((ong) => {
    const atendeNicho =
      nichoSelecionado === 'todos' || ong.nicho === nichoSelecionado;
    const atendeBusca =
      ong.nome.toLowerCase().includes(busca.toLowerCase()) ||
      ong.descricao.toLowerCase().includes(busca.toLowerCase());

    return atendeNicho && atendeBusca;
  });

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

      {/* Título */}
      <Text style={styles.headerTitle}>Como vai ajudar hoje?</Text>

      {/* Card Branco */}
      <View style={styles.whiteCard}>
        {/* Campo de Pesquisa */}
        <View style={styles.searchContainer}>
          <Ionicons name="search-outline" size={20} color="#169BBA" />
          <TextInput
            style={styles.searchInput}
            placeholder="Pesquisar ONG por nome ou causa..."
            placeholderTextColor="#999"
            value={busca}
            onChangeText={setBusca}
          />
          {busca !== '' && (
            <TouchableOpacity onPress={() => setBusca('')}>
              <Ionicons name="close-circle" size={18} color="#999" />
            </TouchableOpacity>
          )}
        </View>

        {/* Seleção de Nichos */}
        <Text style={styles.sectionLabel}>Selecione o Nicho:</Text>
        <View style={styles.chipsWrapper}>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.chipsContainer}
          >
            {NICHOS.map((item) => {
              const isSelected = nichoSelecionado === item.id;
              return (
                <TouchableOpacity
                  key={item.id}
                  style={[
                    styles.chipBtn,
                    isSelected && styles.chipBtnSelected,
                  ]}
                  onPress={() => setNichoSelecionado(item.id)}
                >
                  <Ionicons
                    name={item.icon as any}
                    size={18}
                    color={isSelected ? '#FFF' : '#169BBA'}
                  />
                  <Text
                    style={[
                      styles.chipBtnText,
                      isSelected && styles.chipBtnTextSelected,
                    ]}
                  >
                    {item.label}
                  </Text>
                </TouchableOpacity>
              );
            })}
          </ScrollView>
        </View>

        {/* Lista de ONGs */}
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.scrollContent}
        >
          {ongsFiltradas.length > 0 ? (
            ongsFiltradas.map((ong) => (
              <View key={ong.id} style={styles.ongCard}>
                <View style={styles.ongHeader}>
                  <View style={styles.iconCircle}>
                    <Ionicons name={ong.icone} size={22} color="#169BBA" />
                  </View>
                  <Text style={styles.ongName}>{ong.nome}</Text>
                </View>

                <Text style={styles.ongDesc}>{ong.descricao}</Text>

                <TouchableOpacity
                  style={styles.btnVerOng}
                  onPress={() => router.push('/pedidos-ong')}
                >
                  <Text style={styles.btnVerOngText}>PEDIDOS</Text>
                  <Ionicons name="arrow-forward" size={16} color="#FFF" />
                </TouchableOpacity>
              </View>
            ))
          ) : (
            <View style={styles.emptyContainer}>
              <Ionicons name="search-outline" size={40} color="#CCC" />
              <Text style={styles.emptyText}>
                Nenhuma ONG encontrada para este nicho ou pesquisa.
              </Text>
            </View>
          )}
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
    marginVertical: 8,
  },
  whiteCard: {
    flex: 1,
    backgroundColor: '#FFF',
    borderTopLeftRadius: 35,
    borderTopRightRadius: 35,
    paddingHorizontal: 20,
    paddingTop: 20, // Reduzido para aproximar tudo do topo
    justifyContent: 'space-between',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1.5,
    borderColor: '#169BBA',
    borderRadius: 15,
    paddingHorizontal: 12,
    paddingVertical: 8,
    gap: 8,
  },
  searchInput: {
    flex: 1,
    fontSize: 14,
    color: '#333',
  },
  sectionLabel: {
    fontSize: 13,
    fontWeight: 'bold',
    color: '#169BBA',
    marginTop: 10, // Reduzido de 15 para 10
    marginBottom: 6, // Reduzido de 8 para 6
  },
  chipsWrapper: {
    minHeight: 40,
    maxHeight: 45,
    marginBottom: 8, // Margem pequena antes da lista de ONGs
  },
  chipsContainer: {
    flexDirection: 'row',
    gap: 8,
    alignItems: 'center',
  },
  chipBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1.5,
    borderColor: '#169BBA',
    borderRadius: 20,
    paddingHorizontal: 14,
    paddingVertical: 6,
    gap: 6,
    backgroundColor: '#FFF',
  },
  chipBtnSelected: {
    backgroundColor: '#169BBA',
  },
  chipBtnText: {
    color: '#169BBA',
    fontWeight: 'bold',
    fontSize: 12,
  },
  chipBtnTextSelected: {
    color: '#FFF',
  },
  scrollContent: {
    paddingTop: 5, // Aproxima os cards de ONGs dos botões de nicho
    paddingBottom: 15,
    gap: 12,
  },
  ongCard: {
    borderWidth: 1.5,
    borderColor: '#169BBA',
    borderRadius: 20,
    padding: 15,
    backgroundColor: '#FAFAFA',
    gap: 8,
  },
  ongHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  iconCircle: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: '#E0F7FA',
    justifyContent: 'center',
    alignItems: 'center',
  },
  ongName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#169BBA',
  },
  ongDesc: {
    fontSize: 13,
    color: '#555',
    lineHeight: 18,
  },
  btnVerOng: {
    backgroundColor: '#169BBA',
    borderRadius: 12,
    paddingVertical: 8,
    paddingHorizontal: 14,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    alignSelf: 'flex-end',
  },
  btnVerOngText: {
    color: '#FFF',
    fontSize: 12,
    fontWeight: 'bold',
  },
  emptyContainer: {
    alignItems: 'center',
    paddingVertical: 20,
    gap: 10,
  },
  emptyText: {
    color: '#888',
    fontSize: 13,
    textAlign: 'center',
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