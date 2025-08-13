'use client'

import { useState, useRef, useEffect } from 'react'
import { useRouter } from 'next/navigation'

export default function HeroSection() {
  const [activeTab, setActiveTab] = useState(0)
  const [locationValue, setLocationValue] = useState('')
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)
  const [selectedPrice, setSelectedPrice] = useState('')
  const [selectedPropertyType, setSelectedPropertyType] = useState('')
  const [priceRange, setPriceRange] = useState({ min: '', max: '' })
  const router = useRouter()
  const dropdownRef = useRef<HTMLDivElement>(null)

  const tabs = [
    { id: 0, label: 'Купи имот', type: 'search' },
    { id: 1, label: 'Продай имот', type: 'form' },
    { id: 2, label: 'Наеми имот', type: 'form' },
    { id: 3, label: 'Отдай под наем', type: 'form' }
  ]

  const cities = [
    'София', 'Пловдив', 'Варна', 'Бургас', 'Русе', 'Стара Загора',
    'Плевен', 'Слвичен', 'Добрич', 'Шумен', 'Перник', 'Ямбол',
    'Хасково', 'Благоевград', 'Велико Търново', 'Враца',
    'Созопол', 'Несебър', 'Банско', 'Поморие', 'Слънчев бряг'
  ]

  const priceRanges = [
    'До €30,000',
    '€30,000 - €50,000', 
    '€50,000 - €80,000',
    '€80,000 - €120,000',
    '€120,000 - €200,000',
    'Над €200,000'
  ]

  const propertyTypes = [
    'Апартамент',
    'Къща',
    'Студио',
    'Мезонет',
    'Офис',
    'Магазин',
    'Гараж',
    'Парцел',
    'Склад',
    'Хотел'
  ]

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setOpenDropdown(null)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const handleTabClick = (tabId: number) => {
    setActiveTab(tabId)
    setLocationValue('')
    setOpenDropdown(null)
  }

  const handleContinue = () => {
    const tabType = tabs[activeTab].label
    router.push(`/form?type=${encodeURIComponent(tabType)}&location=${encodeURIComponent(locationValue)}`)
  }

  const handleDropdownToggle = (dropdown: string) => {
    setOpenDropdown(openDropdown === dropdown ? null : dropdown)
  }

  const handleCitySelect = (city: string) => {
    setLocationValue(city)
    setOpenDropdown(null)
  }

  const handlePriceSelect = (price: string) => {
    setSelectedPrice(price)
    setOpenDropdown(null)
  }

  const handlePropertyTypeSelect = (type: string) => {
    setSelectedPropertyType(type)
    setOpenDropdown(null)
  }

  const handleCustomPriceSubmit = () => {
    if (priceRange.min || priceRange.max) {
      const customPrice = `€${priceRange.min || '0'} - €${priceRange.max || '∞'}`
      setSelectedPrice(customPrice)
      setOpenDropdown(null)
    }
  }

  const LocationIcon = () => (
    <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M6.35134 6.19836C7.86216 4.83677 9.89625 4.0785 12.0116 4.08832C14.1269 4.09815 16.1526 4.87527 17.6484 6.25083C19.1442 7.62639 19.9892 9.48923 19.9999 11.4345C20.0106 13.3798 19.186 15.2504 17.7054 16.6398L13.4618 20.5423C13.0816 20.8919 12.566 21.0882 12.0284 21.0882C11.4908 21.0882 10.9751 20.8919 10.5949 20.5423L6.35134 16.6398C4.84579 15.2551 4 13.3772 4 11.4191C4 9.46097 4.84579 7.58303 6.35134 6.19836Z" stroke="#299393" strokeWidth="1.5" strokeLinejoin="round"/>
      <path d="M12 14.0882C13.6569 14.0882 15 12.9689 15 11.5882C15 10.2075 13.6569 9.08823 12 9.08823C10.3431 9.08823 9 10.2075 9 11.5882C9 12.9689 10.3431 14.0882 12 14.0882Z" stroke="#299393" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )

  return (
    <section className="hero-section">
      <div className="hero-background">
        <div className="image-wrap">
          <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/4e131d5deccc93c669e5430dd9983838c2b8c8bb?width=3747"
            alt="Bulgarian coastal properties"
          />
        </div>
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              Купи, продай, наеми или отдавай с лекота.
            </h1>
          </div>
          
          <div className="action-buttons">
            {tabs.map((tab) => (
              <button 
                key={tab.id}
                className={`action-btn ${activeTab === tab.id ? 'primary' : 'secondary'}`}
                onClick={() => handleTabClick(tab.id)}
              >
                {tab.id === 0 ? <p>Купи имот</p> : tab.label}
              </button>
            ))}
          </div>
          
          <div className="tab-content">
            {activeTab === 0 ? (
              // Enhanced search form for "Купи имот" with dropdowns
              <div className="search-container">
                <div className="search-form-wrapper" ref={dropdownRef}>
                  <div className="search-form">
                  {/* Location Field */}
                  <div className="search-field" onClick={() => handleDropdownToggle('location')}>
                    <LocationIcon />
                    <span className="field-label">
                      {locationValue || 'Локация'}
                    </span>
                    <svg 
                      className={`dropdown-arrow ${openDropdown === 'location' ? 'open' : ''}`}
                      width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M3 4.5L6 7.5L9 4.5" stroke="#299393" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  
                  {/* Price Field */}
                  <div className="search-field" onClick={() => handleDropdownToggle('price')}>
                    <svg width="24" height="24" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5.06087 16.7252C3.51587 15.1792 2.74287 14.4072 2.45587 13.4042C2.16787 12.4012 2.41387 11.3362 2.90587 9.20723L3.18887 7.97923C3.60187 6.18723 3.80887 5.29123 4.42187 4.67723C5.03487 4.06323 5.93187 3.85723 7.72387 3.44423L8.95187 3.16023C11.0819 2.66923 12.1459 2.42323 13.1489 2.71023C14.1519 2.99823 14.9239 3.77123 16.4689 5.31623L18.2989 7.14623C20.9899 9.83623 22.3329 11.1802 22.3329 12.8502C22.3329 14.5212 20.9889 15.8652 18.2999 18.5542C15.6099 21.2442 14.2659 22.5882 12.5949 22.5882C10.9249 22.5882 9.57987 21.2442 6.89087 18.5552L5.06087 16.7252Z" stroke="#299393" strokeWidth="1.5"/>
                      <path d="M15.7224 15.9782C16.3074 15.3912 16.3864 14.5212 15.8984 14.0322C15.4104 13.5432 14.5394 13.6232 13.9534 14.2092C13.3684 14.7952 12.4974 14.8742 12.0094 14.3862C11.5214 13.8982 11.6004 13.0272 12.1864 12.4422M12.1864 12.4422L11.8324 12.0882M12.1864 12.4422C12.5174 12.1102 12.9394 11.9422 13.3324 11.9452M16.0754 16.3312L15.7214 15.9772C15.3214 16.3782 14.7864 16.5422 14.3324 16.4482" stroke="#299393" strokeWidth="1.5" strokeLinecap="round"/>
                      <path d="M10.354 10.8814C11.135 10.1004 11.135 8.83406 10.354 8.05301C9.57292 7.27196 8.30659 7.27196 7.52554 8.05301C6.74449 8.83406 6.74449 10.1004 7.52554 10.8814C8.30659 11.6625 9.57292 11.6625 10.354 10.8814Z" stroke="#299393" strokeWidth="1.5"/>
                    </svg>
                    <span className="field-label">
                      {selectedPrice || 'Цена'}
                    </span>
                    <svg 
                      className={`dropdown-arrow ${openDropdown === 'price' ? 'open' : ''}`}
                      width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M3 4.5L6 7.5L9 4.5" stroke="#299393" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  
                  {/* Property Type Field */}
                  <div className="search-field" onClick={() => handleDropdownToggle('propertyType')}>
                    <svg width="24" height="24" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M2.66699 10.5882L7.66699 4.58823M7.66699 4.58823L13.081 10.0022C13.371 10.2922 13.515 10.4362 13.698 10.5122C13.882 10.5882 14.087 10.5882 14.495 10.5882H22.667L18.867 6.02823C18.277 5.32023 17.982 4.96623 17.579 4.77723C17.175 4.58823 16.715 4.58823 15.794 4.58823H7.66699Z" stroke="#299393" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M11.667 8.58823V20.5882M11.667 20.5882H3.66699V9.44523M11.667 20.5882H21.667V9.58823M4.66699 8.08823V4.58823M7.67499 12.5882H7.66599M7.66699 20.5882V16.5882M15.667 14.5882H17.667" stroke="#299393" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <span className="field-label">
                      {selectedPropertyType || <p>Тип</p>}
                    </span>
                    <svg 
                      className={`dropdown-arrow ${openDropdown === 'propertyType' ? 'open' : ''}`}
                      width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M3 4.5L6 7.5L9 4.5" stroke="#299393" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  
                  <button className="search-button">
                    <svg width="24" height="24" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M16.893 17.5082L19.973 20.5882M19 12.0882C19 14.0774 18.2098 15.985 16.8033 17.3915C15.3968 18.7981 13.4891 19.5882 11.5 19.5882C9.51088 19.5882 7.60322 18.7981 6.1967 17.3915C4.79018 15.985 4 14.0774 4 12.0882C4 10.0991 4.79018 8.19145 6.1967 6.78493C7.60322 5.3784 9.51088 4.58823 11.5 4.58823C13.4891 4.58823 15.3968 5.3784 16.8033 6.78493C18.2098 8.19145 19 10.0991 19 12.0882Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    </button>
                  </div>

                  {/* Location Dropdown */}
                {openDropdown === 'location' && (
                  <div className="search-dropdown location-dropdown">
                    <div className="dropdown-input">
                      <input
                        type="text"
                        placeholder="Търсете град..."
                        value={locationValue}
                        onChange={(e) => setLocationValue(e.target.value)}
                        className="city-search-input"
                        autoFocus
                      />
                    </div>
                    <div className="dropdown-list">
                      {cities
                        .filter(city => 
                          city.toLowerCase().includes(locationValue.toLowerCase())
                        )
                        .map((city, index) => (
                          <div
                            key={index}
                            className="dropdown-item"
                            onClick={() => handleCitySelect(city)}
                          >
                            <LocationIcon />
                            <span>{city}</span>
                          </div>
                        ))}
                    </div>
                  </div>
                )}

                {/* Price Dropdown */}
                {openDropdown === 'price' && (
                  <div className="search-dropdown price-dropdown">
                    <div className="price-range-section">
                      <h4>Персонализиран диапазон</h4>
                      <div className="price-inputs">
                        <input
                          type="number"
                          placeholder="Мин. цена"
                          value={priceRange.min}
                          onChange={(e) => setPriceRange({...priceRange, min: e.target.value})}
                          className="price-input"
                        />
                        <span className="price-separator">-</span>
                        <input
                          type="number"
                          placeholder="��акс. цена"
                          value={priceRange.max}
                          onChange={(e) => setPriceRange({...priceRange, max: e.target.value})}
                          className="price-input"
                        />
                        <button 
                          className="apply-price-btn"
                          onClick={handleCustomPriceSubmit}
                        >
                          Приложи
                        </button>
                      </div>
                    </div>
                    <div className="price-divider"></div>
                    <div className="dropdown-list">
                      {priceRanges.map((price, index) => (
                        <div
                          key={index}
                          className="dropdown-item"
                          onClick={() => handlePriceSelect(price)}
                        >
                          <span>{price}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Property Type Dropdown */}
                {openDropdown === 'propertyType' && (
                  <div className="search-dropdown property-type-dropdown">
                    <div className="dropdown-list">
                      {propertyTypes.map((type, index) => (
                        <div
                          key={index}
                          className="dropdown-item"
                          onClick={() => handlePropertyTypeSelect(type)}
                        >
                          <span>{type}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  )}
                </div>

                <div className="advanced-search">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15.7071 8.79533C16.0976 8.40481 16.0976 7.77164 15.7071 7.38112L9.34315 1.01716C8.95262 0.626634 8.31946 0.626634 7.92893 1.01716C7.53841 1.40768 7.53841 2.04085 7.92893 2.43137L13.5858 8.08823L7.92893 13.7451C7.53841 14.1356 7.53841 14.7688 7.92893 15.1593C8.31946 15.5498 8.95262 15.5498 9.34315 15.1593L15.7071 8.79533ZM0 8.08823V9.08823H15V8.08823V7.08823H0V8.08823Z" fill="white"/>
                  </svg>
                  <span>Разширено търсене</span>
                </div>
              </div>
            ) : (
              // Simple form for other tabs
              <div className="simple-form-container">
                <div className="simple-form">
                  <div className="form-field">
                    <LocationIcon />
                    <input 
                      type="text" 
                      placeholder="Въведете локация..."
                      value={locationValue}
                      onChange={(e) => setLocationValue(e.target.value)}
                      className="location-input"
                    />
                    <span className="field-label">Локация</span>
                  </div>
                  
                  <button 
                    className="continue-button"
                    onClick={handleContinue}
                    disabled={!locationValue.trim()}
                  >
                    Продължи
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
