import { Feather } from '@expo/vector-icons';
import {
    SafeAreaView,
    StatusBar,
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from 'react-native';

export default function ConfirmacaoEnvioScreen({ navigation }: any) {
  
  const handleVoltarInicio = () => {
    
    if (navigation?.popToTop) {
      navigation.popToTop();
    } else {
      console.log('Navegar para o início do aplicativo');
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#169BBA" />
      
      
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={handleVoltarInicio}>
          <Feather name="chevron-left" size={28} color="#fff" />
        </TouchableOpacity>
        <View style={styles.headerCircle} />
      </View>

      
      <View style={styles.blueBackgroundSpace} />

      
      <View style={styles.whiteCard}>
        <View style={styles.messageContainer}>
          <Text style={styles.successText}>SEU POST FOI{"\n"}ENVIADO!</Text>
        </View>
      </View>

      
      <View style={styles.footer}>
        <Text style={styles.footerText}>Todos os direitos reservados</Text>
        <View style={styles.footerCircle}>
          <Text style={styles.footerCircleText}>E</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#169BBA', 
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
  blueBackgroundSpace: {
    height: 60, 
    backgroundColor: '#169BBA',
  },
  whiteCard: {
    flex: 1,
    backgroundColor: '#fff',
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    paddingHorizontal: 32,
  },
  messageContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 60, 
  },
  successText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#169BBA',
    textAlign: 'center',
    lineHeight: 34,
    letterSpacing: 1,
  },
  footer: {
    backgroundColor: '#d3d3d3',
    height: 45,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 16,
  },
  footerText: {
    color: '#fff',
    fontSize: 12,
    marginRight: 6,
  },
  footerCircle: {
    width: 18,
    height: 18,
    borderRadius: 9,
    borderWidth: 1,
    borderColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  footerCircleText: {
    color: '#fff',
    fontSize: 10,
    fontWeight: 'bold',
  },
});