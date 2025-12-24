---

# 🤖 AI Support Agent (E-Commerce)

An AI-powered **customer support chat agent** built using **React + Vite (TypeScript)** for the frontend and **Node.js + Express (TypeScript)** for the backend.
The system is designed to handle **FAQ-based support**, conversation history, and LLM-powered responses for an e-commerce store.

---

## 🧱 Tech Stack

### Frontend

* ⚛️ React
* ⚡ Vite
* 🟦 TypeScript
* 🌐 Fetch / Axios (API communication)

### Backend

* 🟢 Node.js
* 🚀 Express.js
* 🟦 TypeScript
* 🧠 LLM integration (OpenRouter's model)
* 🗄️ Database (PostgreSQL)

### Database

* PostgreSQL
* Tables for:

  * Conversations
  * Messages
  * Knowledge Base / FAQs

---

## ✨ Features

* 💬 AI-powered chat support
* 🧠 Knowledge-base driven responses (FAQs)
* 🧵 Conversation & message history
* 🔁 Session-based chat handling
* 🌐 REST APIs for chat & messages
* 🔒 Environment-based configuration
* 🧩 Clean frontend–backend separation

---

## 📁 Project Structure

```
AI-Support-Agent/
│
├── backend/
│   ├── src/
│   │   ├── routes/
│   │   ├── helpers/
│   │   ├── controllers
│   │   ├── repositories
│   │   ├── server.ts
│   ├── db
│   │   ├── migrations
│   │   ├── seeds
│   ├── package.json
│   └── tsconfig.json
│
├── frontend/
│   ├── src/
│   │   ├── api/
│   │   ├── components/
│   │   └── helpers
│   ├── .env.example
│   ├── package.json
│   └── vite.config.ts
│
└── README.md
```

---

## ⚙️ Environment Variables

### 🔹 Backend (`backend/.env`)

Create a `.env` file using the example below:

```env
SERVER_PORT
DB_PORT
DB_NAME
DB_URL
DB_USERNAME
DB_PASSWORD
LLM_API_KEY
```
---

### 🔹 Frontend (`frontend/.env`)

```env
VITE_API_BASE_URL
```

> All frontend env variables **must start with `VITE_`**

---

## 🚀 How to Run Locally

### 1️⃣ Clone the repository

```bash
git clone https://github.com/AnshGirdhar1/AI-Support-Agent.git
cd AI-Support-Agent
```

---

### 2️⃣ Setup Backend

```bash
cd backend
npm install
```

Create `.env`

Run backend:

```bash
npm run dev
```
---

### 3️⃣ Setup Frontend

```bash
cd frontend
npm install
```

Create `.env`

Run frontend:

```bash
npm run dev
```
---

## 🔄 API Overview

### Get chat messages

```
GET /chat/messages?sessionId=<id>
```

### Send a message

```
POST /chat
```

Body:

```json
{
  "message": "Where is my order?",
  "sessionId": "optional-session-id"
}
```

## 👨‍💻 Author

**Ansh Girdhar**
GitHub: [@AnshGirdhar1](https://github.com/AnshGirdhar1)

---
