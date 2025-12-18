# James Francisco - Software Engineer Portfolio

A modern, animated portfolio website built with Next.js, TypeScript, Tailwind CSS, shadcn/ui, and Framer Motion.

## Features

- **Modern Design**: Clean and professional design with gradient accents
- **Dark Mode**: Seamless dark/light theme toggle with system preference detection
- **Smooth Animations**: Powered by Framer Motion for engaging user experience
- **Fully Responsive**: Optimized for all device sizes
- **Performance Optimized**: Built with Next.js for fast loading and SEO
- **Type Safe**: Written in TypeScript for reliability
- **Component Library**: Using shadcn/ui for consistent UI components

## Sections

1. **Hero**: Eye-catching introduction with animated background
2. **About**: Personal introduction with feature highlights
3. **Projects**: Showcase of featured work with hover effects
4. **Skills**: Interactive skill bars with progress animations
5. **Contact**: Contact form and information

## Tech Stack

- **Framework**: Next.js 14
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **Animations**: Framer Motion
- **Theme**: next-themes (Dark mode support)
- **Icons**: Lucide React

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm start
```

## Customization

### Personal Information

Update the following files with your information:

- `src/components/Hero.tsx` - Name, title, and social links
- `src/components/About.tsx` - Personal journey and features
- `src/components/Projects.tsx` - Your projects
- `src/components/Skills.tsx` - Your skills and expertise
- `src/components/Contact.tsx` - Contact information
- `src/app/layout.tsx` - Page metadata

### Colors and Theme

Modify the color scheme in:
- `src/app/globals.css` - CSS variables for colors
- `tailwind.config.ts` - Tailwind theme customization

### Adding Projects

Edit the `projects` array in `src/components/Projects.tsx`:

```typescript
{
  title: "Your Project",
  description: "Project description",
  tags: ["Tech1", "Tech2"],
  gradient: "from-blue-500 to-cyan-500",
  github: "https://github.com/yourusername/project",
  demo: "https://yourproject.com",
}
```

### Adding Skills

Edit the `skillCategories` array in `src/components/Skills.tsx`:

```typescript
{
  category: "Category Name",
  skills: [
    { name: "Skill Name", level: 90 },
  ],
  gradient: "from-blue-500 to-cyan-500",
}
```

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import your repository on [Vercel](https://vercel.com)
3. Deploy with one click

### Other Platforms

This is a standard Next.js application and can be deployed to:
- Netlify
- AWS Amplify
- Digital Ocean
- Railway
- Any Node.js hosting provider

## Performance

- **Lighthouse Score**: Optimized for 90+ scores
- **Code Splitting**: Automatic code splitting with Next.js
- **Image Optimization**: Use Next.js Image component for images
- **SEO Friendly**: Proper metadata and semantic HTML

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is open source and available under the MIT License.

## Contact

James Francisco - [james.francisco@example.com](mailto:james.francisco@example.com)

---

Made with ❤️ using Next.js, TypeScript, and Framer Motion
