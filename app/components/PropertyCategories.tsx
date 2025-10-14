'use client'

import { useState } from 'react'
import { getImagePath } from '../utils/imagePath'

interface PropertyCategoriesProps {
  onCategoryChange: (categoryIndex: number) => void;
  activeCategory: number;
}

export default function PropertyCategories({ onCategoryChange, activeCategory }: PropertyCategoriesProps) {
  const categories = [
    {
      image: "/images/category-seaside.jpg",
      title: "На морето"
    },
    {
      image: "/images/category-new-construction.jpg",
      title: "Ново строителство"
    },
    {
      image: "/images/category-urban.jpg",
      title: "Градски имоти"
    },
    {
      image: "/images/category-rural.jpg",
      title: "Имоти на село"
    },
    {
      image: "/images/category-discounted.jpg",
      title: "С намалена цена"
    }
  ]

  const handleCategoryClick = (index: number) => {
    onCategoryChange(index);

    const propertyListingsSection = document.querySelector('.property-listings');
    if (propertyListingsSection) {
      propertyListingsSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  }

  return (
    <section className="property-categories">
      <div className="categories-grid">
        {categories.map((category, index) => (
          <button 
            key={index} 
            className={`category-item ${activeCategory === index ? 'active' : ''}`}
            onClick={() => handleCategoryClick(index)}
          >
            <img 
              src={getImagePath(category.image)} 
              alt={category.title}
              className="category-image"
            />
            <h3 className="category-title">{category.title}</h3>
          </button>
        ))}
      </div>
    </section>
  )
}
