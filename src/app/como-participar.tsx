import { useRouter } from 'expo-router';
import { useState } from 'react';
import {
  Image,
  SafeAreaView,
  ScrollView,
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
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
              {/* Cabeçalho com Logo */}
              <View style={styles.logoContainer}>
                <Image
                  source={require('../../assets/images/UNIONG.png')} // <- Ajustado caminho com ../../
                  style={styles.imagem}
                />
              </View>
      <View style={styles.card}>
        <Text style={styles.title}>Como quer participar?</Text>

        <TouchableOpacity
          style={styles.button}
          onPress={() => router.push('/cadastro-ong')}
        >
          <Text style={styles.buttonText}>ONG/INSTITUIÇÃO</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => router.push('/cadastro-voluntario')}
        >
          <Text style={styles.buttonText}>VOLUNTÁRIO</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.buttonVoltar}
          onPress={() => router.push('/login')}
        >
          <Text style={styles.buttonVoltar}>VOLTAR</Text>
        </TouchableOpacity>

      </View>
      </ScrollView>
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
    marginBottom: 50,
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
    height: 100,
    width: 300,
    backgroundColor: '#ffffff',
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    alignSelf: 'center',
    borderColor: '#169BBA',
    marginBottom: 50,
    fontSize: 20,
  },
buttonVoltar: {
    height: 100,
    backgroundColor: '#ffffff',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    color: "#169BBA",
    marginBottom: 50,
    fontSize: 20,
    fontWeight: 'bold',
    opacity: 0.7,
  },

  buttonText: { color: '#169BBA', fontSize: 20, fontWeight: 'medium', 
    borderColor:"#169BBA",},
});