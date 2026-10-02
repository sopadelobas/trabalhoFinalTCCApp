import React, { createContext, useContext, useState } from 'react';
import AccountMenu from '../AccountMenu';

interface MenuContextData {
  openMenu: () => void;
  closeMenu: () => void;
}

const MenuContext = createContext<MenuContextData>({} as MenuContextData);

export const MenuProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [visible, setVisible] = useState(false);

  const openMenu = () => setVisible(true);
  const closeMenu = () => setVisible(false);

  return (
    <MenuContext.Provider value={{ openMenu, closeMenu }}>
      {children}
      {/* O AccountMenu fica montado no topo da aplicação */}
      <AccountMenu visible={visible} onClose={closeMenu} />
    </MenuContext.Provider>
  );
};

export const useMenu = () => useContext(MenuContext);