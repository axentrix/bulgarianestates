'use client'

import { useState } from 'react'
import { getImagePath } from '../utils/imagePath'

export default function FeaturesSection() {
  const [expandedCards, setExpandedCards] = useState<number[]>([])

  const toggleCard = (index: number) => {
    setExpandedCards(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    )
  }

  const features = [
    {
      icon: (
       <img src={getImagePath("/images/sico1.svg")} width="44" height="44" />
      ),
      title: "12+ години опит",
      description: "Вече 12 години се грижим за максималната защита на интересите на нашите клиенти и правим всичко възможно, за да са доволни."
    },
    {
      icon: (
      <img src={getImagePath("/images/sico2.svg")} width="44" height="44" />
      ),
      title: "Безкомпромисно обслужване",
      description: "Екипът на Bulgarian Estates се състои от млади, образовани и последователни професионалисти, които познават в детайли спецификата на сделките с недвижими имоти в България и други страни по света."
    },
    {
      icon: (
       <img src={getImagePath("/images/sico3.svg")} width="44" height="44" />
      ),
      title: "Договор и гаранция",
      description: "Ние ще защитаваме отговорно и усърдно Вашите интереси на всеки етап от сделката. Ще ви информираме подробно за всички алтернативи, за да изпитате увереност, че сте направили оптималния избор."
    },
    {
      icon: (
    <img src={getImagePath("/images/sico4.svg")} width="44" height="44" />
      ),
      title: "Максимален комфорт",
      description: "Доверете ни се! Нашата мисия е Вашият максимален комфорт. За нас компромисите в работата са недопустими, защото удовлетворението на клиента е гарант за бъдещите ни успехи."
    }
  ]

  return (
    <section className="features-section">
      <div className="features-container">
        <div className="features-header">
          <h2 className="features-title">
            Когато домът ти е въпрос на избор.
          </h2>
        </div>
        
        <div className="features-content">
          <div className="features-grid">
            {features.map((feature, index) => (
              <div key={index} className="feature-card">
                <div className="feature-title-container">
                  <div className="feature-icon">
                    {feature.icon}
                  </div>
                  <h3 className="feature-title">{feature.title}</h3>
                  <button 
                    className="feature-toggle-btn"
                    onClick={() => toggleCard(index)}
                    aria-label={expandedCards.includes(index) ? 'Свие описанието' : 'Разшири описанието'}
                  >
                    <svg 
                      width="16" 
                      height="16" 
                      viewBox="0 0 16 16" 
                      fill="none" 
                      xmlns="http://www.w3.org/2000/svg"
                      className={expandedCards.includes(index) ? 'rotated' : ''}
                    >
                      <path 
                        d="M4 6L8 10L12 6" 
                        stroke="currentColor" 
                        strokeWidth="2" 
                        strokeLinecap="round" 
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                </div>
                <div className="feature-description-container">
                  <p className={`feature-description ${expandedCards.includes(index) ? 'expanded' : ''}`}>
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="features-image">
            <img 
              src={getImagePath("/images/features-bg.jpg")} 
              alt="Bulgarian coastal properties" 
            />
          </div>
        </div>
      </div>
    </section>
  )
}
