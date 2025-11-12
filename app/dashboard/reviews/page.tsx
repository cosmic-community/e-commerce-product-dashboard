import { getReviews } from '@/lib/cosmic'
import ReviewList from '@/components/ReviewList'
import { Review } from '@/types'

export const dynamic = 'force-dynamic'

export default async function ReviewsPage() {
  const reviews = await getReviews() as Review[]

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Reviews</h1>
        <p className="text-gray-600 mt-2">Manage customer reviews and ratings</p>
      </div>
      
      <ReviewList reviews={reviews} />
    </div>
  )
}