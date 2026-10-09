import React, { useState } from 'react';
import { useRouter } from 'expo-router';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
  StatusBar,
} from 'react-native';
import {
  Feather,
  FontAwesome5,
  MaterialCommunityIcons,
  Ionicons,
} from '@expo/vector-icons';

// Interface das ONGs
interface Ong {
  id: string;
  name: string;
  description: string;
  category: string;
  iconName: string;
  iconType: 'fontawesome' | 'material' | 'feather' | 'ionicons';
}

const ONGS_DATA: Ong[] = [
  {
    id: '1',
    name: '@PatasUnidas',
    description: 'Resgate e acolhimento de cães e gatos em situação de rua.',
    category: 'Causa Animal',
    iconName: 'paw',
    iconType: 'fontawesome',
  },
  {
    id: '2',
    name: '@SopaSolidaria',
    description: 'Distribuição de marmitas e cestas básicas para famílias carentes.',
    category: 'Combate à Fome',
    iconName: 'utensils',
    iconType: 'fontawesome',
  },
  {
    id: '3',
    name: '@ViverBemIdosos',
    description: 'Atividades recreativas e apoio médico para a terceira idade.',
    category: 'Apoio a Idosos',
    iconName: 'accessibility-outline',
    iconType: 'ionicons',
  },
  {
    id: '4',
    name: '@FuturoJovem',
    description: 'Cursos e oficinas gratuitas para jovens da periferia.',
    category: 'Infância e Juventude',
    iconName: 'people-outline',
    iconType: 'ionicons',
  },
];

const NICHOS = [
  { id: 'todos', label: 'Todos', icon: 'grid', iconType: 'feather' },
  { id: 'Causa Animal', label: 'Causa Animal', icon: 'paw', iconType: 'fontawesome' },
  { id: 'Combate à Fome', label: 'Combate à Fome', icon: 'utensils', iconType: 'fontawesome' },
  { id: 'Apoio a Idosos', label: 'Apoio a Idosos', icon: 'accessibility-outline', iconType: 'ionicons' },
  { id: 'Infância e Juventude', label: 'Infância e Juventude', icon: 'people-outline', iconType: 'ionicons' },
];

