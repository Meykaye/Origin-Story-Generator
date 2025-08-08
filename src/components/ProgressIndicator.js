import React from 'react';
import { Book, Globe, Feather, Sparkles } from 'lucide-react';
import { t } from '../utils/translations';
import { useTheme } from '../App';

const ProgressIndicator = ({ progress, currentStep, phase }) => {
  const { isDarkMode } = useTheme();
  
  const getPhaseIcon = () => {
    switch (phase) {
      case 'planning': 
        return <Book className="w-6 h-6 sm:w-8 sm:h-8 text-blue-500 animate-pulse" />;
      case 'gathering': 
        return <Globe className="w-6 h-6 sm:w-8 sm:h-8 text-green-500 animate-spin" />;
      case 'crafting': 
        return <Feather className="w-6 h-6 sm:w-8 sm:h-8 text-purple-500 animate-bounce" />;
      case 'polishing': 
        return <Sparkles className="w-6 h-6 sm:w-8 sm:h-8 text-amber-500 animate-pulse" />;
      default: 
        return <Book className="w-6 h-6 sm:w-8 sm:h-8 text-gray-500" />;
    }
  };

  const getPhaseDescription = () => {
    switch (phase) {
      case 'planning': 
        return 'Researching historical records and planning the narrative structure...';
      case 'gathering': 
        return 'Collecting fascinating facts and weaving them into an engaging story...';
      case 'crafting': 
        return 'Adding humor, drama, and compelling character to the tale...';
      case 'polishing': 
        return 'Perfecting the narrative and adding those finishing touches...';
      default: 
        return 'Working on your origin story...';
    }
  };

  return (
    <div className={`backdrop-blur-sm rounded-2xl shadow-xl border p-6 sm:p-8 md:p-12 mb-6 sm:mb-8 animate-slideUp hover:shadow-2xl transition-all duration-500 group ${
      isDarkMode 
        ? 'bg-gray-800/90 border-gray-700/20' 
        : 'bg-white/90 border-white/20'
    }`}>
      <div className="text-center mb-6 sm:mb-8">
        <div className="mb-4 sm:mb-6 animate-fadeIn">
          <div className={`w-16 h-16 sm:w-20 sm:h-20 rounded-full flex items-center justify-center shadow-lg border group-hover:shadow-xl group-hover:scale-110 transition-all duration-500 mx-auto ${
            isDarkMode 
              ? 'bg-gray-700 border-gray-600/50' 
              : 'bg-gray-50 border-gray-200/50'
          }`}>
            {getPhaseIcon()}
          </div>
        </div>
        <h3 className={`text-xl sm:text-2xl font-serif mb-2 sm:mb-3 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent animate-fadeIn animation-delay-300 group-hover:from-amber-600 group-hover:to-orange-600 transition-all duration-500 ${
          isDarkMode ? 'text-gray-100' : 'text-gray-900'
        }`}>
          {t('doingDigging')}
        </h3>
        <p className={`font-serif text-base sm:text-lg mb-2 transition-colors duration-500 px-4 sm:px-0 ${
          isDarkMode ? 'text-gray-300' : 'text-gray-600'
        }`}>{currentStep}</p>
        <p className={`font-serif text-sm animate-fadeIn animation-delay-500 transition-colors duration-300 px-2 sm:px-0 ${
          isDarkMode 
            ? 'text-gray-400 group-hover:text-gray-300' 
            : 'text-gray-500 group-hover:text-gray-600'
        }`}>{getPhaseDescription()}</p>
      </div>
      
      <div className="relative animate-slideUp animation-delay-700">
        <div className={`w-full rounded-full h-2 sm:h-3 overflow-hidden shadow-inner ${
          isDarkMode ? 'bg-gray-700' : 'bg-gray-200'
        }`}>
          <div 
            className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 sm:h-3 rounded-full transition-all duration-1000 ease-out relative overflow-hidden"
            style={{ width: `${progress}%` }}
          >
            <div className="absolute inset-0 bg-white/30 animate-pulse"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent transform -skew-x-12 animate-shimmer animation-delay-1000"></div>
          </div>
        </div>
        <div className="text-center mt-2 sm:mt-3">
          <span className={`text-xs sm:text-sm font-medium transition-colors duration-500 ${
            isDarkMode ? 'text-gray-300' : 'text-gray-600'
          }`}>{Math.round(progress)}% Complete</span>
        </div>
      </div>

      {/* Phase indicators */}
      <div className="flex justify-center mt-6 sm:mt-8 space-x-4 sm:space-x-6 md:space-x-8 animate-fadeIn animation-delay-1000">
        {[
          { key: 'planning', label: 'Planning', icon: Book },
          { key: 'gathering', label: 'Research', icon: Globe },
          { key: 'crafting', label: 'Writing', icon: Feather },
          { key: 'polishing', label: 'Polishing', icon: Sparkles }
        ].map(({ key, label, icon: Icon }, index) => (
          <div 
            key={key} 
            className={`flex flex-col items-center transition-all duration-500 hover:scale-110 ${
              phase === key ? 'text-blue-600 scale-110' : progress > ['planning', 'gathering', 'crafting', 'polishing'].indexOf(key) * 25 ? 'text-green-500' : isDarkMode ? 'text-gray-400' : 'text-gray-500'
            }`}
            style={{animationDelay: `${index * 100 + 1200}ms`}}
          >
            <div className={`w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center transition-all duration-300 ${
              phase === key 
                ? 'bg-blue-600 text-white shadow-lg animate-pulse' 
                : progress > ['planning', 'gathering', 'crafting', 'polishing'].indexOf(key) * 25 
                  ? 'bg-green-500 text-white shadow-md'
                  : isDarkMode 
                    ? 'bg-gray-700 text-gray-400 hover:bg-gray-600'
                    : 'bg-gray-200 text-gray-500 hover:bg-gray-300'
            }`}>
              <Icon className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5" />
            </div>
            <span className={`text-xs font-medium mt-1 sm:mt-2 transition-colors duration-300 text-center ${
              phase === key 
                ? 'text-blue-600' 
                : progress > ['planning', 'gathering', 'crafting', 'polishing'].indexOf(key) * 25 
                  ? 'text-green-600'
                  : isDarkMode ? 'text-gray-400' : 'text-gray-500'
            }`}>
              <span className="hidden sm:inline">{label}</span>
              <span className="sm:hidden">{label.substring(0, 4)}</span>
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProgressIndicator;
