import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React from 'react';
import { Modal, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

interface Props {
  visible: boolean;
  onClose: () => void;
}

export default function AccountMenu({ visible, onClose }: Props) {
  const router = useRouter();

  const handleNavigate = (route: string) => {
    // 1. Fecha o menu primeiro
    onClose();

    // 2. Executa a navegação de forma assíncrona após o modal fechar
    setTimeout(() => {
      router.navigate(route as any);
    }, 100);
  };

  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}
    >
      <View style={styles.overlay}>
        {/* Lado esquerdo (Menu Azul) */}
        <View style={styles.drawer}>
          <TouchableOpacity style={styles.closeBtn} onPress={onClose}>
            <Ionicons name="close" size={28} color="#FFF" />
          </TouchableOpacity>

          <Text style={styles.title}>CONTA</Text>

          <View style={styles.menuItems}>
            {/* Rota para abrir informacoes.tsx */}
            <TouchableOpacity 
              style={styles.item} 
              onPress={() => handleNavigate('/informacoes')}
            >
              <Text style={styles.itemText}>Informações</Text>
            </TouchableOpacity>

            {/* Rota para mensagens */}
            <TouchableOpacity 
              style={styles.item} 
              onPress={() => handleNavigate('/dm-ong')}
            >
              <Text style={styles.itemText}>Mensagens</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.footer}>
            <TouchableOpacity style={styles.footerBtn} onPress={() => handleNavigate('/')}>
              <Text style={styles.footerText}>Sair</Text>
              <Ionicons name="exit-outline" size={18} color="#FFF" />
            </TouchableOpacity>

            <TouchableOpacity style={styles.footerBtn} onPress={() => handleNavigate('/suporte')}>
              <Text style={styles.footerText}>Ajuda?</Text>
              <Ionicons name="help-circle-outline" size={18} color="#FFF" />
            </TouchableOpacity>
          </View>
        </View>

        {/* Lado direito transparente para fechar ao clicar fora */}
        <TouchableOpacity style={styles.backdrop} onPress={onClose} activeOpacity={1} />
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'rgba(0,0,0,0.4)',
  },
  drawer: {
    width: '65%',
    backgroundColor: '#169BBA',
    padding: 20,
    justifyContent: 'space-between',
  },
  backdrop: {
    width: '35%',
  },
  closeBtn: {
    alignSelf: 'flex-end',
    marginTop: 20,
  },
  title: {
    color: '#FFF',
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 30,
  },
  menuItems: {
    flex: 1,
    gap: 15,
  },
  item: {
    paddingVertical: 5,
  },
  itemText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  footer: {
    gap: 15,
    marginBottom: 20,
  },
  footerBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  footerText: {
    color: '#FFF',
    fontSize: 16,
  },
});