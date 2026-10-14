// src/components/AccountMenu.tsx

import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React from 'react';
import { Modal, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

interface Props {
  visible: boolean;
  onClose: () => void;
  userType?: 'voluntario' | 'ong';
}

export default function AccountMenu({ visible, onClose, userType = 'voluntario' }: Props) {
  const router = useRouter();

  const handleIrParaInformacoes = () => {
    onClose();
    setTimeout(() => {
      if (userType === 'ong') {
        router.push('/informacoes-ong');
      } else {
        router.push('/informacoes');
      }
    }, 120);
  };

  const handleNavigate = (route: string) => {
    onClose();
    setTimeout(() => {
      router.push(route as any);
    }, 120);
  };

  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}
    >
      <View style={styles.overlay}>
        <View style={styles.drawer}>
          <TouchableOpacity style={styles.closeBtn} onPress={onClose}>
            <Ionicons name="close" size={28} color="#FFF" />
          </TouchableOpacity>

          <Text style={styles.title}>CONTA</Text>

          <View style={styles.menuItems}>
            {/* Opção Informações (Comum aos dois perfis) */}
            <TouchableOpacity 
              style={styles.item} 
              onPress={handleIrParaInformacoes}
            >
              <Text style={styles.itemText}>Informações</Text>
            </TouchableOpacity>

            {/* Menu exclusivo da ONG */}
            {userType === 'ong' ? (
              <TouchableOpacity 
                style={styles.item} 
                onPress={() => handleNavigate('/dm-ong')}
              >
                <Text style={styles.itemText}>Mensagens</Text>
              </TouchableOpacity>
            ) : (
              /* Menu exclusivo do Voluntário */
              <>
                <TouchableOpacity style={styles.item} onPress={() => handleNavigate('/agenda')}>
                  <Text style={styles.itemText}>Agenda</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.item} onPress={() => handleNavigate('/historico-v')}>
                  <Text style={styles.itemText}>Histórico</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.item} onPress={() => handleNavigate('/minhas-ongs')}>
                  <Text style={styles.itemText}>Minhas ONG's</Text>
                </TouchableOpacity>
              </>
            )}
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

        <TouchableOpacity style={styles.backdrop} onPress={onClose} activeOpacity={1} />
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  overlay: { flex: 1, flexDirection: 'row', backgroundColor: 'rgba(0,0,0,0.4)' },
  drawer: { width: '65%', backgroundColor: '#169BBA', padding: 20, justifyContent: 'space-between' },
  backdrop: { width: '35%' },
  closeBtn: { alignSelf: 'flex-end', marginTop: 20 },
  title: { color: '#FFF', fontSize: 22, fontWeight: 'bold', marginBottom: 30 },
  menuItems: { flex: 1, gap: 15 },
  item: { paddingVertical: 5 },
  itemText: { color: '#FFF', fontSize: 16, fontWeight: 'bold' },
  footer: { gap: 15, marginBottom: 20 },
  footerBtn: { flexDirection: 'row', alignItems: 'center', gap: 8 },
  footerText: { color: '#FFF', fontSize: 16 },
});