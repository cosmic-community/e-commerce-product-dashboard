'use client'

import { Product, Collection } from '@/types'
import ProductCard from '@/components/ProductCard'

interface ProductListProps {
  products: Product[]
  collections: Collection[]
}

export default function ProductList({ products, collections }: ProductListProps) {
  if (!products || products.length === 0) {
    return (
      <div className="text-center py-12 bg-white rounded-lg shadow">
        <p className="text-gray-600">No products found. Create your first product to get started!</p>
      </div>
    )
  }
  
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  )
}