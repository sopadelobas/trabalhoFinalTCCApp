import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function MetasScreen() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity style={styles.backBtn} onPress={() => router.back()}>
        <Ionicons name="chevron-back" size={28} color="#FFF" />
      </TouchableOpacity>

      <View style={styles.whiteCard}>
        <ScrollView contentContainerStyle={styles.scrollContent}>
          <Text style={styles.mainTitle}>UMA META FOI ALCANÇADA!</Text>
          <Text style={styles.subTitle}>30 Cestas básicas</Text>

          {/* Barra 100% Concluída */}
          <View style={styles.progressBg}>
            <View style={[styles.progressFill, { width: '100%' }]} />
          </View>
          <Text style={styles.percentText}>100%</Text>

          <TouchableOpacity style={styles.outlineBtn}
          onPress={() => router.push('/aumentaMeta')}>
            <Text style={styles.outlineBtnText}>CONCLUIR META</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.outlineBtn}>
            <Text style={styles.outlineBtnText}>AUMENTAR META</Text>
          </TouchableOpacity>

          {/* Segunda Meta */}
          <Text style={[styles.subTitle, { marginTop: 25 }]}>100 sacos de ração</Text>
          <View style={styles.progressBg}>
            <View style={[styles.progressFill, { width: '16%' }]} />
          </View>
          <Text style={styles.percentText}>16%</Text>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#169BBA' },
  backBtn: { position: 'absolute', top: 40, left: 20, zIndex: 10 },
  whiteCard: {
    flex: 1,
    backgroundColor: '#FFF',
    marginTop: 90,
    marginHorizontal: 15,
    marginBottom:70,
    borderRadius: 25,
    padding: 25,
  },
  scrollContent: { alignItems: 'center' },
  mainTitle: { color: '#169BBA', fontSize: 16, fontWeight: 'bold', marginBottom: 30 },
  subTitle: { color: '#333', fontSize: 14, fontWeight: 'bold', marginBottom: 10 },
  progressBg: {
    width: '90%',
    height: 18,
    backgroundColor: '#E0E0E0',
    borderRadius: 10,
    overflow: 'hidden',
  },
  progressFill: { height: '100%', backgroundColor: '#169BBA' },
  percentText: { color: '#169BBA', fontWeight: 'bold', marginVertical: 8 },
  outlineBtn: {
    borderWidth: 1,
    borderColor: '#169BBA',
    borderRadius: 15,
    width: '85%',
    paddingVertical: 15,
    alignItems: 'center',
    marginVertical: 20,
  },
  outlineBtnText: { color: '#169BBA', fontWeight: 'bold', fontSize: 13 },
});