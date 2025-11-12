import { FiShoppingBag, FiFolder, FiStar, FiTrendingUp } from 'react-icons/fi'
import { DashboardStats as StatsType } from '@/types'

interface DashboardStatsProps {
  stats: StatsType
}

export default function DashboardStats({ stats }: DashboardStatsProps) {
  const statCards = [
    {
      label: 'Total Products',
      value: stats.totalProducts,
      icon: FiShoppingBag,
      color: 'bg-blue-500',
    },
    {
      label: 'Collections',
      value: stats.totalCollections,
      icon: FiFolder,
      color: 'bg-purple-500',
    },
    {
      label: 'Total Reviews',
      value: stats.totalReviews,
      icon: FiStar,
      color: 'bg-yellow-500',
    },
    {
      label: 'Average Rating',
      value: stats.averageRating.toFixed(1),
      icon: FiTrendingUp,
      color: 'bg-green-500',
    },
  ]
  
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {statCards.map((stat) => {
        const Icon = stat.icon
        
        return (
          <div key={stat.label} className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 mb-1">{stat.label}</p>
                <p className="text-3xl font-bold text-gray-900">{stat.value}</p>
              </div>
              <div className={`${stat.color} p-3 rounded-lg`}>
                <Icon className="w-6 h-6 text-white" />
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}