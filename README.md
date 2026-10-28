
# 📰 Bangla News24

### Your Daily Source for News and Updates 🇧🇩

**Bangla News24** is a modern news web application built with Next.js, designed to provide users with a clean and user-friendly platform for exploring news and staying updated. It features a responsive interface with a white-and-red color theme and user authentication.

🌐 **Live Demo:** https://bangla-news-24-cyan.vercel.app

---

## ✨ Features

- 📰 **News Platform** — Browse news through a modern web interface.
- 🔐 **User Authentication** — Sign-in and sign-out functionality powered by Better Auth.
- 👤 **User Session Management** — Access authentication state through the auth client.
- 📱 **Responsive Design** — Designed to work across desktop and mobile screens.
- 🎨 **Modern UI** — Clean white-and-red theme for a professional news experience.
- ⚡ **Next.js App Router** — Modern routing and application architecture.
- 🚀 **Vercel Deployment** — Deployed for online access.

---

## 🛠️ Tech Stack

- **Framework:** Next.js
- **Language:** TypeScript / JavaScript
- **Authentication:** Better Auth
- **Styling:** CSS / Tailwind CSS
- **Icons:** Lucide React
- **Deployment:** Vercel

---

## 🚀 Getting Started

Follow these steps to run the project locally.

### 1. Clone the Repository

```bash
git clone https://github.com/Fayez-Ali-IT25026/PH_PROJECT_1.git
```

### 2. Navigate to the Project Directory

```bash
cd YOUR_PROJECT_FOLDER
```

### 3. Install Dependencies

```bash
npm install
```

### 4. Configure Environment Variables

Create a `.env.local` file in the root directory:

```env
BETTER_AUTH_SECRET=my_secure_secret
BETTER_AUTH_URL=http://localhost:3000
NEXT_PUBLIC_BETTER_AUTH_URL=http://localhost:3000
```


### 5. Start the Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 📂 Project Structure

```text
bangla-news24/
├── public/
├── src/
│   ├── app/
│   ├── components/
│   └── lib/
├── .env.local
├── .gitignore
├── package.json
└── README.md
```


---

## 🔑 Authentication

Bangla News24 uses Better Auth to manage user authentication.

Environment variables:

- `BETTER_AUTH_SECRET` — Secret used by Better Auth.
- `BETTER_AUTH_URL` — Base URL of the application.
- `NEXT_PUBLIC_BETTER_AUTH_URL` — Public base URL used by the client authentication configuration.

For production deployment, configure the appropriate environment variables in your Vercel project settings.

---

## 🌐 Deployment

The application is deployed using Vercel.

To deploy your own version:

1. Push your project to GitHub.
2. Import the repository into Vercel.
3. Configure the required environment variables.
4. Deploy the application.
5. Test authentication and other features on the production URL.

---

## 🎯 Project Goals

- Build a modern and responsive news web application.
- Practice Next.js App Router development.
- Implement authentication using Better Auth.
- Improve frontend development and deployment skills.
- Create a foundation for additional news-related features.

---

## 🔮 Future Improvements

- [ ] News categories and filtering.
- [ ] Search news functionality.
- [ ] News details pages.
- [ ] Bookmark and save articles.
- [ ] User profile management.
- [ ] Admin dashboard for managing news.
- [ ] Pagination and improved loading states.

---

## 👨‍💻 Author

**Fayez Ali**

ICT Undergraduate | Web Developer | Aspiring Software Engineer

- GitHub: [My GitHub Profile](https://github.com/Fayez-Ali-IT25026)
- Portfolio: [fayezali](https://my-portfolio-1-livid-seven.vercel.app/)

---

## 📄 License

This project is available for learning and educational purposes. Add a license file if you intend to distribute it under specific terms.

---


