# Philip Adzanoukpe - Portfolio

A modern, responsive portfolio website built with Next.js 14+, TypeScript, Tailwind CSS, and Framer Motion. Designed for static export and GitHub Pages deployment.

![Portfolio Preview](public/og-image.png)

## ✨ Features

- **Static Export** - Fully static site compatible with GitHub Pages
- **Dark-First Design** - Developer-centric aesthetic with subtle animations
- **One-Page Layout** - Storytelling-focused homepage with smooth scrolling
- **MDX Support** - Rich content pages for research, case studies, and blog posts
- **Responsive Design** - Mobile-first approach with Lighthouse 90+ scores
- **SEO Optimized** - OpenGraph tags, structured data, and metadata

## 🛠️ Tech Stack

- **Framework:** Next.js 14+ (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Components:** shadcn/ui
- **Animations:** Framer Motion
- **Content:** MDX
- **Icons:** Lucide React

## 📦 Getting Started

### Prerequisites

- Node.js 18+
- pnpm (recommended) or npm

### Installation

```bash
# Clone the repository
git clone https://github.com/epigos/philip-az.git
cd philip-az

# Install dependencies
pnpm install

# Start development server
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

### Build for Production

```bash
# Create static export
pnpm build

# The static files will be in the 'out' directory
```

## 📁 Project Structure

```
├── app/
│   ├── page.tsx              # Homepage
│   ├── layout.tsx            # Root layout
│   ├── globals.css           # Global styles
│   └── research/             # Research MDX pages
│       ├── page.tsx          # Research listing
│       └── [slug]/           # Individual research articles
├── components/
│   ├── sections/             # Page sections (Hero, About, etc.)
│   ├── ui/                   # shadcn/ui components
│   ├── mdx/                  # MDX-specific components
│   └── *.tsx                 # Shared components
├── data/
│   ├── site.ts               # Site configuration & content
│   └── github.ts             # GitHub stats (mock data)
├── lib/
│   └── utils.ts              # Utility functions
└── public/
    └── ...                   # Static assets
```

## 🎨 Customization

### Site Configuration

Edit `data/site.ts` to update:

- Personal information
- Social links
- Work experience
- Education
- Research publications
- Testimonials

### Theme

The theme is defined in `app/globals.css` using CSS custom properties. Modify the color values in `:root` and `.dark` selectors to customize the color scheme.

### GitHub Data

Replace the mock data in `data/github.ts` with actual GitHub API data. You can fetch this at build time using Next.js data fetching.

## 🚀 Deployment

### GitHub Pages

1. Push your code to GitHub
2. Go to repository Settings → Pages
3. Set source to "GitHub Actions"
4. The included workflow (`.github/workflows/deploy.yml`) will automatically build and deploy on push to main

### Manual Deployment

```bash
# Build the site
pnpm build

# Deploy the 'out' directory to any static hosting service
```

## 📝 Adding Content

### Research Articles

Create a new folder in `app/research/[slug]/` with a `page.tsx` file:

```tsx
import { MDXLayout } from "@/components/mdx/mdx-layout";

export const metadata = {
    title: "Your Article Title",
    description: "Article description",
};

const frontmatter = {
    title: "Your Article Title",
    // ... other metadata
};

export default function ArticlePage() {
    return (
        <MDXLayout frontmatter={frontmatter} type="research">
            {/* Your content */}
        </MDXLayout>
    );
}
```

## 📄 License

MIT License - feel free to use this template for your own portfolio!

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.
