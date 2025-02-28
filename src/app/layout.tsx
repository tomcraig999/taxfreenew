'use client'

import React from 'react'
import { Inter } from 'next/font/google'
import './globals.css'
import { Bell, Globe, User } from 'lucide-react'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* Top Header */}
        <header className="bg-gray-100 py-2">
          <div className="max-w-7xl mx-auto px-4 flex justify-between items-center text-sm">
            <div className="flex items-center space-x-4">
              <span>Customer Service: +1 234 567 8900</span>
              <div className="flex items-center space-x-2">
                <Globe className="h-4 w-4" />
                <span>Global</span>
              </div>
              <span>English</span>
              <span>USD</span>
            </div>
            <div className="flex items-center space-x-4">
              <button className="flex items-center space-x-1">
                <Bell className="h-4 w-4" />
                <span>Notifications</span>
              </button>
              <button className="flex items-center space-x-1">
                <User className="h-4 w-4" />
                <span>Account</span>
              </button>
            </div>
          </div>
        </header>

        {/* Main Navigation */}
        <nav className="bg-white shadow-md">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex justify-between items-center h-16">
              <div className="flex items-center space-x-8">
                <Link href="/" className="font-bold text-xl">
                  <span className="text-blue-600">tax</span>
                  <span className="text-green-600">free</span>
                  <span className="text-red-600">companies</span>
                  <span className="text-gray-700">™</span>
                </Link>
                <div className="hidden md:flex items-center space-x-6">
                  <Link href="/company-formation" className="text-gray-700 hover:text-red-600">Company Formation</Link>
                  <Link href="/account-opening" className="text-gray-700 hover:text-red-600">Bank Accounts</Link>
                  <Link href="/services" className="text-gray-700 hover:text-red-600">All Services</Link>
                  <Link href="/ibc-club" className="hover:text-red-600">
                    <span className="text-blue-600">tax</span>
                    <span className="text-green-600">free</span>
                    <span className="text-red-600">companies</span>
                    <span className="text-gray-700"> Club™</span>
                  </Link>
                  <Link href="/digital-app" className="text-gray-700 hover:text-red-600">Digital App</Link>
                </div>
              </div>
              <button className="bg-red-600 text-white px-6 py-2 rounded-md hover:bg-red-700">
                Set Up Now
              </button>
            </div>
          </div>
        </nav>

        {/* Secondary Navigation */}
        <nav className="bg-gray-50 border-b">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex items-center space-x-6 h-12 text-sm">
              <Link href="/featured" className="text-gray-600 hover:text-red-600">Featured</Link>
              <Link href="/jurisdictions" className="text-gray-600 hover:text-red-600">Jurisdictions</Link>
              <Link href="/setup" className="text-gray-600 hover:text-red-600">How To Set Up</Link>
              <Link href="/fees" className="text-gray-600 hover:text-red-600">Fees</Link>
              <Link href="/nominee" className="text-gray-600 hover:text-red-600">Nominee</Link>
              <Link href="/change-agent" className="text-gray-600 hover:text-red-600">Change Agent</Link>
              <Link href="/renewal" className="text-gray-600 hover:text-red-600">Company Renewal</Link>
              <Link href="/faqs" className="text-gray-600 hover:text-red-600">FAQs</Link>
              <Link href="/downloads" className="text-gray-600 hover:text-red-600">Download & Form</Link>
            </div>
          </div>
        </nav>

        <main className="min-h-screen">
          {children}
        </main>

        {/* Footer */}
        <footer className="bg-gray-800 text-white py-12">
          <div className="max-w-7xl mx-auto px-4">
            {/* Language and Global Selection */}
            <div className="flex justify-start space-x-12 mb-10">
              <div className="flex items-center space-x-2">
                <Globe className="h-6 w-6 text-red-500" />
                <span className="text-white">Global</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-red-500">A</span>
                <span className="text-white">English</span>
              </div>
            </div>
            
            {/* Footer Links */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">
              {/* Column 1 */}
              <div>
                <h3 className="text-lg font-semibold mb-4">About Us</h3>
                <ul className="space-y-3">
                  <li><Link href="/terms" className="hover:text-red-400">Universal Terms Of Service</Link></li>
                  <li><Link href="/legal-agreements" className="hover:text-red-400">Legal Agreements</Link></li>
                  <li><Link href="/privacy" className="hover:text-red-400">Privacy Policy</Link></li>
                  <li><Link href="/dsa" className="hover:text-red-400">Digital Service Act-DSA (EU)</Link></li>
                  <li><Link href="/cookie" className="hover:text-red-400">Cookie Policy</Link></li>
                </ul>
              </div>
              
              {/* Column 2 */}
              <div>
                <h3 className="text-lg font-semibold mb-4">Payment Guidelines</h3>
                <ul className="space-y-3">
                  <li><Link href="/high-risk" className="hover:text-red-400">High-Risk Jurisdiction &</Link></li>
                  <li><Link href="/increased-monitoring" className="hover:text-red-400">Jurisdictions under Increased Monitoring</Link></li>
                  <li><Link href="/safeguard" className="hover:text-red-400">taxfreecompanies Safeguard</Link></li>
                  <li><Link href="/disclaimer" className="hover:text-red-400">Legal Disclaimer</Link></li>
                </ul>
              </div>
              
              {/* Column 3 */}
              <div>
                <h3 className="text-lg font-semibold mb-4">Download Documents</h3>
                <ul className="space-y-3">
                  <li><Link href="/shelf-companies" className="hover:text-red-400">Shelf Companies</Link></li>
                  <li><Link href="/countries" className="hover:text-red-400">Countries / Jurisdictions</Link></li>
                  <li><Link href="/glossary" className="hover:text-red-400">Glossary</Link></li>
                </ul>
              </div>
              
              {/* Column 4 */}
              <div>
                <h3 className="text-lg font-semibold mb-4">Make Payment</h3>
                <ul className="space-y-3">
                  <li><Link href="/structure" className="hover:text-red-400">taxfreecompanies Structure</Link></li>
                  <li><Link href="/faqs" className="hover:text-red-400">FAQs</Link></li>
                </ul>
              </div>
            </div>
            
            {/* Social Network */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Social Network</h3>
              <div className="flex space-x-4">
                <Link href="#" className="bg-blue-600 p-2 rounded-md hover:bg-blue-700">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                  </svg>
                </Link>
                <Link href="#" className="bg-red-600 p-2 rounded-md hover:bg-red-700">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z" clipRule="evenodd" />
                  </svg>
                </Link>
                <Link href="#" className="bg-blue-500 p-2 rounded-md hover:bg-blue-600">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </Link>
                <Link href="#" className="bg-pink-600 p-2 rounded-md hover:bg-pink-700">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                  </svg>
                </Link>
                <Link href="#" className="bg-blue-400 p-2 rounded-md hover:bg-blue-500">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </Link>
                <Link href="#" className="bg-black p-2 rounded-md hover:bg-gray-900">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M12.53.02C13.84 0 15.14.01 16.44.02c1.3 0 2.61.01 3.91.02.82.01 1.63.04 2.44.11.56.05 1.1.14 1.63.28.53.14 1.03.33 1.51.57.48.24.92.54 1.33.89.41.34.77.74 1.09 1.17.32.42.59.87.81 1.33.22.47.39.95.5 1.44.12.49.19.99.24 1.48.06.64.09 1.29.1 1.94.01.65.01 1.29.01 1.94v4.5c0 1.52-.01 3.05-.02 4.57-.01.51-.04 1.02-.08 1.53-.04.51-.1 1.01-.19 1.51-.09.49-.21.97-.36 1.44-.15.46-.34.9-.57 1.33-.23.42-.49.82-.79 1.17-.3.35-.63.67-.99.94-.36.28-.75.51-1.15.7-.4.19-.82.34-1.25.44-.42.1-.85.16-1.28.2-.59.05-1.19.07-1.79.08C18.73 24 17.1 24 15.47 24h-3.92c-1.63 0-3.26 0-4.9-.01-.57 0-1.13-.02-1.7-.05-.56-.03-1.12-.09-1.67-.17-.55-.08-1.09-.19-1.61-.34-.52-.15-1.03-.34-1.51-.57-.48-.23-.93-.51-1.35-.83-.42-.32-.8-.68-1.14-1.07-.34-.39-.64-.82-.89-1.26-.25-.45-.47-.92-.65-1.4-.18-.48-.33-.98-.44-1.48-.11-.5-.2-1.01-.26-1.52-.06-.51-.09-1.02-.11-1.54-.02-.67-.03-1.35-.03-2.02V9.96c0-1.35.01-2.7.03-4.05.01-.52.04-1.04.08-1.55.04-.52.11-1.03.2-1.53.09-.5.21-.99.37-1.46.16-.47.35-.92.59-1.34.24-.42.51-.82.82-1.17.31-.35.65-.66 1.02-.93.37-.26.77-.48 1.19-.66.42-.17.85-.3 1.3-.4.44-.09.89-.15 1.35-.18.65-.05 1.3-.08 1.96-.08 1.3-.01 2.61-.02 3.91-.02M15.2 4.4c-.15-.35-.36-.67-.64-.93-.28-.26-.6-.46-.95-.6-.35-.14-.73-.21-1.1-.21-.37 0-.74.07-1.09.21-.35.14-.67.34-.95.6-.28.26-.5.58-.64.93-.15.35-.22.72-.22 1.1 0 .38.07.75.22 1.1.14.35.36.67.64.93.28.26.6.46.95.6.35.14.72.21 1.09.21.37 0 .75-.07 1.1-.21.35-.14.67-.34.95-.6.28-.26.49-.58.64-.93.15-.35.22-.72.22-1.1 0-.38-.07-.75-.22-1.1M19.58 8.6c-.2-.99-.49-1.95-.87-2.89-.38-.93-.85-1.83-1.4-2.67-.55-.84-1.17-1.64-1.86-2.37-.69-.73-1.44-1.4-2.25-2.01-.81-.61-1.67-1.16-2.58-1.63-.91-.47-1.86-.88-2.84-1.2-.98-.33-1.99-.58-3.02-.75C3.74-5.08 2.69-5.16 1.64-5.16v8.32H8.6v16.8h16.8V8.6h-5.82z" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  )
}
