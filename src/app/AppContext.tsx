import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { Preference, NotebookEntry, mockShops } from './types';
import { Theme, ramenTheme, udonTheme, AppMode } from './theme';

const NOTEBOOK_KEY = 'meomtantjeong_notebook_v1';

const INITIAL_ENTRIES: NotebookEntry[] = [
  {
    id: '1',
    shopId: '1',
    date: '2026.03.10',
    shopName: '나루라멘',
    menu: '토리파이탄 라멘 + 차슈 추가',
    memo: '염도가 완벽했고 차슈의 두께가 이전보다 두꺼워진 느낌. 마늘 후레이크 추가가 신의 한 수였음.',
  },
  {
    id: '2',
    shopId: '2',
    date: '2026.03.02',
    shopName: '면족 산',
    menu: '토리 파이탄 라멘',
    memo: '국물이 매우 진함. 닭 육수의 고소함이 일품이나 면발의 익힘 정도가 조금 아쉬웠음.',
  },
  {
    id: '3',
    shopId: '3',
    date: '2026.02.24',
    shopName: '칠링탕',
    menu: '마제소바 세트',
    memo: '다시마 식초를 두 바퀴 돌렸을 때 감칠맛이 폭발함. 남은 양념에 밥 비벼먹는 것 필수.',
  },
];

interface AppContextType {
  preference: Preference;
  setPreference: (pref: Preference) => void;
  notebookEntries: NotebookEntry[];
  addNotebookEntry: (entry: Omit<NotebookEntry, 'id'>) => void;
  updateNotebookEntry: (id: string, updates: Partial<Omit<NotebookEntry, 'id'>>) => void;
  deleteNotebookEntry: (id: string) => void;
  isShopSaved: (shopId: string) => boolean;
  getEntriesByShop: (shopId: string) => NotebookEntry[];
  getRecommendedShops: () => typeof mockShops;
  mode: AppMode;
  toggleMode: () => void;
  theme: Theme;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export function AppProvider({ children }: { children: ReactNode }) {
  const [mode, setMode] = useState<AppMode>('ramen');

  const [preference, setPreference] = useState<Preference>({
    broth: null,
    texture: null,
    richness: null,
    spiceLevel: null,
  });

  const [notebookEntries, setNotebookEntries] = useState<NotebookEntry[]>(() => {
    try {
      const saved = localStorage.getItem(NOTEBOOK_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length > 0) return parsed;
      }
    } catch {}
    return INITIAL_ENTRIES;
  });

  useEffect(() => {
    try {
      localStorage.setItem(NOTEBOOK_KEY, JSON.stringify(notebookEntries));
    } catch {}
  }, [notebookEntries]);

  const addNotebookEntry = (entry: Omit<NotebookEntry, 'id'>) => {
    const newEntry = { ...entry, id: Date.now().toString() };
    setNotebookEntries((prev) => [newEntry, ...prev]);
  };

  const updateNotebookEntry = (id: string, updates: Partial<Omit<NotebookEntry, 'id'>>) => {
    setNotebookEntries((prev) =>
      prev.map((e) => (e.id === id ? { ...e, ...updates } : e))
    );
  };

  const deleteNotebookEntry = (id: string) => {
    setNotebookEntries((prev) => prev.filter((e) => e.id !== id));
  };

  const isShopSaved = (shopId: string) =>
    notebookEntries.some((e) => e.shopId === shopId);

  const getEntriesByShop = (shopId: string) =>
    notebookEntries.filter((e) => e.shopId === shopId);

  const toggleMode = () => setMode((m) => (m === 'ramen' ? 'udon' : 'ramen'));

  const getRecommendedShops = () => {
    let shops = mockShops.filter((s) => s.type === mode);
    const scored = shops.map((shop) => {
      let score = 0;
      if (preference.broth && shop.broth === preference.broth) score += 3;
      if (preference.texture && shop.texture === preference.texture) score += 2;
      if (preference.richness && shop.richness === preference.richness) score += 2;
      if (preference.spiceLevel && shop.spiceLevel === preference.spiceLevel) score += 2;
      if (shop.mustTry) score += 1;
      return { shop, score };
    });
    return scored.sort((a, b) => b.score - a.score).map((s) => s.shop);
  };

  const theme = mode === 'ramen' ? ramenTheme : udonTheme;

  return (
    <AppContext.Provider
      value={{
        preference,
        setPreference,
        notebookEntries,
        addNotebookEntry,
        updateNotebookEntry,
        deleteNotebookEntry,
        isShopSaved,
        getEntriesByShop,
        getRecommendedShops,
        mode,
        toggleMode,
        theme,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  const context = useContext(AppContext);
  if (context === undefined) throw new Error('useApp must be used within an AppProvider');
  return context;
}
