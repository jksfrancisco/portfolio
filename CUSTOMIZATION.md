# Portfolio Customization Guide

This guide will help you personalize your portfolio with your own information, projects, and styling.

## Quick Start Checklist

- [ ] Update personal information in Hero section
- [ ] Add your social media links
- [ ] Update About section with your story
- [ ] Add your projects
- [ ] Update skills and technologies
- [ ] Update contact information
- [ ] Change color scheme (optional)
- [ ] Add your logo/avatar (optional)

## Step-by-Step Customization

### 1. Personal Information

**File**: `src/components/Hero.tsx`

```typescript
// Update your name (line ~48)
<motion.h1>
  Your Name Here
</motion.h1>

// Update your title (line ~54)
<motion.p>
  Your Professional Title
</motion.p>

// Update your tagline (line ~60)
<motion.p>
  Your personal tagline or description
</motion.p>
```

### 2. Social Media Links

**File**: `src/components/Hero.tsx` (lines ~71-96)

Replace the URLs with your actual profiles:

```typescript
<motion.a href="https://github.com/yourusername">
<motion.a href="https://linkedin.com/in/yourprofile">
<motion.a href="mailto:your.email@example.com">
```

Also update in:
- `src/components/Footer.tsx`
- `src/components/Contact.tsx`

### 3. About Section

**File**: `src/components/About.tsx`

Update the "My Journey" section (lines ~76-90) with your personal story:

```typescript
<p className="text-muted-foreground leading-relaxed">
  Your background and experience...
</p>
<p className="text-muted-foreground leading-relaxed">
  Your specializations and passions...
</p>
```

**Optional**: Customize the features array (lines ~8-31) to highlight what's important to you.

### 4. Projects

**File**: `src/components/Projects.tsx`

Update the `projects` array (lines ~8-59) with your actual projects:

```typescript
{
  title: "Project Name",
  description: "Detailed description of your project",
  tags: ["Tech1", "Tech2", "Tech3", "Tech4"],
  gradient: "from-blue-500 to-cyan-500", // Choose your gradient
  github: "https://github.com/yourusername/project",
  demo: "https://yourproject.com",
}
```

**Available Gradients**:
- `from-blue-500 to-cyan-500` (Blue)
- `from-purple-500 to-pink-500` (Purple-Pink)
- `from-orange-500 to-red-500` (Orange-Red)
- `from-green-500 to-emerald-500` (Green)
- `from-indigo-500 to-blue-500` (Indigo-Blue)
- `from-pink-500 to-rose-500` (Pink-Rose)

### 5. Skills

**File**: `src/components/Skills.tsx`

Update the `skillCategories` array (lines ~8-45):

```typescript
{
  category: "Category Name",
  skills: [
    { name: "Skill Name", level: 90 }, // level: 0-100
    { name: "Another Skill", level: 85 },
  ],
  gradient: "from-blue-500 to-cyan-500",
}
```

Update additional technologies (lines ~161-175):

```typescript
["JavaScript", "HTML5", "CSS3", "Your", "Technologies", "Here"]
```

### 6. Contact Information

**File**: `src/components/Contact.tsx`

Update the `contactInfo` array (lines ~41-57):

```typescript
{
  icon: Mail,
  title: "Email",
  value: "your.email@example.com",
  href: "mailto:your.email@example.com",
},
{
  icon: Phone,
  title: "Phone",
  value: "+1 (555) 123-4567",
  href: "tel:+15551234567",
},
{
  icon: MapPin,
  title: "Location",
  value: "Your City, State",
  href: null,
},
```

### 7. Page Metadata

**File**: `src/app/layout.tsx`

Update SEO metadata (lines ~8-11):

```typescript
export const metadata: Metadata = {
  title: "Your Name - Your Title",
  description: "Your portfolio description for search engines",
}
```

### 8. Color Scheme

**File**: `src/app/globals.css`

Customize the color scheme by modifying CSS variables:

```css
:root {
  --primary: 221.2 83.2% 53.3%;  /* Main brand color */
  --secondary: 210 40% 96.1%;     /* Secondary color */
  /* ... other colors */
}
```

**Quick Color Changes**:

For a different primary color, update `--primary`:
- Blue: `221.2 83.2% 53.3%`
- Purple: `271 91% 65%`
- Green: `142 76% 36%`
- Red: `0 72% 51%`
- Orange: `25 95% 53%`

### 9. Fonts

**File**: `src/app/layout.tsx`

Change the font family (line ~4):

```typescript
import { Inter } from "next/font/google"
const inter = Inter({ subsets: ["latin"] })

// Try other Google Fonts:
// import { Poppins, Roboto, Montserrat, etc. } from "next/font/google"
```

### 10. Logo/Branding

**File**: `src/components/Navbar.tsx`

Update the logo/initials (lines ~39-46):

```typescript
<motion.div className="...">
  YI  {/* Your initials */}
</motion.div>
```

**Or add an image**:

```typescript
<Image src="/logo.png" alt="Logo" width={40} height={40} />
```

### 11. Animation Customization

Adjust animation speeds in any component:

```typescript
// Slower animation
transition={{ duration: 1.5 }}

// Faster animation
transition={{ duration: 0.3 }}

// Different easing
transition={{ ease: "easeInOut" }}
```

## Advanced Customization

### Adding New Sections

1. Create a new component in `src/components/`
2. Import it in `src/app/page.tsx`
3. Add it between existing sections
4. Add a navigation link in `src/components/Navbar.tsx`

### Changing Layout

Edit `src/app/page.tsx` to reorder or remove sections:

```typescript
export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      {/* Reorder, remove, or add sections here */}
      <Footer />
      <ScrollToTop />
    </main>
  )
}
```

### Dark Mode Customization

Dark mode is already fully implemented! The toggle button appears in the navbar.

**How it works:**
- Automatically detects system preference on first visit
- Remembers user's choice in localStorage
- Smooth transitions between themes
- Animated sun/moon icon

**Customizing dark mode colors:**

Edit `src/app/globals.css` to adjust dark theme colors:

```css
.dark {
  --background: 222.2 84% 4.9%;
  --foreground: 210 40% 98%;
  --primary: 217.2 91.2% 59.8%;
  /* Adjust other colors as needed */
}
```

**Change default theme:**

In `src/app/layout.tsx`, modify the ThemeProvider:

```typescript
<ThemeProvider
  attribute="class"
  defaultTheme="dark"  // "light", "dark", or "system"
  enableSystem
  disableTransitionOnChange
>
```

### Custom Animations

All animations use Framer Motion. Check the [Framer Motion docs](https://www.framer.com/motion/) for more animation options.

## Testing Your Changes

After making changes:

1. Save your files
2. Check the browser (http://localhost:3000)
3. The page will automatically reload
4. Test on mobile by resizing your browser

## Deployment

Once customized, deploy to Vercel:

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

Or push to GitHub and connect to Vercel's dashboard.

## Need Help?

- Check the component files for inline comments
- Review the README.md for general information
- Consult Next.js documentation: https://nextjs.org/docs
- Framer Motion docs: https://www.framer.com/motion/

Happy customizing!
