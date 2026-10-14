// src/app/post-enviado.tsx

import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

import AccountMenu from '@/components/AccountMenu';

export default function PostEnviadoScreen() {
  const router = useRouter();
  const [menuVisible, setMenuVisible] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.topBar}>
        <TouchableOpacity onPress={() => router.replace('/home')} activeOpacity={0.7} style={styles.backBtn}>
          <Feather name="chevron-left" size={28} color="#FFF" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.profileCircle} onPress={() => setMenuVisible(true)}>
          <View style={styles.innerProfileCircle} />
        </TouchableOpacity>
      </View>

      <View style={styles.cardContainer}>
        <View style={styles.messageBox}>
          <Text style={styles.successText}>SEU POST FOI{'\n'}ENVIADO!</Text>
        </View>

        <View style={styles.footer}>
          <Text style={styles.footerText}>Todos os direitos reservados ©</Text>
        </View>
      </View>

      <AccountMenu visible={menuVisible} onClose={() => setMenuVisible(false)} userType="ong" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#169BBA' },
  topBar: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 20, paddingTop: 15, paddingBottom: 15 },
  backBtn: { padding: 4 },
  profileCircle: { padding: 2 },
  innerProfileCircle: { width: 28, height: 28, borderRadius: 14, backgroundColor: '#FFF' },
  cardContainer: { flex: 1, backgroundColor: '#FFF', borderTopLeftRadius: 35, borderTopRightRadius: 35, paddingHorizontal: 25, paddingTop: 50, justifyContent: 'space-between', alignItems: 'center' },
  messageBox: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  successText: { color: '#169BBA', fontSize: 22, fontWeight: 'bold', textAlign: 'center', lineHeight: 30 },
  footer: { paddingVertical: 20, alignItems: 'center' },
  footerText: { color: '#888', fontSize: 11 },
});