import { Product } from '@/types'
import Link from 'next/link'

interface ProductCardProps {
  product: Product
}

export default function ProductCard({ product }: ProductCardProps) {
  const firstImage = product.metadata?.product_images?.[0]
  const inStock = product.metadata?.in_stock
  
  return (
    <div className="bg-white rounded-lg shadow hover:shadow-lg transition-shadow">
      {firstImage && (
        <div className="relative h-48 bg-gray-100 rounded-t-lg overflow-hidden">
          <img
            src={`${firstImage.imgix_url}?w=600&h=400&fit=crop&auto=format,compress`}
            alt={product.title}
            className="w-full h-full object-cover"
          />
          {inStock !== undefined && (
            <div className={`absolute top-3 right-3 px-3 py-1 rounded-full text-xs font-medium ${
              inStock ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
            }`}>
              {inStock ? 'In Stock' : 'Out of Stock'}
            </div>
          )}
        </div>
      )}
      
      <div className="p-5">
        <h3 className="text-lg font-semibold text-gray-900 mb-2">{product.title}</h3>
        
        <div className="flex items-center justify-between mb-3">
          <p className="text-2xl font-bold text-primary">${product.metadata?.price}</p>
          {product.metadata?.sku && (
            <p className="text-sm text-gray-600">SKU: {product.metadata.sku}</p>
          )}
        </div>
        
        {product.metadata?.collections && product.metadata.collections.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-3">
            {product.metadata.collections.map((collection: any) => (
              <span
                key={collection.id}
                className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full"
              >
                {collection.title}
              </span>
            ))}
          </div>
        )}
        
        <Link
          href={`/dashboard/products/${product.id}`}
          className="block w-full text-center bg-gray-100 hover:bg-gray-200 text-gray-900 py-2 rounded-lg transition-colors"
        >
          View Details
        </Link>
      </div>
    </div>
  )
}