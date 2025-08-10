# Website Context - Abdul Rehman Bhatti Bearing Store

## Project Overview

A modern, animated company website for **Abdul Rehman Bhatti Bearing Store** built with:

- **Next.js 15** (App Router)
- **Tailwind CSS**
- **shadcn/ui**
- **Framer Motion** (animations + parallax)
- **react-intersection-observer** (scroll-trigger animations)

The website will reflect the industrial and precision-focused brand identity with smooth transitions, consistent hover animations, and parallax effects.

---

## Goals

- Showcase company profile and expertise
- Present product range with high-quality images
- Highlight industries served
- Provide clear contact information and inquiry form
- Deliver a premium, professional, and modern visual experience

---

## Pages & Routes

```
/          -> Home
/about     -> About Company
/products  -> Product Listing
/industries-> Industries Served
/contact   -> Contact Page
```

---

## Components

### Global

- **Navbar**

  - Sticky top, transparent over hero section
  - Changes to solid background on scroll
  - Smooth scroll links + hover underline animations

- **Footer**

  - Company info, quick links, contact info, social icons

- **SectionHeading**

  - Title + animated underline

### Home Specific

- **HeroSection** (Parallax background + fade-in text + CTA button)
- **AboutPreview** (Short description + image)
- **FeaturedProducts** (ProductCard components with hover animation)
- **IndustriesPreview** (Grid of IndustryCard components)
- **WhyChooseUs** (Icon cards with fade-in animation)
- **CTASection** (Full-width parallax background with contact button)

### Other Components

- **ProductCard** (Image, name, type, short description; hover effects)
- **IndustryCard** (Image/icon, title, text; hover lift effect)
- **ContactForm** (Name, email, phone, message fields)
- **MapEmbed** (Google Map for location)

---

## Animations

- **Scroll animations**: fade, slide, and scale via Framer Motion
- **Hover animations**: scale-up, shadow glow, icon rotation
- **Parallax effects**: backgrounds moving at different speeds
- **Section transitions**: smooth opacity + translate when entering viewport

---

## Styling

- **Colors**: Steel grey, metallic silver, deep blue, white accents
- **Typography**: Modern sans-serif (Manrope or Inter)
- **Spacing**: Generous padding/margin for premium feel
- **Animation speed**: 0.4–0.6s for consistency

---

## Image Usage

- **Hero**: Large manufacturing/bearing image
- **Products**: High-resolution bearing images
- **Industries**: Stock + real project photos
- **Parallax**: Wide high-quality shots of manufacturing

---

## Performance & SEO

- Use Next.js Image Optimization
- SEO-friendly meta tags and Open Graph tags
- Lazy load images and animations

---

## Deployment

- Deploy to **Vercel**
- Optimize for Lighthouse score 90+

---

## Deliverables

- Fully responsive, modern, animated website
- Clean, maintainable code
- Clear navigation and fast performance
