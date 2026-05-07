import { type ReactNode, createContext, useContext } from 'react';
import { uiStore } from '../store/uiStore';

interface StoreContextValue {
  uiStore: typeof uiStore;
}

const StoreContext = createContext<StoreContextValue | null>(null);

export const MobxProvider = ({ children }: { children: ReactNode }) => {
  return (
    <StoreContext.Provider value={{ uiStore }}>
      {children}
    </StoreContext.Provider>
  );
};

export const useStores = () => {
  const context = useContext(StoreContext);
  if (!context) {
    throw new Error('useStores must be used within MobxProvider');
  }
  return context;
};
