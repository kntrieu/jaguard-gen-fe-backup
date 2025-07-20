# 🐆 JaguarGen – AI Proposal Generator

JaguarGen is a sleek, modern web application that helps users generate high-quality business proposals using LLMs. Built with **Next.js 13+ App Router**, **Tailwind CSS**, **Framer Motion**, and a custom step-by-step form UI — it’s fast, elegant, and intuitive.

---

## 🚀 Features

- Multi-step form with animations
- Real-time validation per step
- Final natural-language summary step
- Global loading overlay with Jaguar-themed branding
- GIF-based feedback and action buttons
- Custom gradient theming and fonts (Manrope, Encode Sans)
- Easy to extend with API integration for LLM generation

---

## 🛠️ Tech Stack

- [Next.js 13+ (App Router)](https://nextjs.org)
- [Tailwind CSS](https://tailwindcss.com)
- [Framer Motion](https://www.framer.com/motion/)
- Custom SVG / font-based branding

---

## 🧪 Getting Started

### 1. Clone the project

```bash
git clone https://github.com/your-org/jaguargen.git
cd jaguargen
```

### 2. Install dependencies

Make sure you have `Node.js >=18` installed. Then run:

```bash
npm install
```

### 3. Run the app

```bash
npm run dev
```

Then open your browser:  
👉 [http://localhost:3000](http://localhost:3000)

---

## 📁 Project Structure (Simplified)

```
src/
├── app/
│   ├── layout.tsx          # Global layout + fonts + loading context
│   ├── page.tsx            # Home page
│   └── generate/
│       └── page.tsx        # Step-by-step generation form
├── components/             # UI components (navbar, footer, etc.)
├── context/
│   └── LoadingContext.tsx  # Global loading overlay (with jaguar.gif)
├── styles/
│   └── globals.css         # Tailwind + base styles
public/
├── jaguar1.gif             # Loading animation
├── logo.svg                # SVG logo
```

---

## 📦 Environment Setup (Optional for Future API)

Create `.env.local` if you plan to integrate OpenAI or a backend later:

```env
NEXT_PUBLIC_API_URL=http://localhost:4000/api
OPENAI_API_KEY=sk-...
```

---

## 💡 Tips for Devs

- Global loading state uses React Context (`useLoading`)
- Forms are validated per-step and animated via Framer Motion
- Summary step is designed like a human-readable prompt
- GIF loading screen uses `public/jaguar1.gif`

---

## 🧼 Formatting & Linting

```bash
npm run lint
npm run format
```

---

## 👥 Contributors

- You 🧠 – Core developer and creative lead
- Jaguar 🐆 – Spirit animal powering the flow

---

## 📄 License

MIT – free to use, share, or modify.

---

Happy generating, Jaguardians! 🔮🐆
