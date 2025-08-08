import React from 'react';
import { Feather, ChevronRight, Sparkles, Coffee, Lightbulb, Globe, Book } from 'lucide-react';
import { t } from '../utils/translations';
import { useTheme } from '../App';

// Suggest popular topics
const POPULAR_TOPICS = [
  { icon: Coffee, text: "Coffee", lightColor: "bg-amber-100 text-amber-800 hover:bg-amber-200", darkColor: "bg-amber-900/30 text-amber-300 hover:bg-amber-800/40", glow: "topic-amber" },
  { icon: Lightbulb, text: "Light Bulb", lightColor: "bg-yellow-100 text-yellow-800 hover:bg-yellow-200", darkColor: "bg-yellow-900/30 text-yellow-300 hover:bg-yellow-800/40", glow: "topic-yellow" },
  { icon: Globe, text: "Internet", lightColor: "bg-blue-100 text-blue-800 hover:bg-blue-200", darkColor: "bg-blue-900/30 text-blue-300 hover:bg-blue-800/40", glow: "topic-blue" },
  { icon: Book, text: "Pizza", lightColor: "bg-red-100 text-red-800 hover:bg-red-200", darkColor: "bg-red-900/30 text-red-300 hover:bg-red-800/40", glow: "topic-red" },
  { icon: Sparkles, text: "Democracy", lightColor: "bg-purple-100 text-purple-800 hover:bg-purple-200", darkColor: "bg-purple-900/30 text-purple-300 hover:bg-purple-800/40", glow: "topic-purple" },
  { icon: Feather, text: "Writing", lightColor: "bg-green-100 text-green-800 hover:bg-green-200", darkColor: "bg-green-900/30 text-green-300 hover:bg-green-800/40", glow: "topic-green" },
];

const InputSection = ({ topic, setTopic, isGenerating, onGenerate, onTopicSelect }) => {
  const { isDarkMode } = useTheme();
  
  return (
    <div className={`backdrop-blur-sm rounded-2xl shadow-xl border transition-all duration-500 hover:shadow-2xl hover:transform hover:scale-[1.02] animate-slideUp group p-6 sm:p-8 md:p-12 mb-6 sm:mb-8 ${
      isDarkMode 
        ? 'bg-gray-800/80 border-gray-700/30' 
        : 'bg-white/80 border-white/20'
    }`}>
      <div className="text-center mb-6 sm:mb-8">
        <div className="mb-6 sm:mb-8">
          <h1 className={`text-3xl sm:text-4xl md:text-5xl font-serif font-bold mb-4 sm:mb-6 leading-tight tracking-tight text-center transition-colors duration-500 ${
            isDarkMode ? 'text-gray-100' : 'text-gray-900'
          }`}>
            <span className={`animate-fadeIn transition-colors duration-500 ${
              isDarkMode 
                ? 'bg-gradient-to-r from-slate-300 via-purple-300 to-slate-300 bg-clip-text text-transparent' 
                : 'bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900 bg-clip-text text-transparent'
            }`}>
              Discover the
            </span>
            <br />
            <span className="animated-amber-flow animate-fadeIn animation-delay-300 relative inline-block">
              Origin Story
              <div className="absolute -bottom-1 sm:-bottom-2 left-1/2 transform -translate-x-1/2 w-16 sm:w-20 md:w-24 h-0.5 sm:h-1 bg-gradient-to-r from-amber-400 via-orange-500 to-amber-400 rounded-full animate-slideUp animation-delay-500"></div>
            </span>
          </h1>
        </div>
        <p className={`font-serif text-base sm:text-lg transition-colors duration-300 animate-fadeIn animation-delay-300 text-center max-w-lg mx-auto px-4 sm:px-0 ${
          isDarkMode 
            ? 'text-gray-300 group-hover:text-gray-200' 
            : 'text-gray-600 group-hover:text-gray-700'
        }`}>
          Discover the fascinating history behind any object, concept, or idea
        </p>
      </div>

      {/* Popular Topics */}
      <div className="mb-6 sm:mb-8 animate-slideUp animation-delay-500">
        <p className={`text-sm mb-3 sm:mb-4 text-center transition-colors duration-300 px-4 sm:px-0 ${
          isDarkMode 
            ? 'text-gray-400 group-hover:text-gray-300' 
            : 'text-gray-500 group-hover:text-gray-600'
        }`}>Popular origins to explore:</p>
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 px-2 sm:px-0">
          {POPULAR_TOPICS.map((item, index) => (
            <button
              key={index}
              onClick={() => onTopicSelect(item.text)}
              className={`${isDarkMode ? item.darkColor : item.lightColor} ${item.glow} px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 flex items-center gap-1.5 sm:gap-2 animate-fadeIn border border-transparent`}
              style={{animationDelay: `${index * 100 + 600}ms`}}
              disabled={isGenerating}
            >
              <item.icon className="w-3 h-3 sm:w-4 sm:h-4 transition-transform duration-300" />
              <span className="hidden xs:inline sm:inline">{item.text}</span>
              <span className="xs:hidden sm:hidden">{item.text.split(' ')[0]}</span>
            </button>
          ))}
        </div>
      </div>
      
      <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 animate-slideUp animation-delay-1000">
        <div className="flex-1 relative group">
          <input
            type="text"
            value={topic}
            onChange={(e) => setTopic(e.target.value)}
            placeholder={t('placeholderText')}
            className={`w-full px-4 sm:px-6 py-3 sm:py-4 border-2 rounded-xl focus:outline-none focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 text-base sm:text-lg font-serif transition-all duration-300 focus:scale-[1.02] focus:shadow-lg ${
              isDarkMode
                ? 'border-gray-600 bg-gray-700/50 text-gray-100 placeholder-gray-400 focus:bg-gray-700/80 hover:border-gray-500'
                : 'border-gray-200 bg-white/50 text-gray-900 placeholder-gray-500 focus:bg-white/80 hover:border-gray-300'
            }`}
            onKeyPress={(e) => e.key === 'Enter' && !isGenerating && topic.trim() && onGenerate()}
            disabled={isGenerating}
          />
          <div className="absolute right-3 sm:right-4 top-1/2 transform -translate-y-1/2">
            <Sparkles className={`w-4 h-4 sm:w-5 sm:h-5 transition-all duration-300 ${topic ? 'text-amber-500 scale-110' : isDarkMode ? 'text-gray-500' : 'text-gray-400'} group-hover:text-amber-500`} />
          </div>
        </div>
        <button
          onClick={onGenerate}
          disabled={isGenerating || !topic.trim()}
          className="begin-button px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 disabled:from-gray-400 disabled:to-gray-500 text-white rounded-xl font-serif text-base sm:text-lg transition-all duration-300 flex items-center justify-center gap-2 sm:gap-3 shadow-lg disabled:transform-none group"
        >
          {isGenerating ? (
            <>
              <div className="w-4 h-4 sm:w-5 sm:h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
              <span className="hidden sm:inline">{t('generating')}</span>
              <span className="sm:hidden">...</span>
            </>
          ) : (
            <>
              <span className="group-hover:scale-105 transition-transform duration-200">{t('begin')}</span>
              <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </>
          )}
        </button>
      </div>
    </div>
  );
};

export default InputSection;