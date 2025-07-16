# 🚀 PyFast - AI-Powered Coding Challenge Generator

Modern React uygulaması ile AI destekli kodlama soruları oluşturun ve çözün!

![PyFast Demo](https://img.shields.io/badge/Status-Live-green) ![React](https://img.shields.io/badge/React-19.1.0-blue) ![Vite](https://img.shields.io/badge/Vite-7.0.4-purple) ![License](https://img.shields.io/badge/License-MIT-yellow)

## ✨ Özellikler

- 🤖 **AI-Powered**: Groq API ile gerçek zamanlı soru üretimi
- 🎯 **Çoktan Seçmeli**: Interactive MCQ challenges
- 📊 **Zorluk Seviyeleri**: Easy, Medium, Hard
- 🔐 **Güvenli Auth**: Clerk authentication sistemi
- 📱 **Responsive**: Mobil ve desktop uyumlu
- 🎨 **Modern UI**: Clean ve kullanıcı dostu arayüz
- ⚡ **Hızlı**: Vite ile lightning-fast development
- 📈 **Geçmiş**: Challenge history tracking

## 🛠️ Teknolojiler

- **Frontend**: React 19, Vite 7
- **Authentication**: Clerk
- **Routing**: React Router DOM
- **Styling**: Modern CSS
- **AI**: Groq API (Llama 3.3 70B)
- **Deployment**: Vercel

## 🚀 Canlı Demo

🌐 **[PyFast'i Deneyin!](https://pyfast.vercel.app)**

## 🏁 Hızlı Başlangıç

### Gereksinimler
- Node.js 18+
- npm veya yarn

### Kurulum

```bash
# Repository'i klonlayın
git clone https://github.com/username/pyfast-frontend.git
cd pyfast-frontend

# Dependencies'leri yükleyin
npm install

# Environment variables ayarlayın
cp .env.example .env
# .env dosyasını düzenleyin

# Development server'ı başlatın
npm run dev
```

### Environment Variables

```env
VITE_CLERK_PUBLISHABLE_KEY=pk_test_your_clerk_key_here
VITE_API_URL=https://your-backend-url.com
```
## 📁 Proje Yapısı
src/
├── auth/
│   ├── AuthenticationPage.jsx
│   └── ClerkProviderWithRoutes.jsx
├── challenge/
│   ├── ChallengeGenerator.jsx
│   └── MCQChallenge.jsx
├── history/
│   └── HistoryPanel.jsx
├── layout/
│   └── Layout.jsx
├── utils/
│   └── api.js
├── App.jsx
├── App.css
└── main.jsx
