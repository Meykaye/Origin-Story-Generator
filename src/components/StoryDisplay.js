import React from 'react';
import { Book, Search, RotateCcw } from 'lucide-react';
import { useTheme } from '../App';

const StoryDisplay = ({ 
  story, 
  onNewStory, 
  onFollowUpSubmit, 
  followUpQuestion, 
  setFollowUpQuestion, 
  followUpAnswer, 
  isAnsweringFollowUp 
}) => {
  const { isDarkMode } = useTheme();
  
  if (!story) return null;

  return (
    <div className={`backdrop-blur-sm rounded-2xl shadow-2xl border overflow-hidden animate-fadeIn ${
      isDarkMode 
        ? 'bg-gray-800/90 border-gray-700/20' 
        : 'bg-white/90 border-white/20'
    }`}>
      {/* Elegant Book Cover */}
      <div className="bg-gradient-to-br from-amber-800 via-amber-700 to-orange-800 p-8 sm:p-12 md:p-16 text-center text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          <div className="absolute top-4 sm:top-8 left-4 sm:left-8 w-3 h-3 sm:w-4 sm:h-4 bg-white/30 rotate-45 animate-pulse"></div>
          <div className="absolute top-8 sm:top-16 right-6 sm:right-12 w-6 h-6 sm:w-8 sm:h-8 border border-white/20 rotate-12 animate-pulse"></div>
          <div className="absolute bottom-6 sm:bottom-12 left-6 sm:left-12 w-4 h-4 sm:w-6 sm:h-6 bg-white/20 rotate-12 animate-pulse"></div>
          <div className="absolute bottom-3 sm:bottom-6 right-8 sm:right-16 w-8 h-8 sm:w-10 sm:h-10 border-2 border-white/30 rounded-full animate-pulse"></div>
        </div>
        <div className="relative z-10 animate-slideUp">
          <div className="mb-4 sm:mb-6">
            <Book className="w-12 h-12 sm:w-16 sm:h-16 mx-auto opacity-90 animate-fadeIn hover:scale-110 transition-transform duration-300" />
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-light mb-4 sm:mb-6 leading-tight animate-slideUp animation-delay-300 px-4 sm:px-0">
            {story.title}
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl font-serif italic opacity-90 font-light animate-slideUp animation-delay-500 px-4 sm:px-0">
            {story.subtitle}
          </p>
          <div className="mt-6 sm:mt-8 w-16 sm:w-24 h-0.5 bg-white/50 mx-auto animate-slideUp animation-delay-700"></div>
          <p className="mt-3 sm:mt-4 text-sm opacity-75 animate-slideUp animation-delay-1000">An Origin Tale</p>
        </div>
      </div>

      {/* Story Content */}
      <div className="p-6 sm:p-8 md:p-12 lg:p-16 space-y-8 sm:space-y-12 md:space-y-16">
        {/* Prologue */}
        <div className="prose prose-lg sm:prose-xl max-w-none animate-fadeIn animation-delay-300">
          <div className="flex items-center mb-4 sm:mb-6 group">
            <div className={`flex-1 h-px transition-all duration-500 ${
              isDarkMode 
                ? 'bg-gradient-to-r from-transparent to-gray-600 group-hover:to-amber-400' 
                : 'bg-gradient-to-r from-transparent to-gray-300 group-hover:to-amber-400'
            }`}></div>
            <div className={`px-3 sm:px-6 font-serif italic transition-colors duration-300 text-sm sm:text-base ${
              isDarkMode 
                ? 'text-gray-400 group-hover:text-amber-400' 
                : 'text-gray-500 group-hover:text-amber-600'
            }`}>Prologue</div>
            <div className={`flex-1 h-px transition-all duration-500 ${
              isDarkMode 
                ? 'bg-gradient-to-l from-transparent to-gray-600 group-hover:to-amber-400' 
                : 'bg-gradient-to-l from-transparent to-gray-300 group-hover:to-amber-400'
            }`}></div>
          </div>
          <div className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl float-left font-serif text-amber-700 leading-none mr-2 sm:mr-3 md:mr-4 mt-1 sm:mt-2 select-none hover:scale-110 transition-transform duration-300 animate-bounce">
            {story.prologue.charAt(0)}
          </div>
          <div className={`font-serif leading-relaxed text-base sm:text-lg md:text-xl transition-colors duration-300 ${
            isDarkMode 
              ? 'text-gray-200 hover:text-gray-100' 
              : 'text-gray-800 hover:text-gray-900'
          }`}>
            {story.prologue.substring(1)}
          </div>
        </div>

        {/* Main Chapters */}
        {story.chapters.map((chapter, index) => (
          <div key={index} className={`pt-8 sm:pt-12 md:pt-16 animate-slideUp hover:transform hover:scale-[1.02] transition-all duration-500 group border-t ${
            isDarkMode ? 'border-gray-700' : 'border-gray-200'
          }`} style={{animationDelay: `${(index + 1) * 200}ms`}}>
            <div className="text-center mb-4 sm:mb-6 md:mb-8">
              <div className={`inline-block px-3 sm:px-4 md:px-6 py-2 sm:py-3 rounded-full border transition-all duration-300 ${
                isDarkMode 
                  ? 'bg-gradient-to-r from-gray-800 to-gray-700 border-gray-600 group-hover:from-gray-700 group-hover:to-gray-600 group-hover:border-amber-500 group-hover:shadow-lg group-hover:shadow-amber-500/20' 
                  : 'bg-gradient-to-r from-amber-50 to-orange-50 border-amber-200 group-hover:from-amber-100 group-hover:to-orange-100 group-hover:border-amber-300 group-hover:shadow-lg'
              }`}>
                <h3 className={`text-lg sm:text-xl md:text-2xl font-serif transition-colors duration-300 ${
                  isDarkMode 
                    ? 'text-gray-100 group-hover:text-amber-400' 
                    : 'text-gray-900 group-hover:text-amber-800'
                }`}>
                  Chapter {index + 1}: {chapter.title}
                </h3>
              </div>
            </div>
            <div className="prose prose-lg sm:prose-xl max-w-none">
              <p className={`font-serif leading-relaxed text-base sm:text-lg md:text-xl transition-colors duration-300 ${
                isDarkMode 
                  ? 'text-gray-200 group-hover:text-gray-100' 
                  : 'text-gray-800 group-hover:text-gray-900'
              }`}>
                {chapter.content}
              </p>
            </div>
          </div>
        ))}

        {/* Epilogue */}
        <div className={`pt-16 animate-slideUp group hover:transform hover:scale-[1.02] transition-all duration-500 border-t ${
          isDarkMode ? 'border-gray-700' : 'border-gray-200'
        }`}>
          <div className="text-center mb-8">
            <div className={`inline-block px-8 py-3 rounded-full border transition-all duration-300 ${
              isDarkMode 
                ? 'bg-gradient-to-r from-gray-800 to-gray-700 border-gray-600 group-hover:from-purple-900 group-hover:to-blue-900 group-hover:border-purple-500 group-hover:shadow-lg group-hover:shadow-purple-500/20' 
                : 'bg-gradient-to-r from-purple-50 to-blue-50 border-purple-200 group-hover:from-purple-100 group-hover:to-blue-100 group-hover:border-purple-300 group-hover:shadow-lg'
            }`}>
              <h3 className={`text-lg sm:text-xl md:text-2xl lg:text-3xl font-serif transition-colors duration-300 ${
                isDarkMode 
                  ? 'text-gray-100 group-hover:text-purple-400' 
                  : 'text-gray-900 group-hover:text-purple-800'
              }`}>
                The Truth Revealed
              </h3>
            </div>
          </div>
          <div className="prose prose-lg sm:prose-xl max-w-none">
            <p className={`font-serif leading-relaxed text-base sm:text-lg md:text-xl transition-colors duration-300 ${
              isDarkMode 
                ? 'text-gray-200 group-hover:text-gray-100' 
                : 'text-gray-800 group-hover:text-gray-900'
            }`}>
              {story.epilogue}
            </p>
          </div>
        </div>

        {/* Follow-up Questions Section */}
        <div className={`pt-8 sm:pt-12 md:pt-16 border-t ${isDarkMode ? 'border-gray-700' : 'border-gray-200'}`}>
          <div className="text-center mb-4 sm:mb-6 md:mb-8">
            <h3 className={`text-xl sm:text-2xl font-serif mb-3 sm:mb-4 transition-colors duration-500 ${
              isDarkMode ? 'text-gray-100' : 'text-gray-900'
            }`}>
              Curious About More?
            </h3>
            <p className={`font-serif transition-colors duration-500 text-sm sm:text-base ${
              isDarkMode ? 'text-gray-300' : 'text-gray-600'
            }`}>
              Ask a follow-up question about this origin story
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-4 sm:mb-6">
            <div className="flex-1 relative group">
              <input
                type="text"
                value={followUpQuestion}
                onChange={(e) => setFollowUpQuestion(e.target.value)}
                placeholder="What else would you like to know?"
                className={`w-full px-4 sm:px-6 py-3 sm:py-4 border-2 rounded-xl focus:outline-none focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 text-base sm:text-lg font-serif transition-all duration-300 focus:scale-[1.02] focus:shadow-lg ${
                  isDarkMode
                    ? 'border-gray-600 bg-gray-700/50 text-gray-100 placeholder-gray-400 focus:bg-gray-700/80 hover:border-gray-500'
                    : 'border-gray-200 bg-white/50 text-gray-900 placeholder-gray-500 focus:bg-white/80 hover:border-gray-300'
                }`}
                onKeyPress={(e) => e.key === 'Enter' && !isAnsweringFollowUp && followUpQuestion.trim() && onFollowUpSubmit()}
                disabled={isAnsweringFollowUp}
              />
              <div className="absolute right-3 sm:right-4 top-1/2 transform -translate-y-1/2">
                <Search className={`w-4 h-4 sm:w-5 sm:h-5 transition-all duration-300 ${
                  followUpQuestion ? 'text-blue-500 scale-110' : isDarkMode ? 'text-gray-500' : 'text-gray-400'
                } group-hover:text-blue-500`} />
              </div>
            </div>
            <button
              onClick={onFollowUpSubmit}
              disabled={!followUpQuestion.trim() || isAnsweringFollowUp}
              className="px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 disabled:from-gray-400 disabled:to-gray-500 text-white rounded-xl font-serif text-base sm:text-lg transition-all duration-300 flex items-center justify-center gap-2 sm:gap-3 shadow-lg disabled:transform-none group"
            >
              {isAnsweringFollowUp ? (
                <>
                  <div className="w-4 h-4 sm:w-5 sm:h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                  <span className="hidden sm:inline">Researching...</span>
                  <span className="sm:hidden">...</span>
                </>
              ) : (
                <>
                  <Search className="w-4 h-4 sm:w-5 sm:h-5 group-hover:rotate-12 transition-transform duration-300" />
                  <span className="group-hover:scale-105 transition-transform duration-200">Ask</span>
                </>
              )}
            </button>
          </div>

          {followUpAnswer && (
            <div className={`p-4 sm:p-6 rounded-xl border transition-all duration-500 animate-fadeIn ${
              isDarkMode 
                ? 'bg-gray-800/50 border-gray-700/30' 
                : 'bg-gray-50/50 border-gray-200/30'
            }`}>
              <h4 className={`font-serif font-semibold mb-2 sm:mb-3 text-base sm:text-lg transition-colors duration-500 ${
                isDarkMode ? 'text-gray-100' : 'text-gray-900'
              }`}>
                Answer:
              </h4>
              <p className={`font-serif leading-relaxed text-sm sm:text-base transition-colors duration-500 ${
                isDarkMode ? 'text-gray-200' : 'text-gray-700'
              }`}>
                {followUpAnswer}
              </p>
            </div>
          )}
        </div>

        {/* New Story Button */}
        <div className="text-center pt-6 sm:pt-8">
          <button
            onClick={onNewStory}
            className="px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white rounded-xl font-serif text-base sm:text-lg transition-all duration-300 flex items-center gap-2 sm:gap-3 shadow-lg hover:scale-105 hover:shadow-xl mx-auto group"
          >
            <RotateCcw className="w-4 h-4 sm:w-5 sm:h-5 group-hover:rotate-180 transition-transform duration-500" />
            <span className="hidden sm:inline">Discover Another Origin Story</span>
            <span className="sm:hidden">New Story</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default StoryDisplay;