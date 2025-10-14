'use client'

import { useSearchParams } from 'next/navigation'
import { Suspense } from 'react'

function SearchResults() {
  const searchParams = useSearchParams()
  const query = searchParams.get('q') || ''

  // Mock search results data
  const mockResults = [
    {
      id: 1,
      title: 'Luxury Villa in Sofia',
      location: 'Sofia, Bulgaria',
      price: '€450,000',
      bedrooms: 4,
      bathrooms: 3,
      area: '250m²',
      image: '/images/property-search-1.jpg'
    },
    {
      id: 2,
      title: 'Modern Apartment in Plovdiv',
      location: 'Plovdiv, Bulgaria',
      price: '€180,000',
      bedrooms: 2,
      bathrooms: 2,
      area: '85m²',
      image: '/images/property-search-2.jpg'
    },
    {
      id: 3,
      title: 'Beachfront Property in Varna',
      location: 'Varna, Bulgaria',
      price: '€320,000',
      bedrooms: 3,
      bathrooms: 2,
      area: '140m²',
      image: '/images/property-search-3.jpg'
    }
  ]

  // Filter results based on query (simple mock filtering)
  const filteredResults = query 
    ? mockResults.filter(result => 
        result.title.toLowerCase().includes(query.toLowerCase()) ||
        result.location.toLowerCase().includes(query.toLowerCase())
      )
    : mockResults

  return (
    <div className="search-results-page">
      <div className="search-results-container">
        <div className="search-results-header">
          <h1 className="search-results-title">
            {query ? `Search Results for "${query}"` : 'All Properties'}
          </h1>
          <p className="search-results-count">
            {filteredResults.length} properties found
          </p>
        </div>

        <div className="search-results-grid">
          {filteredResults.map((property) => (
            <div key={property.id} className="search-result-card">
              <div className="search-result-image">
                <img src={property.image} alt={property.title} />
              </div>
              <div className="search-result-content">
                <div className="search-result-header">
                  <h3 className="search-result-title">{property.title}</h3>
                  <p className="search-result-location">{property.location}</p>
                </div>
                <div className="search-result-details">
                  <span className="detail-item">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path d="M2 14h12v-2H2v2zm0-3h12V9H2v2zm0-4h12V5H2v2zm0-4h12V1H2v2z" fill="#299393"/>
                    </svg>
                    {property.bedrooms} bed
                  </span>
                  <span className="detail-item">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path d="M3 1v14h10V1H3zm8 12H5V3h6v10z" fill="#299393"/>
                    </svg>
                    {property.bathrooms} bath
                  </span>
                  <span className="detail-item">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path d="M2 2v12h12V2H2zm10 10H4V4h8v8z" fill="#299393"/>
                    </svg>
                    {property.area}
                  </span>
                </div>
                <div className="search-result-price">{property.price}</div>
              </div>
            </div>
          ))}
        </div>

        {filteredResults.length === 0 && (
          <div className="no-results">
            <h3>No properties found</h3>
            <p>Try adjusting your search criteria or browse all available properties.</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default function SearchPage() {
  return (
    <Suspense fallback={<div>Loading search results...</div>}>
      <SearchResults />
    </Suspense>
  )
}
