
```md
# 🔗 URL Shortener

A fast and modern full-stack **URL shortener** web app built using the **MERN stack** with support for **QR code generation**, custom shortened links, and rate limiting for security.

🚀 [Live Demo](https://tiny-url-xr7b.onrender.com)


---

## ✨ Features

- 🔗 Shorten long URLs to clean, unique short links
- 📱 Generate QR codes for easy mobile sharing
- 🔐 Rate limiting to prevent abuse (via `express-rate-limit`)
- ⚡ Blazing-fast frontend with Vite + React 19
- 🌐 RESTful API built using Express & MongoDB
- 🎨 Clean and responsive UI with Tailwind CSS
- 🪪 Tracks original URLs and supports redirection

---

## 🛠️ Tech Stack

### Frontend:
- [React 19](https://react.dev/)
- [React Router v7](https://reactrouter.com/en/main)
- [Tailwind CSS v4](https://tailwindcss.com/)
- [Vite](https://vitejs.dev/)
- [Zustand](https://zustand-demo.pmnd.rs/)
- [Axios](https://axios-http.com/)
- [React QR Code](https://github.com/rosskhanas/react-qr-code)
- [Lucide React Icons](https://lucide.dev/)

### Backend:
- [Express 5](https://expressjs.com/)
- [MongoDB + Mongoose](https://mongoosejs.com/)
- [nanoid](https://github.com/ai/nanoid) for generating short URLs
- [express-rate-limit](https://www.npmjs.com/package/express-rate-limit)
- [dotenv](https://www.npmjs.com/package/dotenv)

---

## 🧩 Folder Structure

```

url-shortener/
│
├── backend/           # Express + MongoDB API
│   ├── models/
│   ├── controllers/
│   ├── routes/
│   ├── utils/
│   └── index.js
│
├── frontend/          # React + Tailwind + Vite app
│   ├── public/
│   │   └── url.png     # Favicon
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── App.jsx
│   │   └── main.jsx
│   └── index.html
│
├── .env
├── package.json       # Fullstack root
└── README.md

````

---

## 📦 Scripts

### In root (`package.json`)
```bash
npm run dev       # Start backend with nodemon
npm run build     # Install & build frontend
npm run start     # Start production backend
````

### In frontend (`frontend/package.json`)

```bash
npm run dev       # Start frontend dev server (Vite)
npm run build     # Build frontend for production
npm run preview   # Preview built frontend
```

---

## 🌐 Deployment

Deployed fullstack on **Render** using:

* Backend: Node.js Express API with MongoDB
* Frontend: Built React app served from Express (`frontend/dist`)
* Environment Variables:

  ```
  MONGO_URI=your_mongo_db_connection_string
  BASE_URL=https://tiny-url-xr7b.onrender.com
  ```

---

## 📸 Preview

![App Preview](https://api.qrserver.com/v1/create-qr-code/?size=150x150\&data=https://tiny-url-xr7b.onrender.com)

---

## 🤝 Author

* **Om Shukla**

---

## 📃 License

This project is licensed under the **ISC License** — feel free to use and modify for personal or commercial projects.

```

---

```
