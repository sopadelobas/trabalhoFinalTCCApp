import React, { useState } from 'react';
import {
  FlatList,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useLocalSearchParams, useRouter } from 'expo-router';

interface Mensagem {
  id: string;
  texto: string;
  enviadoPorMim: boolean;
}

export default function MensagensChatScreen() {
  const router = useRouter();
  
  // Captura os parâmetros passados pela tela anterior
  const { id, usuario } = useLocalSearchParams<{ id: string; usuario: string }>();

  const [novaMensagem, setNovaMensagem] = useState('');
  const [historicoMensagens, setHistoricoMensagens] = useState<Mensagem[]>([
    { id: '1', texto: `Olá! Esta é a conversa com ${usuario || 'o usuário'}.`, enviadoPorMim: false },
    { id: '2', texto: 'Olá! Como posso ajudar?', enviadoPorMim: true },
  ]);

  const handleEnviar = () => {
    if (!novaMensagem.trim()) return;

    const mensagemObj: Mensagem = {
      id: Date.now().toString(),
      texto: novaMensagem,
      enviadoPorMim: true,
    };

    setHistoricoMensagens((prev) => [...prev, mensagemObj]);
    setNovaMensagem('');
  };

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={{ flex: 1 }}
      >
        {/* TopBar com o Nome Dinâmico do Usuário */}
        <View style={styles.topBar}>
          <TouchableOpacity onPress={() => router.back()} style={styles.backBtn}>
            <Ionicons name="chevron-back" size={24} color="#FFF" />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>{usuario ? usuario.toUpperCase() : 'CHAT'}</Text>
          <View style={{ width: 24 }} />
        </View>

        <View style={styles.whiteCard}>
          <FlatList
            data={historicoMensagens}
            keyExtractor={(item) => item.id}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={styles.chatContainer}
            renderItem={({ item }) => (
              <View
                style={[
                  styles.balao,
                  item.enviadoPorMim ? styles.balaoMinha : styles.balaoOutro,
                ]}
              >
                <Text
                  style={[
                    styles.textoMensagem,
                    item.enviadoPorMim ? styles.textoMinha : styles.textoOutro,
                  ]}
                >
                  {item.texto}
                </Text>
              </View>
            )}
          />

          {/* Input de Envio de Mensagem */}
          <View style={styles.inputRow}>
            <TextInput
              style={styles.input}
              placeholder="Digite uma mensagem..."
              placeholderTextColor="#888"
              value={novaMensagem}
              onChangeText={setNovaMensagem}
            />
            <TouchableOpacity style={styles.sendBtn} onPress={handleEnviar}>
              <Ionicons name="send" size={18} color="#FFF" />
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#169BBA' },
  topBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 15,
  },
  backBtn: { padding: 5 },
  headerTitle: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  whiteCard: {
    flex: 1,
    backgroundColor: '#FFF',
    borderTopLeftRadius: 35,
    borderTopRightRadius: 35,
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 15,
  },
  chatContainer: {
    paddingBottom: 15,
    gap: 10,
  },
  balao: {
    maxWidth: '75%',
    padding: 12,
    borderRadius: 16,
  },
  balaoMinha: {
    alignSelf: 'flex-end',
    backgroundColor: '#169BBA',
    borderBottomRightRadius: 2,
  },
  balaoOutro: {
    alignSelf: 'flex-start',
    backgroundColor: '#EAEAEA',
    borderBottomLeftRadius: 2,
  },
  textoMensagem: { fontSize: 13, lineHeight: 18 },
  textoMinha: { color: '#FFF' },
  textoOutro: { color: '#333' },
  inputRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    paddingTop: 10,
  },
  input: {
    flex: 1,
    borderWidth: 1.5,
    borderColor: '#169BBA',
    borderRadius: 20,
    paddingHorizontal: 15,
    paddingVertical: 8,
    fontSize: 13,
    color: '#333',
  },
  sendBtn: {
    backgroundColor: '#169BBA',
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
});