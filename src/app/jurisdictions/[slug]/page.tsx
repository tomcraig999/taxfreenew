import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowLeft } from 'lucide-react'

// Generate static params for all jurisdictions
export function generateStaticParams() {
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
  
  return jurisdictions.map(jurisdiction => ({
    slug: jurisdiction.toLowerCase().replace(/\s+/g, '-')
  }))
}

// This is a dynamic page that will be rendered for each jurisdiction
export default function JurisdictionPage({ params }: { params: { slug: string } }) {
  // Get the jurisdiction name from the slug
  const jurisdictionName = params.slug
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ')

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
              {jurisdictionName}
            </h1>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="bg-white shadow-md rounded-lg overflow-hidden">
          {/* Hero Section */}
          <div className="relative h-64">
            <Image
              src={`https://source.unsplash.com/1600x900/?${jurisdictionName.toLowerCase()},landscape`}
              alt={`${jurisdictionName} Landscape`}
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
              <div className="p-6">
                <h2 className="text-2xl font-bold text-white">
                  Company Formation in {jurisdictionName}
                </h2>
              </div>
            </div>
          </div>

          {/* Content Sections */}
          <div className="p-6">
            <h3 className="text-xl font-semibold mb-4">Overview</h3>
            <p className="text-gray-700 mb-6">
              {jurisdictionName} offers a robust framework for company formation with various benefits for international businesses. Our comprehensive services guide you through every step of establishing your presence in {jurisdictionName}.
            </p>

            <h3 className="text-xl font-semibold mb-4">Key Benefits</h3>
            <ul className="list-disc pl-5 text-gray-700 mb-6 space-y-2">
              <li>Strategic geographic location</li>
              <li>Favorable tax environment</li>
              <li>Strong legal framework</li>
              <li>Political and economic stability</li>
              <li>Access to international markets</li>
              <li>Efficient incorporation process</li>
            </ul>

            <h3 className="text-xl font-semibold mb-4">Company Types</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div className="border rounded-lg p-4">
                <h4 className="font-semibold mb-2">International Business Company (IBC)</h4>
                <p className="text-gray-700 text-sm">
                  Ideal for international trade and investment with minimal taxation and reporting requirements.
                </p>
              </div>
              <div className="border rounded-lg p-4">
                <h4 className="font-semibold mb-2">Limited Liability Company (LLC)</h4>
                <p className="text-gray-700 text-sm">
                  Combines the benefits of corporate liability protection with partnership flexibility.
                </p>
              </div>
            </div>

            <div className="mt-8">
              <Link 
                href="#" 
                className="bg-red-600 text-white px-6 py-3 rounded-md hover:bg-red-700 inline-block"
              >
                Get Started with {jurisdictionName} Company Formation
              </Link>
            </div>

            {/* Jurisdiction Specific Content */}
            <div className="mt-8 p-6 bg-gray-100 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">About {jurisdictionName}</h3>
              <p className="text-gray-700">
                [This section should be customized with information specific to {jurisdictionName}.]
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
