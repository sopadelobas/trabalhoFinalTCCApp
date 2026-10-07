import { Feather } from '@expo/vector-icons';
import { useState } from 'react';
import {
    Alert,
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View
} from 'react-native';

export default function InformacoesAdicionaisScreen({ navigation }: any) {
  const [descricao, setDescricao] = useState('');
  const [meta, setMeta] = useState('');
  const [contato, setContato] = useState('');

  const handleEnviar = () => {
    if (!descricao || !meta || !contato) {
      Alert.alert('Erro', 'Por favor, preencha todos os campos antes de enviar.');
      return;
    }

   
    console.log('Dados salvos:', { descricao, meta, contato });
    Alert.alert('Sucesso', 'Informações registradas com sucesso!');
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
        <Text style={styles.title}>Informações adicionais</Text>

        
        <TextInput
          style={[styles.input, styles.textArea]}
          placeholder="Descrição"
          placeholderTextColor="#99abc1"
          multiline={true}
          numberOfLines={6}
          textAlignVertical="top"
          value={descricao}
          onChangeText={setDescricao}
        />

        
        <TextInput
          style={styles.input}
          placeholder="Meta"
          placeholderTextColor="#99abc1"
          value={meta}
          onChangeText={setMeta}
        />

        
        <TextInput
          style={styles.input}
          placeholder="Contato"
          placeholderTextColor="#99abc1"
          keyboardType="phone-pad"
          value={contato}
          onChangeText={setContato}
        />

       
        <TouchableOpacity style={styles.buttonEnviar} onPress={handleEnviar}>
          <Text style={styles.buttonText}>Enviar</Text>
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
  },
  input: {
    width: '100%',
    height: 52,
    borderWidth: 1.5,
    borderColor: '#bce1ec',
    borderRadius: 16,
    paddingHorizontal: 20,
    fontSize: 16,
    color: '#333',
    marginBottom: 20,
    backgroundColor: '#fff',
  },
  textArea: {
    height: 180,
    borderRadius: 20,
    paddingTop: 16,
  },
  buttonEnviar: {
    width: '100%',
    height: 54,
    backgroundColor: '#169BBA',
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 16,
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