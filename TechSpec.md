# Nexus Creative Studio - Technical Specification

## Component Inventory

### shadcn/ui Components (Built-in)
| Component | Purpose | Customization |
|-----------|---------|---------------|
| Button | CTAs, navigation | Gradient backgrounds, glow effects |
| Card | Service cards, portfolio items | Glassmorphism styling |
| Input | Contact form | Dark theme styling |
| Textarea | Contact form message | Dark theme styling |
| Dialog | Portfolio lightbox | Custom overlay |
| Tabs | Portfolio filters | Custom indicator animation |
| Badge | Labels, tags | Gradient variants |
| Separator | Section dividers | Gradient line option |
| Sheet | Mobile navigation | Slide-in panel |

### Third-Party Registry Components
| Component | Registry | Purpose |
|-----------|----------|---------|
| @magicui/particles | MagicUI | Hero background particle effect |
| @aceternity/3d-card | Aceternity | 3D tilt cards for services |
| @aceternity/timeline | Aceternity | About page experience timeline |

### Custom Components to Build
| Component | Purpose | Location |
|-----------|---------|----------|
| AnimatedCounter | Stats count-up animation | components/animated-counter.tsx |
| GradientText | Animated gradient text | components/gradient-text.tsx |
| GlassCard | Glassmorphism card wrapper | components/glass-card.tsx |
| MagneticButton | Button with magnetic hover | components/magnetic-button.tsx |
| FloatingOrbs | Background decorative orbs | components/floating-orbs.tsx |
| ScrollReveal | Scroll-triggered reveal wrapper | components/scroll-reveal.tsx |
| TestimonialCarousel | 3D carousel for testimonials | components/testimonial-carousel.tsx |
| PortfolioGrid | Masonry grid with filters | components/portfolio-grid.tsx |
| ParticleField | Interactive particle background | components/particle-field.tsx |

## Animation Implementation Table

| Animation | Library | Implementation Approach | Complexity |
|-----------|---------|------------------------|------------|
| Hero gradient mesh background | CSS + Canvas | Animated CSS gradient with canvas fallback | Medium |
| Hero 3D text reveal | Framer Motion | rotateX animation with stagger | Medium |
| Hero image 3D entrance | Framer Motion | translateZ + rotateY animation | Medium |
| Floating orbs | CSS Keyframes | Sine wave translate animation | Low |
| Particle field | Canvas API | Custom particle system with connections | High |
| Navbar scroll behavior | React hooks + CSS | useScroll hook with CSS transitions | Low |
| Nav link underline | CSS | scaleX transform on :hover | Low |
| Scroll reveal animations | Framer Motion | whileInView with viewport detection | Medium |
| Service card 3D flip | Framer Motion | rotateY with perspective container | Medium |
| Service card hover lift | CSS + Framer | translateY + shadow on hover | Low |
| Portfolio masonry parallax | GSAP ScrollTrigger | Column-based parallax speeds | Medium |
| Portfolio card hover zoom | CSS | scale transform on image | Low |
| Stats counter animation | Custom hook | useCountUp with Intersection Observer | Medium |
| Testimonial 3D carousel | Framer Motion | rotateY + translateZ positioning | High |
| CTA gradient rotation | CSS Keyframes | Background position animation | Low |
| Button magnetic effect | CSS :hover | Transform based on hover state | Low |
| Page transitions | Framer Motion | AnimatePresence with fade/slide | Medium |
| Filter tab indicator slide | Framer Motion | layoutId for shared layout | Low |
| About image tilt | CSS | perspective + rotateX/Y on :hover | Low |
| Footer link hover | CSS | translateX + underline grow | Low |

## Animation Library Choices

### Primary: Framer Motion
**Rationale:**
- Native React integration
- Declarative animation API
- Excellent whileInView support
- AnimatePresence for exit animations
- Layout animations for smooth transitions

**Use for:**
- Component entrance/exit animations
- Scroll-triggered reveals
- 3D transforms (rotateX/Y/Z)
- Gesture-based interactions
- Layout animations

### Secondary: GSAP + ScrollTrigger
**Rationale:**
- Superior scroll-linked animations
- Pin functionality for hero
- Timeline control for complex sequences
- Better performance for heavy animations

**Use for:**
- Hero scroll pinning
- Portfolio parallax columns
- Complex scroll-driven timelines
- Stats counter triggers

### Tertiary: CSS Animations/Transitions
**Rationale:**
- Best performance for simple effects
- No JS overhead
- Native browser optimization
- Perfect for hover states

**Use for:**
- Button hover effects
- Link underlines
- Continuous floating animations
- Gradient background shifts
- Simple scale/opacity transitions

## Project File Structure

