```markdown
# Fertilizer Shop 🌱

A user-friendly **Fertilizer Shop Website** built using **React.js** for the frontend and **Node.js** for the backend. The platform enables users to explore and purchase fertilizers, seeds, pesticides, herbicides, and agricultural equipment. 🌾💻🛒

The application is designed to provide a seamless shopping experience with secure authentication and payment integrations. 🔐📱💳

---

## 📂 Project Structure 📂🔍🧩


priyanshuuranjan-Fertilizer-Shop/
├── LICENSE
├── Backend/
│   ├── index.mjs
│   ├── package-lock.json
│   ├── package.json
│   ├── vercel.json
│   ├── .gitignore
│   ├── constants/
│   │   └── index.mjs
│   ├── public/
│   │   └── index.html
│   └── routes/
│       ├── equipment.mjs
│       ├── fertilizers.mjs
│       ├── herbicide.mjs
│       ├── nutrition.mjs
│       ├── pesticide.mjs
│       └── seed.mjs
└── Frontend/
    ├── README.md
    ├── eslint.config.js
    ├── index.html
    ├── package-lock.json
    ├── package.json
    ├── postcss.config.js
    ├── tailwind.config.js
    ├── vercel.json
    ├── vite.config.js
    ├── .gitignore
    ├── public/
    └── src/
        ├── App.jsx
        ├── firebase.config.jsx
        ├── index.css
        ├── main.jsx
        ├── api/
        │   └── Api.jsx
        ├── assets/
        │   └── index.js
        ├── components/
        │   ├── Loader/
        │   │   └── Loader.jsx
        ├── pages/
        │   ├── Equipment.jsx
        │   ├── Fertilizer.jsx
        │   ├── Herbicides.jsx
        │   ├── Login.jsx
        │   ├── Nutrition.jsx
        │   ├── Pesticides.jsx
        │   └── Seeds.jsx
        └── ui/
            ├── Cart.jsx
            ├── CartItem.jsx
            ├── CheckoutPopup.jsx
            ├── Contact.jsx
            ├── Footer.jsx
            ├── Header.jsx
            ├── Hero.jsx
            ├── NotFound.jsx
            ├── Order.jsx
            └── Services.jsx
        └── redux/
            ├── cartSlice.jsx
            └── store.jsx
```

---

## 🚀 Features ✨📋💡

- **User Authentication** 🔐: Secure login and registration using Firebase.
- **Product Management** 🌾: View, add, update, and delete products like fertilizers, seeds, and pesticides.
- **Shopping Cart** 🛒: Add products to the cart and manage quantities.
- **Secure Payments** 💳: Integrated with Stripe for payment processing.
- **Responsive Design** 📱: Mobile-friendly interface for a seamless experience across devices.
- **Modern UI** 🎨: Built with **Tailwind CSS** for a clean and modern look.

---

## ⚙️ Technologies Used 💻🔧🛠️

### Frontend 🌐📱🎨
- **React.js**
- **Redux Toolkit**
- **Tailwind CSS**
- **Vite**
- **Firebase Authentication**

### Backend 🖥️📡📂
- **Node.js**
- **Express.js**
- **Firebase Storage**
- **Stripe API**
- **Vercel (for deployment)**

---

## 📦 Installation 🧑‍💻📥📦

### Backend Setup 🖥️⚙️📂

1. Navigate to the **Backend** directory:
   ```bash
   cd Backend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the backend server:
   ```bash
   npm start
   ```

### Frontend Setup 🌐📱💻

1. Navigate to the **Frontend** directory:
   ```bash
   cd Frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run the frontend:
   ```bash
   npm run dev
   ```

---

## 📂 Directory Overview 🗂️📄🔍

### Backend/ 💻🔒📁
- **index.mjs**: Entry point for the backend server.
- **routes/**: Contains routes for various product categories (e.g., fertilizers, seeds, herbicides).
- **constants/**: Stores constant values used in the backend.

### Frontend/ 📱🎨📂
- **src/**: Contains the main application source code.
- **components/**: Reusable UI components (e.g., Header, Footer, Cart).
- **pages/**: Individual pages for different product categories.
- **redux/**: State management using Redux Toolkit.


## 🔧 Environment Variables ⚙️🔑📁

Create a `.env` file in both the **Frontend** and **Backend** directories and add the following variables:

### Frontend 🌐🔒🔧
```bash
VITE_API_KEY=your_firebase_api_key
VITE_AUTH_DOMAIN=your_firebase_auth_domain
```

### Backend 🖥️🔒🔧
```bash
PORT=5000
STRIPE_SECRET_KEY=your_stripe_secret_key
```

---

## 📄 License 📜📘📂

This project is licensed under the **MIT License**. See the [LICENSE](LICENSE) file for details.

## 🤝 Contributions 🧑‍🤝‍🧑💻📋

Contributions, issues, and feature requests are welcome! 🤗💡🛠️  
Feel free to check out the **issues page**.

---

## 📞 Contact 📧📲📞

For any inquiries, please reach out via:

- **Email**: priyanshumth0808@gmail.com

---

## 🌐 Live Demo 🚀🌐📲

The project is deployed on **Vercel**. Check it out [here](https://kumarfertilizer.vercel.app/).

---

## Happy Farming! 🌾🚜🌱
```
