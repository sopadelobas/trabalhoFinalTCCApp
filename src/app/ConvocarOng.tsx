import React, { useState } from 'react';
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
import { Feather, FontAwesome5, MaterialCommunityIcons } from '@expo/vector-icons';

interface OngItem {
  id: string;
  name: string;
  iconName: string;
  iconType: 'feather' | 'fontawesome' | 'material';
}

const ONGS_SUGESTOES: OngItem[] = [
  { id: '1', name: '@AUmigos', iconName: 'dog', iconType: 'fontawesome' },
  { id: '2', name: '@Por_vocÊ', iconName: 'baby', iconType: 'fontawesome' },
  { id: '3', name: '@VIVA!', iconName: 'virus', iconType: 'fontawesome' },
];

export default function ConvocarONGScreen() {
  const [searchText, setSearchText] = useState('');

  const renderIcon = (item: OngItem) => {
    switch (item.iconType) {
      case 'fontawesome':
        return <FontAwesome5 name={item.iconName} size={48} color="#2B3A42" />;
      case 'material':
        return <MaterialCommunityIcons name={item.iconName as any} size={48} color="#2B3A42" />;
      default:
        return <Feather name="grid" size={48} color="#2B3A42" />;
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#1A93B4" />

      {/* Topo Azul */}
      <View style={styles.header}>
        <View style={styles.headerTop}>
          <TouchableOpacity activeOpacity={0.7}>
            <Feather name="chevron-left" size={28} color="#FFF" />
          </TouchableOpacity>
          <View style={styles.avatarPlaceholder} />
        </View>

        <Text style={styles.title}>Convocar ONG</Text>
      </View>

      {/* Conteúdo Principal com Curva do Fundo Branco */}
      <View style={styles.contentContainer}>
        {/* Barra de Pesquisa */}
        <View style={styles.searchContainer}>
          <Feather name="search" size={22} color="#1A1A1A" style={styles.searchIcon} />
          <TextInput
            style={styles.searchInput}
            placeholder="Buscar ONG´S ..."
            placeholderTextColor="#888"
            value={searchText}
            onChangeText={setSearchText}
          />
        </View>

        <Text style={styles.sectionTitle}>Sugestões</Text>

        {/* Lista de Sugestões */}
        <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.listContainer}>
          {ONGS_SUGESTOES.map((item) => (
            <TouchableOpacity key={item.id} style={styles.ongCardItem} activeOpacity={0.8}>
              <View style={styles.iconBox}>
                {renderIcon(item)}
              </View>
              <Text style={styles.ongName}>{item.name}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1A93B4', // Cor azul do topo
  },
  header: {
    paddingHorizontal: 20,
    paddingTop: 10,
    paddingBottom: 40,
    backgroundColor: '#1A93B4',
  },
  headerTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  avatarPlaceholder: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#FFF',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFF',
    textAlign: 'center',
    marginBottom: 10,
  },
  contentContainer: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    paddingHorizontal: 24,
    paddingTop: 24,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1.5,
    borderColor: '#1A93B4',
    borderRadius: 25,
    paddingHorizontal: 16,
    height: 48,
    marginBottom: 20,
    backgroundColor: '#FFF',
  },
  searchIcon: {
    marginRight: 10,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    color: '#333',
    fontWeight: '500',
  },
  sectionTitle: {
    fontSize: 14,
    color: '#555',
    marginBottom: 16,
    fontWeight: '500',
  },
  listContainer: {
    paddingBottom: 20,
  },
  ongCardItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  iconBox: {
    width: 90,
    height: 90,
    backgroundColor: '#BCE3EA', // Azul claro dos cartões
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 20,
  },
  ongName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#2B3A42',
  },
});