```
my-app/
├── app/
│   ├── layout.tsx              # Root layout with fonts, metadata
│   ├── page.tsx                # Home page (landing)
│   ├── globals.css             # Global styles, CSS variables
│   ├── about/
│   │   └── page.tsx            # About page
│   ├── services/
│   │   └── page.tsx            # Services page
│   ├── portfolio/
│   │   └── page.tsx            # Portfolio page
│   └── contact/
│       └── page.tsx            # Contact page
├── components/
│   ├── ui/                     # shadcn/ui components
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   ├── input.tsx
│   │   ├── textarea.tsx
│   │   ├── dialog.tsx
│   │   ├── tabs.tsx
│   │   ├── badge.tsx
│   │   ├── separator.tsx
│   │   └── sheet.tsx
│   ├── sections/               # Page section components
│   │   ├── hero.tsx
│   │   ├── about-preview.tsx
│   │   ├── services-grid.tsx
│   │   ├── portfolio-preview.tsx
│   │   ├── stats-section.tsx
│   │   ├── testimonials.tsx
│   │   ├── cta-section.tsx
│   │   └── footer.tsx
│   ├── navigation.tsx          # Navbar component
│   ├── animated-counter.tsx    # Stats counter
│   ├── gradient-text.tsx       # Gradient text effect
│   ├── glass-card.tsx          # Glassmorphism card
│   ├── scroll-reveal.tsx       # Scroll animation wrapper
│   ├── floating-orbs.tsx       # Background orbs
│   ├── particle-field.tsx      # Particle background
│   ├── portfolio-grid.tsx      # Portfolio with filters
│   ├── testimonial-carousel.tsx # 3D carousel
│   └── magnetic-button.tsx     # Magnetic button
├── hooks/
│   ├── use-scroll.ts           # Scroll position hook
│   ├── use-count-up.ts         # Counter animation hook
│   └── use-in-view.ts          # Intersection observer hook
├── lib/
│   ├── utils.ts                # Utility functions (cn)
│   └── animations.ts           # Animation variants/configs
├── types/
│   └── index.ts                # TypeScript types
├── public/
│   └── images/                 # Static images
│       ├── hero-profile.jpg
│       ├── about-image.jpg
│       ├── portfolio/
│       │   ├── project-1.jpg
│       │   ├── project-2.jpg
│       │   ├── project-3.jpg
│       │   ├── project-4.jpg
│       │   ├── project-5.jpg
│       │   └── project-6.jpg
│       └── testimonials/
│           ├── avatar-1.jpg
│           ├── avatar-2.jpg
│           └── avatar-3.jpg
├── next.config.js
├── tailwind.config.ts
├── tsconfig.json
└── package.json
```

## Dependencies to Install

### Core Dependencies (via shadcn init)
- next
- react
- react-dom
- typescript
- tailwindcss
- @radix-ui/* (various)
- class-variance-authority
- clsx
- tailwind-merge
- lucide-react

### Animation Libraries
```bash
npm install framer-motion gsap @gsap/react
```

### Additional Utilities
```bash
npm install @types/node @types/react @types/react-dom
```

## CSS Variables (globals.css)

```css
:root {
  /* Colors */
  --background: 0 0% 4%;
  --foreground: 0 0% 100%;
  --card: 0 0% 7%;
  --card-foreground: 0 0% 100%;
  --popover: 0 0% 5%;
  --popover-foreground: 0 0% 100%;
  --primary: 263 70% 50%;
  --primary-foreground: 0 0% 100%;
  --secondary: 217 91% 60%;
  --secondary-foreground: 0 0% 100%;
  --muted: 0 0% 15%;
  --muted-foreground: 0 0% 60%;
  --accent: 188 94% 43%;
  --accent-foreground: 0 0% 100%;
  --destructive: 0 84% 60%;
  --destructive-foreground: 0 0% 100%;
  --border: 0 0% 15%;
  --input: 0 0% 15%;
  --ring: 263 70% 50%;
  --radius: 0.75rem;
  
  /* Animation Easings */
  --ease-expo-out: cubic-bezier(0.16, 1, 0.3, 1);
  --ease-expo-in: cubic-bezier(0.7, 0, 0.84, 0);
  --ease-elastic: cubic-bezier(0.68, -0.55, 0.265, 1.55);
  --ease-smooth: cubic-bezier(0.4, 0, 0.2, 1);
  --ease-dramatic: cubic-bezier(0.87, 0, 0.13, 1);
  --ease-bounce: cubic-bezier(0.34, 1.56, 0.64, 1);
}
```

## Tailwind Config Extensions

```typescript
// tailwind.config.ts
const config = {
  theme: {
    extend: {
      colors: {
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        accent: {
          purple: '#6b46c1',
          blue: '#3b82f6',
          cyan: '#06b6d4',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-slow': 'float 8s ease-in-out infinite',
        'gradient-shift': 'gradient-shift 12s ease infinite',
        'pulse-glow': 'pulse-glow 3s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-15px)' },
        },
        'gradient-shift': {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        'pulse-glow': {
          '0%, 100%': { boxShadow: '0 0 20px rgba(107, 70, 193, 0.3)' },
          '50%': { boxShadow: '0 0 40px rgba(107, 70, 193, 0.6)' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'gradient-purple': 'linear-gradient(135deg, #6b46c1, #3b82f6)',
        'gradient-blue': 'linear-gradient(135deg, #3b82f6, #06b6d4)',
      },
    },
  },
}
```

## Implementation Priority

### Phase 1: Foundation
1. Initialize project with shadcn
2. Set up global styles and CSS variables
3. Install animation libraries
4. Create base components (Button, Card)
5. Build Navigation component

### Phase 2: Home Page
1. Hero section with 3D animations
2. About Preview section
3. Services Grid with hover effects
4. Portfolio Preview with masonry
5. Stats section with counters
6. Testimonials carousel
7. CTA section
8. Footer

### Phase 3: Inner Pages
1. About page with timeline
2. Services page with detailed cards
3. Portfolio page with filters and lightbox
4. Contact page with form

### Phase 4: Polish
1. Page transitions
2. Mobile responsiveness
3. Performance optimization
4. Accessibility improvements
5. Reduced motion support

## Performance Targets

- First Contentful Paint: < 1.5s
- Largest Contentful Paint: < 2.5s
- Time to Interactive: < 3.5s
- Cumulative Layout Shift: < 0.1
- Animation frame rate: 60fps

## Accessibility Requirements

- WCAG 2.1 AA compliance
- Keyboard navigation support
- Screen reader compatibility
- prefers-reduced-motion support
- Focus visible states
- Alt text for all images
- Semantic HTML structure
