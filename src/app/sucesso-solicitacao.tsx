import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  SafeAreaView,
  StatusBar,
} from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useRouter, useLocalSearchParams } from 'expo-router';

export default function SucessoSolicitacaoScreen() {
  const router = useRouter();
  const params = useLocalSearchParams();
  const { ongName } = params; // Recebe o nome da ONG enviada

  // Função para voltar para a tela de canais com segurança
  const handleVoltar = () => {
    if (router.canGoBack()) {
      router.back();
    } else {
      router.replace('/canais' as any);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#1A93B4" />

      {/* Topo Azul com botão de voltar direcionando com segurança para /canais */}
      <View style={styles.header}>
        <TouchableOpacity onPress={handleVoltar} activeOpacity={0.7}>
          <Feather name="chevron-left" size={28} color="#FFF" />
        </TouchableOpacity>
        <View style={styles.avatarPlaceholder} />
      </View>

      {/* Conteúdo Central */}
      <View style={styles.content}>
        
        {/* Título Principal */}
        <Text style={styles.title}>Sua solicitação foi enviada</Text>

        {/* Círculo com Checkmark */}
        <View style={styles.checkCircle}>
          <Feather name="check" size={64} color="#1A93B4" />
        </View>

        {/* Mensagem de confirmação */}
        <Text style={styles.messageText}>
          A ONG <Text style={styles.boldText}>{ongName || '@ONG'}</Text> irá entrar em contato assim que possível.
        </Text>
        
        <Text style={styles.subMessageText}>
          Acompanhe sua solicitação na tela <Text style={styles.highlightText}>Canais em requisições</Text>!
        </Text>

        {/* Botão para Acessar Requisições */}
        <TouchableOpacity
          style={styles.actionButton}
          activeOpacity={0.8}
          onPress={() => router.push('/requisicoes' as any)}
        >
          <Text style={styles.actionButtonText}>Acessar requisições</Text>
        </TouchableOpacity>

      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  header: {
    backgroundColor: '#1A93B4',
    height: 70,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  avatarPlaceholder: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#FFF',
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 30,
    marginTop: -40,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#000',
    textAlign: 'center',
    marginBottom: 35,
  },
  checkCircle: {
    width: 150,
    height: 150,
    borderRadius: 75,
    backgroundColor: '#A2DBE8', // Azul claro da bolinha
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 35,
  },
  messageText: {
    fontSize: 13,
    color: '#333',
    textAlign: 'center',
    lineHeight: 18,
    marginBottom: 6,
  },
  boldText: {
    fontWeight: 'bold',
  },
  subMessageText: {
    fontSize: 12,
    color: '#1A93B4',
    textAlign: 'center',
    lineHeight: 16,
    marginBottom: 40,
    paddingHorizontal: 10,
  },
  highlightText: {
    fontWeight: 'bold',
  },
  actionButton: {
    backgroundColor: '#BCE3EA', // Azul tom pastel do botão
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 25,
  },
  actionButtonText: {
    color: '#1A93B4',
    fontWeight: 'bold',
    fontSize: 13,
  },
});