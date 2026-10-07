import { Feather } from '@expo/vector-icons';
import { useState } from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from 'react-native';

export default function PontoColetaScreen() {
  const [endereco, setEndereco] = useState('');
  const [horario, setHorario] = useState('');
  const [objetivo, setObjetivo] = useState('');

  const handleEnviar = () => {
    
    console.log({ endereco, horario, objetivo });
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#169BBA" />
      
      
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton}>
          <Feather name="chevron-left" size={28} color="#fff" />
        </TouchableOpacity>
        <View style={styles.headerCircle} />
      </View>

      
      <View style={styles.content}>
        <Text style={styles.title}>MOSTRE SEU{"\n"}PONTO DE COLETA</Text>

        
        <TextInput
          style={styles.input}
          placeholder="Endereço"
          placeholderTextColor="#999"
          value={endereco}
          onChangeText={setEndereco}
        />

        
        <TextInput
          style={styles.input}
          placeholder="Horário de Funcionamento"
          placeholderTextColor="#999"
          value={horario}
          onChangeText={setHorario}
        />

        
        <TextInput
          style={[styles.input, styles.textArea]}
          placeholder="Objetivo"
          placeholderTextColor="#999"
          multiline={true}
          numberOfLines={4}
          textAlignVertical="top"
          value={objetivo}
          onChangeText={setObjetivo}
        />

       
        <TouchableOpacity style={styles.uploadButton}>
          <Feather name="image" size={32} color="#666" />
          <View style={styles.uploadArrow}>
            <Feather name="arrow-up" size={14} color="#666" />
          </View>
        </TouchableOpacity>
      </View>

      
      <View style={styles.footer}>
        <TouchableOpacity style={styles.buttonEnviar} onPress={handleEnviar}>
          <Text style={styles.buttonText}>ENVIAR</Text>
        </TouchableOpacity>
      </View>
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
  content: {
    flex: 1,
    paddingHorizontal: 32,
    alignItems: 'center',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#169BBA',
    textAlign: 'center',
    marginTop: 40,
    marginBottom: 32,
    letterSpacing: 1,
  },
  input: {
    width: '100%',
    height: 50,
    borderWidth: 1.5,
    borderColor: '#169BBA',
    borderRadius: 25,
    paddingHorizontal: 20,
    fontSize: 16,
    color: '#333',
    marginBottom: 20,
  },
  textArea: {
    height: 120,
    borderRadius: 20,
    paddingTop: 15,
  },
  uploadButton: {
    width: 80,
    height: 80,
    borderRadius: 12,
    backgroundColor: '#f2f2f2',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    position: 'relative',
  },
  uploadArrow: {
    position: 'absolute',
    right: 22,
    top: 22,
    backgroundColor: '#f2f2f2',
    borderRadius: 4,
  },
  footer: {
    paddingHorizontal: 32,
    paddingBottom: 40,
  },
  buttonEnviar: {
    width: '100%',
    height: 55,
    backgroundColor: '#169BBA',
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    letterSpacing: 1,
  },
});