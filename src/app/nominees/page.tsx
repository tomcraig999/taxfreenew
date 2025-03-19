import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowLeft } from 'lucide-react'

export default function NomineesPage() {
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
              Nominee Services
            </h1>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow-md overflow-hidden mb-8">
          <div className="relative h-64">
            <Image
              src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=1920&auto=format&fit=crop"
              alt="Professional Business Meeting"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
              <div className="p-6">
                <h2 className="text-3xl font-bold text-white">
                  Nominee Directors & Shareholders
                </h2>
                <p className="text-gray-200 mt-2">
                  Professional nominee services for offshore company structures
                </p>
              </div>
            </div>
          </div>
          
          <div className="p-6">
            <div className="prose max-w-none">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Nominee Directors</h2>
              
              <p>
                Nominee directors serve as the official, publicly-listed directors of a company while the actual control remains with the beneficial owner through private agreements. This arrangement offers a layer of privacy and confidentiality in jurisdictions where director information is publicly accessible.
              </p>
              
              <p>
                Our professional nominee director service provides individuals with extensive corporate governance experience who act in accordance with the instructions of the beneficial owner. These nominees are carefully selected for their expertise and reliability, ensuring they fulfill all statutory obligations while maintaining the highest standards of confidentiality.
              </p>
              
              <p>
                The relationship between the nominee director and the beneficial owner is governed by a comprehensive set of agreements, including a Director's Service Agreement and a General Power of Attorney. These documents establish the nominee's duties and limitations while protecting the beneficial owner's interests and control over company operations.
              </p>
              
              <p>
                Utilizing nominee directors can be particularly advantageous for international business structures, offering enhanced privacy, reduced personal liability, and simplified compliance with local residency requirements in certain jurisdictions. Our nominees are well-versed in corporate governance requirements across multiple jurisdictions, ensuring your company remains in good standing while you maintain effective control.
              </p>
              
              <p>
                All nominee arrangements are established with strict confidentiality protocols and clear contractual frameworks to protect all parties involved while ensuring legal compliance and operational efficiency.
              </p>
              
              <div className="my-8 border-t border-gray-200"></div>
              
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Nominee Shareholders</h2>
              
              <p>
                Nominee shareholders hold shares in a company on behalf of the beneficial owner, whose identity remains private in jurisdictions where shareholder information is publicly available. This arrangement creates a legal separation between public records and actual ownership while maintaining the beneficial owner's economic rights to the company.
              </p>
              
              <p>
                Our nominee shareholder service provides professional individuals or corporate entities who act as the registered shareholders of your company. The relationship is secured through legally binding agreements, including a Declaration of Trust and a Stock Transfer Form signed in blank, which protect the beneficial owner's interests and facilitate the transfer of shares when required.
              </p>
              
              <p>
                The nominee shareholder has no actual rights to company profits or decision-making authority. All dividends, voting rights, and other shareholder benefits remain with the beneficial owner through contractual arrangements. This structure offers privacy advantages while ensuring the beneficial owner retains full economic control of the company.
              </p>
              
              <p>
                Utilizing nominee shareholders can be particularly valuable for international business structures, offering enhanced confidentiality, asset protection, and flexibility in corporate structuring. Our nominees understand the importance of discretion and reliability in fulfilling their role while adhering to all legal and regulatory requirements.
              </p>
              
              <p>
                All nominee shareholder arrangements include comprehensive legal safeguards to protect the beneficial owner's interests while ensuring compliance with relevant laws and regulations in the jurisdiction of incorporation.
              </p>
            </div>
            
            <div className="mt-8 bg-gray-50 p-6 rounded-lg border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Important Considerations</h3>
              <ul className="list-disc pl-5 space-y-2 text-gray-700">
                <li>Nominee arrangements must comply with all applicable laws and regulations</li>
                <li>Proper documentation is essential to protect the beneficial owner's interests</li>
                <li>Regular communication with nominees ensures smooth company operations</li>
                <li>Nominees must fulfill statutory obligations to maintain company good standing</li>
                <li>Confidentiality agreements protect sensitive information</li>
              </ul>
            </div>
            
            <div className="mt-8">
              <Link 
                href="/contact"
                className="inline-block bg-red-600 text-white px-6 py-3 rounded-md hover:bg-red-700 transition-colors"
              >
                Inquire About Nominee Services
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
