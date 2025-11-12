import { getProducts, getCollections, getReviews, calculateAverageRating } from '@/lib/cosmic'
import DashboardStats from '@/components/DashboardStats'
import { Product, Collection, Review } from '@/types'

export const dynamic = 'force-dynamic'

export default async function DashboardPage() {
  const products = await getProducts() as Product[]
  const collections = await getCollections() as Collection[]
  const reviews = await getReviews() as Review[]
  
  const stats = {
    totalProducts: products.length,
    totalCollections: collections.length,
    totalReviews: reviews.length,
    averageRating: calculateAverageRating(reviews),
  }

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
        <p className="text-gray-600 mt-2">Welcome to your e-commerce dashboard</p>
      </div>
      
      <DashboardStats stats={stats} />
      
      <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-semibold mb-4">Recent Products</h2>
          <div className="space-y-3">
            {products.slice(0, 5).map((product) => (
              <div key={product.id} className="flex items-center gap-3 p-3 hover:bg-gray-50 rounded-lg transition-colors">
                {product.metadata?.product_images?.[0] && (
                  <img
                    src={`${product.metadata.product_images[0].imgix_url}?w=80&h=80&fit=crop&auto=format,compress`}
                    alt={product.title}
                    className="w-12 h-12 rounded-lg object-cover"
                  />
                )}
                <div className="flex-1">
                  <p className="font-medium text-gray-900">{product.title}</p>
                  <p className="text-sm text-gray-600">${product.metadata?.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-semibold mb-4">Recent Reviews</h2>
          <div className="space-y-3">
            {reviews.slice(0, 5).map((review) => (
              <div key={review.id} className="p-3 hover:bg-gray-50 rounded-lg transition-colors">
                <div className="flex items-center justify-between mb-2">
                  <p className="font-medium text-gray-900">{review.metadata?.reviewer_name}</p>
                  <div className="flex items-center gap-1">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <span
                        key={i}
                        className={i < parseInt(review.metadata?.rating?.key || '0') ? 'text-yellow-400' : 'text-gray-300'}
                      >
                        ★
                      </span>
                    ))}
                  </div>
                </div>
                <p className="text-sm text-gray-600 line-clamp-2">{review.metadata?.review_text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}