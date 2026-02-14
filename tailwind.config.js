/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      colors: {
        // Official palette
        official: {
          gold: '#C89B3C',      // Icons, decorations, headings
          green: '#0E4B33',    // Logos, headings, backgrounds, texts
          cream: '#E3B14D',    // General use
          white: '#FFFFFF',    // Official backgrounds
          black: '#000000',    // General texts and paragraphs
        },
        primary: '#0E4B33',
        secondary: '#C89B3C',
        accent: '#E3B14D',
        success: '#0E4B33',
        danger: '#dc3545',
        warning: '#E3B14D',
        light: '#f8f9fa',
        dark: '#000000',
      },
      fontFamily: {
        heading: ['"Noto Kufi Arabic"', 'Merriweather', 'Georgia', 'serif'],
        body: ['"Noto Naskh Arabic"', 'Merriweather', 'Georgia', 'serif'],
        sans: ['"Noto Kufi Arabic"', 'Segoe UI', 'sans-serif'],
        arabic: ['"Noto Naskh Arabic"', 'Tajawal', 'Arial', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in',
        'slide-in': 'slideIn 0.5s ease-out',
        'bounce-slow': 'bounce 3s infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideIn: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      }
    }
  },
  plugins: []
}
