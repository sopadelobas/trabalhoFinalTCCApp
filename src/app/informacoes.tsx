import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  SafeAreaView,
  StatusBar,
  Image,
  ScrollView,
  Alert,
} from 'react-native';
import { Feather, Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import * as ImagePicker from 'expo-image-picker';

import AccountMenu from '@/components/AccountMenu';

export default function InformacoesScreen() {
  const router = useRouter();

  // Estados dos dados do utilizador
  const [profileImage, setProfileImage] = useState<string | null>(null);
  const [sobreVoce, setSobreVoce] = useState('');
  const [sobreImage, setSobreImage] = useState<string | null>(null);
  const [menuVisible, setMenuVisible] = useState(false);

  // Selecionar imagem de perfil
  const handleSelectProfileImage = async () => {
    const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (!permissionResult.granted) {
      Alert.alert('Permissão necessária', 'É necessária permissão para aceder à galeria.');
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 0.8,
    });

    if (!result.canceled) {
      setProfileImage(result.assets[0].uri);
    }
  };

  // Selecionar imagem para o campo "Sobre você"
  const handleSelectSobreImage = async () => {
    const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (!permissionResult.granted) {
      Alert.alert('Permissão necessária', 'É necessária permissão para aceder à galeria.');
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      quality: 0.8,
    });

    if (!result.canceled) {
      setSobreImage(result.assets[0].uri);
    }
  };

  const handleVoltar = () => {
    if (router.canGoBack()) {
      router.back();
    } else {
      router.replace('/canais' as any);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#1A93B4" />

      {/* Cabeçalho Azul Superior */}
      <View style={styles.header}>
        <View style={styles.headerTop}>
          <TouchableOpacity onPress={handleVoltar} activeOpacity={0.7}>
            <Feather name="chevron-left" size={28} color="#FFF" />
          </TouchableOpacity>

          {/* Botão de Perfil/Menu que abre o AccountMenu */}
          <TouchableOpacity 
            onPress={() => setMenuVisible(true)} 
            activeOpacity={0.7}
            style={styles.menuCircleButton}
          >
            <View style={styles.whiteCircle} />
          </TouchableOpacity>
        </View>

        {/* Foto de Perfil e Nome */}
        <View style={styles.profileSection}>
          <TouchableOpacity 
            style={styles.avatarContainer} 
            onPress={handleSelectProfileImage}
            activeOpacity={0.8}
          >
            {profileImage ? (
              <Image source={{ uri: profileImage }} style={styles.avatarImage} />
            ) : (
              <View style={styles.avatarPlaceholder}>
                <Feather name="user" size={60} color="#D0D0D0" />
              </View>
            )}
            <View style={styles.addIconBadge}>
              <Feather name="camera" size={14} color="#FFF" />
            </View>
          </TouchableOpacity>

          <Text style={styles.userName}>Julia Reis</Text>
          <Text style={styles.userRole}>Login como: Voluntário</Text>
        </View>
      </View>

      {/* Conteúdo Principal (Cartão Branco Arredondado) */}
      <View style={styles.contentContainer}>
        <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
          
          {/* Informações de Contacto */}
          <View style={styles.infoList}>
            {/* Email */}
            <View style={styles.infoRow}>
              <View style={styles.iconCircle}>
                <Feather name="mail" size={18} color="#1A93B4" />
              </View>
              <Text style={styles.infoText}>XXXXX@gmail.com</Text>
            </View>

            {/* Telefone e Botão Histórico */}
            <View style={styles.phoneAndHistoryRow}>
              <View style={styles.infoRow}>
                <View style={styles.iconCircle}>
                  <Feather name="phone" size={18} color="#1A93B4" />
                </View>
                <Text style={styles.infoText}>(xx) XXXXX-XXXX</Text>
              </View>

              {/* Botão Histórico */}
              <TouchableOpacity style={styles.historyButton} activeOpacity={0.7}>
                <View style={styles.historyIconCircle}>
                  <Ionicons name="time-outline" size={24} color="#1A93B4" />
                </View>
                <Text style={styles.historyText}>Histórico</Text>
              </TouchableOpacity>
            </View>

            {/* CPF/Documento */}
            <View style={styles.infoRow}>
              <View style={styles.iconCircle}>
                <Feather name="file-text" size={18} color="#1A93B4" />
              </View>
              <Text style={styles.infoText}>XXX.XXX.XXX-XX</Text>
            </View>
          </View>

          {/* Campo "Sobre você" */}
          <Text style={styles.sectionTitle}>Sobre você:</Text>
          
          <View style={styles.sobreBox}>
            <TextInput
              style={styles.sobreInput}
              placeholder="Escreva um pouco sobre si..."
              placeholderTextColor="#AAA"
              multiline
              textAlignVertical="top"
              value={sobreVoce}
              onChangeText={setSobreVoce}
            />

            {/* Pré-visualização da Imagem Anexada */}
            {sobreImage && (
              <View style={styles.previewContainer}>
                <Image source={{ uri: sobreImage }} style={styles.previewImage} />
                <TouchableOpacity 
                  style={styles.removeImageButton}
                  onPress={() => setSobreImage(null)}
                >
                  <Feather name="x" size={14} color="#FFF" />
                </TouchableOpacity>
              </View>
            )}

            {/* Botão para Inserir/Anexar Imagem */}
            <TouchableOpacity 
              style={styles.uploadImageButton} 
              onPress={handleSelectSobreImage}
              activeOpacity={0.7}
            >
              <Feather name="image" size={32} color="#D0D0D0" />
              <Feather name="plus" size={16} color="#D0D0D0" style={styles.plusIconOverlay} />
            </TouchableOpacity>
          </View>

        </ScrollView>
      </View>

      {/* Componente AccountMenu integrado */}
      <AccountMenu 
        visible={menuVisible} 
        onClose={() => setMenuVisible(false)} 
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1A93B4',
  },
  header: {
    backgroundColor: '#1A93B4',
    paddingHorizontal: 20,
    paddingTop: 10,
    paddingBottom: 35,
  },
  headerTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  menuCircleButton: {
    padding: 4,
  },
  whiteCircle: {
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: '#FFF',
  },
  profileSection: {
    alignItems: 'center',
    marginTop: 5,
  },
  avatarContainer: {
    position: 'relative',
    marginBottom: 10,
  },
  avatarPlaceholder: {
    width: 110,
    height: 110,
    borderRadius: 55,
    backgroundColor: '#FFF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatarImage: {
    width: 110,
    height: 110,
    borderRadius: 55,
  },
  addIconBadge: {
    position: 'absolute',
    bottom: 2,
    right: 2,
    backgroundColor: '#1A93B4',
    padding: 6,
    borderRadius: 15,
    borderWidth: 2,
    borderColor: '#FFF',
  },
  userName: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FFF',
    textDecorationLine: 'underline',
    marginBottom: 2,
  },
  userRole: {
    fontSize: 12,
    color: '#E0F2F7',
  },
  contentContainer: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    borderTopLeftRadius: 35,
    borderTopRightRadius: 35,
    paddingHorizontal: 25,
    paddingTop: 25,
  },
  scrollContent: {
    paddingBottom: 30,
  },
  infoList: {
    marginBottom: 20,
    gap: 12,
  },
  infoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  iconCircle: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: '#DDF0F5',
    justifyContent: 'center',
    alignItems: 'center',
  },
  infoText: {
    fontSize: 13,
    color: '#333',
    fontWeight: '500',
  },
  phoneAndHistoryRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  historyButton: {
    alignItems: 'center',
    marginTop: -10,
  },
  historyIconCircle: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: '#BCE3EA',
    justifyContent: 'center',
    alignItems: 'center',
  },
  historyText: {
    fontSize: 10,
    color: '#555',
    marginTop: 2,
  },
  sectionTitle: {
    fontSize: 16,
    color: '#666',
    marginBottom: 10,
  },
  sobreBox: {
    borderWidth: 1.5,
    borderColor: '#BCE3EA',
    borderRadius: 20,
    padding: 15,
    height: 180,
    position: 'relative',
    backgroundColor: '#FFF',
  },
  sobreInput: {
    flex: 1,
    fontSize: 13,
    color: '#333',
  },
  uploadImageButton: {
    position: 'absolute',
    bottom: 12,
    right: 12,
    backgroundColor: '#F0F4F6',
    padding: 8,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  plusIconOverlay: {
    position: 'absolute',
    top: 6,
    right: 6,
  },
  previewContainer: {
    position: 'absolute',
    bottom: 12,
    left: 12,
  },
  previewImage: {
    width: 50,
    height: 50,
    borderRadius: 8,
  },
  removeImageButton: {
    position: 'absolute',
    top: -6,
    right: -6,
    backgroundColor: '#FF4D4D',
    borderRadius: 10,
    padding: 2,
  },
});