'use client'

import { useState } from 'react'
import { getImagePath } from '../utils/imagePath'

export default function EventsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const events = [
    {
      image: "/images/event-image.jpg",
      day: "12",
      month: "юли",
      title: "Действащ офис на Bulgarian Estates в град Варна"
    },
    {
      image: "/images/event-image.jpg",
      day: "17", 
      month: "май",
      title: "Созопол е сред най-добрите европейски дестинации за 2025 година"
    },
    {
      image: "/images/event-image.jpg",
      day: "25", 
      month: "авг",
      title: "Нови възможности за инвестиции в българското черноморие"
    }
  ]

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === events.length - 1 ? 0 : prevIndex + 1
    )
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? events.length - 1 : prevIndex - 1
    )
  }

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
  }

  return (
    <section className="events-section">
      <div className="events-container">
        <div className="events-header">
          <h2 className="events-title">Събития</h2>
        </div>
        
        <div className="events-carousel">
          <button className="carousel-btn carousel-btn-prev" onClick={prevSlide}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          
          <div className="events-carousel-container">
            <div 
              className="events-carousel-track"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {events.map((event, index) => (
                <div key={index} className="event-card">
                  <img 
                    src={getImagePath(event.image)} 
                    alt={event.title}
                    className="event-image"
                  />
                  <div className="event-content">
                    <div className="event-date-badge">
                      <span className="event-day">{event.day}</span>
                      <span className="event-month">{event.month}</span>
                    </div>
                    <div className="event-text">
                      <h3 className="event-title">{event.title}</h3>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <button className="carousel-btn carousel-btn-next" onClick={nextSlide}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
        
        <div className="events-navigation">
          {events.map((_, index) => (
            <button
              key={index}
              className={`nav-dot ${index === currentIndex ? 'active' : ''}`}
              onClick={() => goToSlide(index)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
