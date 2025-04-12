# NACOS Academia

**NACOS Academia** is a specialized academic platform designed for Computer Science students of Akwa Ibom State University (AKSU). It helps students quickly find and read on topics surrounding the field of computer science.

## 🔍 Features

- **Real-time Search**: Easily search for articles by title, author, or content.
- **Article Reader**: Clean interface for reading academic content with estimated reading time.
- **Server Status**: Visual indicator to show if Supabase backend is online.
- **SEO Optimization**: Meta tags included for better search engine visibility.
- **Responsive Design**: Fully mobile-friendly interface.

## 🧠 Tech Stack

- **Frontend**: React + TailwindCSS
- **Routing**: React Router
- **Backend**: Supabase (PostgreSQL, Auth, Realtime)
- **Markdown Rendering**: react-markdown
- **SEO**: react-helmet

## 📁 Project Structure

```
src/
├── assets/              # Images and logos
├── components/          # Shared UI components like Header
├── pages/
│   ├── Home.jsx         # Landing page with search form
│   ├── SearchResults.jsx # Results displayed from Supabase query
│   └── Read.jsx         # Read full content of an article
├── utils/
│   └── supabase.js      # Supabase client configuration
```

## 🛠️ Setup Instructions

1. **Clone the Repository**
```bash
git clone https://github.com/Nelkeys/nacos-acad.git
cd nacos-acad
```

2. **Install Dependencies**
```bash
npm install
```

3. **Configure Supabase**
- Create a `.env` file.
- Add your Supabase URL and API Key like so:
```
VITE_SUPABASE_URL=your-url
VITE_SUPABASE_ANON_KEY=your-anon-key
```

4. **Run the App**
```bash
npm run dev
```

## 📦 Deployment

This project is deployed on **Vercel**. You can deploy your own version by linking your GitHub repo to Vercel.

## 💡 Contribution

Pull requests are welcome! For major changes, please open an issue first.

## 📄 License

[MIT License](LICENSE)

---

Built with 💚 by the Nelson Ekoh.