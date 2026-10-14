// src/app/cadastro-ponto-coleta.tsx

import React, { useState } from 'react';
import {
  Alert,
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { Feather } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';
import { useRouter } from 'expo-router';

import AccountMenu from '@/components/AccountMenu';

export default function CadastroPontoColetaScreen() {
  const router = useRouter();
  const [menuVisible, setMenuVisible] = useState(false);
  const [endereco, setEndereco] = useState('');
  const [horario, setHorario] = useState('');
  const [objetivo, setObjetivo] = useState('');
  const [imagem, setImagem] = useState<string | null>(null);

  const pickImage = async () => {
    const perm = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (!perm.granted) {
      Alert.alert('Permissão necessária', 'Permita o acesso à galeria.');
      return;
    }
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      quality: 0.8,
    });
    if (!result.canceled) {
      setImagem(result.assets[0].uri);
    }
  };

  const handleEnviar = () => {
    router.push('/post-enviado');
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.topBar}>
        <TouchableOpacity onPress={() => router.back()} activeOpacity={0.7} style={styles.backBtn}>
          <Feather name="chevron-left" size={28} color="#FFF" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.profileCircle} onPress={() => setMenuVisible(true)}>
          <View style={styles.innerProfileCircle} />
        </TouchableOpacity>
      </View>

      <Text style={styles.headerTitle}>MOSTRE SEU{'\n'}PONTO DE COLETA</Text>

      <View style={styles.cardContainer}>
        <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
          <TextInput
            style={styles.input}
            placeholder="Endereço"
            placeholderTextColor="#888"
            value={endereco}
            onChangeText={setEndereco}
          />

          <TextInput
            style={styles.input}
            placeholder="Horário de Funcionamento"
            placeholderTextColor="#888"
            value={horario}
            onChangeText={setHorario}
          />

          <TextInput
            style={[styles.input, styles.textArea]}
            placeholder="Objetivo"
            placeholderTextColor="#888"
            multiline
            textAlignVertical="top"
            value={objetivo}
            onChangeText={setObjetivo}
          />

          <TouchableOpacity style={styles.imageUploadBox} onPress={pickImage} activeOpacity={0.8}>
            {imagem ? (
              <Image source={{ uri: imagem }} style={styles.uploadedImage} />
            ) : (
              <Feather name="image" size={40} color="#AAA" />
            )}
          </TouchableOpacity>

          <TouchableOpacity style={styles.submitBtn} onPress={handleEnviar} activeOpacity={0.8}>
            <Text style={styles.submitBtnText}>ENVIAR</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>

      <AccountMenu visible={menuVisible} onClose={() => setMenuVisible(false)} userType="ong" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#169BBA' },
  topBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 15,
    paddingBottom: 10,
  },
  backBtn: { padding: 4 },
  profileCircle: { padding: 2 },
  innerProfileCircle: { width: 28, height: 28, borderRadius: 14, backgroundColor: '#FFF' },
  headerTitle: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 15,
  },
  cardContainer: {
    flex: 1,
    backgroundColor: '#FFF',
    borderTopLeftRadius: 35,
    borderTopRightRadius: 35,
    paddingHorizontal: 25,
    paddingTop: 25,
  },
  scrollContent: { gap: 15, paddingBottom: 25, alignItems: 'center' },
  input: {
    width: '100%',
    borderWidth: 1.5,
    borderColor: '#169BBA',
    borderRadius: 20,
    paddingHorizontal: 16,
    paddingVertical: 10,
    fontSize: 13,
    color: '#333',
  },
  textArea: { height: 100 },
  imageUploadBox: {
    width: 100,
    height: 80,
    backgroundColor: '#EAEAEA',
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
    overflow: 'hidden',
  },
  uploadedImage: { width: '100%', height: '100%' },
  submitBtn: {
    backgroundColor: '#169BBA',
    width: '100%',
    paddingVertical: 12,
    borderRadius: 15,
    alignItems: 'center',
    marginTop: 10,
  },
  submitBtnText: { color: '#FFF', fontWeight: 'bold', fontSize: 14 },
});