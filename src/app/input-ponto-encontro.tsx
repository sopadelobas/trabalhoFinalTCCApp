import { Feather } from '@expo/vector-icons';
import { useState } from 'react';
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View
} from 'react-native';

export default function CadastrePontoEncontroScreen({ navigation }: any) {
  const [organizacao, setOrganizacao] = useState('');
  const [endereco, setEndereco] = useState('');
  const [cep, setCep] = useState('');
  const [dataInicio, setDataInicio] = useState('');
  const [dataEncerramento, setDataEncerramento] = useState('');
  const [horario, setHorario] = useState('');

  const handleProximo = () => {
    
    console.log({
      organizacao,
      endereco,
      cep,
      dataInicio,
      dataEncerramento,
      horario
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#169BBA" />
      
     
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={() => navigation?.goBack()}>
          <Feather name="chevron-left" size={28} color="#fff" />
        </TouchableOpacity>
        <View style={styles.headerCircle} />
      </View>

      
      <ScrollView 
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <Text style={styles.title}>Cadastre seu{"\n"}ponto de encontro</Text>

       
        <TextInput
          style={styles.input}
          placeholder="Organização"
          placeholderTextColor="#999"
          value={organizacao}
          onChangeText={setOrganizacao}
        />

        
        <TextInput
          style={styles.input}
          placeholder="Endereço"
          placeholderTextColor="#999"
          value={endereco}
          onChangeText={setEndereco}
        />

        
        <TextInput
          style={styles.input}
          placeholder="CEP"
          placeholderTextColor="#999"
          keyboardType="numeric"
          value={cep}
          onChangeText={setCep}
        />

        
        <TextInput
          style={styles.input}
          placeholder="Data de Início"
          placeholderTextColor="#999"
          value={dataInicio}
          onChangeText={setDataInicio}
        />

        
        <TextInput
          style={styles.input}
          placeholder="Data de Encerramento"
          placeholderTextColor="#999"
          value={dataEncerramento}
          onChangeText={setDataEncerramento}
        />

        
        <TextInput
          style={styles.input}
          placeholder="Horário de Funcionamento"
          placeholderTextColor="#999"
          value={horario}
          onChangeText={setHorario}
        />

        
        <TouchableOpacity style={styles.buttonProximo} onPress={handleProximo}>
          <Text style={styles.buttonText}>Próximo</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    height: 60,
    backgroundColor: '#169BBA',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
  },
  backButton: {
    padding: 4,
  },
  headerCircle: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: '#fff',
  },
  scrollContent: {
    paddingHorizontal: 32,
    paddingTop: 30,
    paddingBottom: 40,
    alignItems: 'center',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#169BBA',
    textAlign: 'center',
    marginBottom: 32,
    lineHeight: 28,
  },
  input: {
    width: '100%',
    height: 48,
    borderWidth: 1.5,
    borderColor: '#bce1ec',
    borderRadius: 24,
    paddingHorizontal: 20,
    fontSize: 16,
    color: '#333',
    marginBottom: 16,
    backgroundColor: '#fff',
  },
  buttonProximo: {
    width: '100%',
    height: 52,
    backgroundColor: '#169BBA',
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
});