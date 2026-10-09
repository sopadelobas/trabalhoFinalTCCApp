import * as ImagePicker from 'expo-image-picker';
import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import {
  Alert,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

export default function AnexoPontoColetaScreen() {
  const router = useRouter();
  const [imageUri, setImageUri] = useState<string | null>(null);

  const pickImage = async () => {
    try {
      const permissionResult =
        await ImagePicker.requestMediaLibraryPermissionsAsync();

      if (!permissionResult.granted) {
        Alert.alert(
          'Permissão necessária',
          'Precisamos de permissão para aceder às fotos.'
        );
        return;
      }

      const result = await ImagePicker.launchImageLibraryAsync({
        allowsEditing: true,
        quality: 1,
      });

      if (!result.canceled && result.assets && result.assets.length > 0) {
        setImageUri(result.assets[0].uri);
      }
    } catch (error) {
      Alert.alert('Erro', 'Não foi possível carregar a imagem.');
    }
  };

  const handleProximo = () => {
    if (!imageUri) {
      Alert.alert('Aviso', 'Por favor, anexe uma imagem antes de prosseguir.');
      return;
    }
    router.back();
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Anexar Imagem do Ponto de Coleta</Text>

        <TouchableOpacity style={styles.btnPick} onPress={pickImage}>
          <Text style={styles.btnText}>
            {imageUri ? 'Imagem Selecionada ✓' : 'Escolher Imagem'}
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.btnNext} onPress={handleProximo}>
          <Text style={styles.btnTextNext}>PROSSEGUIR</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#169BBA',
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    width: '85%',
    backgroundColor: '#FFF',
    borderRadius: 25,
    padding: 25,
    alignItems: 'center',
    gap: 20,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#169BBA',
    textAlign: 'center',
  },
  btnPick: {
    borderWidth: 1.5,
    borderColor: '#169BBA',
    borderRadius: 15,
    paddingVertical: 12,
    paddingHorizontal: 20,
    width: '100%',
    alignItems: 'center',
  },
  btnText: {
    color: '#169BBA',
    fontWeight: 'bold',
  },
  btnNext: {
    backgroundColor: '#169BBA',
    borderRadius: 15,
    paddingVertical: 12,
    paddingHorizontal: 20,
    width: '100%',
    alignItems: 'center',
  },
  btnTextNext: {
    color: '#FFF',
    fontWeight: 'bold',
  },
});