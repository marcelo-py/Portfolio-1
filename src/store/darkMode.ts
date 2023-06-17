import { create } from 'zustand';
import { persist } from 'zustand/middleware';

type ThemeMode = {
  isDarkTheme: boolean;
  switchTheme: () => void;
};

export const ThemeMode = create(
  persist<ThemeMode>(
    (set) => ({
      isDarkTheme: false,
      switchTheme: () => {
        set((state) => ({ isDarkTheme: !state }));
      },
    }),
    { name: 'themeMode' }
  )
);
