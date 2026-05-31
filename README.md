# Portfolio Site

Portfolio pribadi seorang **Full Stack Web Developer**, dibuat dengan **React + TypeScript + Vite**,
styling **Tailwind CSS** + **shadcn/ui**. Desain mengikuti referensi Dribbble dengan tema
**deep navy + cerulean blue accent** — satu tema permanen, tanpa light/dark toggle.

## ✨ Fitur

- Single-page dengan section: Hero, About, Projects, Skills, Experience, Contact
- **Deep navy theme** permanen — warna aksen cerulean blue (`#4BB8FA`) di seluruh situs
- Hero dua kolom: teks + stats row (pengalaman, proyek, teknologi) + kolom dekoratif kanan
- Skill cards dengan hover effect orange — Frontend, Backend, Database & Tools
- Navbar dengan _scroll-spy_ (link aktif mengikuti section) + menu mobile
- **Data terpisah dari UI** — cukup edit file di `src/data/` untuk mengganti konten
- Aksesibel (semantic HTML, keyboard friendly, skip-link)
- Unit test (Vitest + Testing Library), ESLint + Prettier

## 🚀 Menjalankan

```bash
npm install      # install dependencies
npm run dev      # jalankan dev server (http://localhost:5173)
```

Script lain:

| Perintah             | Fungsi                                 |
| -------------------- | -------------------------------------- |
| `npm run build`      | Type-check + build produksi ke `dist/` |
| `npm run preview`    | Preview hasil build secara lokal       |
| `npm run lint`       | Cek kode dengan ESLint                 |
| `npm run format`     | Rapikan kode dengan Prettier           |
| `npm test`           | Jalankan unit test                     |
| `npm run test:watch` | Unit test mode watch                   |

## ✏️ Mengganti konten (mulai dari sini!)

Semua isi adalah **placeholder**. Edit file berikut — tidak perlu menyentuh komponen:

| File                     | Isi                                           |
| ------------------------ | --------------------------------------------- |
| `src/data/profile.ts`    | Nama, role, tagline, bio, email, link sosial  |
| `src/data/projects.ts`   | Daftar project (judul, deskripsi, tech, link) |
| `src/data/skills.ts`     | Skill dikelompokkan per kategori              |
| `src/data/experience.ts` | Riwayat kerja & pendidikan                    |

Jangan lupa juga:

- **`index.html`** — `<title>`, `meta description`, dan tag Open Graph (untuk SEO & preview sosial).
- **`public/favicon.svg`** — ganti inisial dengan inisialmu.
- **`public/projects/`** — ganti gambar placeholder dengan screenshot project (rasio 16:9, mis. 640×360).
- **`public/og-image.png`** — tambahkan gambar 1200×630 untuk preview saat link dibagikan (opsional).
- **CV**: taruh `public/resume.pdf` lalu aktifkan `resumeUrl` di `src/data/profile.ts`.

### Mengubah warna tema

Warna diatur lewat CSS variables di `src/index.css` (blok `:root`). Palette saat ini:

| Token                | Peran                    | Hex       |
| -------------------- | ------------------------ | --------- |
| `--background`       | Deep ocean navy          | `#2C5EAD` (digelapkan) |
| `--muted-foreground` | Bright sky blue          | `#1591DC` |
| `--primary`          | Light cerulean (accent)  | `#4BB8FA` |
| `--foreground`       | Pale powder blue (text)  | `#C4E2F5` |

Ubah `--primary` untuk mengganti warna aksen seluruh situs.

### Statistik Hero

Angka di stats row Hero (`src/components/sections/Hero.tsx`) bisa disesuaikan:

```ts
const stats = [
  { value: '3+', label: 'Years Experience' },
  { value: '10+', label: 'Projects Built' },
  { value: '15+', label: 'Technologies' },
]
```

## 🗂️ Struktur folder

```
src/
├── components/
│   ├── ui/         # primitif shadcn/ui (button, card, badge, ...)
│   ├── common/     # komponen reusable (ProjectCard, SectionHeading, SocialLinks)
│   ├── icons/      # ikon brand (GitHub)
│   ├── layout/     # Navbar, Footer, Section
│   └── sections/   # Hero, About, Projects, Skills, Experience, Contact
├── config/         # konfigurasi navigasi (section ids + label)
├── data/           # ← KONTEN ADA DI SINI
├── hooks/          # useActiveSection
├── lib/            # util (cn helper)
└── types/          # tipe TypeScript bersama
```

## ☁️ Deploy

Project ini static — hasil build (`dist/`) bisa di-host gratis di mana saja.

**Vercel** (paling mudah): import repo di [vercel.com](https://vercel.com), preset
"Vite" terdeteksi otomatis. Config sudah ada di `vercel.json`.

**Netlify**: import repo di [netlify.com](https://netlify.com). Build command
`npm run build`, publish directory `dist` (sudah diatur di `netlify.toml`).

Setelah deploy, ganti `https://your-domain.com/` di `index.html` dan
`public/robots.txt` dengan domain aslimu.

## ✅ Cek Lighthouse 90+

```bash
npm run build && npm run preview
```

Buka URL preview di Chrome → DevTools (F12) → tab **Lighthouse** → pilih mode
**Mobile** → **Analyze page load**. Targetkan ≥ 90 untuk keempat kategori.

Tips bila ada yang turun:

- **Performance** → kompres gambar project (gunakan WebP/AVIF), jaga rasio 16:9.
- **Accessibility** → pastikan kontras teks cukup bila mengganti warna `--primary`.
- **SEO** → lengkapi `title`, `meta description`, dan domain di `index.html`.

## 🔧 Catatan

- Komponen `src/components/ui/` mengikuti gaya **shadcn/ui** dan bisa ditambah lewat
  `npx shadcn@latest add <nama>` (config di `components.json`).
- Tidak ada light/dark toggle — tema dark navy adalah satu-satunya tampilan.
- **zod** belum dipakai (Contact hanya berupa link, tanpa form). Jika nanti menambah
  form kontak atau ingin validasi data runtime, zod siap ditambahkan tanpa mengubah struktur.
- Untuk SEO maksimal (pre-render HTML), pertimbangkan plugin seperti `vite-plugin-prerender`
  atau migrasi ke framework SSG.
