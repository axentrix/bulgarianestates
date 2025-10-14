'use client'

import { useState } from 'react'

export default function AdvancedSearchPage() {
  const [formData, setFormData] = useState({
    searchType: 'sale',
    referenceNumber: '',
    keyword: '',
    country: '',
    region: '',
    city: '',
    district: '',
    searchEntireArea: false,
    complex: '',
    propertyType: 'residential',
    allPropertyTypes: false,
    currency: 'EUR',
    priceFrom: '0',
    priceTo: '1000000',
    areaFilters: [] as string[],
    floorFilters: [] as string[],
    bedroomFilters: [] as string[],
    yardFilters: [] as string[]
  })

  const handleCheckboxChange = (category: string, value: string) => {
    setFormData(prev => {
      const key = `${category}Filters` as keyof typeof formData
      const currentValues = prev[key] as string[]
      
      return {
        ...prev,
        [key]: currentValues.includes(value)
          ? currentValues.filter(item => item !== value)
          : [...currentValues, value]
      }
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Advanced search submitted:', formData)
    alert('Заявката е изпратена успешно!')
  }

  return (
    <div className="advanced-search-page">
      <div className="advanced-search-container">
        <h1 className="advanced-search-title">Разширено търсене</h1>
        
        <div className="advanced-search-card">
          <form onSubmit={handleSubmit} className="advanced-search-form">
            
            {/* Interest Type Section */}
            <div className="form-section-advanced">
              <label className="section-label-advanced">Интересувам се от</label>
              <div className="radio-buttons-row">
                <button
                  type="button"
                  className={`radio-btn-large ${formData.searchType === 'sale' ? 'active' : ''}`}
                  onClick={() => setFormData({ ...formData, searchType: 'sale' })}
                >
                  <span className={`radio-circle-large ${formData.searchType === 'sale' ? 'active' : ''}`}>
                    {formData.searchType === 'sale' && <span className="radio-dot-large" />}
                  </span>
                  Имоти за продажба
                </button>
                <button
                  type="button"
                  className={`radio-btn-large ${formData.searchType === 'rent' ? 'active' : ''}`}
                  onClick={() => setFormData({ ...formData, searchType: 'rent' })}
                >
                  <span className={`radio-circle-large ${formData.searchType === 'rent' ? 'active' : ''}`}>
                    {formData.searchType === 'rent' && <span className="radio-dot-large" />}
                  </span>
                  Имоти под наем
                </button>
              </div>
            </div>

            {/* Reference Number and Keyword Row */}
            <div className="input-row-advanced">
              <input
                type="text"
                placeholder="Референтен номер"
                className="text-input-advanced"
                value={formData.referenceNumber}
                onChange={(e) => setFormData({ ...formData, referenceNumber: e.target.value })}
              />
              <input
                type="text"
                placeholder="Ключова дума"
                className="text-input-advanced"
                value={formData.keyword}
                onChange={(e) => setFormData({ ...formData, keyword: e.target.value })}
              />
            </div>

            {/* Location Dropdowns Row */}
            <div className="dropdowns-row-advanced">
              <div className="dropdown-field-advanced">
                <input
                  type="text"
                  placeholder="Държава"
                  className="dropdown-input-advanced"
                  value={formData.country}
                  onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                />
                <svg className="chevron-down-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5.79279 9.29301C5.98031 9.10553 6.23462 9.00022 6.49979 9.00022C6.76495 9.00022 7.01926 9.10553 7.20679 9.29301L12.4998 14.586L17.7928 9.29301C17.885 9.1975 17.9954 9.12131 18.1174 9.0689C18.2394 9.01649 18.3706 8.98891 18.5034 8.98775C18.6362 8.9866 18.7678 9.0119 18.8907 9.06218C19.0136 9.11246 19.1253 9.18672 19.2192 9.28061C19.3131 9.3745 19.3873 9.48615 19.4376 9.60905C19.4879 9.73195 19.5132 9.86363 19.512 9.99641C19.5109 10.1292 19.4833 10.2604 19.4309 10.3824C19.3785 10.5044 19.3023 10.6148 19.2068 10.707L13.2068 16.707C13.0193 16.8945 12.765 16.9998 12.4998 16.9998C12.2346 16.9998 11.9803 16.8945 11.7928 16.707L5.79279 10.707C5.60532 10.5195 5.5 10.2652 5.5 10C5.5 9.73484 5.60532 9.48053 5.79279 9.29301Z" fill="black"/>
                </svg>
              </div>
              <div className="dropdown-field-advanced">
                <input
                  type="text"
                  placeholder="Област"
                  className="dropdown-input-advanced"
                  value={formData.region}
                  onChange={(e) => setFormData({ ...formData, region: e.target.value })}
                />
                <svg className="chevron-down-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5.79279 9.29301C5.98031 9.10553 6.23462 9.00022 6.49979 9.00022C6.76495 9.00022 7.01926 9.10553 7.20679 9.29301L12.4998 14.586L17.7928 9.29301C17.885 9.1975 17.9954 9.12131 18.1174 9.0689C18.2394 9.01649 18.3706 8.98891 18.5034 8.98775C18.6362 8.9866 18.7678 9.0119 18.8907 9.06218C19.0136 9.11246 19.1253 9.18672 19.2192 9.28061C19.3131 9.3745 19.3873 9.48615 19.4376 9.60905C19.4879 9.73195 19.5132 9.86363 19.512 9.99641C19.5109 10.1292 19.4833 10.2604 19.4309 10.3824C19.3785 10.5044 19.3023 10.6148 19.2068 10.707L13.2068 16.707C13.0193 16.8945 12.765 16.9998 12.4998 16.9998C12.2346 16.9998 11.9803 16.8945 11.7928 16.707L5.79279 10.707C5.60532 10.5195 5.5 10.2652 5.5 10C5.5 9.73484 5.60532 9.48053 5.79279 9.29301Z" fill="black"/>
                </svg>
              </div>
              <div className="dropdown-field-advanced">
                <input
                  type="text"
                  placeholder="Населено място"
                  className="dropdown-input-advanced"
                  value={formData.city}
                  onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                />
                <svg className="chevron-down-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5.79279 9.29301C5.98031 9.10553 6.23462 9.00022 6.49979 9.00022C6.76495 9.00022 7.01926 9.10553 7.20679 9.29301L12.4998 14.586L17.7928 9.29301C17.885 9.1975 17.9954 9.12131 18.1174 9.0689C18.2394 9.01649 18.3706 8.98891 18.5034 8.98775C18.6362 8.9866 18.7678 9.0119 18.8907 9.06218C19.0136 9.11246 19.1253 9.18672 19.2192 9.28061C19.3131 9.3745 19.3873 9.48615 19.4376 9.60905C19.4879 9.73195 19.5132 9.86363 19.512 9.99641C19.5109 10.1292 19.4833 10.2604 19.4309 10.3824C19.3785 10.5044 19.3023 10.6148 19.2068 10.707L13.2068 16.707C13.0193 16.8945 12.765 16.9998 12.4998 16.9998C12.2346 16.9998 11.9803 16.8945 11.7928 16.707L5.79279 10.707C5.60532 10.5195 5.5 10.2652 5.5 10C5.5 9.73484 5.60532 9.48053 5.79279 9.29301Z" fill="black"/>
                </svg>
              </div>
              <div className="dropdown-field-advanced">
                <input
                  type="text"
                  placeholder="Квартал"
                  className="dropdown-input-advanced"
                  value={formData.district}
                  onChange={(e) => setFormData({ ...formData, district: e.target.value })}
                />
                <svg className="chevron-down-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5.79279 9.29301C5.98031 9.10553 6.23462 9.00022 6.49979 9.00022C6.76495 9.00022 7.01926 9.10553 7.20679 9.29301L12.4998 14.586L17.7928 9.29301C17.885 9.1975 17.9954 9.12131 18.1174 9.0689C18.2394 9.01649 18.3706 8.98891 18.5034 8.98775C18.6362 8.9866 18.7678 9.0119 18.8907 9.06218C19.0136 9.11246 19.1253 9.18672 19.2192 9.28061C19.3131 9.3745 19.3873 9.48615 19.4376 9.60905C19.4879 9.73195 19.5132 9.86363 19.512 9.99641C19.5109 10.1292 19.4833 10.2604 19.4309 10.3824C19.3785 10.5044 19.3023 10.6148 19.2068 10.707L13.2068 16.707C13.0193 16.8945 12.765 16.9998 12.4998 16.9998C12.2346 16.9998 11.9803 16.8945 11.7928 16.707L5.79279 10.707C5.60532 10.5195 5.5 10.2652 5.5 10C5.5 9.73484 5.60532 9.48053 5.79279 9.29301Z" fill="black"/>
                </svg>
              </div>
            </div>

            {/* Search Entire Area Checkbox */}
            <label className="checkbox-label-advanced">
              <input
                type="checkbox"
                className="checkbox-input-advanced"
                checked={formData.searchEntireArea}
                onChange={(e) => setFormData({ ...formData, searchEntireArea: e.target.checked })}
              />
              <span className="checkbox-box-advanced" />
              <span className="checkbox-text-advanced">Търси в целия район</span>
            </label>

            {/* Complex Dropdown */}
            <div className="dropdown-field-advanced full-width">
              <input
                type="text"
                placeholder="Избери комплекс..."
                className="dropdown-input-advanced"
                value={formData.complex}
                onChange={(e) => setFormData({ ...formData, complex: e.target.value })}
              />
              <svg className="chevron-down-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5.79279 9.29301C5.98031 9.10553 6.23462 9.00022 6.49979 9.00022C6.76495 9.00022 7.01926 9.10553 7.20679 9.29301L12.4998 14.586L17.7928 9.29301C17.885 9.1975 17.9954 9.12131 18.1174 9.0689C18.2394 9.01649 18.3706 8.98891 18.5034 8.98775C18.6362 8.9866 18.7678 9.0119 18.8907 9.06218C19.0136 9.11246 19.1253 9.18672 19.2192 9.28061C19.3131 9.3745 19.3873 9.48615 19.4376 9.60905C19.4879 9.73195 19.5132 9.86363 19.512 9.99641C19.5109 10.1292 19.4833 10.2604 19.4309 10.3824C19.3785 10.5044 19.3023 10.6148 19.2068 10.707L13.2068 16.707C13.0193 16.8945 12.765 16.9998 12.4998 16.9998C12.2346 16.9998 11.9803 16.8945 11.7928 16.707L5.79279 10.707C5.60532 10.5195 5.5 10.2652 5.5 10C5.5 9.73484 5.60532 9.48053 5.79279 9.29301Z" fill="black"/>
              </svg>
            </div>

            {/* Property Type Section */}
            <div className="form-section-advanced">
              <label className="section-label-advanced">Тип на имота</label>
              <div className="radio-buttons-grid">
                <button
                  type="button"
                  className={`radio-btn-large ${formData.propertyType === 'residential' ? 'active' : ''}`}
                  onClick={() => setFormData({ ...formData, propertyType: 'residential' })}
                >
                  <span className={`radio-circle-large ${formData.propertyType === 'residential' ? 'active' : ''}`}>
                    {formData.propertyType === 'residential' && <span className="radio-dot-large" />}
                  </span>
                  Частен имот
                </button>
                <button
                  type="button"
                  className={`radio-btn-large ${formData.propertyType === 'business' ? 'active' : ''}`}
                  onClick={() => setFormData({ ...formData, propertyType: 'business' })}
                >
                  <span className={`radio-circle-large ${formData.propertyType === 'business' ? 'active' : ''}`}>
                    {formData.propertyType === 'business' && <span className="radio-dot-large" />}
                  </span>
                  Бизнес имот
                </button>
                <button
                  type="button"
                  className={`radio-btn-large ${formData.propertyType === 'plot' ? 'active' : ''}`}
                  onClick={() => setFormData({ ...formData, propertyType: 'plot' })}
                >
                  <span className={`radio-circle-large ${formData.propertyType === 'plot' ? 'active' : ''}`}>
                    {formData.propertyType === 'plot' && <span className="radio-dot-large" />}
                  </span>
                  Парцел
                </button>
                <button
                  type="button"
                  className={`radio-btn-large ${formData.propertyType === 'other' ? 'active' : ''}`}
                  onClick={() => setFormData({ ...formData, propertyType: 'other' })}
                >
                  <span className={`radio-circle-large ${formData.propertyType === 'other' ? 'active' : ''}`}>
                    {formData.propertyType === 'other' && <span className="radio-dot-large" />}
                  </span>
                  Друго
                </button>
              </div>
              
              <label className="checkbox-label-advanced">
                <input
                  type="checkbox"
                  className="checkbox-input-advanced"
                  checked={formData.allPropertyTypes}
                  onChange={(e) => setFormData({ ...formData, allPropertyTypes: e.target.checked })}
                />
                <span className="checkbox-box-advanced" />
                <span className="checkbox-text-advanced">Всички типове имоти</span>
              </label>
            </div>

            {/* Price Section */}
            <div className="price-section-advanced">
              <label className="section-label-advanced">Цена</label>
              
              <div className="currency-selector-advanced">
                <span className="currency-label">Валута</span>
                <div className="dropdown-field-advanced currency-dropdown">
                  <input
                    type="text"
                    className="dropdown-input-advanced"
                    value={formData.currency}
                    onChange={(e) => setFormData({ ...formData, currency: e.target.value })}
                  />
                  <svg className="chevron-down-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5.79279 9.29301C5.98031 9.10553 6.23462 9.00022 6.49979 9.00022C6.76495 9.00022 7.01926 9.10553 7.20679 9.29301L12.4998 14.586L17.7928 9.29301C17.885 9.1975 17.9954 9.12131 18.1174 9.0689C18.2394 9.01649 18.3706 8.98891 18.5034 8.98775C18.6362 8.9866 18.7678 9.0119 18.8907 9.06218C19.0136 9.11246 19.1253 9.18672 19.2192 9.28061C19.3131 9.3745 19.3873 9.48615 19.4376 9.60905C19.4879 9.73195 19.5132 9.86363 19.512 9.99641C19.5109 10.1292 19.4833 10.2604 19.4309 10.3824C19.3785 10.5044 19.3023 10.6148 19.2068 10.707L13.2068 16.707C13.0193 16.8945 12.765 16.9998 12.4998 16.9998C12.2346 16.9998 11.9803 16.8945 11.7928 16.707L5.79279 10.707C5.60532 10.5195 5.5 10.2652 5.5 10C5.5 9.73484 5.60532 9.48053 5.79279 9.29301Z" fill="black"/>
                  </svg>
                </div>
              </div>

              <div className="price-range-advanced">
                <span className="price-label">От</span>
                <div className="price-input-wrapper">
                  <input
                    type="text"
                    className="price-input-advanced"
                    value={formData.priceFrom}
                    onChange={(e) => setFormData({ ...formData, priceFrom: e.target.value })}
                  />
                  <svg className="euro-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15.5 21C13.5333 21 11.7833 20.4417 10.25 19.325C8.71667 18.2083 7.63333 16.7667 7 15H3.5V13H6.55C6.5 12.6 6.47933 12.2293 6.488 11.888C6.49667 11.5467 6.51733 11.2507 6.55 11H3.5V9H7C7.63333 7.23333 8.71667 5.79167 10.25 4.675C11.7833 3.55833 13.5333 3 15.5 3C16.65 3 17.7377 3.20433 18.763 3.613C19.7883 4.02167 20.7007 4.584 21.5 5.3L20.075 6.7C19.4583 6.16667 18.7627 5.75 17.988 5.45C17.2133 5.15 16.384 5 15.5 5C14.0833 5 12.8167 5.371 11.7 6.113C10.5833 6.855 9.74167 7.81733 9.175 9H15.5V11H8.575C8.50833 11.45 8.48333 11.846 8.5 12.188C8.51667 12.53 8.54167 12.8007 8.575 13H15.5V15H9.175C9.74167 16.1833 10.5833 17.146 11.7 17.888C12.8167 18.63 14.0833 19.0007 15.5 19C16.3833 19 17.2127 18.85 17.988 18.55C18.7633 18.25 19.459 17.8333 20.075 17.3L21.5 18.7C20.7 19.4167 19.7873 19.9793 18.762 20.388C17.7367 20.7967 16.6493 21.0007 15.5 21Z" fill="black"/>
                  </svg>
                </div>
                <span className="price-label">До</span>
                <div className="price-input-wrapper">
                  <input
                    type="text"
                    className="price-input-advanced"
                    value={formData.priceTo}
                    onChange={(e) => setFormData({ ...formData, priceTo: e.target.value })}
                  />
                  <svg className="euro-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15.5 21C13.5333 21 11.7833 20.4417 10.25 19.325C8.71667 18.2083 7.63333 16.7667 7 15H3.5V13H6.55C6.5 12.6 6.47933 12.2293 6.488 11.888C6.49667 11.5467 6.51733 11.2507 6.55 11H3.5V9H7C7.63333 7.23333 8.71667 5.79167 10.25 4.675C11.7833 3.55833 13.5333 3 15.5 3C16.65 3 17.7377 3.20433 18.763 3.613C19.7883 4.02167 20.7007 4.584 21.5 5.3L20.075 6.7C19.4583 6.16667 18.7627 5.75 17.988 5.45C17.2133 5.15 16.384 5 15.5 5C14.0833 5 12.8167 5.371 11.7 6.113C10.5833 6.855 9.74167 7.81733 9.175 9H15.5V11H8.575C8.50833 11.45 8.48333 11.846 8.5 12.188C8.51667 12.53 8.54167 12.8007 8.575 13H15.5V15H9.175C9.74167 16.1833 10.5833 17.146 11.7 17.888C12.8167 18.63 14.0833 19.0007 15.5 19C16.3833 19 17.2127 18.85 17.988 18.55C18.7633 18.25 19.459 17.8333 20.075 17.3L21.5 18.7C20.7 19.4167 19.7873 19.9793 18.762 20.388C17.7367 20.7967 16.6493 21.0007 15.5 21Z" fill="black"/>
                  </svg>
                </div>
              </div>
            </div>

            {/* Filters Grid */}
            <div className="filters-grid-advanced">
              {/* Area Filter */}
              <div className="filter-card-advanced">
                <svg className="filter-icon" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12.5 28H7.16667C6.45942 28 5.78115 27.719 5.28105 27.219C4.78095 26.7189 4.5 26.0406 4.5 25.3333V6.66667C4.5 5.95942 4.78095 5.28115 5.28105 4.78105C5.78115 4.28095 6.45942 4 7.16667 4H25.8333C26.5406 4 27.2189 4.28095 27.719 4.78105C28.219 5.28115 28.5 5.95942 28.5 6.66667V25.3333C28.5 26.0406 28.219 26.7189 27.719 27.219C27.2189 27.719 26.5406 28 25.8333 28H19.1667M12.5 4V13.3333M28.5 13.3333H19.1667M4.5 20H16.5" stroke="#4F2C1D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <h3 className="filter-title">Площ /м2/</h3>
                <div className="filter-options">
                  {['до 50 кв.м', '50 кв.м -100 кв.м', 'над 100 кв.м'].map(option => (
                    <label key={option} className="filter-checkbox-label">
                      <input
                        type="checkbox"
                        className="checkbox-input-advanced"
                        checked={formData.areaFilters.includes(option)}
                        onChange={() => handleCheckboxChange('area', option)}
                      />
                      <span className="checkbox-box-advanced" />
                      <span className="checkbox-text-filter">{option}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Floor Filter */}
              <div className="filter-card-advanced">
                <svg className="filter-icon" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4.25 29.3333V26.6667H8.91667V20.6667H14.9167V14.6667H20.9167V8.66667H26.9167V4H29.5833V11.3333H23.5833V17.3333H17.5833V23.3333H11.5833V29.3333H4.25Z" fill="#4F2C1D"/>
                </svg>
                <h3 className="filter-title">Етаж</h3>
                <div className="filter-options">
                  {['0', '1-ви', '2-ри', 'Над 2-ри'].map(option => (
                    <label key={option} className="filter-checkbox-label">
                      <input
                        type="checkbox"
                        className="checkbox-input-advanced"
                        checked={formData.floorFilters.includes(option)}
                        onChange={() => handleCheckboxChange('floor', option)}
                      />
                      <span className="checkbox-box-advanced" />
                      <span className="checkbox-text-filter">{option}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Bedrooms Filter */}
              <div className="filter-card-advanced">
                <svg className="filter-icon" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2.66602 25.3334V17.3334C2.66602 16.7334 2.78824 16.1889 3.03268 15.7C3.27713 15.2111 3.59935 14.7778 3.99935 14.4V10.6667C3.99935 9.55558 4.38824 8.61113 5.16602 7.83335C5.94379 7.05558 6.88824 6.66669 7.99935 6.66669H13.3327C13.8438 6.66669 14.3216 6.76135 14.766 6.95069C15.2105 7.14002 15.6216 7.40091 15.9993 7.73335C16.3771 7.40002 16.7882 7.13913 17.2327 6.95069C17.6771 6.76224 18.1549 6.66758 18.666 6.66669H23.9993C25.1105 6.66669 26.0549 7.05558 26.8327 7.83335C27.6105 8.61113 27.9993 9.55558 27.9993 10.6667V14.4C28.3993 14.7778 28.7216 15.2111 28.966 15.7C29.2105 16.1889 29.3327 16.7334 29.3327 17.3334V25.3334H26.666V22.6667H5.33268V25.3334H2.66602ZM17.3327 13.3334H25.3327V10.6667C25.3327 10.2889 25.2047 9.97246 24.9487 9.71735C24.6927 9.46224 24.3762 9.33424 23.9993 9.33335H18.666C18.2882 9.33335 17.9718 9.46135 17.7167 9.71735C17.4616 9.97335 17.3336 10.2898 17.3327 10.6667V13.3334ZM6.66602 13.3334H14.666V10.6667C14.666 10.2889 14.538 9.97246 14.282 9.71735C14.026 9.46224 13.7096 9.33424 13.3327 9.33335H7.99935C7.62157 9.33335 7.30513 9.46135 7.05002 9.71735C6.7949 9.97335 6.6669 10.2898 6.66602 10.6667V13.3334ZM5.33268 20H26.666V17.3334C26.666 16.9556 26.538 16.6391 26.282 16.384C26.026 16.1289 25.7096 16.0009 25.3327 16H6.66602C6.28824 16 5.97179 16.128 5.71668 16.384C5.46157 16.64 5.33357 16.9565 5.33268 17.3334V20Z" fill="#4F2C1D"/>
                </svg>
                <h3 className="filter-title">Брой спални</h3>
                <div className="filter-options">
                  {['1', '2', 'Над 2'].map(option => (
                    <label key={option} className="filter-checkbox-label">
                      <input
                        type="checkbox"
                        className="checkbox-input-advanced"
                        checked={formData.bedroomFilters.includes(option)}
                        onChange={() => handleCheckboxChange('bedroom', option)}
                      />
                      <span className="checkbox-box-advanced" />
                      <span className="checkbox-text-filter">{option}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Yard Filter */}
              <div className="filter-card-advanced">
                <svg className="filter-icon" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16.75 25.3333C16.75 23.4871 16.0491 21.8631 14.6473 20.4613C13.2456 19.0596 11.6216 18.3591 9.77533 18.36C9.77533 20.2062 10.4762 21.8302 11.878 23.232C13.2798 24.6338 14.9038 25.3342 16.75 25.3333ZM16.75 18.3947C17.2762 18.3947 17.7096 18.2249 18.05 17.8853C18.3904 17.5458 18.5607 17.1124 18.5607 16.5853V16.436C18.7038 16.5516 18.8611 16.6387 19.0327 16.6973C19.2051 16.756 19.3962 16.7853 19.606 16.7853C20.1322 16.7853 20.574 16.6067 20.9313 16.2493C21.2887 15.892 21.4673 15.4498 21.4673 14.9227C21.4673 14.5298 21.3749 14.188 21.19 13.8973C21.0042 13.6067 20.7482 13.3947 20.422 13.2613C20.7482 13.128 21.0042 12.916 21.19 12.6253C21.3758 12.3347 21.4682 11.9929 21.4673 11.6C21.4673 11.0738 21.2887 10.632 20.9313 10.2747C20.574 9.91733 20.1322 9.73867 19.606 9.73867C19.3962 9.73867 19.2051 9.76756 19.0327 9.82533C18.8611 9.884 18.7038 9.97156 18.5607 10.088V9.888C18.5607 9.36089 18.3904 8.92756 18.05 8.588C17.7096 8.24756 17.2762 8.07733 16.75 8.07733C16.2238 8.07733 15.7904 8.24756 15.45 8.588C15.1096 8.92844 14.9393 9.36178 14.9393 9.888V10.088C14.7962 9.97156 14.6384 9.884 14.466 9.82533C14.2944 9.76756 14.1033 9.73867 13.8927 9.73867C13.3673 9.73867 12.926 9.91733 12.5687 10.2747C12.2113 10.632 12.0318 11.0738 12.03 11.6C12.03 11.9929 12.1233 12.3351 12.31 12.6267C12.4949 12.9164 12.7504 13.128 13.0767 13.2613C12.7504 13.3947 12.4944 13.6067 12.3087 13.8973C12.1229 14.188 12.03 14.5302 12.03 14.924C12.03 15.4502 12.2087 15.892 12.566 16.2493C12.9233 16.6067 13.3656 16.7853 13.8927 16.7853C14.1024 16.7853 14.2936 16.756 14.466 16.6973C14.6376 16.6396 14.7949 16.5524 14.938 16.436V16.5853C14.938 17.1116 15.1082 17.5449 15.4487 17.8853C15.7891 18.2258 16.2224 18.3956 16.7487 18.3947M16.7487 15.892C16.0171 15.892 15.3958 15.6378 14.8847 15.1293C14.3736 14.6209 14.118 13.9987 14.118 13.2627C14.118 12.5302 14.3736 11.9084 14.8847 11.3973C15.3958 10.8862 16.0176 10.6307 16.75 10.6307C17.4824 10.6307 18.1038 10.8862 18.614 11.3973C19.1242 11.9084 19.3798 12.5298 19.3807 13.2613C19.3807 13.9982 19.1251 14.6209 18.614 15.1293C18.1029 15.6378 17.4816 15.892 16.75 15.892M16.75 25.3333C18.5962 25.3333 20.2202 24.6324 21.622 23.2307C23.0238 21.8289 23.7247 20.2049 23.7247 18.3587C21.8784 18.3587 20.2544 19.0596 18.8527 20.4613C17.4509 21.8631 16.75 23.4871 16.75 25.3333ZM6.90467 28C6.29044 28 5.778 27.7947 5.36733 27.384C4.95667 26.9733 4.75089 26.4609 4.75 25.8467V6.15333C4.75 5.54 4.95578 5.028 5.36733 4.61733C5.77889 4.20667 6.29089 4.00089 6.90333 4H26.5967C27.21 4 27.722 4.20578 28.1327 4.61733C28.5433 5.02889 28.7491 5.54133 28.75 6.15467V25.8467C28.75 26.46 28.5442 26.9724 28.1327 27.384C27.7211 27.7956 27.2091 28.0009 26.5967 28H6.90467ZM6.90467 26.6667H26.5967C26.8011 26.6667 26.9891 26.5813 27.1607 26.4107C27.3322 26.24 27.4176 26.0516 27.4167 25.8453V6.15467C27.4167 5.94933 27.3313 5.76089 27.1607 5.58933C26.99 5.41778 26.802 5.33244 26.5967 5.33333H6.90333C6.69889 5.33333 6.51089 5.41867 6.33933 5.58933C6.16778 5.76 6.08244 5.948 6.08333 6.15333V25.8467C6.08333 26.0511 6.16867 26.2391 6.33933 26.4107C6.51 26.5822 6.698 26.6676 6.90333 26.6667" fill="#4F2C1D"/>
                </svg>
                <h3 className="filter-title">Площ на градината/ двора</h3>
                <div className="filter-options">
                  {['до 200 кв.м', '200 кв.м -400 кв.м', 'над 400 кв.м'].map(option => (
                    <label key={option} className="filter-checkbox-label">
                      <input
                        type="checkbox"
                        className="checkbox-input-advanced"
                        checked={formData.yardFilters.includes(option)}
                        onChange={() => handleCheckboxChange('yard', option)}
                      />
                      <span className="checkbox-box-advanced" />
                      <span className="checkbox-text-filter">{option}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <button type="submit" className="submit-btn-advanced">
              Изпрати заявката
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}
