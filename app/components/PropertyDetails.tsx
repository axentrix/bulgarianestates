'use client'

import { useState } from 'react'

interface PropertyDetailsProps {
  property: any
  isOpen: boolean
  onClose: () => void
}

export default function PropertyDetails({ property, isOpen, onClose }: PropertyDetailsProps) {
  const [activeTab, setActiveTab] = useState('снимки')

  if (!isOpen || !property) return null

  // Sample content based on Bulgarian Estates listing OI=4122
  const propertyData = {
    title: "Жилищна сграда с апартаменти и парко��еста в Созопол",
    location: "Созопол, Бургас",
    price: "€ 59,620",
    pricePerSqm: "€ 1,350.40/м²",
    area: "44.5 м²",
    bedrooms: "1 спалня",
    floor: "2-ри етаж",
    propertyType: "Апартамент",
    yearBuilt: "2024",
    description: "Жилищна сграда с апартаменти и паркоместа е разположена на 150м от плажа в курортния град Созопол. Сградата се състои от 4 етажа и разполага със 48 апартамента от различни типове - студия, двустайни и тристайни жилища. Всеки апартамент е с изчистен модерен дизайн и високо качество на изпълнение. Комплексът предлага всички удобства за пълноценна почивка - частен плаж, ресторант, фитнес център, СПА зона, детска площадка и подземен паркинг.",
    amenities: [
      "Частен плаж - 150м",
      "Подземен паркинг", 
      "Ресторант",
      "Фитнес център",
      "СПА зона",
      "Детска площадка",
      "24/7 охрана",
      "Асансьор"
    ],
    images: [
      "/images/property-8.jpg",
      "/images/property-9.jpg",
      "/images/property-10.jpg",
      "/images/property-11.jpg"
    ],
    broker: {
      name: "Мария Петрова",
      title: "Старши консултант",
      phone: "+359 888 123 456",
      email: "maria.petrova@bulgarianestates.com",
      image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='60' height='60' viewBox='0 0 60 60'%3E%3Ccircle cx='30' cy='30' r='30' fill='%23299393'/%3E%3Cpath d='M30 32c4.4 0 8-3.6 8-8s-3.6-8-8-8-8 3.6-8 8 3.6 8 8 8zm0 4c-5.3 0-16 2.7-16 8v4h32v-4c0-5.3-10.7-8-16-8z' fill='white'/%3E%3C/svg%3E"
    }
  }

  const tabs = [
    { id: 'снимки', label: 'Снимки' },
    { id: 'видео', label: 'Видео' },
    { id: 'карта', label: 'Карта' },
    { id: 'планове', label: 'Планове' },
    { id: 'въздушни', label: 'Снимки от въздуха' }
  ]

  return (
    <div className="property-details-overlay" onClick={onClose}>
      <div className="property-details-container" onClick={(e) => e.stopPropagation()}>
        {/* Header with close button */}
        <div className="property-details-header">
          <div className="property-details-title-section">
            <h1 className="property-details-title">{propertyData.title}</h1>
            <p className="property-details-location">{propertyData.location}</p>
            <div className="property-details-price">
              <span className="main-price">{propertyData.price}</span>
              <span className="price-per-sqm">{propertyData.pricePerSqm}</span>
            </div>
          </div>
          <button className="property-details-close" onClick={onClose}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>

        {/* Tab Navigation */}
        <div className="property-details-tabs">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              className={`property-tab ${activeTab === tab.id ? 'active' : ''}`}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Main Content */}
        <div className="property-details-content">
          {/* Left Column - Images/Content */}
          <div className="property-details-left">
            {activeTab === 'снимки' && (
              <div className="property-image-gallery">
                <div className="main-image">
                  <img src={propertyData.images[0]} alt={propertyData.title} />
                </div>
                <div className="thumbnail-grid">
                  {propertyData.images.slice(1).map((image, index) => (
                    <img key={index} src={image} alt={`Property view ${index + 2}`} />
                  ))}
                </div>
              </div>
            )}
            
            {activeTab === 'видео' && (
              <div className="property-video">
                <div className="video-placeholder">
                  <svg width="64" height="64" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
                    <path d="M10 8L16 12L10 16V8Z" fill="currentColor"/>
                  </svg>
                  <p>Видео презентация скоро</p>
                </div>
              </div>
            )}
            
            {activeTab === 'карта' && (
              <div className="property-map">
                <div className="map-placeholder">
                  <svg width="64" height="64" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M21 10C21 17 12 23 12 23S3 17 3 10C3 5 7 1 12 1S21 5 21 10Z" stroke="currentColor" strokeWidth="2"/>
                    <circle cx="12" cy="10" r="3" stroke="currentColor" strokeWidth="2"/>
                  </svg>
                  <p>Созопол, Бургас</p>
                  <p className="distance-info">150м от плажа</p>
                </div>
              </div>
            )}
            
            {activeTab === 'планове' && (
              <div className="property-plans">
                <div className="plans-placeholder">
                  <svg width="64" height="64" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="2"/>
                    <path d="M9 9H15M9 13H15M9 17H13" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                  <p>Планове на етажите скоро</p>
                </div>
              </div>
            )}
            
            {activeTab === 'въздушни' && (
              <div className="property-aerial">
                <div className="aerial-placeholder">
                  <svg width="64" height="64" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4 15S9 9 16 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                    <path d="M14 11L18 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                    <circle cx="18" cy="7" r="3" stroke="currentColor" strokeWidth="2"/>
                  </svg>
                  <p>Въздушни снимки скоро</p>
                </div>
              </div>
            )}

            {/* Property Details Section */}
            <div className="property-info-section">
              <div className="property-specs">
                <div className="spec-item">
                  <span className="spec-label">Площ:</span>
                  <span className="spec-value">{propertyData.area}</span>
                </div>
                <div className="spec-item">
                  <span className="spec-label">Стаи:</span>
                  <span className="spec-value">{propertyData.bedrooms}</span>
                </div>
                <div className="spec-item">
                  <span className="spec-label">Етаж:</span>
                  <span className="spec-value">{propertyData.floor}</span>
                </div>
                <div className="spec-item">
                  <span className="spec-label">Тип имот:</span>
                  <span className="spec-value">{propertyData.propertyType}</span>
                </div>
                <div className="spec-item">
                  <span className="spec-label">Година на строеж:</span>
                  <span className="spec-value">{propertyData.yearBuilt}</span>
                </div>
              </div>

              <div className="property-description">
                <h3>Описание</h3>
                <p>{propertyData.description}</p>
              </div>

              <div className="property-amenities">
                <h3>Удобства</h3>
                <ul>
                  {propertyData.amenities.map((amenity, index) => (
                    <li key={index}>{amenity}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Right Column - Broker Info */}
          <div className="property-details-right">
            <div className="broker-card">
              <div className="broker-header">
                <div className="broker-avatar">
                  <img src={propertyData.broker.image} alt={propertyData.broker.name} />
                </div>
                <div className="broker-info">
                  <h3>{propertyData.broker.name}</h3>
                  <p>{propertyData.broker.title}</p>
                </div>
              </div>
              
              <div className="broker-contact">
                <div className="contact-item">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22 16.92V19.92C22 20.52 21.39 21 20.83 21C9.28 20.46 1.54 12.73 1 1.17C1 0.61 1.48 0 2.08 0H5.08C5.68 0 6.08 0.49 6.08 1.09C6.15 3.24 6.46 5.34 7 7.35C7.13 7.75 7 8.18 6.69 8.49L5.26 9.92C6.69 12.83 9.17 15.31 12.08 16.74L13.51 15.31C13.82 15 14.25 14.87 14.65 15C16.66 15.54 18.76 15.85 20.91 15.92C21.51 15.92 22 16.32 22 16.92Z" fill="currentColor"/>
                  </svg>
                  <span>{propertyData.broker.phone}</span>
                </div>
                <div className="contact-item">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z" stroke="currentColor" strokeWidth="2" fill="none"/>
                    <path d="M22 6L12 13L2 6" stroke="currentColor" strokeWidth="2" fill="none"/>
                  </svg>
                  <span>{propertyData.broker.email}</span>
                </div>
              </div>

              <div className="broker-actions">
                <button className="broker-btn primary">Свържи се с брокер</button>
                <button className="broker-btn secondary">Заяви оглед</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