export default function BuscarOngsScreen() {
  const [searchText, setSearchText] = useState('');
  const [selectedNicho, setSelectedNicho] = useState('todos');
  const router = useRouter();

  // Filtra as ONGs por texto digitado e pelo nicho selecionado
  const filteredOngs = ONGS_DATA.filter((ong) => {
    const matchesSearch =
      ong.name.toLowerCase().includes(searchText.toLowerCase()) ||
      ong.description.toLowerCase().includes(searchText.toLowerCase());

    const matchesNicho =
      selectedNicho === 'todos' || ong.category === selectedNicho;

    return matchesSearch && matchesNicho;
  });

  const renderIcon = (type: string, name: string, color: string, size: number) => {
    switch (type) {
      case 'fontawesome':
        return <FontAwesome5 name={name} size={size} color={color} />;
      case 'ionicons':
        return <Ionicons name={name as any} size={size} color={color} />;
      default:
        return <Feather name={name as any} size={size} color={color} />;
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#FFF" />

      {/* 1. Barra de Pesquisa */}
      <View style={styles.searchContainer}>
        <Feather name="search" size={20} color="#169BBA" style={styles.searchIcon} />
        <TextInput
          style={styles.searchInput}
          placeholder="Pesquisar ONG por nome ou causa..."
          placeholderTextColor="#999"
          value={searchText}
          onChangeText={setSearchText}
        />
      </View>

      {/* 2. Seleção de Nichos */}
      <Text style={styles.nichoTitle}>Selecione o Nicho:</Text>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.nichosScroll}
      >
        {NICHOS.map((nicho) => {
          const isSelected = selectedNicho === nicho.id;
          return (
            <TouchableOpacity
              key={nicho.id}
              style={[styles.nichoChip, isSelected && styles.nichoChipSelected]}
              onPress={() => setSelectedNicho(nicho.id)}
              activeOpacity={0.7}
            >
              {renderIcon(
                nicho.iconType,
                nicho.icon,
                isSelected ? '#FFF' : '#169BBA',
                16
              )}
              <Text
                style={[
                  styles.nichoText,
                  isSelected && styles.nichoTextSelected,
                ]}
              >
                {nicho.label}
              </Text>
            </TouchableOpacity>
          );
        })}
      </ScrollView>

      {/* 3. Lista de Cartões de ONGs */}
      <ScrollView
        contentContainerStyle={styles.listContainer}
        showsVerticalScrollIndicator={false}
      >
        {filteredOngs.length > 0 ? (
          filteredOngs.map((ong) => (
            <View key={ong.id} style={styles.card}>
              {/* Nome da ONG com ícone do nicho */}
              <View style={styles.cardHeader}>
                {renderIcon(ong.iconType, ong.iconName, '#169BBA', 22)}
                <Text style={styles.ongName}>{ong.name}</Text>
              </View>

              {/* Descrição */}
              <Text style={styles.ongDescription}>{ong.description}</Text>

              {/* Botão PEDIDOS */}
                    <TouchableOpacity 
                  style={styles.pedidosBtn} 
                  activeOpacity={0.8}
                  onPress={() => router.push({
                    pathname: '/fazer-pedido', // Nome do ficheiro da nova tela
                    params: { ongId: ong.id, ongName: ong.name }
                  })}
                >
                 <Text style={styles.pedidosBtnText}>CONVOCAR →</Text>
                   </TouchableOpacity>
            </View>
          ))
        ) : (
          /* Mensagem caso não encontre nenhuma ONG */
          <View style={styles.emptyContainer}>
            <Feather name="alert-circle" size={48} color="#169BBA" />
            <Text style={styles.emptyText}>Nenhuma ONG encontrada</Text>
            <Text style={styles.emptySubtext}>
              Tente buscar por outro nome, causa ou altere o nicho selecionado.
            </Text>
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    paddingHorizontal: 16,
    paddingTop: 12,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1.5,
    borderColor: '#169BBA',
    borderRadius: 25,
    paddingHorizontal: 15,
    height: 46,
    marginBottom: 16,
  },
  searchIcon: {
    marginRight: 10,
  },
  searchInput: {
    flex: 1,
    fontSize: 14,
    color: '#333',
  },
  nichoTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#169BBA',
    marginBottom: 10,
  },
  nichosScroll: {
    paddingBottom: 16,
    gap: 8,
  },
  nichoChip: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1.5,
    borderColor: '#169BBA',
    borderRadius: 20,
    paddingHorizontal: 14,
    paddingVertical: 8,
    gap: 6,
    backgroundColor: '#FFF',
  },
  nichoChipSelected: {
    backgroundColor: '#169BBA',
  },
  nichoText: {
    color: '#169BBA',
    fontWeight: 'bold',
    fontSize: 13,
  },
  nichoTextSelected: {
    color: '#FFF',
  },
  listContainer: {
    paddingBottom: 24,
  },
  card: {
    borderWidth: 1.5,
    borderColor: '#169BBA',
    borderRadius: 20,
    padding: 16,
    marginBottom: 16,
    backgroundColor: '#FAFDFD',
  },
  cardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginBottom: 8,
  },
  ongName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#169BBA',
  },
  ongDescription: {
    fontSize: 13,
    color: '#555',
    lineHeight: 18,
    marginBottom: 12,
  },
  pedidosBtn: {
    alignSelf: 'flex-end',
    backgroundColor: '#169BBA',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 16,
    gap: 6,
  },
  pedidosBtnText: {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 12,
  },
  emptyContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 50,
  },
  emptyText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#169BBA',
    marginTop: 12,
  },
  emptySubtext: {
    fontSize: 13,
    color: '#777',
    textAlign: 'center',
    marginTop: 6,
    paddingHorizontal: 20,
  },
});