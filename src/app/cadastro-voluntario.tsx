import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import {
  Alert,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

export default function CadastroVoluntarioScreen() {
  const router = useRouter();

  // Estados do formulário
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [telefone, setTelefone] = useState('');
  const [dataNascimento, setDataNascimento] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmarSenha, setConfirmarSenha] = useState('');

  // Função para navegar de volta com segurança
  const handleBack = () => {
    if (router.canGoBack()) {
      router.back();
    } else {
      router.push('/login');
    }
  };

  // Função para calcular e validar maioridade (+18)
  const validarMaioridade = (dataString: string): boolean => {
    let partes: string[] = [];

    if (dataString.includes('/')) {
      partes = dataString.split('/').reverse(); // DD/MM/AAAA -> [AAAA, MM, DD]
    } else if (dataString.includes('-')) {
      partes = dataString.split('-'); // AAAA-MM-DD
    } else {
      return false;
    }

    if (partes.length !== 3) return false;

    const dataNasc = new Date(Number(partes[0]), Number(partes[1]) - 1, Number(partes[2]));
    const hoje = new Date();

    let idade = hoje.getFullYear() - dataNasc.getFullYear();
    const mes = hoje.getMonth() - dataNasc.getMonth();

    if (mes < 0 || (mes === 0 && hoje.getDate() < dataNasc.getDate())) {
      idade--;
    }

    return idade >= 18;
  };

  // Processo de submissão do cadastro
  const handleCadastrar = () => {
    if (!nome || !email || !telefone || !dataNascimento || !senha || !confirmarSenha) {
      Alert.alert('Atenção', 'Por favor, preencha todos os campos obrigatórios!');
      return;
    }

    if (senha !== confirmarSenha) {
      Alert.alert('Erro', 'As senhas não coincidem.');
      return;
    }

    // Trava para bloquear menor de 18 anos
    if (!validarMaioridade(dataNascimento)) {
      Alert.alert(
        'Cadastro Não Permitido',
        'É necessário ter no mínimo 18 anos completos para se cadastrar como voluntário.'
      );
      return;
    }

    // Sucesso no cadastro
    Alert.alert('Sucesso', 'Cadastro de voluntário realizado com sucesso!', [
      { text: 'OK', onPress: () => router.push('/login') },
    ]);
  };

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={{ flex: 1 }}
      >
        {/* TopBar */}
        <View style={styles.topBar}>
          <TouchableOpacity style={styles.backBtn} onPress={handleBack}>
            <Ionicons name="chevron-back" size={24} color="#FFF" />
          </TouchableOpacity>
        </View>

        {/* Cabeçalho */}
        <View style={styles.headerContainer}>
          
          <Text style={styles.headerTitle}>CADASTRO DE VOLUNTÁRIO</Text>
        </View>

        {/* Card Branco com Formulário */}
        <View style={styles.whiteCard}>
          <ScrollView
            showsVerticalScrollIndicator={false}
            contentContainerStyle={styles.scrollContent}
          >
            {/* Nome Completo */}
            <View style={styles.inputGroup}>
              <Text style={styles.label}>Nome Completo *</Text>
              <TextInput
                style={styles.input}
                placeholder="Seu nome completo"
                placeholderTextColor="#999"
                value={nome}
                onChangeText={setNome}
              />
            </View>

            {/* E-mail */}
            <View style={styles.inputGroup}>
              <Text style={styles.label}>E-mail *</Text>
              <TextInput
                style={styles.input}
                placeholder="exemplo@email.com"
                placeholderTextColor="#999"
                keyboardType="email-address"
                autoCapitalize="none"
                value={email}
                onChangeText={setEmail}
              />
            </View>

            {/* Telefone */}
            <View style={styles.inputGroup}>
              <Text style={styles.label}>Telefone / WhatsApp *</Text>
              <TextInput
                style={styles.input}
                placeholder="(00) 00000-0000"
                placeholderTextColor="#999"
                keyboardType="phone-pad"
                value={telefone}
                onChangeText={setTelefone}
              />
            </View>

            {/* Data de Nascimento com Trava +18 */}
            <View style={styles.inputGroup}>
              <Text style={styles.label}>Data de Nascimento * (Mínimo 18 anos)</Text>
              <View style={styles.dateInputContainer}>
                {Platform.OS === 'web' ? (
                  <input
                    type="date"
                    value={dataNascimento}
                    onChange={(e) => setDataNascimento(e.target.value)}
                    style={{
                      width: '100%',
                      border: 'none',
                      outline: 'none',
                      fontSize: '14px',
                      color: '#333',
                      backgroundColor: 'transparent',
                      fontFamily: 'inherit',
                    }}
                  />
                ) : (
                  <TextInput
                    style={styles.dateInputText}
                    placeholder="DD/MM/AAAA"
                    placeholderTextColor="#999"
                    keyboardType="numeric"
                    maxLength={10}
                    value={dataNascimento}
                    onChangeText={setDataNascimento}
                  />
                )}
                <Ionicons name="calendar-outline" size={20} color="#169BBA" />
              </View>
            </View>

            {/* Senha */}
            <View style={styles.inputGroup}>
              <Text style={styles.label}>Senha *</Text>
              <TextInput
                style={styles.input}
                placeholder="Crie uma senha"
                placeholderTextColor="#999"
                secureTextEntry
                value={senha}
                onChangeText={setSenha}
              />
            </View>

            {/* Confirmar Senha */}
            <View style={styles.inputGroup}>
              <Text style={styles.label}>Confirmar Senha *</Text>
              <TextInput
                style={styles.input}
                placeholder="Repita sua senha"
                placeholderTextColor="#999"
                secureTextEntry
                value={confirmarSenha}
                onChangeText={setConfirmarSenha}
              />
            </View>

            {/* Botão de Concluir Cadastro */}
            <TouchableOpacity style={styles.button}
                        onPress={() => {router.push('/home-v')
                          /* Lógica de Login */
                        }}>
              <Text style={styles.btnSalvarText}>FINALIZAR CADASTRO</Text>
            </TouchableOpacity>
          </ScrollView>

          {/* Rodapé */}
          <View style={styles.footer}>
            <Text style={styles.footerText}>Todos os direitos reservados ©</Text>
          </View>
        </View>
      </KeyboardAvoidingView>
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
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 10,
  },
  backBtn: {
    padding: 5,
  },
  button: {
    height: 48,
    backgroundColor: '#169BBA',
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 24,
  },
  headerContainer: {
    alignItems: 'center',
    marginVertical: 10,
    gap: 8,
  },
  headerTitle: {
    color: '#FFF',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  whiteCard: {
    flex: 1,
    backgroundColor: '#FFF',
    borderTopLeftRadius: 35,
    borderTopRightRadius: 35,
    paddingHorizontal: 25,
    paddingTop: 30,
    justifyContent: 'space-between',
  },
  scrollContent: {
    paddingBottom: 20,
    gap: 16,
  },
  inputGroup: {
    width: '100%',
  },
  label: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#169BBA',
    marginBottom: 6,
  },
  input: {
    borderWidth: 1.5,
    borderColor: '#169BBA',
    borderRadius: 15,
    paddingHorizontal: 15,
    paddingVertical: 12,
    fontSize: 14,
    color: '#333',
  },
  dateInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderWidth: 1.5,
    borderColor: '#169BBA',
    borderRadius: 15,
    paddingHorizontal: 15,
    paddingVertical: 12,
  },
  dateInputText: {
    flex: 1,
    fontSize: 14,
    color: '#333',
  },
  btnSalvar: {
    backgroundColor: '#169BBA',
    borderRadius: 20,
    width: '100%',
    paddingVertical: 14,
    alignItems: 'center',
    marginTop: 10,
  },
  btnSalvarText: {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 14,
  },
  footer: {
    paddingVertical: 15,
    alignItems: 'center',
  },
  footerText: {
    color: '#888',
    fontSize: 11,
  },
});