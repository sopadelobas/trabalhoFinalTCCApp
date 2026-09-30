import { useRouter } from 'expo-router';
import { useState } from 'react';
import {
  Image,
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

export default function LoginScreen() {
  const router = useRouter();
  const [cpf, setCpf] = useState('');
  const [senha, setSenha] = useState('');

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={{ flex: 1 }}
      >
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
          {/* Cabeçalho com Logo */}
          <View style={styles.logoContainer}>
            <Image
              source={require('../../assets/images/UNIONG.png')} // <- Ajustado caminho com ../../
              style={styles.imagem}
            />
          </View>


          {/* Cartão Branco Arredondado */}
          <View style={styles.card}>
            <TextInput
              style={styles.input}
              placeholder="Informe o seu CPF"
              placeholderTextColor="#9EA5B1"
              value={cpf}
              onChangeText={setCpf}
              keyboardType="numeric"
            />

            <TextInput
              style={styles.input}
              placeholder="Senha"
              placeholderTextColor="#9EA5B1"
              secureTextEntry
              value={senha}
              onChangeText={setSenha}
            />

            <TouchableOpacity
              style={styles.button}
              onPress={() => {router.push('/home')
                /* Lógica de Login */
              }}
            >
              <Text style={styles.buttonText}>ENTRAR</Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => router.push('/esquecer-senha')}
              style={styles.linkContainer}
            >
              <Text style={styles.linkText}><strong>Esqueceu a senha?</strong></Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => router.push('/como-participar')}
              style={styles.linkContainer}
            >
              <Text style={styles.linkText}>Não possui cadastro? <strong>Clique aqui</strong></Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#169BBA',
  },
  logoContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 20,
  },
  imagem: {
    width: 150,
    height: 150,
    resizeMode: 'contain',
  },
  header: {
    height: 220,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoTitle: {
    fontSize: 48,
    fontWeight: 'bold',
    color: '#FFFFFF',
    letterSpacing: 2,
  },
  logoSubtitle: {
    fontSize: 12,
    color: '#FFFFFF',
    letterSpacing: 4,
    marginTop: -5,
  },
  card: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    borderTopLeftRadius: 32,
    borderTopRightRadius: 32,
    paddingHorizontal: 28,
    paddingTop: 40,
    paddingBottom: 24,
    elevation: 4, // Sombra suave no Android
  },
  input: {
    height: 50,
    borderWidth: 1,
    borderColor: '#169BBA',
    borderRadius: 25,
    paddingHorizontal: 20,
    marginBottom: 16,
    fontSize: 14,
    color: '#333333',
  },
  button: {
    height: 50,
    backgroundColor: '#169BBA',
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  linkContainer: {
    alignItems: 'center',
    marginVertical: 6,
  },
  linkText: {
    color: '#169BBA',
    fontSize: 13,
  },

  
});