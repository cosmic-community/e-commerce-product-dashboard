import { Collection } from '@/types'

interface CollectionCardProps {
  collection: Collection
}

export default function CollectionCard({ collection }: CollectionCardProps) {
  const featuredImage = collection.metadata?.featured_image
  
  return (
    <div className="bg-white rounded-lg shadow hover:shadow-lg transition-shadow overflow-hidden">
      {featuredImage && (
        <div className="h-48 bg-gray-100">
          <img
            src={`${featuredImage.imgix_url}?w=600&h=400&fit=crop&auto=format,compress`}
            alt={collection.title}
            className="w-full h-full object-cover"
          />
        </div>
      )}
      
      <div className="p-5">
        <h3 className="text-lg font-semibold text-gray-900 mb-2">{collection.title}</h3>
        
        {collection.metadata?.description && (
          <p className="text-gray-600 text-sm line-clamp-3 mb-4">
            {collection.metadata.description}
          </p>
        )}
        
        <button className="w-full bg-gray-100 hover:bg-gray-200 text-gray-900 py-2 rounded-lg transition-colors">
          View Collection
        </button>
      </div>
    </div>
  )
}