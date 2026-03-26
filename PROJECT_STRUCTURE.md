# Edmark Senegal - E-Commerce Website

## 🌿 Project Overview

A modern, premium e-commerce website for Edmark wellness products in Senegal. Built with React, TypeScript, Tailwind CSS, and Framer Motion.

## 📁 Project Structure

```
/src/app/
├── components/
│   ├── Header.tsx              # Main navigation with cart count
│   ├── Footer.tsx              # Footer with links and contact info
│   ├── Layout.tsx              # Main layout wrapper
│   ├── ProductCard.tsx         # Reusable product card component
│   ├── WhatsAppButton.tsx      # Floating WhatsApp contact button
│   ├── ScrollToTop.tsx         # Auto-scroll to top on route change
│   └── Loading.tsx             # Loading component
│
├── pages/
│   ├── Home.tsx                # Homepage with hero, benefits, featured products
│   ├── Products.tsx            # Products listing with search & filters
│   ├── ProductDetail.tsx       # Individual product page
│   ├── About.tsx               # About page with mission & values
│   ├── Distributor.tsx         # Business opportunity page
│   ├── Contact.tsx             # Contact page with form
│   ├── Cart.tsx                # Shopping cart page
│   └── NotFound.tsx            # 404 error page
│
├── context/
│   └── CartContext.tsx         # Global cart state management
│
├── data/
│   └── products.ts             # Product data & helper functions
│
├── routes.tsx                  # React Router configuration
└── App.tsx                     # Main app component

/src/styles/
├── theme.css                   # Color theme (green wellness palette)
└── tailwind.css                # Tailwind imports & custom styles
```

## 🎨 Design System

### Color Palette
- **Primary Green**: `#10b981` (Emerald)
- **Secondary**: `#f0fdf4` (Light green background)
- **Accent**: `#dcfce7` (Green accent)
- **Text**: Gray scale for optimal readability

### Typography
- Clean, modern sans-serif fonts
- Responsive font sizes
- Proper hierarchy with h1-h4 tags

### Components
- Smooth animations with Framer Motion
- Responsive mobile-first design
- Reusable component architecture

## 🛍️ Adding New Products

Edit `/src/app/data/products.ts`:

```typescript
{
  id: "9",
  name: "New Product Name",
  slug: "new-product-name",
  category: "Detox & Cleansing", // Must match existing category
  price: 50000,
  currency: "FCFA",
  image: "https://...",
  images: ["https://...", "https://..."],
  description: "Full description...",
  shortDescription: "Brief description...",
  benefits: ["Benefit 1", "Benefit 2"],
  ingredients: ["Ingredient 1", "Ingredient 2"],
  howToUse: "Usage instructions...",
  featured: true, // Show on homepage
  inStock: true
}
```

## 🎯 Key Features

### 1. **Product Management**
- Clean data structure in `/src/app/data/products.ts`
- Easy to add/edit products
- Category filtering
- Search functionality

### 2. **Shopping Cart**
- Global state with React Context
- Add/remove/update quantities
- Persistent cart items
- WhatsApp checkout integration

### 3. **Navigation**
- React Router for multi-page navigation
- Smooth transitions
- Active link highlighting
- Mobile-responsive menu

### 4. **Animations**
- Framer Motion for smooth animations
- Scroll-triggered animations
- Hover effects
- Loading states

### 5. **Contact Integration**
- WhatsApp floating button
- Contact form
- Multiple contact methods
- Newsletter subscription

## 🚀 Pages

### Home (`/`)
- Hero section with CTA
- Benefits showcase
- Featured products
- Testimonials
- Newsletter signup

### Products (`/products`)
- Grid layout
- Category filters
- Search functionality
- Product cards

### Product Detail (`/product/:slug`)
- Image gallery
- Full description
- Benefits & ingredients
- Add to cart
- Related products

### About (`/about`)
- Mission & values
- Company stats
- Quality certifications

### Distributor (`/distributor`)
- Business opportunity
- Benefits of joining
- Packages & pricing
- Success stories

### Contact (`/contact`)
- Contact form
- Contact information
- Opening hours
- WhatsApp integration

### Cart (`/cart`)
- Cart items list
- Quantity management
- Order summary
- WhatsApp checkout

## 🔧 Customization

### Update Colors
Edit `/src/styles/theme.css`:
```css
:root {
  --primary: #10b981;  /* Change primary color */
  --secondary: #f0fdf4; /* Change secondary color */
  /* ... */
}
```

### Update Contact Info
Edit contact details in:
- `/src/app/components/Footer.tsx`
- `/src/app/components/WhatsAppButton.tsx`
- `/src/app/pages/Contact.tsx`

### Update WhatsApp Number
Search for `221771234567` and replace with your number

## 📱 Responsive Design

- Mobile-first approach
- Breakpoints: sm (640px), md (768px), lg (1024px), xl (1280px)
- Touch-friendly UI elements
- Optimized for all devices

## 🌟 Technologies Used

- **React 18** - UI library
- **TypeScript** - Type safety
- **React Router** - Navigation
- **Tailwind CSS v4** - Styling
- **Framer Motion** - Animations
- **Lucide React** - Icons
- **Sonner** - Toast notifications

## 📞 Support

For questions or support:
- Email: contact@edmarksenegal.com
- WhatsApp: +221 77 123 45 67

---

Built with ❤️ for Edmark Senegal
