// src/app/necessidade-anexo.tsx

import React, { useState } from 'react';
import { Alert, Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Feather, Ionicons } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';
import { useRouter } from 'expo-router';

import AccountMenu from '@/components/AccountMenu';

export default function NecessidadeAnexoScreen() {
  const router = useRouter();
  const [menuVisible, setMenuVisible] = useState(false);
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

      <Text style={styles.headerTitle}>Anexe uma imagem</Text>

      <View style={styles.cardContainer}>
        <View style={styles.uploadArea}>
          {imagem ? (
            <Image source={{ uri: imagem }} style={styles.previewImage} />
          ) : (
            <Ionicons name="images-outline" size={80} color="#AAA" />
          )}
        </View>

        <TouchableOpacity style={styles.btnOutline} onPress={pickImage} activeOpacity={0.8}>
          <Text style={styles.btnOutlineText}>ENVIAR ARQUIVOS</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.submitBtn} 
          onPress={() => router.push('/necessidades-adicionais')}
          activeOpacity={0.8}
        >
          <Text style={styles.submitBtnText}>Próximo</Text>
        </TouchableOpacity>
      </View>

      <AccountMenu visible={menuVisible} onClose={() => setMenuVisible(false)} userType="ong" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#169BBA' },
  topBar: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 20, paddingTop: 15, paddingBottom: 10 },
  backBtn: { padding: 4 },
  profileCircle: { padding: 2 },
  innerProfileCircle: { width: 28, height: 28, borderRadius: 14, backgroundColor: '#FFF' },
  headerTitle: { color: '#FFF', fontSize: 18, fontWeight: 'bold', textAlign: 'center', marginVertical: 20 },
  cardContainer: { flex: 1, backgroundColor: '#FFF', borderTopLeftRadius: 35, borderTopRightRadius: 35, paddingHorizontal: 25, paddingTop: 30, alignItems: 'center' },
  uploadArea: { width: 180, height: 130, backgroundColor: '#EAEAEA', borderRadius: 20, justifyContent: 'center', alignItems: 'center', marginBottom: 20, overflow: 'hidden' },
  previewImage: { width: '100%', height: '100%' },
  btnOutline: { borderWidth: 1.5, borderColor: '#169BBA', borderRadius: 15, paddingVertical: 10, paddingHorizontal: 20, width: '100%', alignItems: 'center', marginBottom: 40 },
  btnOutlineText: { color: '#169BBA', fontSize: 12, fontWeight: 'bold' },
  submitBtn: { backgroundColor: '#169BBA', width: '100%', paddingVertical: 12, borderRadius: 15, alignItems: 'center' },
  submitBtnText: { color: '#FFF', fontWeight: 'bold', fontSize: 14 },
});