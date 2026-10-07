import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
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

interface PedidoNecessidade {
  id: string;
  item: string;
  valorEstimado?: number;
}

export default function DoacaoPedidosScreen() {
  const router = useRouter();
  const { openMenu } = useMenu();

  // Exemplo de lista de necessidades trazidas da ONG
  const pedidos: PedidoNecessidade[] = [
    { id: '1', item: '2KG de ração para cachorro filhote', valorEstimado: 35.0 },
    { id: '2', item: '10 caixas de preditabs\n(Anti-inflamatório)', valorEstimado: 120.0 },
    { id: '3', item: 'Mantas/Cobertas', valorEstimado: 50.0 },
  ];

  const handleBack = () => {
    if (router.canGoBack()) {
      router.back();
    } else {
      router.push('/home-v');
    }
  };

  const handleSelecionarPedido = (pedido: PedidoNecessidade) => {
    // Avança para a tela de finalização passando o item escolhido
    router.push({
      pathname: '/doacao-finalizar',
      params: { itemId: pedido.id, itemNome: pedido.item, valor: pedido.valorEstimado },
    });
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

      {/* Card Branco Principal */}
      <View style={styles.whiteCard}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.scrollContent}
        >
          {/* Box de Imagem / Banner da ONG */}
          <View style={styles.ongBannerBox}>
            <View style={styles.bannerImagePlaceholder}>
              <Ionicons name="image-outline" size={60} color="#777" />
            </View>
            <TouchableOpacity
              style={styles.conhecerOngBtn}
              onPress={() => router.push('/informacoes-ong')}
            >
              <Text style={styles.conhecerOngText}>conhecer a ong?</Text>
            </TouchableOpacity>
          </View>

          {/* Título da Seção */}
          <Text style={styles.sectionTitle}>ESCOLHA UM PEDIDO</Text>

          {/* Lista de Pedidos */}
          <View style={styles.pedidosContainer}>
            {pedidos.map((p) => (
              <TouchableOpacity
                key={p.id}
                style={styles.pedidoBtn}
                onPress={() => handleSelecionarPedido(p)}
              >
                <Text style={styles.pedidoBtnText}>{p.item}</Text>
              </TouchableOpacity>
            ))}
          </View>
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
  whiteCard: {
    flex: 1,
    backgroundColor: '#FFF',
    borderTopLeftRadius: 35,
    borderTopRightRadius: 35,
    paddingHorizontal: 20,
    paddingTop: 25,
    justifyContent: 'space-between',
    marginTop: 10,
  },
  scrollContent: {
    paddingBottom: 20,
    alignItems: 'center',
  },
  ongBannerBox: {
    width: '100%',
    height: 160,
    backgroundColor: '#D9E8ED',
    borderRadius: 20,
    borderWidth: 1.5,
    borderColor: '#169BBA',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    marginBottom: 25,
  },
  bannerImagePlaceholder: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  conhecerOngBtn: {
    position: 'absolute',
    bottom: 12,
    right: 15,
  },
  conhecerOngText: {
    color: '#000',
    fontSize: 12,
    fontWeight: 'bold',
    textDecorationLine: 'underline',
  },
  sectionTitle: {
    color: '#169BBA',
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  pedidosContainer: {
    width: '100%',
    gap: 15,
  },
  pedidoBtn: {
    width: '100%',
    borderWidth: 1.5,
    borderColor: '#169BBA',
    borderRadius: 20,
    paddingVertical: 14,
    paddingHorizontal: 15,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFF',
  },
  pedidoBtnText: {
    color: '#169BBA',
    fontSize: 14,
    fontWeight: 'bold',
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