import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import {
  Alert,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { useMenu } from '../components/context/MenuContext';

export default function LoginScreen() {
  const router = useRouter();
  const { setUserType } = useMenu();

  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  // Função para Entrar como Voluntário
  const handleLoginVoluntario = () => {
    if (!email || !senha) {
      Alert.alert('Atenção', 'Por favor, preencha o e-mail e a senha.');

      
      router.push('/home-v');
      return;
    }

    setUserType('VOLUNTARIO');
    router.push('/home-v');
  };

  // Função para Entrar como ONG
  const handleLoginONG = () => {
    if (!email || !senha) {
      Alert.alert('Atenção', 'Por favor, preencha o e-mail e a senha.');
      router.push('/home');
      return;
    }

    setUserType('ONG');
    router.push('/home');
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.logoContainer}>
        <Image
          source={require('../../assets/images/UNIONG.png')}
          style={styles.imagem}
        />
      </View>

      <View style={styles.whiteCard}>
        <View style={styles.formGroup}>
          <Text style={styles.label}>E-mail</Text>
          <TextInput
            style={styles.input}
            placeholder="Digite seu e-mail"
            placeholderTextColor="#999"
            value={email}
            onChangeText={setEmail}
            autoCapitalize="none"
            keyboardType="email-address"
          />
        </View>

        <View style={styles.formGroup}>
          <Text style={styles.label}>Senha</Text>
          <TextInput
            style={styles.input}
            placeholder="Digite sua senha"
            placeholderTextColor="#999"
            secureTextEntry
            value={senha}
            onChangeText={setSenha}
          />
        </View>

        {/* Botão Entrar como Voluntário */}
        <TouchableOpacity 
          style={styles.btnPrimary} 
          onPress={handleLoginVoluntario}
        >
          <Text style={styles.btnPrimaryText}>ENTRAR COMO VOLUNTÁRIO</Text>
        </TouchableOpacity>

        {/* Botão Entrar como ONG */}
        <TouchableOpacity 
          style={styles.btnSecondary} 
          onPress={handleLoginONG}
        >
          <Text style={styles.btnSecondaryText}>ENTRAR COMO ONG</Text>
        </TouchableOpacity>

        {/* Links de Cadastro */}
        <View style={styles.registerContainer}>
          <TouchableOpacity onPress={() => router.push('/cadastro-voluntario')}>
            <Text style={styles.registerText}>Voluntário?</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => router.push('/cadastro-ong')}>
            <Text style={styles.registerText}>ONG?</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => router.push('/esquecer-senha')}>
            <Text style={styles.registerText}>Esqueceu senha?</Text>
          </TouchableOpacity>
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
  logoContainer: {
    alignItems: 'center',
    marginVertical: 30,
  },
  whiteCard: {
    flex: 1,
    backgroundColor: '#FFF',
    borderTopLeftRadius: 35,
    borderTopRightRadius: 35,
    paddingHorizontal: 25,
    paddingTop: 35,
    gap: 16,
  },
  formGroup: {
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
  btnPrimary: {
    backgroundColor: '#169BBA',
    borderRadius: 20,
    width: '100%',
    paddingVertical: 14,
    alignItems: 'center',
    marginTop: 10,
  },
  btnPrimaryText: {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 13,
  },
  btnSecondary: {
    borderWidth: 1.5,
    borderColor: '#169BBA',
    borderRadius: 20,
    width: '100%',
    paddingVertical: 14,
    alignItems: 'center',
  },
  btnSecondaryText: {
    color: '#169BBA',
    fontWeight: 'bold',
    fontSize: 13,
  },
  registerContainer: {
    alignItems: 'flex-end',
    marginTop: 10,
    gap: 8,
    width: '100%',
  },
  registerText: {
    color: '#169BBA',
    fontSize: 13,
    fontWeight: '600',
    textDecorationLine: 'underline',
  },
  imagem: {
    width: 150,
    height: 150,
    resizeMode: 'contain',
  },
});