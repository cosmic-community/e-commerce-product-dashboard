'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { FiHome, FiShoppingBag, FiFolder, FiStar } from 'react-icons/fi'

export default function Sidebar() {
  const pathname = usePathname()
  
  const links = [
    { href: '/dashboard', label: 'Dashboard', icon: FiHome },
    { href: '/dashboard/products', label: 'Products', icon: FiShoppingBag },
    { href: '/dashboard/collections', label: 'Collections', icon: FiFolder },
    { href: '/dashboard/reviews', label: 'Reviews', icon: FiStar },
  ]
  
  return (
    <aside className="w-64 bg-gray-900 text-white">
      <div className="p-6">
        <h2 className="text-2xl font-bold">Store Admin</h2>
      </div>
      
      <nav className="px-4">
        {links.map((link) => {
          const Icon = link.icon
          const isActive = pathname === link.href
          
          return (
            <Link
              key={link.href}
              href={link.href}
              className={`flex items-center gap-3 px-4 py-3 rounded-lg mb-2 transition-colors ${
                isActive
                  ? 'bg-primary text-primary-foreground'
                  : 'text-gray-300 hover:bg-gray-800'
              }`}
            >
              <Icon className="w-5 h-5" />
              {link.label}
            </Link>
          )
        })}
      </nav>
    </aside>
  )
}