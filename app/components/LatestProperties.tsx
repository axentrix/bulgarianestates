'use client'

import { useState, useRef } from 'react'
import { getImagePath } from '../utils/imagePath'
import PropertyDetails from './PropertyDetails'

export default function LatestProperties() {
  const [selectedProperty, setSelectedProperty] = useState<any>(null)
  const [isDetailsOpen, setIsDetailsOpen] = useState(false)
  const scrollContainerRef = useRef<HTMLDivElement>(null)

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      const scrollWidth = window.innerWidth * 0.65 + 24 // 65vw + gap
      scrollContainerRef.current.scrollBy({ left: -scrollWidth, behavior: 'smooth' })
    }
  }

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      const scrollWidth = window.innerWidth * 0.65 + 24 // 65vw + gap
      scrollContainerRef.current.scrollBy({ left: scrollWidth, behavior: 'smooth' })
    }
  }

  const latestProperties = [
    {
      image: "/images/property-8.jpg",
      city: "Созопол",
      description: "Жилищна сграда с апартаменти и паркоместа в Созопол",
      price: "€ 59620",
      pricePerSqm: "1350.40 €/м2",
      area: "44.5 m",
      bedrooms: "1 с��алня",
      floor: "2-ри етаж"
    },
    {
      image: "/images/property-9.jpg",
      city: "Созопол",
      description: "Жилищна сграда с апартаменти и паркоместа в Созопол",
      price: "€ 59620",
      pricePerSqm: "1350.40 €/м2",
      area: "44.5 m",
      bedrooms: "1 спалня",
      floor: "2-ри етаж"
    },
    {
      image: "/images/property-10.jpg",
      city: "Созопол",
      description: "Жилищна сграда с апартаменти и паркоместа в Созопол",
      price: "€ 59620",
      pricePerSqm: "1350.40 €/м2",
      area: "44.5 m",
      bedrooms: "1 спалня",
      floor: "2-ри етаж"
    },
    {
      image: "/images/property-11.jpg",
      city: "Созопол",
      description: "Жилищна сграда с апартаменти и паркоместа в Созопол",
      price: "€ 59620",
      pricePerSqm: "1350.40 €/м2",
      area: "44.5 m",
      bedrooms: "1 спалня",
      floor: "2-ри етаж"
    }
  ]

  const handlePropertyClick = (property: any) => {
    setSelectedProperty(property)
    setIsDetailsOpen(true)
  }

  const handleCloseDetails = () => {
    setIsDetailsOpen(false)
    setSelectedProperty(null)
  }

  return (
    <>
      <section className="latest-properties">
        <div className="latest-properties-header">
          <h2 className="latest-properties-title">Най-нови обяви</h2>
        </div>
        
        <div className="latest-properties-container">
          <div className="latest-properties-grid" ref={scrollContainerRef}>
          {latestProperties.map((property, index) => (
            <div 
              key={index} 
              className="latest-property-card"
              onClick={() => handlePropertyClick(property)}
            >
              <div className="latest-property-image">
                <img src={getImagePath(property.image)} alt={property.description} />
              </div>
              
              <div className="latest-property-content">
                <div className="latest-property-header">
                  <div className="latest-property-info">
                    <h3 className="latest-property-city">{property.city}</h3>
                    <p className="latest-property-description">{property.description}</p>
                  </div>
                  <div className="latest-property-price">
                    <span className="latest-main-price">{property.price}</span>
                    <span className="latest-price-per-sqm">{property.pricePerSqm}</span>
                  </div>
                </div>
                
                <div className="latest-property-details">
                  <div className="latest-detail-item">
                    <svg width="16" height="16" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M6 14.5884H3.33333C2.97971 14.5884 2.64057 14.4479 2.39052 14.1979C2.14048 13.9478 2 13.6087 2 13.255V3.92171C2 3.56809 2.14048 3.22895 2.39052 2.9789C2.64057 2.72885 2.97971 2.58838 3.33333 2.58838H12.6667C13.0203 2.58838 13.3594 2.72885 13.6095 2.9789C13.8595 3.22895 14 3.56809 14 3.92171V13.255C14 13.6087 13.8595 13.9478 13.6095 14.1979C13.3594 14.4479 13.0203 14.5884 12.6667 14.5884H9.33333M6 2.58838V7.25505M14 7.25505H9.33333M2 10.5884H8" stroke="#4F2C1D" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <span>{property.area}</span>
                  </div>
                  
                  <div className="latest-detail-item">
                    <svg width="16" height="16" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M1.33301 13.255V9.25496C1.33301 8.95496 1.39412 8.68274 1.51634 8.4383C1.63856 8.19385 1.79967 7.97719 1.99967 7.7883V5.92163C1.99967 5.36608 2.19412 4.89385 2.58301 4.50496C2.9719 4.11608 3.44412 3.92163 3.99967 3.92163H6.66634C6.9219 3.92163 7.16079 3.96896 7.38301 4.06363C7.60523 4.1583 7.81079 4.28874 7.99967 4.45496C8.18856 4.2883 8.39412 4.15785 8.61634 4.06363C8.83856 3.96941 9.07745 3.92208 9.33301 3.92163H11.9997C12.5552 3.92163 13.0275 4.11608 13.4163 4.50496C13.8052 4.89385 13.9997 5.36608 13.9997 5.92163V7.7883C14.1997 7.97719 14.3608 8.19385 14.483 8.4383C14.6052 8.68274 14.6663 8.95496 14.6663 9.25496V13.255H13.333V11.9216H2.66634V13.255H1.33301ZM8.66634 7.25496H12.6663V5.92163C12.6663 5.73274 12.6023 5.57452 12.4743 5.44696C12.3463 5.31941 12.1881 5.25541 11.9997 5.25496H9.33301C9.14412 5.25496 8.9859 5.31896 8.85834 5.44696C8.73079 5.57496 8.66679 5.73319 8.66634 5.92163V7.25496ZM3.33301 7.25496H7.33301V5.92163C7.33301 5.73274 7.26901 5.57452 7.14101 5.44696C7.01301 5.31941 6.85479 5.25541 6.66634 5.25496H3.99967C3.81079 5.25496 3.65256 5.31896 3.52501 5.44696C3.39745 5.57496 3.33345 5.73319 3.33301 5.92163V7.25496ZM2.66634 10.5883H13.333V9.25496C13.333 9.06607 13.269 8.90785 13.141 8.7803C13.013 8.65274 12.8548 8.58874 12.6663 8.5883H3.33301C3.14412 8.5883 2.9859 8.6523 2.85834 8.7803C2.73079 8.9083 2.66679 9.06652 2.66634 9.25496V10.5883Z" fill="#4F2C1D"/>
                    </svg>
                    <span>{property.bedrooms}</span>
                  </div>
                  
                  <div className="latest-detail-item">
                    <svg width="16" height="16" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M2 15.255V13.9217H4.33333V10.9217H7.33333V7.92171H10.3333V4.92171H13.3333V2.58838H14.6667V6.25505H11.6667V9.25505H8.66667V12.255H5.66667V15.255H2Z" fill="#4F2C1D"/>
                    </svg>
                    <span>{property.floor}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
          </div>
          <div className="latest-scroll-navigation">
            <button className="scroll-arrow scroll-left" onClick={scrollLeft} aria-label="Scroll left">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12.5 15L7.5 10L12.5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            <button className="scroll-arrow scroll-right" onClick={scrollRight} aria-label="Scroll right">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7.5 5L12.5 10L7.5 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
        </div>
      </section>

      <PropertyDetails 
        property={selectedProperty}
        isOpen={isDetailsOpen}
        onClose={handleCloseDetails}
      />
    </>
  )
}
