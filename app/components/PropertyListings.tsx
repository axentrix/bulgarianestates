'use client'

import { useState, useRef } from 'react'
import { getImagePath } from '../utils/imagePath'
import PropertyDetails from './PropertyDetails'

interface PropertyListingsProps {
  activeCategory: number;
}

export default function PropertyListings({ activeCategory }: PropertyListingsProps) {
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

  const categoryData = [
    {
      title: "На морето",
      properties: [
        {
          image: "/images/property-1.jpg",
          city: "Созопол",
          description: "Жилищна сграда с апартаменти и паркоместа в Созопол",
          price: "€ 59620",
          pricePerSqm: "1350.40 €/м2",
          area: "44.5 m",
          bedrooms: "1 спалня",
          floor: "2-ри етаж"
        },
        {
          image: "/images/property-2.jpg",
          city: "Созопол",
          description: "Жилищна сграда с апартаменти и паркоместа в Созопол",
          price: "€ 59620",
          pricePerSqm: "1350.40 €/м2",
          area: "44.5 m",
          bedrooms: "1 спалня",
          floor: "2-ри етаж"
        },
        {
          image: "/images/property-3.jpg",
          city: "Созопол",
          description: "Жилищна сграда с апартаменти и паркоместа в Созопол",
          price: "€ 59620",
          pricePerSqm: "1350.40 €/м2",
          area: "44.5 m",
          bedrooms: "1 спалня",
          floor: "2-ри етаж"
        }
      ]
    },
    {
      title: "Ново строителство оферти",
      properties: [
        {
          image: "/images/property-4.jpg",
          city: "София",
          description: "Модерен жилищен комплекс в София",
          price: "€ 85000",
          pricePerSqm: "1800.50 €/м2",
          area: "65.2 m",
          bedrooms: "2 спални",
          floor: "5-ти етаж"
        },
        {
          image: "/images/property-1.jpg",
          city: "Пловдив",
          description: "Нова жилищна сграда в центъра на Пловдив",
          price: "€ 72000",
          pricePerSqm: "1650.75 €/м2",
          area: "58.8 m",
          bedrooms: "2 спални",
          floor: "3-ти етаж"
        },
        {
          image: "/images/property-2.jpg",
          city: "Варна",
          description: "Съвременен апартамент във Варна",
          price: "€ 68500",
          pricePerSqm: "1580.25 €/м2",
          area: "48.3 m",
          bedrooms: "1 спалня",
          floor: "4-ти етаж"
        }
      ]
    },
    {
      title: "Градски имоти",
      properties: [
        {
          image: "/images/property-5.jpg",
          city: "София",
          description: "Централен офис в София",
          price: "€ 120000",
          pricePerSqm: "2200.80 €/м2",
          area: "85.5 m",
          bedrooms: "Офис",
          floor: "1-ви етаж"
        },
        {
          image: "/images/property-3.jpg",
          city: "Пловдив",
          description: "Търговски обект в центъра",
          price: "€ 95000",
          pricePerSqm: "1950.40 €/м2",
          area: "75.2 m",
          bedrooms: "Магазин",
          floor: "Партер"
        },
        {
          image: "/images/property-1.jpg",
          city: "Варна",
          description: "Бизнес център във Варна",
          price: "€ 110000",
          pricePerSqm: "2150.60 €/м2",
          area: "92.8 m",
          bedrooms: "Офис",
          floor: "6-ти етаж"
        }
      ]
    },
    {
      title: "Имоти на село",
      properties: [
        {
          image: "/images/property-6.jpg",
          city: "Банско",
          description: "Планинска къща с двор",
          price: "€ 45000",
          pricePerSqm: "850.30 €/м2",
          area: "120.5 m",
          bedrooms: "3 спални",
          floor: "2 етажа"
        },
        {
          image: "/images/property-2.jpg",
          city: "Етрополе",
          description: "Селска къща с градина",
          price: "€ 35000",
          pricePerSqm: "650.20 €/м2",
          area: "95.8 m",
          bedrooms: "2 спални",
          floor: "1 етаж"
        },
        {
          image: "/images/property-3.jpg",
          city: "Арбанаси",
          description: "Възрожденска къща",
          price: "€ 55000",
          pricePerSqm: "750.90 €/м2",
          area: "110.2 m",
          bedrooms: "4 спални",
          floor: "2 етажа"
        }
      ]
    },
    {
      title: "С намалена цена",
      properties: [
        {
          image: "/images/property-7.jpg",
          city: "София",
          description: "Апартамент с отстъпка",
          price: "€ 42000",
          pricePerSqm: "1050.25 €/м2",
          area: "52.8 m",
          bedrooms: "1 спалня",
          floor: "3-ти етаж"
        },
        {
          image: "/images/property-1.jpg",
          city: "Пловдив",
          description: "Намален апартамент в Пловдив",
          price: "€ 38500",
          pricePerSqm: "980.40 €/м2",
          area: "48.5 m",
          bedrooms: "1 спалня",
          floor: "2-ри етаж"
        },
        {
          image: "/images/property-2.jpg",
          city: "Варна",
          description: "Промоционална оферта Варна",
          price: "€ 51000",
          pricePerSqm: "1250.80 €/м2",
          area: "62.2 m",
          bedrooms: "2 спални",
          floor: "4-ти етаж"
        }
      ]
    }
  ]

  const currentCategory = categoryData[activeCategory] || categoryData[0]

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
      <section className="property-listings">
        <div className="listings-header">
          <h2 className="listings-title">{currentCategory.title}</h2>
        </div>
        
        <div className="properties-container">
          <div className="property-grid-container"> 
          <div className="properties-grid" ref={scrollContainerRef}>
          {currentCategory.properties.map((property, index) => (
            <div 
              key={index} 
              className="property-card"
              onClick={() => handlePropertyClick(property)}
            >
              <div className="property-image">
                <img src={getImagePath(property.image)} alt={property.description} />
              </div>
              
              <div className="property-content">
                <div className="property-header">
                  <div className="property-info">
                    <h3 className="property-city">{property.city}</h3>
                    <p className="property-description">{property.description}</p>
                  </div>
                  <div className="property-price">
                    <span className="main-price">{property.price}</span>
                    <span className="price-per-sqm">{property.pricePerSqm}</span>
                  </div>
                </div>
                
                <div className="property-details">
                  <div className="detail-item">
                    <svg width="16" height="16" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M6 14.5883H3.33333C2.97971 14.5883 2.64057 14.4478 2.39052 14.1977C2.14048 13.9477 2 13.6085 2 13.2549V3.92159C2 3.56797 2.14048 3.22883 2.39052 2.97878C2.64057 2.72873 2.97971 2.58826 3.33333 2.58826H12.6667C13.0203 2.58826 13.3594 2.72873 13.6095 2.97878C13.8595 3.22883 14 3.56797 14 3.92159V13.2549C14 13.6085 13.8595 13.9477 13.6095 14.1977C13.3594 14.4478 13.0203 14.5883 12.6667 14.5883H9.33333M6 2.58826V7.25492M14 7.25492H9.33333M2 10.5883H8" stroke="#4F2C1D" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <span>{property.area}</span>
                  </div>
                  
                  <div className="detail-item">
                    <svg width="16" height="16" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M1.33301 13.255V9.25496C1.33301 8.95496 1.39412 8.68274 1.51634 8.4383C1.63856 8.19385 1.79967 7.97719 1.99967 7.7883V5.92163C1.99967 5.36608 2.19412 4.89385 2.58301 4.50496C2.9719 4.11608 3.44412 3.92163 3.99967 3.92163H6.66634C6.9219 3.92163 7.16079 3.96896 7.38301 4.06363C7.60523 4.1583 7.81079 4.28874 7.99967 4.45496C8.18856 4.2883 8.39412 4.15785 8.61634 4.06363C8.83856 3.96941 9.07745 3.92208 9.33301 3.92163H11.9997C12.5552 3.92163 13.0275 4.11608 13.4163 4.50496C13.8052 4.89385 13.9997 5.36608 13.9997 5.92163V7.7883C14.1997 7.97719 14.3608 8.19385 14.483 8.4383C14.6052 8.68274 14.6663 8.95496 14.6663 9.25496V13.255H13.333V11.9216H2.66634V13.255H1.33301ZM8.66634 7.25496H12.6663V5.92163C12.6663 5.73274 12.6023 5.57452 12.4743 5.44696C12.3463 5.31941 12.1881 5.25541 11.9997 5.25496H9.33301C9.14412 5.25496 8.9859 5.31896 8.85834 5.44696C8.73079 5.57496 8.66679 5.73319 8.66634 5.92163V7.25496ZM3.33301 7.25496H7.33301V5.92163C7.33301 5.73274 7.26901 5.57452 7.14101 5.44696C7.01301 5.31941 6.85479 5.25541 6.66634 5.25496H3.99967C3.81079 5.25496 3.65256 5.31896 3.52501 5.44696C3.39745 5.57496 3.33345 5.73319 3.33301 5.92163V7.25496ZM2.66634 10.5883H13.333V9.25496C13.333 9.06607 13.269 8.90785 13.141 8.7803C13.013 8.65274 12.8548 8.58874 12.6663 8.5883H3.33301C3.14412 8.5883 2.9859 8.6523 2.85834 8.7803C2.73079 8.9083 2.66679 9.06652 2.66634 9.25496V10.5883Z" fill="#4F2C1D"/>
                    </svg>
                    <span>{property.bedrooms}</span>
                  </div>
                  
                  <div className="detail-item">
                    <svg width="16" height="16" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M2 15.2549V13.9216H4.33333V10.9216H7.33333V7.92159H10.3333V4.92159H13.3333V2.58826H14.6667V6.25492H11.6667V9.25492H8.66667V12.2549H5.66667V15.2549H2Z" fill="#4F2C1D"/>
                    </svg>
                    <span>{property.floor}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
          </div></div>
          <div className="scroll-navigation">
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
