import { createBucketClient } from '@cosmicjs/sdk'

export const cosmic = createBucketClient({
  bucketSlug: process.env.COSMIC_BUCKET_SLUG as string,
  readKey: process.env.COSMIC_READ_KEY as string,
  writeKey: process.env.COSMIC_WRITE_KEY as string,
})

// Simple error helper for Cosmic SDK
function hasStatus(error: unknown): error is { status: number } {
  return typeof error === 'object' && error !== null && 'status' in error;
}

// Fetch all products
export async function getProducts() {
  try {
    const response = await cosmic.objects
      .find({ type: 'products' })
      .props(['id', 'title', 'slug', 'metadata', 'thumbnail'])
      .depth(1)
    
    return response.objects;
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return [];
    }
    throw new Error('Failed to fetch products');
  }
}

// Fetch single product
export async function getProduct(id: string) {
  try {
    const response = await cosmic.objects
      .findOne({
        id,
        type: 'products'
      })
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(1)
    
    return response.object;
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return null;
    }
    throw error;
  }
}

// Fetch all collections
export async function getCollections() {
  try {
    const response = await cosmic.objects
      .find({ type: 'collections' })
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(0)
    
    return response.objects;
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return [];
    }
    throw new Error('Failed to fetch collections');
  }
}

// Fetch all reviews
export async function getReviews() {
  try {
    const response = await cosmic.objects
      .find({ type: 'reviews' })
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(1)
    
    return response.objects;
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return [];
    }
    throw new Error('Failed to fetch reviews');
  }
}

// Calculate average rating from reviews
export function calculateAverageRating(reviews: any[]): number {
  if (!reviews || reviews.length === 0) return 0;
  
  const total = reviews.reduce((sum, review) => {
    const rating = parseInt(review.metadata?.rating?.key || '0');
    return sum + rating;
  }, 0);
  
  return Math.round((total / reviews.length) * 10) / 10;
}