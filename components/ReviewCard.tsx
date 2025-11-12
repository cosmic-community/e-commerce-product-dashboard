import { Review } from '@/types'
import { FiCheck } from 'react-icons/fi'

interface ReviewCardProps {
  review: Review
}

export default function ReviewCard({ review }: ReviewCardProps) {
  const rating = parseInt(review.metadata?.rating?.key || '0')
  const product = review.metadata?.product
  const productImage = product?.metadata?.product_images?.[0]
  
  return (
    <div className="bg-white rounded-lg shadow p-6">
      <div className="flex items-start gap-4">
        {productImage && (
          <div className="w-20 h-20 bg-gray-100 rounded-lg overflow-hidden flex-shrink-0">
            <img
              src={`${productImage.imgix_url}?w=160&h=160&fit=crop&auto=format,compress`}
              alt={product.title}
              className="w-full h-full object-cover"
            />
          </div>
        )}
        
        <div className="flex-1">
          <div className="flex items-center justify-between mb-2">
            <div>
              <p className="font-semibold text-gray-900">{review.metadata?.reviewer_name}</p>
              {product && (
                <p className="text-sm text-gray-600">Review for {product.title}</p>
              )}
            </div>
            {review.metadata?.verified_purchase && (
              <div className="flex items-center gap-1 text-green-600 text-sm">
                <FiCheck className="w-4 h-4" />
                Verified Purchase
              </div>
            )}
          </div>
          
          <div className="flex items-center gap-1 mb-3">
            {Array.from({ length: 5 }).map((_, i) => (
              <span
                key={i}
                className={`text-lg ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`}
              >
                ★
              </span>
            ))}
            <span className="text-sm text-gray-600 ml-2">({rating}/5)</span>
          </div>
          
          <p className="text-gray-700">{review.metadata?.review_text}</p>
        </div>
      </div>
    </div>
  )
}