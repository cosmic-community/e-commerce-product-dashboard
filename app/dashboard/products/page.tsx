import { getProducts, getCollections } from '@/lib/cosmic'
import ProductList from '@/components/ProductList'
import { Product, Collection } from '@/types'
import Link from 'next/link'
import { FiPlus } from 'react-icons/fi'

export const dynamic = 'force-dynamic'

export default async function ProductsPage() {
  const products = await getProducts() as Product[]
  const collections = await getCollections() as Collection[]

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Products</h1>
          <p className="text-gray-600 mt-2">Manage your product catalog</p>
        </div>
        <Link
          href="/dashboard/products/new"
          className="flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2 rounded-lg hover:bg-primary/90 transition-colors"
        >
          <FiPlus className="w-5 h-5" />
          Add Product
        </Link>
      </div>
      
      <ProductList products={products} collections={collections} />
    </div>
  )
}