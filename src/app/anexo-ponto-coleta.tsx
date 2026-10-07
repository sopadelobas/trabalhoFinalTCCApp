import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Image,
  SafeAreaView,
  StatusBar,
  Alert
} from 'react-native';
import { Feather } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker'; 

export default function AnexarImagemScreen({ navigation }: any) {
  const [imageUri, setImageUri] = useState<string | null>(null);

  
  const pickImage = async () => {
    
    const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (permissionResult.granted === false) {
      Alert.alert('Permissão necessária', 'Precisamos de permissão para acessar suas fotos!');
      return;
    }

    
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect:,
      quality: 1,
    });

    if (!result.canceled) {
      setImageUri(result.assets[0].uri);
    }
  };

  const handleProximo = () => {
    if (!imageUri) {
      Alert.alert('Aviso', 'Por favor, anexe uma imagem antes de prosseguir.');
      return;
    }
    
    console.log('Imagem enviada/salva:', imageUri);
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

      
      <View style={styles.content}>
        <Text style={styles.title}>Anexe uma imagem</Text>

        
        <TouchableOpacity style={styles.previewContainer} onPress={pickImage}>
          {imageUri ? (
            <Image source={{ uri: imageUri }} style={styles.previewImage} />
          ) : (
            <View style={styles.placeholderContainer}>
              <Feather name="image" size={80} color="#999" />
              <Feather name="arrow-up" size={32} color="#999" style={styles.uploadArrowIcon} />
            </View>
          )}
        </TouchableOpacity>

        
        <TouchableOpacity style={styles.buttonSelect} onPress={pickImage}>
          <Text style={styles.buttonSelectText}>ENVIAR ARQUIVOS</Text>
        </TouchableOpacity>
      </View>

      
      <View style={styles.footer}>
        <TouchableOpacity style={styles.buttonProximo} onPress={handleProximo}>
          <Text style={styles.buttonText}>Próximo</Text>
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
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#169BBA',
    textAlign: 'center',
    marginBottom: 32,
  },
  previewContainer: {
    width: '100%',
    height: 200,
    backgroundColor: '#f4f0f1',
    borderRadius: 16,
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 24,
  },
  previewImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  placeholderContainer: {
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
  },
  uploadArrowIcon: {
    position: 'absolute',
    top: -10,
    right: -10,
  },
  buttonSelect: {
    width: '100%',
    height: 48,
    borderWidth: 1.5,
    borderColor: '#bce1ec',
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  buttonSelectText: {
    color: '#99abc1',
    fontSize: 14,
    fontWeight: 'bold',
    letterSpacing: 0.5,
  },
  footer: {
    paddingHorizontal: 32,
    paddingBottom: 40,
  },
  buttonProximo: {
    width: '100%',
    height: 52,
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
    fontWeight: '600',
  },
});