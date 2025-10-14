'use client'

import PropertyListings from '../components/PropertyListings'

export default function SearchResultsPage() {
  return (
    <div className="search-results-page">
      <main className="search-results-content">
        <aside className="search-left">
          <div className="search-map-sticky">
            {/* Placeholder map image; replace with real map integration if needed */}
            <img src="/images/placeholder.svg" alt="Map placeholder" className="search-map-image" />

            <div className="search-map-overlay">
              <div className="search-map-cta">
                <h3>Филтриране на резултатите</h3>
                <p>Покажи резултати близо до избран район</p>
                <button className="search-map-btn">Покажи на картата</button>
              </div>
            </div>
          </div>
        </aside>

        <section className="search-right">
          {/* Use existing PropertyListings component to render cards in the same style as homepage */}
          <PropertyListings activeCategory={0} />
        </section>
      </main>
    </div>
  )
}
