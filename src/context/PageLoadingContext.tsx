import { createContext, useContext, useState, type ReactNode } from 'react';

/* ================= TYPES ================= */

interface PageLoadingContextType {
  loading: boolean;
  showLoader: () => void;
  hideLoader: () => void;
}

/* ================= CONTEXT ================= */

const PageLoadingContext = createContext<PageLoadingContextType | undefined>(
  undefined
);

/* ================= PROVIDER ================= */

interface ProviderProps {
  children: ReactNode;
}

export function PageLoadingProvider({ children }: ProviderProps) {
  const [loading, setLoading] = useState(false);

  const showLoader = () => setLoading(true);
  const hideLoader = () => setLoading(false);

  return (
    <PageLoadingContext.Provider
      value={{
        loading,
        showLoader,
        hideLoader,
      }}
    >
      {children}
    </PageLoadingContext.Provider>
  );
}

/* ================= HOOK ================= */

export function usePageLoading() {
  const context = useContext(PageLoadingContext);

  if (!context) {
    throw new Error(
      'usePageLoading deve ser usado dentro de um PageLoadingProvider'
    );
  }

  return context;
}