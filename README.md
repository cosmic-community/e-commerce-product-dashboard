# E-Commerce Product Dashboard

![App Preview](https://imgix.cosmicjs.com/19d5ac50-bfa8-11f0-acb4-9d8445b3489b-photo-1505740420928-5e560c06d30e-1762938905859.jpg?w=1200&h=300&fit=crop&auto=format,compress)

A comprehensive React dashboard for managing your e-commerce products, collections, and customer reviews. Built with Next.js 16, TypeScript, and Tailwind CSS, this dashboard provides a beautiful and intuitive interface for all your content management needs.

## ✨ Features

- 📦 **Product Management**: Create, read, update, and delete products with image galleries
- 🏷️ **Collection Organization**: Manage product collections and categorization
- ⭐ **Review System**: View and manage customer reviews with ratings
- 📊 **Dashboard Analytics**: Quick overview of your store statistics
- 🎨 **Modern UI**: Clean, responsive design with dark sidebar navigation
- 🔄 **Real-time Sync**: Instant updates with Cosmic CMS
- 📱 **Mobile Responsive**: Works perfectly on all screen sizes
- 🎯 **TypeScript**: Full type safety throughout the application

## 🚀 Clone this Project

## Clone this Project

Want to create your own version of this project with all the content and structure? Clone this Cosmic bucket and code repository to get started instantly:

[![Clone this Project](https://img.shields.io/badge/Clone%20this%20Project-29abe2?style=for-the-badge&logo=cosmic&logoColor=white)](https://app.cosmicjs.com/projects/new?clone_bucket=69144fa6e7349beda29195a9&clone_repository=6914520ae7349beda29195eb)

## 📋 Prompts

This application was built using the following prompts to generate the content structure and code:

### Content Model Prompt

> "Design a content model for an e-commerce store with products, collections, and customer reviews"

### Code Generation Prompt

> "Create a React dashboard that displays and manages my existing content"

The app has been tailored to work with your existing Cosmic content structure and includes all the features requested above.

## 🛠️ Technologies Used

- **Next.js 16** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first styling
- **Cosmic SDK** - Headless CMS integration
- **React Icons** - Icon library
- **Bun** - Fast JavaScript runtime and package manager

## 📋 Getting Started

### Prerequisites

- Node.js 18+ or Bun installed
- A Cosmic account with the provided bucket

### Installation

1. Clone this repository
2. Install dependencies:

```bash
bun install
```

3. Create a `.env.local` file in the root directory:

```env
COSMIC_BUCKET_SLUG=your-bucket-slug
COSMIC_READ_KEY=your-read-key
COSMIC_WRITE_KEY=your-write-key
```

4. Run the development server:

```bash
bun run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

## 🎯 Cosmic SDK Examples

### Fetching Products

```typescript
import { cosmic } from '@/lib/cosmic'

const { objects: products } = await cosmic.objects
  .find({ type: 'products' })
  .props(['id', 'title', 'slug', 'metadata'])
  .depth(1)
```

### Creating a Product

```typescript
await cosmic.objects.insertOne({
  title: 'New Product',
  type: 'products',
  metadata: {
    product_name: 'New Product',
    description: '<p>Product description</p>',
    price: 99.99,
    in_stock: true,
    sku: 'PROD-001',
    collections: ['collection-id']
  }
})
```

### Updating a Product

```typescript
await cosmic.objects.updateOne('product-id', {
  metadata: {
    price: 89.99,
    in_stock: false
  }
})
```

## 🌐 Cosmic CMS Integration

This dashboard integrates with three main content types in your Cosmic bucket:

- **Products**: Your product catalog with images, pricing, and inventory
- **Collections**: Product categorization and organization
- **Reviews**: Customer feedback with ratings and verification

All content is managed through the Cosmic SDK with real-time synchronization between your dashboard and the CMS.

## 🚀 Deployment

### Deploy to Vercel

1. Push your code to GitHub
2. Import your repository in Vercel
3. Add your environment variables
4. Deploy!

### Deploy to Netlify

1. Push your code to GitHub
2. Import your repository in Netlify
3. Add your environment variables
4. Deploy!

## 📝 Environment Variables

Make sure to set these environment variables in your hosting platform:

- `COSMIC_BUCKET_SLUG` - Your Cosmic bucket slug
- `COSMIC_READ_KEY` - Your Cosmic read key
- `COSMIC_WRITE_KEY` - Your Cosmic write key

<!-- README_END -->