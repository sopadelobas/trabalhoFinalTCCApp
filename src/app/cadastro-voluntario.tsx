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

export default function CadastroVoluntarioScreen() {
  const router = useRouter();
  const [form, setForm] = useState({
    nome: '',
    cnpj: '',
    responsavel: '',
    cep: '',
    alvara: '',
    email: '',
    senha: '',
});

  const handleChange = (field: string, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

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
        <ScrollView showsVerticalScrollIndicator={false}>
          <TextInput
            style={styles.input}
            placeholder="Nome"
            placeholderTextColor="#9EA5B1"
            value={form.nome}
            onChangeText={(v) => handleChange('nome', v)}
          />
          <TextInput
            style={styles.input}
            placeholder="Telefone"
            placeholderTextColor="#9EA5B1"
            keyboardType="numeric"
            value={form.cnpj}
            onChangeText={(v) => handleChange('telefone', v)}
          />
          <TextInput
            style={styles.input}
            placeholder="CPF"
            placeholderTextColor="#9EA5B1"
            value={form.responsavel}
            onChangeText={(v) => handleChange('cpf', v)}
          />
          <TextInput
            style={styles.input}
            placeholder="EMAIL"
            placeholderTextColor="#9EA5B1"
            keyboardType="numeric"
            value={form.cep}
            onChangeText={(v) => handleChange('email', v)}
          />
          
          <TextInput
            style={styles.input}
            placeholder="Senha"
            placeholderTextColor="#9EA5B1"
            secureTextEntry
            value={form.senha}
            onChangeText={(v) => handleChange('senha', v)}
          />

          <TouchableOpacity
                        style={styles.button}
                        onPress={() => {router.push('/home')
                          /* Lógica de Login */
                        }}
                      >
                        <Text style={styles.buttonText}>CADASTRAR</Text>
                      </TouchableOpacity>
          </ScrollView>
          </View>
        </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#169BBA' },
  header: { height: 160, justifyContent: 'center', alignItems: 'center' },
  logoTitle: { fontSize: 44, fontWeight: 'bold', color: '#FFFFFF' },
  logoSubtitle: { fontSize: 11, color: '#FFFFFF', letterSpacing: 4 },
  card: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    borderTopLeftRadius: 32,
    borderTopRightRadius: 32,
    paddingHorizontal: 28,
    paddingTop: 28,
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
  input: {
    height: 80,
    width:400,
    borderWidth: 1,
    borderColor: '#169BBA',
    borderRadius: 23,
    alignSelf: 'center',
    paddingHorizontal: 20,
    marginBottom: 40,
    fontSize: 13,
  },
  button: {
    height: 100,
    backgroundColor: '#ffffff',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    borderColor: '#169BBA',
    marginBottom: 50,
    fontSize: 20,
  },
  buttonText: {  color: '#169BBA', fontSize: 20, fontWeight: 'medium', 
    borderColor:"#169BBA", },
});
