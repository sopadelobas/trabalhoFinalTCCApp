import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker'; // Import da biblioteca

export default function AnexoPontoColeta() {

  // A palavra-chave 'async' DEVE estar aqui na declaração da função
  const pickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      console.log(result.assets[0].uri);
    }
  };

  return (
    <View style={styles.container}>
      {/* O 'pickImage' é chamado no clique do botão */}
      <TouchableOpacity style={styles.button} onPress={pickImage}>
        <Feather name="camera" size={24} color="#FFF" />
        <Text style={styles.buttonText}>Selecionar Imagem</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#007AFF',
    padding: 12,
    borderRadius: 8,
    gap: 8,
  },
  buttonText: {
    color: '#FFF',
    fontWeight: 'bold',
  },
});