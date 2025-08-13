'use client'

import { useState } from 'react'
import HeroSection from './components/HeroSection'
import PropertyCategories from './components/PropertyCategories'
import PropertyListings from './components/PropertyListings'
import LatestProperties from './components/LatestProperties'
import AboutSection from './components/AboutSection'
import FeaturesSection from './components/FeaturesSection'
import EventsSection from './components/EventsSection'
import TestimonialsSection from './components/TestimonialsSection'
import FinalCTASection from './components/FinalCTASection'

export default function Home() {
  const [activeCategory, setActiveCategory] = useState(0)

  const handleCategoryChange = (categoryIndex: number) => {
    setActiveCategory(categoryIndex)
  }

  return (
    <>
      <HeroSection />
      <PropertyCategories
        onCategoryChange={handleCategoryChange}
        activeCategory={activeCategory}
      />
      <PropertyListings activeCategory={activeCategory} />
      <LatestProperties />
      <AboutSection />
      <FeaturesSection />
      <EventsSection />
      <TestimonialsSection />
      <FinalCTASection />
    </>
  )
}
