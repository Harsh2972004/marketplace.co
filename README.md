# 🛒 Marketplace.co (MERN Stack)

A small micro-marketplace web application built with the MERN stack, featuring authentication, product browsing, search, pagination, favourites, and a fully responsive UI.

This project was built as part of an internship assignment to demonstrate full-stack development, REST API design, and frontend state management.

---

## 🚀 Features

### 🔐 Authentication

- User registration and login
- JWT-based authentication
- Protected routes (Favourites)
- Token-based session handling

### 🛍️ Products

- Product listing with pagination
- Search products by name
- Product detail page
- Seeded product data

### ❤️ Favourites

- Add / remove products from favourites
- Persistent favourites stored in database
- Dedicated favourites page
- Real-time UI updates

### 🎨 UI & UX

- Fully responsive (mobile, tablet, desktop)
- Clean Tailwind CSS design
- Subtle hover and transition effects
- Polished product cards and detail pages

### 🧪 Demo UI Elements

- Quantity selector (UI only)
- Add to Cart and Buy Now buttons (mock UI)

Note: Cart and checkout functionality are intentionally not implemented to keep the project scope focused.

---

## 🛠️ Tech Stack

Frontend:

- React
- React Router
- Axios
- Tailwind CSS
- React Icons

Backend:

- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT Authentication

---

## ⚙️ Setup Instructions

### 1️⃣ Clone the repository

git clone https://github.com/Harsh2972004/marketplace.co
cd project-folder

---

### 2️⃣ Backend Setup

cd backend
npm install

Create a .env file inside backend:

PORT=8080
MONGO_URI=your_mongodb_uri
JWT_SECRET=your_secret_key

Run the backend:

npm run dev

(Optional) Seed the database:

npm run seed

---

### 3️⃣ Frontend Setup

cd frontend
npm install
npm run dev

---

## 📱 Responsiveness

- Mobile: stacked layout, touch-friendly buttons
- Tablet: balanced grid and spacing
- Desktop: full product grid and detailed views

---

## 🧠 Design Decisions

- Backend acts as the single source of truth
- URL query parameters used for search and pagination
- Separate REST endpoints for add/remove favourites
- Fake cart UI added to demonstrate realistic product flow without over-engineering

---

## 🚧 Limitations / Future Improvements

- React Native mobile application
- Cart and checkout functionality
- Product reviews and ratings
- Admin dashboard
- Image optimization and CDN support

---

## 👨‍💻 Author

Harshpreet Singh
Full-Stack Developer (MERN)  
GitHub: https://github.com/Harsh2972004
LinkedIn: https://www.linkedin.com/in/harsh2972004

---

## 📝 Note

This project was completed under tight time constraints.  
With additional time, the same backend APIs can be reused to build a React Native mobile application.

---

### ✅ Submission Note

I focused on delivering a stable backend and a fully responsive web application.  
The mobile app can be implemented using the same APIs with React Native.
