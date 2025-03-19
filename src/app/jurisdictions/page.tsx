import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowLeft } from 'lucide-react'

export default function JurisdictionsPage() {
  // List of all jurisdictions (same as in the dropdown)
  const jurisdictions = [
    'Bahamas',
    'British Virgin Islands',
    'Brunei',
    'Cayman Islands',
    'Costa Rica',
    'Hong Kong',
    'Isle of Man',
    'Jersey',
    'Marshal Islands',
    'Monaco',
    'Nevis',
    'Panama',
    'Singapore',
    'UAE',
    'UK LLP'
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex items-center">
            <Link href="/" className="text-gray-600 hover:text-red-600 mr-4">
              <ArrowLeft className="h-5 w-5" />
            </Link>
            <h1 className="text-3xl font-bold text-gray-900">
              All Jurisdictions
            </h1>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {jurisdictions.map((jurisdiction) => {
            // Create a URL-friendly version of the jurisdiction name
            const slug = jurisdiction.toLowerCase().replace(/\s+/g, '-')
            
            return (
              <Link 
                key={jurisdiction}
                href={`/jurisdictions/${slug}`}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="relative h-48">
                  <Image
                    src={`https://source.unsplash.com/800x600/?${jurisdiction.toLowerCase()},landscape`}
                    alt={`${jurisdiction} Landscape`}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                    <div className="p-4">
                      <h2 className="text-xl font-bold text-white">
                        {jurisdiction}
                      </h2>
                    </div>
                  </div>
                </div>
                <div className="p-4">
                  <p className="text-gray-700 text-sm">
                    Explore company formation options and benefits in {jurisdiction}.
                  </p>
                  <div className="mt-4 text-red-600 font-medium text-sm">
                    Learn more →
                  </div>
                </div>
              </Link>
            )
          })}
        </div>
      </main>
    </div>
  )
}
