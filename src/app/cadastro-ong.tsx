
import { useRouter } from 'expo-router';import { useState } from 'react';
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

export default function CadastroONGScreen() {
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
            placeholder="Nome da ONG"
            placeholderTextColor="#9EA5B1"
            value={form.nome}
            onChangeText={(v) => handleChange('nome', v)}
          />
          <TextInput
            style={styles.input}
            placeholder="CNPJ"
            placeholderTextColor="#9EA5B1"
            keyboardType="numeric"
            value={form.cnpj}
            onChangeText={(v) => handleChange('cnpj', v)}
          />
          <TextInput
            style={styles.input}
            placeholder="Responsável"
            placeholderTextColor="#9EA5B1"
            value={form.responsavel}
            onChangeText={(v) => handleChange('responsavel', v)}
          />
          <TextInput
            style={styles.input}
            placeholder="CEP da ONG"
            placeholderTextColor="#9EA5B1"
            keyboardType="numeric"
            value={form.cep}
            onChangeText={(v) => handleChange('cep', v)}
          />
          <TextInput
            style={styles.input}
            placeholder="Alvará"
            placeholderTextColor="#9EA5B1"
            value={form.alvara}
            onChangeText={(v) => handleChange('alvara', v)}
          />
          <TextInput
            style={styles.input}
            placeholder="Email"
            placeholderTextColor="#9EA5B1"
            keyboardType="email-address"
            autoCapitalize="none"
            value={form.email}
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
    height: 46,
    borderWidth: 1,
    borderColor: '#169BBA',
    borderRadius: 23,
    paddingHorizontal: 20,
    marginBottom: 12,
    fontSize: 13,
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
  buttonText: { color: '#FFFFFF', fontSize: 15, fontWeight: 'bold' },
});