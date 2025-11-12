'use client'

import { Review } from '@/types'
import ReviewCard from '@/components/ReviewCard'

interface ReviewListProps {
  reviews: Review[]
}

export default function ReviewList({ reviews }: ReviewListProps) {
  if (!reviews || reviews.length === 0) {
    return (
      <div className="text-center py-12 bg-white rounded-lg shadow">
        <p className="text-gray-600">No reviews yet. Reviews will appear here once customers start reviewing products!</p>
      </div>
    )
  }
  
  return (
    <div className="space-y-6">
      {reviews.map((review) => (
        <ReviewCard key={review.id} review={review} />
      ))}
    </div>
  )
}