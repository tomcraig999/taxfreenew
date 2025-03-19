'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ChevronDown, Search } from 'lucide-react'

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative h-[500px] bg-gradient-to-r from-gray-900 to-gray-800">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1920&auto=format&fit=crop"
            alt="Interconnected Globe Network"
            fill
            className="object-cover opacity-60"
            priority
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 py-20">
          <h1 className="text-5xl font-bold text-white mb-6">
            COMPANY FORMATION
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mb-8">
            Start your global business journey with our comprehensive company formation services. Expert guidance through every step of establishing your offshore presence.
          </p>
          
          {/* Location Selector */}
          <div className="bg-white rounded-lg p-6 max-w-xl">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              Select Your Preferred Jurisdiction
            </h2>
            <div className="relative">
              <div className="w-full bg-gray-50 border border-gray-300 rounded-md px-4 py-3 text-gray-700">
                Choose a location
              </div>
              <div className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-md shadow-lg max-h-60 overflow-auto">
                {[
                  "Bahamas",
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
                ].map((jurisdiction) => {
                  const slug = jurisdiction.toLowerCase().replace(/\s+/g, '-');
                  return (
                    <Link
                      key={jurisdiction}
                      href={`/jurisdictions/${slug}.html`}
                      className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                    >
                      {jurisdiction}
                    </Link>
                  );
                })}
              </div>
            </div>
            <button 
              className="mt-4 w-full bg-red-600 text-white py-3 rounded-md hover:bg-red-700 transition-colors"
              onClick={() => {}}
            >
              Check Available Company Types
            </button>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 border rounded-lg">
              <h3 className="text-xl font-semibold mb-3">Global Presence</h3>
              <p className="text-gray-600">
                Access to multiple jurisdictions worldwide with competitive advantages and tax benefits.
              </p>
            </div>
            <div className="p-6 border rounded-lg">
              <h3 className="text-xl font-semibold mb-3">Expert Support</h3>
              <p className="text-gray-600">
                Dedicated team of professionals to guide you through the entire formation process.
              </p>
            </div>
            <div className="p-6 border rounded-lg">
              <h3 className="text-xl font-semibold mb-3">Fast Processing</h3>
              <p className="text-gray-600">
                Quick and efficient company registration with streamlined procedures.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Chat Widget */}
      <div className="fixed bottom-6 right-6">
        <button 
          className="bg-red-600 text-white p-4 rounded-full shadow-lg hover:bg-red-700"
          onClick={() => {}}
        >
          <Search className="h-6 w-6" />
        </button>
      </div>
    </div>
  )
}
