import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React, { createContext, useContext, useState } from 'react';
import {
  Modal,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';

type TipoUsuario = 'ONG' | 'VOLUNTARIO';

interface MenuContextData {
  isMenuOpen: boolean;
  userType: TipoUsuario;
  openMenu: () => void;
  closeMenu: () => void;
  setUserType: (type: TipoUsuario) => void;
}

const MenuContext = createContext<MenuContextData>({} as MenuContextData);

export const MenuProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [userType, setUserType] = useState<TipoUsuario>('VOLUNTARIO'); // Padrão voluntário
  const router = useRouter();

  const openMenu = () => setIsMenuOpen(true);
  const closeMenu = () => setIsMenuOpen(false);

  const handleNavigate = (route: string) => {
    closeMenu();
    router.push(route as any);
  };

  return (
    <MenuContext.Provider
      value={{ isMenuOpen, userType, openMenu, closeMenu, setUserType }}
    >
      {children}

      {/* Drawer / Menu Lateral */}
      <Modal
        visible={isMenuOpen}
        transparent={true}
        animationType="fade"
        onRequestClose={closeMenu}
      >
        <TouchableWithoutFeedback onPress={closeMenu}>
          <View style={styles.overlay}>
            <TouchableWithoutFeedback>
              <SafeAreaView style={styles.drawerContainer}>
                {/* Botão Fechar (X) */}
                <TouchableOpacity style={styles.closeBtn} onPress={closeMenu}>
                  <Ionicons name="close" size={28} color="#FFF" />
                </TouchableOpacity>

                {/* Título do Menu */}
                <Text style={styles.menuTitle}>CONTA</Text>

                {/* OPÇÕES DINÂMICAS BASEADAS NO TIPO DE USUÁRIO */}
                <View style={styles.menuItemsGroup}>
                  {userType === 'VOLUNTARIO' ? (
                    /* 🔵 MENU DO VOLUNTÁRIO */
                    <>
                      <TouchableOpacity
                        style={styles.menuItem}
                        onPress={() => handleNavigate('/home-v')}
                      >
                        <Text style={styles.bullet}>•</Text>
                        <Text style={styles.menuItemText}>Informações</Text>
                      </TouchableOpacity>

                      <TouchableOpacity
                        style={styles.menuItem}
                        onPress={() => handleNavigate('/agenda')}
                      >
                        <Text style={styles.bullet}>•</Text>
                        <Text style={styles.menuItemText}>Agenda</Text>
                      </TouchableOpacity>

                      <TouchableOpacity
                        style={styles.menuItem}
                        onPress={() => handleNavigate('/historico')}
                      >
                        <Text style={styles.bullet}>•</Text>
                        <Text style={styles.menuItemText}>Histórico</Text>
                      </TouchableOpacity>

                      <TouchableOpacity
                        style={styles.menuItem}
                        onPress={() => handleNavigate('/explore')}
                      >
                        <Text style={styles.bullet}>•</Text>
                        <Text style={styles.menuItemText}>Minhas ONG's</Text>
                      </TouchableOpacity>
                    </>
                  ) : (
                    /* 🟠 MENU DA ONG */
                    <>
                      <TouchableOpacity
                        style={styles.menuItem}
                        onPress={() => handleNavigate('/home')}
                      >
                        <Text style={styles.bullet}>•</Text>
                        <Text style={styles.menuItemText}>Informações</Text>
                      </TouchableOpacity>

                      <TouchableOpacity
                        style={styles.menuItem}
                        onPress={() => handleNavigate('/metas')}
                      >
                        <Text style={styles.bullet}>•</Text>
                        <Text style={styles.menuItemText}>Metas</Text>
                      </TouchableOpacity>

                      <TouchableOpacity
                        style={styles.menuItem}
                        onPress={() => handleNavigate('/mensagens-chat')}
                      >
                        <Text style={styles.bullet}>•</Text>
                        <Text style={styles.menuItemText}>Mensagens</Text>
                      </TouchableOpacity>

                      <TouchableOpacity
                        style={styles.menuItem}
                        onPress={() => handleNavigate('/controle-doacoes')}
                      >
                        <Text style={styles.bullet}>•</Text>
                        <Text style={styles.menuItemText}>Doações</Text>
                      </TouchableOpacity>
                    </>
                  )}
                </View>

                {/* Rodapé do Menu (Sair / Ajuda) */}
                <View style={styles.menuFooter}>
                  <TouchableOpacity
                    style={styles.footerItem}
                    onPress={() => handleNavigate('/login')}
                  >
                    <Text style={styles.footerItemText}>Sair</Text>
                    <Ionicons name="log-out-outline" size={18} color="#FFF" />
                  </TouchableOpacity>

                  <TouchableOpacity
                    style={styles.footerItem}
                    onPress={() => handleNavigate('/suporte')}
                  >
                    <Text style={styles.footerItemText}>Ajuda?</Text>
                    <Ionicons name="help-circle-outline" size={18} color="#FFF" />
                  </TouchableOpacity>
                </View>
              </SafeAreaView>
            </TouchableWithoutFeedback>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
    </MenuContext.Provider>
  );
};

export const useMenu = () => useContext(MenuContext);

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    flexDirection: 'row',
  },
  drawerContainer: {
    width: '80%',
    maxWidth: 320,
    backgroundColor: '#169BBA',
    height: '100%',
    paddingHorizontal: 25,
    paddingTop: 40,
    paddingBottom: 20,
    justifyContent: 'space-between',
  },
  closeBtn: {
    alignSelf: 'flex-end',
    padding: 5,
  },
  menuTitle: {
    color: '#FFF',
    fontSize: 22,
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 25,
  },
  menuItemsGroup: {
    flex: 1,
    gap: 18,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  bullet: {
    color: '#FFF',
    fontSize: 18,
  },
  menuItemText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: '500',
  },
  menuFooter: {
    gap: 14,
    paddingTop: 20,
    borderTopWidth: 1,
    borderTopColor: 'rgba(255, 255, 255, 0.2)',
  },
  footerItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  footerItemText: {
    color: '#FFF',
    fontSize: 14,
  },
});