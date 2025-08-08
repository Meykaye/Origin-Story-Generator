import React, { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

export const ThemeProvider = ({ children }) => {
  const [isDark, setIsDark] = useState(() => {
    // Check for saved theme preference or default to light
    const savedTheme = localStorage.getItem('linkVibe-theme');
    return savedTheme ? savedTheme === 'dark' : false;
  });

  useEffect(() => {
    // Save theme preference
    localStorage.setItem('linkVibe-theme', isDark ? 'dark' : 'light');
    
    // Update document class for global styling
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  const theme = {
    isDark,
    toggleTheme,
    colors: {
      // Light theme colors
      light: {
        bg: 'from-blue-50 via-white to-purple-50',
        cardBg: 'bg-white/90',
        text: 'text-gray-900',
        textSecondary: 'text-gray-600',
        textMuted: 'text-gray-500',
        border: 'border-white/20',
        accent: 'from-blue-600 to-purple-600',
        accentHover: 'from-blue-700 to-purple-700'
      },
      // Dark theme colors
      dark: {
        bg: 'from-gray-900 via-gray-800 to-purple-900',
        cardBg: 'bg-gray-800/90',
        text: 'text-gray-100',
        textSecondary: 'text-gray-300',
        textMuted: 'text-gray-400',
        border: 'border-gray-700/50',
        accent: 'from-purple-600 to-blue-600',
        accentHover: 'from-purple-700 to-blue-700'
      }
    }
  };

  return (
    <ThemeContext.Provider value={theme}>
      {children}
    </ThemeContext.Provider>
  );
};
