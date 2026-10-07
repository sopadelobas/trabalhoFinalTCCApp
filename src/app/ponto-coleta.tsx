import { Feather, FontAwesome5 } from '@expo/vector-icons';
import {
    SafeAreaView,
    StatusBar,
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from 'react-native';

export default function PontoColetaScreen({ navigation }: any) {
  
  const handlePublicarPonto = () => {
   
    console.log('Publicar Pontos de Coleta');
  };

  const handleEncontroDoadores = () => {
    
    console.log('Encontro com Doadores');
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
        <Text style={styles.title}>O que você gostaria de{"\n"}fazer?</Text>

        
        <TouchableOpacity style={styles.menuButton} onPress={handlePublicarPonto}>
          <Text style={styles.buttonText}>
            PUBLICAR PONTOS DE{"\n"}COLETA
          </Text>
          <Feather name="box" size={24} color="#169BBA" style={styles.iconRight} />
        </TouchableOpacity>

        
        <TouchableOpacity style={styles.menuButton} onPress={handleEncontroDoadores}>
          <Text style={styles.buttonText}>
            ENCONTRO COM{"\n"}DOADORES
          </Text>
          <FontAwesome5 name="users" size={22} color="#169BBA" style={styles.iconRight} />
        </TouchableOpacity>
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
    fontSize: 20,
    fontWeight: 'bold',
    color: '#1e9fc5',
    textAlign: 'center',
    marginBottom: 48,
    lineHeight: 28,
  },
  menuButton: {
    width: '100%',
    height: 100,
    borderWidth: 1.5,
    borderColor: '#bce1ec',
    borderRadius: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 24,
    marginBottom: 32,
    backgroundColor: '#fff',
  },
  buttonText: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#169BBA',
    textAlign: 'center',
    lineHeight: 20,
    flex: 1,
    marginLeft: 24, 
  },
  iconRight: {
    marginLeft: 8,
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