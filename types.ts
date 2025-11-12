// Base Cosmic object interface
export interface CosmicObject {
  id: string;
  slug: string;
  title: string;
  content?: string;
  metadata: Record<string, any>;
  type: string;
  created_at: string;
  modified_at: string;
  thumbnail?: string;
}

// Product interface
export interface Product extends CosmicObject {
  type: 'products';
  metadata: {
    product_name: string;
    description: string;
    price: number;
    product_images?: {
      url: string;
      imgix_url: string;
    }[];
    in_stock?: boolean;
    sku?: string;
    collections?: Collection[];
  };
}

// Collection interface
export interface Collection extends CosmicObject {
  type: 'collections';
  metadata: {
    collection_name: string;
    description?: string;
    featured_image?: {
      url: string;
      imgix_url: string;
    };
  };
}

// Review interface
export interface Review extends CosmicObject {
  type: 'reviews';
  metadata: {
    product?: Product;
    rating: {
      key: string;
      value: string;
    };
    review_text: string;
    reviewer_name: string;
    verified_purchase?: boolean;
  };
}

// Rating type
export type RatingKey = '1' | '2' | '3' | '4' | '5';

// API response type
export interface CosmicResponse<T> {
  objects: T[];
  total: number;
}

// Dashboard stats type
export interface DashboardStats {
  totalProducts: number;
  totalCollections: number;
  totalReviews: number;
  averageRating: number;
}

// Form data types
export interface ProductFormData {
  title: string;
  product_name: string;
  description: string;
  price: number;
  sku: string;
  in_stock: boolean;
  collections: string[];
}

export interface CollectionFormData {
  title: string;
  collection_name: string;
  description: string;
}