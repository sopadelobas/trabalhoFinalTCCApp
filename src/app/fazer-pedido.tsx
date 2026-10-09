
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
  Alert,
  ActivityIndicator,
  Modal,
  FlatList,
} from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useRouter, useLocalSearchParams } from 'expo-router';

// Opções do Modal de Categorias
const CATEGORIAS_OPCOES = [
  'Alimentos & Cesta Básica',
  'Roupas & Agasalhos',
  'Produtos de Higiene',
  'Apoio Psicológico / Emocional',
  'Móveis & Eletrodomésticos',
  'Voluntariado / Mão de Obra',
  'Outros',
];

export default function FazerPedidoScreen() {
  const router = useRouter();

  // Recebe os dados da ONG passados pela tela anterior
  const params = useLocalSearchParams();
  const { ongId, ongName } = params;

  // Estados do Formulário
  const [paraQuem, setParaQuem] = useState<'mim' | 'outra'>('mim');
  const [categoria, setCategoria] = useState('');
  const [local, setLocal] = useState('');
  const [nome, setNome] = useState('');
  const [contato, setContato] = useState('');
  const [faleSobre, setFaleSobre] = useState('');

  // Estado do Modal de Categorias
  const [modalVisible, setModalVisible] = useState(false);

  // Estado para controle de carregamento
  const [loading, setLoading] = useState(false);

  // Função para enviar os dados e NAVEGAR DIRETO PARA A TELA DE SUCESSO
  const handleSubmit = async () => {
    // Validação dos campos
    if (!categoria || !local || !nome || !contato || !faleSobre) {
      Alert.alert('Campos obrigatórios', 'Por favor, preencha todos os campos antes de enviar.');
      return;
    }

    const payload = {
      ongId: ongId || null,
      paraQuem,
      categoria,
      local,
      nome,
      contato,
      descricao: faleSobre,
      createdAt: new Date().toISOString(),
    };

    try {
      setLoading(true);
      console.log('Dados prontos para o Backend:', payload);

      // Simulação do tempo de envio
      await new Promise<void>((resolve) => setTimeout(resolve, 600));

      const targetOngName = (ongName as string) || '@Por_vocÊ';

      // NAVEGAÇÃO DIRETA E GARANTIDA PARA A TELA DE SUCESSO
      router.push(`/sucesso-solicitacao?ongName=${encodeURIComponent(targetOngName)}` as any);

    } catch (error) {
      Alert.alert('Erro', 'Não foi possível enviar a solicitação. Tente novamente.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#1A93B4" />

      {/* Cabeçalho Azul */}
      <View style={styles.header}>
        <View style={styles.headerTop}>
          <TouchableOpacity onPress={() => router.back()} activeOpacity={0.7}>
            <Feather name="chevron-left" size={28} color="#FFF" />
          </TouchableOpacity>
          <View style={styles.avatarPlaceholder} />
        </View>

        <Text style={styles.title}>Faça sua solicitação</Text>
        <Text style={styles.subtitle}>
          Encontre uma forma de ajudar ou peça apoio quando precisar.
        </Text>
        {ongName && (
          <Text style={styles.ongTargetText}>Destino: {ongName}</Text>
        )}
      </View>

      {/* Conteúdo do Formulário */}
      <View style={styles.contentContainer}>
        <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
          
          {/* Opção "Essa oportunidade é para quem?" */}
          <Text style={styles.questionTitle}>Essa oportunidade é para quem?</Text>
          <View style={styles.targetRow}>
            {/* Para mim */}
            <TouchableOpacity
              style={[styles.targetCard, paraQuem === 'mim' && styles.targetCardSelected]}
              onPress={() => setParaQuem('mim')}
              activeOpacity={0.8}
            >
              <Feather name="user" size={36} color="#2B3A42" />
              <Text style={styles.targetCardText}>Para mim</Text>
            </TouchableOpacity>

            {/* Outra pessoa */}
            <TouchableOpacity
              style={[styles.targetCard, paraQuem === 'outra' && styles.targetCardSelected]}
              onPress={() => setParaQuem('outra')}
              activeOpacity={0.8}
            >
              <Feather name="users" size={36} color="#2B3A42" />
              <Text style={styles.targetCardText}>Outra pessoa</Text>
            </TouchableOpacity>
          </View>

          {/* Grid de Campos */}
          <View style={styles.formGrid}>
            
            {/* Coluna da Esquerda */}
            <View style={styles.leftColumn}>
              {/* Seleção de Categoria */}
              <Text style={styles.fieldLabel}>Do que você precisa?</Text>
              <TouchableOpacity
                style={styles.inputBox}
                activeOpacity={0.7}
                onPress={() => setModalVisible(true)}
              >
                <Text style={[styles.textInput, !categoria && { color: '#888' }]}>
                  {categoria || 'Selecione uma categoria'}
                </Text>
                <Feather name="chevron-down" size={18} color="#666" />
              </TouchableOpacity>

              {/* Local */}
              <Text style={styles.fieldLabel}>📍 Onde te encontrar</Text>
              <View style={styles.inputBox}>
                <TextInput
                  style={styles.textInput}
                  placeholder="Informe o local"
                  placeholderTextColor="#888"
                  value={local}
                  onChangeText={setLocal}
                />
              </View>

              {/* Nome */}
              <Text style={styles.fieldLabel}>Nome</Text>
              <View style={styles.inputBox}>
                <Feather name="user" size={16} color="#666" style={styles.inputIcon} />
                <TextInput
                  style={styles.textInput}
                  placeholder="Informe o nome"
                  placeholderTextColor="#888"
                  value={nome}
                  onChangeText={setNome}
                />
              </View>

              {/* Contato */}
              <Text style={styles.fieldLabel}>Contato</Text>
              <View style={styles.inputBox}>
                <Feather name="phone-incoming" size={16} color="#666" style={styles.inputIcon} />
                <TextInput
                  style={styles.textInput}
                  placeholder="Número para contato"
                  placeholderTextColor="#888"
                  keyboardType="phone-pad"
                  value={contato}
                  onChangeText={setContato}
                />
              </View>
            </View>

            {/* Coluna da Direita - Campo de Texto Grande */}
            <View style={styles.rightColumn}>
              <Text style={styles.fieldLabel}>Fale sobre</Text>
              <View style={styles.textAreaBox}>
                <TextInput
                  style={styles.textAreaInput}
                  placeholder="Escreva sobre sua situação..."
                  placeholderTextColor="#888"
                  multiline
                  numberOfLines={8}
                  textAlignVertical="top"
                  value={faleSobre}
                  onChangeText={setFaleSobre}
                />
              </View>

              {/* BOTÃO AZUL QUE LIGA COM A TELA DE SUCESSO */}
              <TouchableOpacity
                style={styles.sendButton}
                onPress={handleSubmit}
                disabled={loading}
                activeOpacity={0.8}
              >
                {loading ? (
                  <ActivityIndicator color="#FFF" size="small" />
                ) : (
                  <Feather name="send" size={20} color="#FFF" />
                )}
              </TouchableOpacity>
            </View>

          </View>
        </ScrollView>
      </View>

      {/* Modal para Seleção de Categoria */}
      <Modal
        visible={modalVisible}
        transparent
        animationType="fade"
        onRequestClose={() => setModalVisible(false)}
      >
        <TouchableOpacity
          style={styles.modalOverlay}
          activeOpacity={1}
          onPress={() => setModalVisible(false)}
        >
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Selecione uma Categoria</Text>
            <FlatList
              data={CATEGORIAS_OPCOES}
              keyExtractor={(item) => item}
              renderItem={({ item }) => (
                <TouchableOpacity
                  style={styles.modalOption}
                  onPress={() => {
                    setCategoria(item);
                    setModalVisible(false);
                  }}
                >
                  <Text style={styles.modalOptionText}>{item}</Text>
                  {categoria === item && <Feather name="check" size={18} color="#1A93B4" />}
                </TouchableOpacity>
              )}
            />
          </View>
        </TouchableOpacity>
      </Modal>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1A93B4',
  },
  header: {
    paddingHorizontal: 20,
    paddingTop: 10,
    paddingBottom: 25,
    backgroundColor: '#1A93B4',
  },
  headerTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
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
    marginBottom: 6,
  },
  subtitle: {
    fontSize: 13,
    color: '#E0F2F7',
    textAlign: 'center',
    paddingHorizontal: 20,
    lineHeight: 18,
  },
  ongTargetText: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#FFF',
    textAlign: 'center',
    marginTop: 8,
    backgroundColor: 'rgba(255,255,255,0.2)',
    paddingVertical: 4,
    paddingHorizontal: 12,
    borderRadius: 12,
    alignSelf: 'center',
  },
  contentContainer: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  scrollContent: {
    paddingBottom: 30,
  },
  questionTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
    marginBottom: 16,
  },
  targetRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
  },
  targetCard: {
    width: '42%',
    height: 90,
    borderWidth: 1.5,
    borderColor: '#1A93B4',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFF',
    gap: 6,
  },
  targetCardSelected: {
    backgroundColor: '#E0F2F7',
    borderWidth: 2,
  },
  targetCardText: {
    fontSize: 13,
    fontWeight: 'bold',
    color: '#2B3A42',
  },
  formGrid: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 12,
  },
  leftColumn: {
    flex: 1,
  },
  rightColumn: {
    flex: 1,
  },
  fieldLabel: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 4,
    marginTop: 8,
  },
  inputBox: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#DDF0F5',
    borderRadius: 15,
    paddingHorizontal: 10,
    height: 38,
  },
  inputIcon: {
    marginRight: 6,
  },
  textInput: {
    flex: 1,
    fontSize: 11,
    color: '#333',
  },
  textAreaBox: {
    backgroundColor: '#FFF',
    borderWidth: 1.5,
    borderColor: '#1A93B4',
    borderRadius: 20,
    padding: 10,
    height: 185,
  },
  textAreaInput: {
    flex: 1,
    fontSize: 12,
    color: '#333',
  },
  sendButton: {
    backgroundColor: '#1A93B4',
    width: 60,
    height: 36,
    borderRadius: 18,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'flex-end',
    marginTop: 10,
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  modalContent: {
    width: '100%',
    backgroundColor: '#FFF',
    borderRadius: 20,
    padding: 20,
    maxHeight: '60%',
  },
  modalTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#1A93B4',
    marginBottom: 15,
    textAlign: 'center',
  },
  modalOption: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#F0F0F0',
  },
  modalOptionText: {
    fontSize: 14,
    color: '#333',
  },
});