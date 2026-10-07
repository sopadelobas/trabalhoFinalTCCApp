import { Ionicons } from '@expo/vector-icons';
import { useLocalSearchParams, useRouter } from 'expo-router';
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

export default function DoacaoFinalizarScreen() {
  const router = useRouter();
  const { openMenu } = useMenu();
  const params = useLocalSearchParams<{ itemNome: string; valor: string }>();

  const [tipoPagamento, setTipoPagamento] = useState<'dinheiro' | 'material'>('dinheiro');
  const [quantidade, setQuantidade] = useState<number>(1);
  const valorUnitario = Number(params.valor) || 35.0;

  const handleBack = () => {
    if (router.canGoBack()) {
      router.back();
    } else {
      router.push('/pedidos-ong');
    }
  };

  const handleFinalizar = () => {
    if (tipoPagamento === 'dinheiro') {
      router.push({
        pathname: '/doacao-pagamento',
        params: {
          total: (valorUnitario * quantidade).toFixed(2),
          itemNome: params.itemNome,
        },
      });
    } else {
      // Se for entrega do material em mãos / delivery
      router.push({
        pathname: '/doacao-delivery',
        params: {
          itemNome: params.itemNome,
          qtd: quantidade,
        },
      });
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

      <Text style={styles.headerTitle}>FINALIZE SUA DOAÇÃO!</Text>

      <View style={styles.whiteCard}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.scrollContent}
        >
          {/* Escolha do Pagamento / Tipo */}
          <Text style={styles.fieldLabel}>FORMA DE DOAÇÃO</Text>
          <View style={styles.selectorRow}>
            <TouchableOpacity
              style={[
                styles.selectOption,
                tipoPagamento === 'dinheiro' && styles.selectOptionActive,
              ]}
              onPress={() => setTipoPagamento('dinheiro')}
            >
              <Ionicons
                name="cash-outline"
                size={20}
                color={tipoPagamento === 'dinheiro' ? '#FFF' : '#169BBA'}
              />
              <Text
                style={[
                  styles.selectOptionText,
                  tipoPagamento === 'dinheiro' && styles.selectOptionTextActive,
                ]}
              >
                Dinheiro (PIX/Boleto)
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[
                styles.selectOption,
                tipoPagamento === 'material' && styles.selectOptionActive,
              ]}
              onPress={() => setTipoPagamento('material')}
            >
              <Ionicons
                name="cube-outline"
                size={20}
                color={tipoPagamento === 'material' ? '#FFF' : '#169BBA'}
              />
              <Text
                style={[
                  styles.selectOptionText,
                  tipoPagamento === 'material' && styles.selectOptionTextActive,
                ]}
              >
                Material (Delivery)
              </Text>
            </TouchableOpacity>
          </View>

          {/* Seleção de Quantidade */}
          <Text style={styles.fieldLabel}>QUANTIDADE</Text>
          <View style={styles.quantidadeContainer}>
            <TouchableOpacity
              style={styles.qtdBtn}
              onPress={() => setQuantidade((prev) => Math.max(1, prev - 1))}
            >
              <Text style={styles.qtdBtnText}>-</Text>
            </TouchableOpacity>

            <Text style={styles.qtdText}>{quantidade}</Text>

            <TouchableOpacity
              style={styles.qtdBtn}
              onPress={() => setQuantidade((prev) => prev + 1)}
            >
              <Text style={styles.qtdBtnText}>+</Text>
            </TouchableOpacity>
          </View>

          {/* Total */}
          {tipoPagamento === 'dinheiro' && (
            <View style={styles.totalBox}>
              <Text style={styles.totalLabel}>
                TOTAL DA DOAÇÃO: R$ {(valorUnitario * quantidade).toFixed(2)}
              </Text>
            </View>
          )}

          {/* Botão Finalizar */}
          <TouchableOpacity style={styles.btnFinalizar} onPress={handleFinalizar}>
            <Text style={styles.btnFinalizarText}>FINALIZAR!</Text>
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
    marginVertical: 20,
  },
  whiteCard: {
    flex: 1,
    backgroundColor: '#FFF',
    borderTopLeftRadius: 35,
    borderTopRightRadius: 35,
    paddingHorizontal: 25,
    paddingTop: 35,
    justifyContent: 'space-between',
  },
  scrollContent: {
    alignItems: 'center',
    gap: 16,
  },
  fieldLabel: {
    color: '#169BBA',
    fontSize: 13,
    fontWeight: 'bold',
    alignSelf: 'flex-start',
  },
  selectorRow: {
    flexDirection: 'row',
    gap: 10,
    width: '100%',
  },
  selectOption: {
    flex: 1,
    borderWidth: 1.5,
    borderColor: '#169BBA',
    borderRadius: 15,
    paddingVertical: 12,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 6,
    backgroundColor: '#FFF',
  },
  selectOptionActive: {
    backgroundColor: '#169BBA',
  },
  selectOptionText: {
    color: '#169BBA',
    fontSize: 12,
    fontWeight: 'bold',
  },
  selectOptionTextActive: {
    color: '#FFF',
  },
  quantidadeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1.5,
    borderColor: '#169BBA',
    borderRadius: 15,
    width: '100%',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 8,
  },
  qtdBtn: {
    paddingHorizontal: 15,
    paddingVertical: 5,
  },
  qtdBtnText: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#169BBA',
  },
  qtdText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  totalBox: {
    marginTop: 15,
  },
  totalLabel: {
    color: '#169BBA',
    fontSize: 15,
    fontWeight: 'bold',
  },
  btnFinalizar: {
    backgroundColor: '#169BBA',
    borderRadius: 20,
    width: '80%',
    paddingVertical: 14,
    alignItems: 'center',
    marginTop: 25,
  },
  btnFinalizarText: {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 15,
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