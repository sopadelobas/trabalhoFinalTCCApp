import { useRouter } from 'expo-router';
import { useState } from 'react';
import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

export default function EsquecerSenhaScreen() {
  const router = useRouter();
  const [email, setEmail] = useState('');

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.logoContainer}>
                        <Image
                          source={require('../../assets/images/UNIONG.png')} // <- Ajustado caminho com ../../
                          style={styles.imagem}
                        />
                      </View>

      <View style={styles.card}>
        <Text style={styles.title}>Redefinição de senha</Text>
        <Text style={styles.description}>
          Digite o e-mail que deseja para a redefinição da senha:
        </Text>

        <TextInput
          style={styles.input}
          placeholder="Informe o Email"
          placeholderTextColor="#9EA5B1"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
        />

        <TouchableOpacity
          style={styles.button}
          onPress={() => router.push('/nova-senha')}
        >
          <Text style={styles.buttonText}>ENVIAR</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#169BBA' },
  header: { height: 200, justifyContent: 'center', alignItems: 'center' },
  logoTitle: { fontSize: 48, fontWeight: 'bold', color: '#FFFFFF' },
  logoSubtitle: { fontSize: 12, color: '#FFFFFF', letterSpacing: 4 },
  card: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    borderTopLeftRadius: 32,
    borderTopRightRadius: 32,
    paddingHorizontal: 28,
    paddingTop: 36,
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
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#169BBA',
    textAlign: 'center',
    marginBottom: 8,
  },
  description: {
    fontSize: 13,
    color: '#666666',
    textAlign: 'center',
    marginBottom: 24,
  },
  input: {
    height: 50,
    borderWidth: 1,
    borderColor: '#169BBA',
    borderRadius: 25,
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  button: {
    height: 50,
    backgroundColor: '#169BBA',
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: { color: '#FFFFFF', fontSize: 16, fontWeight: 'bold' },
});