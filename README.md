# Origin Stories ✨

Origin Stories is a beautifully designed, mobile-responsive React app that generates witty, historically-inspired origin stories for any object, concept, tradition, or invention. Powered by Google Gemini API, it features a premium dark/light theme toggle, animated gradients, and a delightful, modern UI.

---

## 🚀 Features

- **AI-Powered Story Generation:**  
  Enter any topic and get a multi-chapter, engaging, and humorous origin story, complete with prologue and epilogue.

- **Follow-Up Q&A:**  
  Ask follow-up questions about your story and get detailed, conversational answers.

- **Popular Topics:**  
  Quick-select buttons for trending origin topics.

- **Mobile Responsive:**  
  Fully responsive layouts for phones, tablets, and desktops.

- **Dark & Light Theme:**  
  Toggle between elegant dark and light modes with a fluid, animated switch.

- **Animated Gradients & UI:**  
  Subtle, animated gradients and glowing effects throughout the interface.

- **Accessible & Fast:**  
  Keyboard navigation, focus rings, and smooth transitions.

---

## 🛠️ Getting Started

### 1. **Clone the Repository**
```bash
git clone https://github.com/Meykaye/origin-stories.git
cd origin-stories
```

### 2. **Install Dependencies**
```bash
npm install
```

### 3. **Set Up Your Gemini API Key**
- Visit [Google AI Studio](https://aistudio.google.com/app/apikey) and create a Gemini API key.
- Create a `.env` file in the project root:
    ```
    REACT_APP_GEMINI_API_KEY=your_gemini_api_key_here
    ```

### 4. **Start the Development Server**
```bash
npm start
```
Visit [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🌓 Theme Toggle

- The theme toggle button is in the top-right corner.
- It features a premium, animated pill design with a sliding thumb and smooth icon transitions.
- All UI elements adapt instantly to your chosen theme.

---

## 📦 Project Structure

```
origin/
├── public/
├── src/
│   ├── components/
│   │   ├── InputSection.js
│   │   ├── ProgressIndicator.js
│   │   └── StoryDisplay.js
│   ├── services/
│   │   └── geminiAPI.js
│   ├── utils/
│   │   └── translations.js
│   ├── App.js
│   ├── App.css
│   └── index.js
├── .env
└── README.md
```

---

## 🧑‍💻 Customization

- **Popular Topics:**  
  Edit the `POPULAR_TOPICS` array in `InputSection.js` to add or change quick-select topics.

- **Styling:**  
  All styling uses [Tailwind CSS](https://tailwindcss.com/) utility classes and a few custom animations in `App.css`.

- **API Integration:**  
  The Gemini API logic is in `src/services/geminiAPI.js`.  
  You can swap in OpenAI, Anthropic, or other APIs if desired.

---

## 🤝 Credits

- **Icons:**  
  [Lucide Icons](https://lucide.dev/)

- **AI:**  
  [Google Gemini API](https://aistudio.google.com/)

---

## 📄 License

MIT License
