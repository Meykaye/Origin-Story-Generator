import React, { useState, createContext, useContext } from 'react';
import { ClaudeAPI } from './services/geminiAPI';
import { t } from './utils/translations';
import InputSection from './components/InputSection';
import ProgressIndicator from './components/ProgressIndicator';
import StoryDisplay from './components/StoryDisplay';
import { Moon, Sun } from 'lucide-react';
import './App.css';

// Create Dark Theme Context
const ThemeContext = createContext();

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

// Make Gemini API available globally (keeping same name for compatibility)
if (typeof window !== 'undefined') {
  window.claude = ClaudeAPI;
}

const App = () => {
  const [topic, setTopic] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [story, setStory] = useState(null);
  const [currentStep, setCurrentStep] = useState('');
  const [progress, setProgress] = useState(0);
  const [currentPhase, setCurrentPhase] = useState('planning');
  const [followUpQuestion, setFollowUpQuestion] = useState('');
  const [followUpAnswer, setFollowUpAnswer] = useState('');
  const [isAnsweringFollowUp, setIsAnsweringFollowUp] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  const themeValue = {
    isDarkMode,
    toggleTheme
  };

  // Enhanced story generation with more realistic and humorous content
  const generateOriginStory = async () => {
    console.log('🎯 Generate Origin Story called for topic:', topic);
    
    if (!topic.trim()) {
      console.log('❌ No topic provided');
      return;
    }
    
    console.log('🚀 Starting story generation...');
    setIsGenerating(true);
    setStory(null);
    setProgress(0);
    
    try {
      // Phase 1: Research and Planning
      console.log('📋 Phase 1: Planning');
      setCurrentPhase('planning');
      setCurrentStep(t('planningStructure'));
      setProgress(20);
      
      const researchPrompt = `You are a master storyteller and historian creating an origin story for "${topic}".

Your task is to create a compelling, REALISTIC origin story that is:
1. Historically accurate where possible
2. Enhanced with humor and wit
3. Told in an engaging narrative style
4. Contains 4-5 substantial chapters
5. Includes fascinating lesser-known facts

Research the actual historical origins of "${topic}" and create a story structure that weaves together real facts with entertaining storytelling.

Respond ONLY with valid JSON:
{
  "title": "An engaging title for the origin story",
  "subtitle": "A witty subtitle that sets the tone", 
  "theme": "Central theme or message",
  "structure": [
    {
      "chapter": 1,
      "title": "Descriptive chapter title",
      "focus": "What historical period/event this covers",
      "tone": "humorous/dramatic/mysterious",
      "keyFacts": ["fact1", "fact2", "fact3"]
    }
  ],
  "humorElements": ["element1", "element2"],
  "historicalAccuracy": "Brief note on how accurate this will be"
}`;

      const researchResponse = await ClaudeAPI.complete(researchPrompt);
      let plan;
      try {
        plan = JSON.parse(researchResponse);
        console.log('✅ Research plan parsed successfully');
      } catch (parseError) {
        console.error('❌ Failed to parse research plan:', parseError);
        throw new Error('Failed to generate story plan. Please try again.');
      }
      
      // Phase 2: Gathering Facts
      setCurrentPhase('gathering');
      setCurrentStep(t('gatheringFacts'));
      setProgress(40);
      
      const prologuePrompt = `Create a captivating prologue for the origin story of "${topic}".

PLAN: ${JSON.stringify(plan, null, 2)}

Write a 200-250 word prologue that:
- Sets the historical scene
- Introduces the mystery of how "${topic}" came to be
- Includes subtle humor
- Uses rich, descriptive language
- Makes readers want to continue
- Flows naturally without excessive punctuation or unnecessary hyphens

Be historically grounded but entertaining. Think of how Bill Bryson might tell this story.

Respond ONLY with valid JSON:
{
  "text": "The prologue text here",
  "context": "Brief summary for next chapters"
}`;

      const prologueResponse = await ClaudeAPI.complete(prologuePrompt);
      let prologue;
      try {
        prologue = JSON.parse(prologueResponse);
        console.log('✅ Prologue parsed successfully');
      } catch (parseError) {
        console.error('❌ Failed to parse prologue:', parseError);
        throw new Error('Failed to generate story prologue. Please try again.');
      }

      // Phase 3: Crafting Chapters
      setCurrentPhase('crafting');
      setCurrentStep(t('craftingNarrative'));
      setProgress(60);
      
      const chapters = [];
      let storyContext = prologue.context;
      
      for (let i = 0; i < plan.structure.length; i++) {
        const chapter = plan.structure[i];
        
        const chapterPrompt = `Write Chapter ${i + 1} of the "${topic}" origin story.

FULL CONTEXT:
Plan: ${JSON.stringify(plan, null, 2)}
Previous Context: ${storyContext}
Current Chapter: ${JSON.stringify(chapter, null, 2)}

Write 250-300 words that:
- Continue the narrative flow
- Include real historical facts from the key facts
- Add humor appropriate to the tone
- Advance toward revealing the origin
- Use vivid, engaging prose
- Write in natural, flowing language without excessive punctuation
- Avoid unnecessary hyphens and overly formal connecting words
- DO NOT include the chapter title or heading in the content
- Start directly with the story content, not with "Chapter X:" or the chapter title

Make it feel like reading a witty history book that's actually fun.

Respond ONLY with valid JSON:
{
  "content": "Chapter content here",
  "summary": "What happened in this chapter"
}`;

        const chapterResponse = await ClaudeAPI.complete(chapterPrompt);
        let chapterData;
        try {
          chapterData = JSON.parse(chapterResponse);
          console.log(`✅ Chapter ${i + 1} parsed successfully`);
        } catch (parseError) {
          console.error(`❌ Failed to parse chapter ${i + 1}:`, parseError);
          throw new Error(`Failed to generate chapter ${i + 1}. Please try again.`);
        }
        
        chapters.push({
          title: chapter.title,
          content: chapterData.content
        });
        
        storyContext += ` ${chapterData.summary}`;
      }

      // Phase 4: Final Polish
      setCurrentPhase('polishing');
      setCurrentStep(t('finalTouches'));
      setProgress(80);
      
      const epiloguePrompt = `Write a satisfying epilogue for the "${topic}" origin story.

COMPLETE CONTEXT:
Plan: ${JSON.stringify(plan, null, 2)}
Full Story Context: ${storyContext}

Write 200-250 words that:
- Brings everything together
- Reveals the final truth about "${topic}"'s origin
- Ends with a touch of humor or wisdom
- Feels like a natural conclusion
- Maybe hints at its impact on the world
- Uses smooth, natural language without excessive punctuation

This should feel like the perfect ending to an entertaining and educational journey.

Respond ONLY with valid JSON:
{
  "text": "The epilogue text here"
}`;

      const epilogueResponse = await ClaudeAPI.complete(epiloguePrompt);
      let epilogue;
      try {
        epilogue = JSON.parse(epilogueResponse);
        console.log('✅ Epilogue parsed successfully');
      } catch (parseError) {
        console.error('❌ Failed to parse epilogue:', parseError);
        throw new Error('Failed to generate story epilogue. Please try again.');
      }

      setProgress(100);
      setCurrentStep(t('complete'));
      
      const finalStory = {
        title: plan.title,
        subtitle: plan.subtitle,
        prologue: prologue.text,
        chapters: chapters,
        epilogue: epilogue.text
      };
      
      setStory(finalStory);
      
    } catch (error) {
      console.error('❌ Error generating story:', error);
      console.error('❌ Error message:', error.message);
      console.error('❌ Error stack:', error.stack);
      setCurrentStep(t('errorOccurred'));
      
      // Show a more helpful error message to the user
      alert(`Story generation failed: ${error.message}`);
    } finally {
      console.log('🏁 Story generation finished');
      setIsGenerating(false);
    }
  };

  const handleFollowUpQuestion = async () => {
    if (!followUpQuestion.trim() || !story) return;
    
    setIsAnsweringFollowUp(true);
    
    try {
      const followUpPrompt = `You are responding to a follow-up question about the origin story of "${topic}".

STORY CONTEXT:
Title: ${story.title}
Subtitle: ${story.subtitle}
Prologue: ${story.prologue}
Chapters: ${story.chapters.map((ch, i) => `${ch.title}: ${ch.content}`).join('\n')}
Epilogue: ${story.epilogue}

QUESTION: "${followUpQuestion}"

Provide a detailed, entertaining response (150-200 words) that:
- Directly addresses their question
- Maintains the same witty, informative tone
- Includes additional historical facts if relevant
- Could include related interesting tidbits
- Stays engaging and fun to read
- Uses natural language without excessive punctuation or unnecessary hyphens
- Sounds conversational and human-like

Respond ONLY with valid JSON:
{
  "answer": "Your detailed response here"
}`;

      const response = await ClaudeAPI.complete(followUpPrompt);
      const parsed = JSON.parse(response);
      setFollowUpAnswer(parsed.answer);
      
    } catch (error) {
      console.error('Error answering follow-up:', error);
      setFollowUpAnswer("I apologize, but I encountered an error while researching your question. Please try asking again.");
    } finally {
      setIsAnsweringFollowUp(false);
    }
  };

  const handleNewStory = () => {
    setStory(null);
    setTopic('');
    setProgress(0);
    setFollowUpQuestion('');
    setFollowUpAnswer('');
  };

  const handleTopicSelect = (selectedTopic) => {
    setTopic(selectedTopic);
  };

  return (
    <ThemeContext.Provider value={themeValue}>
      <div className={`min-h-screen p-3 sm:p-6 transition-all duration-500 ${
        isDarkMode 
          ? 'bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900' 
          : 'bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100'
      }`}>
        <div className="max-w-4xl mx-auto">
          {/* Fluid Fancy Theme Toggle */}
          <div className="fixed top-3 sm:top-6 right-3 sm:right-6 z-50">
            <button
              onClick={toggleTheme}
              className="relative w-16 h-8 sm:w-20 sm:h-10 rounded-full transition-all duration-700 hover:scale-110 group focus:outline-none focus:ring-4 focus:ring-blue-500/20"
              style={{
                background: isDarkMode 
                  ? 'linear-gradient(135deg, #1e293b 0%, #334155 50%, #475569 100%)' 
                  : 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 50%, #cbd5e1 100%)',
                boxShadow: isDarkMode
                  ? '0 8px 32px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.1)'
                  : '0 8px 32px rgba(0, 0, 0, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.8)'
              }}
            >
              {/* Animated track glow */}
              <div className={`absolute inset-0 rounded-full transition-all duration-700 opacity-0 group-hover:opacity-100 ${
                isDarkMode ? 'shadow-lg shadow-purple-500/30' : 'shadow-lg shadow-amber-400/40'
              }`}></div>
              
              {/* Sliding toggle ball */}
              <div 
                className="absolute top-1 w-6 h-6 sm:w-8 sm:h-8 rounded-full transition-all duration-700 ease-out group-hover:scale-110"
                style={{
                  left: isDarkMode ? 'calc(100% - 28px)' : '4px',
                  background: isDarkMode
                    ? 'linear-gradient(135deg, #fbbf24 0%, #f59e0b 50%, #d97706 100%)'
                    : 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 50%, #a855f7 100%)',
                  boxShadow: isDarkMode
                    ? '0 4px 16px rgba(251, 191, 36, 0.4), 0 2px 8px rgba(0, 0, 0, 0.2)'
                    : '0 4px 16px rgba(139, 92, 246, 0.4), 0 2px 8px rgba(0, 0, 0, 0.1)',
                  transform: `translateX(${isDarkMode ? '-4px' : '0px'}) scale(${1})`
                }}
              >
                {/* Icon inside the ball */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className={`transition-all duration-500 ${
                    isDarkMode ? 'rotate-0 opacity-100' : 'rotate-180 opacity-0'
                  }`}>
                    <Sun className="w-3 h-3 sm:w-4 sm:h-4 text-white drop-shadow-sm" />
                  </div>
                  <div className={`absolute inset-0 flex items-center justify-center transition-all duration-500 ${
                    !isDarkMode ? 'rotate-0 opacity-100' : 'rotate-180 opacity-0'
                  }`}>
                    <Moon className="w-3 h-3 sm:w-4 sm:h-4 text-white drop-shadow-sm" />
                  </div>
                </div>
                
                {/* Magical sparkles around the ball */}
                <div className="absolute inset-0 pointer-events-none">
                  {[...Array(4)].map((_, i) => (
                    <div
                      key={i}
                      className="absolute w-1 h-1 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-700 animate-twinkle"
                      style={{
                        background: isDarkMode ? '#fbbf24' : '#8b5cf6',
                        top: ['5%', '20%', '80%', '85%'][i],
                        left: ['10%', '85%', '15%', '90%'][i],
                        animationDelay: `${i * 200}ms`,
                        transform: `scale(${0.5 + Math.random() * 0.5})`
                      }}
                    />
                  ))}
                </div>
              </div>
              
              {/* Flowing background gradient animation */}
              <div className="absolute inset-0 rounded-full overflow-hidden">
                <div 
                  className={`absolute inset-0 opacity-30 transition-all duration-1000 ${
                    isDarkMode ? 'translate-x-0' : '-translate-x-full'
                  }`}
                  style={{
                    background: 'linear-gradient(90deg, transparent 0%, rgba(251, 191, 36, 0.3) 50%, transparent 100%)',
                    width: '200%'
                  }}
                ></div>
                <div 
                  className={`absolute inset-0 opacity-30 transition-all duration-1000 ${
                    !isDarkMode ? 'translate-x-0' : 'translate-x-full'
                  }`}
                  style={{
                    background: 'linear-gradient(90deg, transparent 0%, rgba(139, 92, 246, 0.3) 50%, transparent 100%)',
                    width: '200%'
                  }}
                ></div>
              </div>
              
              {/* Ripple effect on click */}
              <div className="absolute inset-0 rounded-full overflow-hidden">
                <div className={`absolute inset-0 rounded-full transition-all duration-300 scale-0 group-active:scale-150 opacity-0 group-active:opacity-20 ${
                  isDarkMode ? 'bg-amber-400' : 'bg-purple-500'
                }`}></div>
              </div>
            </button>
          </div>

          {/* Beautiful Header */}
          <div className="text-center mb-12 sm:mb-20">
            <div className="mb-8 sm:mb-12">
              <h1 className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-bold mb-4 sm:mb-6 leading-tight tracking-tight transition-colors duration-500 ${
                isDarkMode ? 'text-gray-100' : 'text-gray-900'
              }`}>
                Origin <span className="animated-amber-flow">Stories</span>
                <div className="mt-3 sm:mt-4 w-20 sm:w-24 md:w-32 h-1 sm:h-1.5 bg-gradient-to-r from-amber-400 via-orange-500 to-amber-400 rounded-full mx-auto"></div>
              </h1>
            </div>
            <div className="space-y-3 sm:space-y-4 px-4 sm:px-0">
              <p className={`text-lg sm:text-xl md:text-2xl font-serif font-light tracking-wide leading-relaxed max-w-3xl mx-auto transition-colors duration-500 ${
                isDarkMode ? 'text-gray-300' : 'text-gray-700'
              }`}>
                Uncover the fascinating tales behind the world's most extraordinary creations
              </p>
              <p className={`text-base sm:text-lg font-serif italic tracking-wide max-w-2xl mx-auto transition-colors duration-500 ${
                isDarkMode ? 'text-gray-400' : 'text-gray-500'
              }`}>
                Where legends begin and curiosity finds its answers
              </p>
            </div>
            <div className="mt-8 sm:mt-12 flex justify-center">
              <div className={`w-32 sm:w-48 h-px transition-colors duration-500 ${
                isDarkMode 
                  ? 'bg-gradient-to-r from-transparent via-gray-600 to-transparent' 
                  : 'bg-gradient-to-r from-transparent via-gray-300 to-transparent'
              }`}></div>
            </div>
          </div>

          {/* Content */}
          <div>
            {!story && (
              <InputSection
                topic={topic}
                setTopic={setTopic}
                isGenerating={isGenerating}
                onGenerate={generateOriginStory}
                onTopicSelect={handleTopicSelect}
              />
            )}

            {isGenerating && (
              <ProgressIndicator
                progress={progress}
                currentStep={currentStep}
                phase={currentPhase}
              />
            )}

            {story && (
              <StoryDisplay
                story={story}
                onNewStory={handleNewStory}
                onFollowUpSubmit={handleFollowUpQuestion}
                followUpQuestion={followUpQuestion}
                setFollowUpQuestion={setFollowUpQuestion}
                followUpAnswer={followUpAnswer}
                isAnsweringFollowUp={isAnsweringFollowUp}
              />
            )}
          </div>
        </div>
      </div>
    </ThemeContext.Provider>
  );
};

export default App;