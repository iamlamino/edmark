# 🛠️ Configuration Guide - Edmark Senegal

## Quick Setup Checklist

### 1. Update Contact Information

#### WhatsApp Number
Replace `221771234567` with your actual WhatsApp number in:
- `/src/app/components/WhatsAppButton.tsx` (line 6)
- `/src/app/pages/Contact.tsx` (multiple locations)
- `/src/app/pages/Cart.tsx` (line 19)

#### Email Addresses
Update in:
- `/src/app/components/Footer.tsx`
- `/src/app/pages/Contact.tsx`

#### Physical Address
Update in:
- `/src/app/components/Footer.tsx`
- `/src/app/pages/Contact.tsx`

### 2. Add Your Products

Edit `/src/app/data/products.ts`:

**Step 1:** Create your product object:
```typescript
{
  id: "unique-id",
  name: "Product Name",
  slug: "product-name", // lowercase, hyphens
  category: "Detox & Cleansing", // use existing category
  price: 45000, // in FCFA
  currency: "FCFA",
  image: "main-image-url",
  images: ["image-1-url", "image-2-url"],
  description: "Full description in French",
  shortDescription: "Brief description",
  benefits: [
    "Benefit 1",
    "Benefit 2",
  ],
  ingredients: [
    "Ingredient 1",
    "Ingredient 2",
  ],
  howToUse: "Instructions",
  featured: true, // Shows on homepage
  inStock: true
}
```

**Step 2:** Add to the `products` array in the same file

### 3. Update Product Images

**Option 1: Use Unsplash (free stock photos)**
- Go to https://unsplash.com
- Search for relevant images
- Copy image URL (append `?w=800&q=80` for optimization)

**Option 2: Use your own images**
- Host images on your server
- Update URLs in product data

### 4. Customize Brand Colors (Optional)

Edit `/src/styles/theme.css`:

```css
:root {
  --primary: #10b981;        /* Main green color */
  --secondary: #f0fdf4;      /* Light background */
  --accent: #dcfce7;         /* Accent color */
}
```

### 5. Update Company Information

#### About Page
Edit `/src/app/pages/About.tsx`:
- Mission statement
- Company history
- Values
- Statistics

#### Footer
Edit `/src/app/components/Footer.tsx`:
- Company description
- Social media links

### 6. Configure Social Media Links

Update in `/src/app/components/Footer.tsx`:
```typescript
<a href="https://facebook.com/your-page">
<a href="https://instagram.com/your-page">
<a href="https://twitter.com/your-page">
```

### 7. Customize Testimonials

Edit `/src/app/pages/Home.tsx` (search for "testimonials"):
```typescript
{
  name: "Client Name",
  location: "City",
  rating: 5,
  text: "Testimonial text",
  image: "client-photo-url",
}
```

### 8. Update Business Packages

Edit `/src/app/pages/Distributor.tsx`:
```typescript
{
  name: "Package Name",
  price: "75,000",
  features: [
    "Feature 1",
    "Feature 2",
  ],
  popular: true, // Highlights this package
}
```

## 🎨 Branding Checklist

- [ ] Update logo/brand name in Header
- [ ] Replace placeholder images with real products
- [ ] Update all contact information
- [ ] Configure social media links
- [ ] Customize color scheme (optional)
- [ ] Add real testimonials
- [ ] Update distributor packages
- [ ] Set correct WhatsApp number
- [ ] Update opening hours
- [ ] Add newsletter integration (if needed)

## 📝 Content Checklist

- [ ] Product descriptions in French
- [ ] Accurate prices in FCFA
- [ ] Product benefits and ingredients
- [ ] Usage instructions
- [ ] About page content
- [ ] Distributor opportunity details
- [ ] Contact information
- [ ] Terms and conditions (if needed)

## 🚀 Going Live

1. **Test all pages**
   - Navigate through all pages
   - Test cart functionality
   - Verify WhatsApp links
   - Check mobile responsiveness

2. **Update Products**
   - Add all your products
   - Upload quality images
   - Write compelling descriptions

3. **Configure Analytics** (optional)
   - Add Google Analytics
   - Set up conversion tracking

4. **SEO Optimization** (optional)
   - Add meta descriptions
   - Optimize images
   - Add structured data

## 🆘 Common Tasks

### Add a New Category
1. Open `/src/app/data/products.ts`
2. Add category to `categories` array
3. Use new category in products

### Change WhatsApp Message Format
Edit `/src/app/pages/Cart.tsx` (line 17-19):
```typescript
const message = `Your custom message format`;
```

### Update Featured Products
In `/src/app/data/products.ts`, set `featured: true` for products you want on homepage

### Modify Homepage Sections
Edit `/src/app/pages/Home.tsx`:
- Hero text
- Benefits
- Testimonials
- CTA buttons

## 📞 Need Help?

- Check the PROJECT_STRUCTURE.md file
- Review component files for inline comments
- Consult React Router documentation
- Tailwind CSS documentation

---

Happy selling! 🌿
