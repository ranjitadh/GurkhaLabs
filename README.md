# 🚀 GurkhasLabs Website – Redesign 2025

The official source code for the redesigned [GurkhasLabs](https://gurkhaslabs.com) website. Built with the **Next.js App Router**, styled using **Tailwind CSS**, written in **TypeScript**, and backed by **PostgreSQL** with **Prisma ORM**. Implements **JWT-based authentication**, responsive UI, modern design principles, and SEO best practices.

---

## 📌 Tech Stack

| Layer         | Technology                         |
|---------------|-------------------------------------|
| Framework     | [Next.js (App Router)](https://nextjs.org/docs/app) |
| Styling       | [Tailwind CSS](https://tailwindcss.com) |
| Language      | TypeScript                         |
| Database      | PostgreSQL                         |
| ORM           | [Prisma](https://www.prisma.io)    |
| Auth          | JWT (JSON Web Token)               |
| Hosting       | VPS / Docker / Vercel              |
| Lint/Format   | ESLint, Prettier                   |
| SEO           | Metadata API, Open Graph, Sitemap  |

---

## 🗂️ Folder Structure (App Router)

```

.
├── app/
│   ├── layout.tsx
│   ├── page.tsx                # Homepage
│   ├── about/page.tsx
│   ├── services/page.tsx
│   ├── contact/page.tsx
│   ├── blog/page.tsx
│   └── dashboard/(auth)/...    # Protected routes
├── components/                 # Reusable UI components
├── lib/                        # Utility functions (e.g., JWT, db)
├── prisma/
│   ├── schema.prisma
│   └── seed.ts
├── public/                     # Static files
├── styles/                     # Tailwind config, globals
├── .env.example
├── next.config.js
└── README.md

````

---

## 🧰 Getting Started

### 1. Clone & Install

```bash
git clone https://github.com/ranjitadh/GurkhaLabs.git
cd gurkhaslabs
npm install
````

### 2. Environment Variables

Create a `.env` file based on `.env.example`:

```env
DATABASE_URL=postgresql://user:password@localhost:5432/gurkhaslabs
JWT_SECRET=your-strong-secret
NEXT_PUBLIC_BASE_URL=http://localhost:3000
```

---

### 3. Prisma & Database

```bash
npx prisma migrate dev --name init
npx prisma generate
npx prisma db seed
```

---

### 4. Run the App

```bash
npm run dev
```

Access the site at `http://localhost:3000`.

---

## 🔐 Authentication – JWT Based

* Secure login API issues **JWT access token**.
* Protected routes (e.g. dashboard) check token validity via middleware.
* Token is stored in `Authorization` header (or HTTP-only cookie for production).
* JWT signing key is defined in `.env` as `JWT_SECRET`.

🔧 Located in:

* `lib/auth.ts` → token creation & verification
* `middleware.ts` → protect server routes
* `api/auth/login/route.ts` → authentication handler

---

## 🎨 Styling & UI

* Fully responsive, mobile-first layout.
* Custom `tailwind.config.ts` for branding.
* Dark mode supported via Tailwind’s `media` strategy.
* Componentized structure with shared UI like `<Navbar />`, `<Footer />`, `<HeroSection />`.

---

## 🧠 SEO Strategy

**Implemented using Next.js App Router metadata API.**

### 1. Dynamic Metadata

```ts
// app/page.tsx
export const metadata = {
  title: "GurkhasLabs – Transform Tech, Inspiring Solutions",
  description: "We provide web, app, branding & IT consulting services in Nepal.",
  openGraph: {
    title: "GurkhasLabs",
    images: ["/og-image.jpg"],
  },
};
```

### 2. Structured Data (JSON-LD)

```tsx
<script type="application/ld+json">
{JSON.stringify({
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "GurkhasLabs",
  url: "https://gurkhaslabs.com",
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+977-9748723044",
    contactType: "Customer Service",
  },
})}
</script>
```

### 3. Other SEO Optimizations

* Clean URLs (e.g. `/services/web-development`)
* Sitemap generated via `next-sitemap`
* Canonical links set in metadata
* Image optimization via `<Image />`
* Lazy loading & alt attributes for all images
* Robots.txt in `public/`
* Performance improvements with SSR/SSG
* Google Analytics & Search Console integrated

---

## 📜 Scripts

```bash
npm run dev             # Start dev server
npm run build           # Build for production
npm run start           # Start production server
npx prisma studio       # Visual DB browser
npm run lint            # Run ESLint
npm run format          # Prettier format
```

---

## 🚀 Deployment

**Recommended: Self-hosting**

* Connect GitHub repo to CI/CD pipeline for automatic deployment
* Add environment variables
* Auto-deploy on push to `main`
* Use Docker for containerization
* Deploy on VPS or cloud provider

Alternatively, use Vercel for deployment.

---

## 🤝 Contributing

* Fork the repo, create a branch, open PR
* Use conventional commits
* Run `npm run lint && npm run format` before pushing
* Add tests if applicable

---

## 📬 Contact

📧 Email: [info@gurkhaslabs.com](mailto:info@gurkhaslabs.com)

🌐 Website: [https://gurkhaslabs.com](https://gurkhaslabs.com)

📞 Phone: +977-9748723044

🏢 Address: Satdobato, Lalitpur, Bagmati Province, Nepal

---

## ⚖️ License

This project is proprietary to **GurkhasLabs Pvt. Ltd.**. Redistribution or reuse without written permission is prohibited.

---