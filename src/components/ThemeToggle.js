import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const ThemeToggle = () => {
  const { isDark, toggleTheme } = useTheme();

  return (
    <div className="fixed top-6 right-6 z-50">
      <button
        onClick={toggleTheme}
        className={`
          relative w-14 h-14 rounded-full border-2 transition-all duration-300
          ${isDark 
            ? 'bg-gray-800 border-gray-600 text-yellow-400 hover:bg-gray-700' 
            : 'bg-white border-gray-300 text-gray-600 hover:bg-gray-50'
          }
          shadow-lg hover:shadow-xl
        `}
        aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      >
        <div className="absolute inset-0 flex items-center justify-center">
          {isDark ? (
            <Sun className="w-6 h-6" />
          ) : (
            <Moon className="w-6 h-6" />
          )}
        </div>
      </button>
    </div>
  );
};

export default ThemeToggle;
