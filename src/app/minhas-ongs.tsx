// src/app/minhas-ongs.tsx

import React, { useState } from 'react';
import {
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

interface OngItem {
  id: string;
  handle: string;
  descricao: string;
}

export default function MinhasOngsScreen() {
  const router = useRouter();
  const [menuVisible, setMenuVisible] = useState(false);

  // Lista das ONGs conforme o layout
  const ongsList: OngItem[] = [
    {
      id: '1',
      handle: '@ONG_Unidos',
      descricao:
        'ONG de auxílio e ajuda para crianças e adolescentes em insegurança alimentar.',
    },
    {
      id: '2',
      handle: '@JUNTOS',
      descricao:
        'ONG de auxílio e ajuda para idosos abandonados.\nVenha nos conhecer!!',
    },
  ];

  const handleVoltar = () => {
    if (router.canGoBack()) {
      router.back();
    } else {
      router.replace('/home-v' as any);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* TopBar com botão Voltar e círculo do perfil */}
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

      {/* Emblema com o título "ONG's de CAMILA" */}
      <View style={styles.titleBadgeContainer}>
        <View style={styles.titleBadge}>
          <Text style={styles.titleBadgeText}>ONG's de CAMILA</Text>
        </View>
      </View>

      {/* Conteúdo Principal (Cartão Branco) */}
      <View style={styles.cardContainer}>
        <ScrollView 
          showsVerticalScrollIndicator={false} 
          contentContainerStyle={styles.scrollContent}
        >
          {ongsList.map((item) => (
            <View key={item.id} style={styles.ongWrapper}>
              <Text style={styles.ongHandle}>{item.handle}</Text>

              <View style={styles.ongCard}>
                {/* Placeholder de Imagem da ONG */}
                <View style={styles.imagePlaceholder}>
                  <Feather name="image" size={48} color="#757575" />
                </View>

                {/* Informações da ONG */}
                <View style={styles.infoContainer}>
                  <Text style={styles.descriptionText}>
                    <Text style={styles.boldLabel}>Descrição: </Text>
                    {item.descricao}
                  </Text>

                  {/* Botões de Ação na parte inferior do card */}
                  <View style={styles.actionsRow}>
                    <TouchableOpacity 
                      style={styles.chatBtn}
                      activeOpacity={0.7}
                      onPress={() => router.push('/dm-ong' as any)}
                    >
                      <Text style={styles.chatBtnText}>chat</Text>
                    </TouchableOpacity>

                    <TouchableOpacity 
                      style={styles.irBtn}
                      activeOpacity={0.7}
                      onPress={() => router.push('/dm-ong' as any)}
                    >
                      <Text style={styles.irBtnText}>ir</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </View>
          ))}
        </ScrollView>
      </View>

      {/* Componente AccountMenu integrado */}
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
    paddingBottom: 10,
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
  titleBadgeContainer: {
    alignItems: 'center',
    marginVertical: 15,
  },
  titleBadge: {
    backgroundColor: '#FFF',
    paddingVertical: 10,
    paddingHorizontal: 25,
    borderRadius: 15,
  },
  titleBadgeText: {
    color: '#169BBA',
    fontSize: 16,
    fontWeight: 'bold',
    letterSpacing: 0.5,
  },
  cardContainer: {
    flex: 1,
    backgroundColor: '#FFF',
    borderTopLeftRadius: 35,
    borderTopRightRadius: 35,
    paddingHorizontal: 20,
    paddingTop: 25,
  },
  scrollContent: {
    paddingBottom: 30,
    gap: 20,
  },
  ongWrapper: {
    width: '100%',
  },
  ongHandle: {
    fontSize: 13,
    color: '#555',
    fontWeight: '600',
    marginBottom: 6,
    marginLeft: 5,
  },
  ongCard: {
    backgroundColor: '#D7EDF2',
    borderRadius: 20,
    padding: 15,
    flexDirection: 'row',
    gap: 12,
    alignItems: 'center',
  },
  imagePlaceholder: {
    width: 80,
    height: 80,
    borderWidth: 3,
    borderColor: '#757575',
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
  },
  infoContainer: {
    flex: 1,
    justifyContent: 'space-between',
    minHeight: 80,
  },
  descriptionText: {
    fontSize: 11,
    color: '#333',
    lineHeight: 15,
  },
  boldLabel: {
    fontWeight: 'bold',
  },
  actionsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 8,
  },
  chatBtn: {
    borderWidth: 1,
    borderColor: '#169BBA',
    borderRadius: 12,
    paddingHorizontal: 12,
    paddingVertical: 2,
    backgroundColor: '#FFF',
    minWidth: 48,
    alignItems: 'center',
  },
  chatBtnText: {
    color: '#169BBA',
    fontSize: 11,
    fontWeight: '600',
  },
  irBtn: {
    borderWidth: 1,
    borderColor: '#169BBA',
    borderRadius: 12,
    paddingHorizontal: 12,
    paddingVertical: 2,
    backgroundColor: '#FFF',
    minWidth: 32,
    alignItems: 'center',
  },
  irBtnText: {
    color: '#169BBA',
    fontSize: 11,
    fontWeight: '600',
  },
});