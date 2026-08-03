

> AI-powered sustainable bike recommendation platform built using React, Tailwind CSS, Gemini AI and Recharts.

![React](https://img.shields.io/badge/React-19-blue?logo=react)
![Vite](https://img.shields.io/badge/Vite-8-purple?logo=vite)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-4-06B6D4?logo=tailwindcss)
![Gemini AI](https://img.shields.io/badge/Gemini-AI-4285F4?logo=google)
![License](https://img.shields.io/badge/License-MIT-green)

---

## 📌 Overview

EcoBike AI is an intelligent bike recommendation web application that helps users compare motorcycles based on environmental impact, mileage, fuel type, engine specifications, and AI-generated recommendations.

Instead of simply displaying specifications, the application leverages **Google Gemini AI** to generate personalized buying advice, making the project more interactive and useful for users interested in eco-friendly transportation.

---

## ✨ Features

- 🔍 Search bikes by Brand and Model
- 🤖 AI-powered bike recommendations using Gemini AI
- 🌱 Eco Score visualization
- 📊 Interactive comparison charts
  - Eco Score
  - Mileage
  - Emission
- 🖼️ Bike image gallery
- 👍 Advantages & Disadvantages
- 🎯 Best use cases
- 📱 Fully responsive UI
- ⚡ Fast performance using Vite

---

## 🖥️ Screenshots

### Home Page

<img width="1366" height="768" alt="Screenshot (248)" src="https://github.com/user-attachments/assets/cb34b26b-17a9-403c-a1de-9f454144a10e" />



---

### Bike Analysis

<img width="1214" height="830" alt="image" src="https://github.com/user-attachments/assets/b95de9fe-3f8c-40a8-b0e1-43f2ad81c0e9" />


---

### AI Recommendation

<img width="1173" height="1085" alt="image" src="https://github.com/user-attachments/assets/6017a95b-2980-4b80-a54e-28a744881f76" />


---

### Charts Dashboard

<img width="1266" height="1498" alt="image" src="https://github.com/user-attachments/assets/d5b39288-7308-4aba-a2be-05cff493243b" />


---

## 🛠️ Tech Stack

### Frontend

- React.js
- Vite
- Tailwind CSS

### AI

- Google Gemini API

### Charts

- Recharts

### Version Control

- Git
- GitHub

---

## 📂 Project Structure

```
client/
│
├── src/
│   ├── assets/
│   ├── components/
│   │      ├── charts/
│   │      ├── Hero.jsx
│   │      ├── Navbar.jsx
│   │      └── SearchSection.jsx
│   │
│   ├── data/
│   │      ├── bikes.js
│   │      └── bikeImages.js
│   │
│   ├── services/
│   │      └── gemini.js
│   │
│   ├── App.jsx
│   └── main.jsx
│
└── package.json
```

---

## 🚀 Installation

Clone the repository

```bash
git clone https://github.com/bhu1ngeniator/Eco-Bike-AI.git
```

Go to the project

```bash
cd Eco-Bike-AI/client
```

Install dependencies

```bash
npm install
```

Create a `.env` file

```env
VITE_GEMINI_API_KEY=YOUR_API_KEY
```

Run the application

```bash
npm run dev
```

---

## 📈 Future Improvements

- 🔥 Bike comparison mode
- ❤️ Wishlist feature
- 👤 User authentication
- 🗺 Nearby charging station finder
- 🌍 Carbon footprint calculator
- 📱 Progressive Web App (PWA)
- 📄 PDF report generation

---

## 💡 Learning Outcomes

During this project, I learned:

- React component architecture
- State management with Hooks
- REST API integration
- Google Gemini AI integration
- Responsive UI development
- Data visualization using Recharts
- Environment variable management
- Git & GitHub workflow

---

## 👨‍💻 Author

**Bhuvan**

GitHub:
https://github.com/bhu1ngeniator
---

## ⭐ If you like this project

Give it a ⭐ on GitHub!
