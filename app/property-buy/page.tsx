'use client'

import { useState } from 'react'

export default function PropertyBuyPage() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    city: '',
    district: '',
    location: 'other',
    locationDropdown: '',
    propertyType: 'residential',
    residentialTypes: [] as string[],
    comments: '',
    privacyAgreed: false
  })

  const locationOptions = [
    { id: 'seaside', label: 'На море' },
    { id: 'city', label: 'В град' },
    { id: 'village', label: 'В село' },
    { id: 'other', label: 'Друго' }
  ]

  const propertyTypeOptions = [
    { id: 'residential', label: 'Частен имот' },
    { id: 'business', label: 'Бизнес имот' },
    { id: 'land', label: 'Парцел' },
    { id: 'other', label: 'Друго' }
  ]

  const residentialOptions = [
    'Имоти в строеж',
    'Апартамент',
    'Външно паркомясто',
    'Гараж',
    'Едностаен',
    'Двустаен',
    'Тристаен',
    'Многостаен',
    'Мезонет',
    'Паркомясто',
    'дворно парко място',
    'Етаж от къща',
    'Къща',
    'Kомплекс от затворен тип'
  ]

  const handleCheckboxChange = (option: string) => {
    setFormData(prev => ({
      ...prev,
      residentialTypes: prev.residentialTypes.includes(option)
        ? prev.residentialTypes.filter(item => item !== option)
        : [...prev.residentialTypes, option]
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    alert('Вашата заявка е изпратена успешно!')
  }

  return (
    <div className="property-buy-page">
      <div className="property-buy-container">
        <div className="property-buy-left">
          <div className="property-buy-left-inner">
            <h1 className="property-buy-title">Заявка за покупка на недвижим имот</h1>
            
            <div className="property-buy-form-card">
              <form onSubmit={handleSubmit} className="property-buy-form">
                <h2 className="property-buy-form-title">Заявка за покупка</h2>

                <div className="form-field">
                  <input
                    type="text"
                    placeholder="Име"
                    className="form-input-buy"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                  />
                </div>

                <div className="form-field">
                  <input
                    type="tel"
                    placeholder="Мобилен телефон"
                    className="form-input-buy"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    required
                  />
                </div>

                <div className="form-field">
                  <input
                    type="email"
                    placeholder="Имейл адрес"
                    className="form-input-buy"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                  />
                </div>

                <div className="form-field">
                  <input
                    type="text"
                    placeholder="Предпочитан град"
                    className="form-input-buy"
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    required
                  />
                </div>

                <div className="form-field">
                  <input
                    type="text"
                    placeholder="Предпочитан квартал/район"
                    className="form-input-buy"
                    value={formData.district}
                    onChange={(e) => setFormData({ ...formData, district: e.target.value })}
                  />
                </div>

                <div className="form-section-buy">
                  <label className="form-section-label-buy">Местоположение на имота</label>
                  <div className="location-buttons-buy">
                    {locationOptions.map(option => (
                      <button
                        key={option.id}
                        type="button"
                        className={`location-button-buy ${formData.location === option.id ? 'active' : ''}`}
                        onClick={() => setFormData({ ...formData, location: option.id })}
                      >
                        <span className={`radio-circle-buy ${formData.location === option.id ? 'active' : ''}`}>
                          {formData.location === option.id && <span className="radio-dot-buy" />}
                        </span>
                        {option.label}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="location-dropdown-box-buy">
                  <div className="dropdown-wrapper-buy">
                    <input
                      type="text"
                      placeholder="Местоположение на имота"
                      className="form-input-buy"
                      value={formData.locationDropdown}
                      onChange={(e) => setFormData({ ...formData, locationDropdown: e.target.value })}
                    />
                    <svg className="chevron-icon-buy" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5.29279 9.29302C5.48031 9.10555 5.73462 9.00023 5.99979 9.00023C6.26495 9.00023 6.51926 9.10555 6.70679 9.29302L11.9998 14.586L17.2928 9.29302C17.385 9.19751 17.4954 9.12133 17.6174 9.06892C17.7394 9.01651 17.8706 8.98892 18.0034 8.98777C18.1362 8.98662 18.2678 9.01192 18.3907 9.0622C18.5136 9.11248 18.6253 9.18673 18.7192 9.28063C18.8131 9.37452 18.8873 9.48617 18.9376 9.60907C18.9879 9.73196 19.0132 9.86364 19.012 9.99642C19.0109 10.1292 18.9833 10.2604 18.9309 10.3824C18.8785 10.5044 18.8023 10.6148 18.7068 10.707L12.7068 16.707C12.5193 16.8945 12.265 16.9998 11.9998 16.9998C11.7346 16.9998 11.4803 16.8945 11.2928 16.707L5.29279 10.707C5.10532 10.5195 5 10.2652 5 10C5 9.73486 5.10532 9.48055 5.29279 9.29302Z" fill="black"/>
                    </svg>
                  </div>
                </div>

                <div className="form-section-buy">
                  <label className="form-section-label-buy">Тип на имота</label>
                  <div className="property-type-buttons-buy">
                    {propertyTypeOptions.map(option => (
                      <button
                        key={option.id}
                        type="button"
                        className={`property-type-button-buy ${formData.propertyType === option.id ? 'active' : ''}`}
                        onClick={() => setFormData({ ...formData, propertyType: option.id })}
                      >
                        <span className={`radio-circle-buy ${formData.propertyType === option.id ? 'active' : ''}`}>
                          {formData.propertyType === option.id && <span className="radio-dot-buy" />}
                        </span>
                        {option.label}
                      </button>
                    ))}
                  </div>
                </div>

                {formData.propertyType === 'residential' && (
                  <div className="residential-types-box-buy">
                    <h3 className="residential-types-title-buy">Частен имот</h3>
                    <div className="residential-checkboxes-buy">
                      {residentialOptions.map(option => (
                        <label key={option} className="checkbox-label-buy">
                          <input
                            type="checkbox"
                            className="checkbox-input-buy"
                            checked={formData.residentialTypes.includes(option)}
                            onChange={() => handleCheckboxChange(option)}
                          />
                          <span className="checkbox-custom-buy" />
                          <span className="checkbox-text-buy">{option}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                )}

                <div className="form-section-buy">
                  <label className="form-section-label-buy">Допълнителни коментари</label>
                  <textarea
                    className="form-textarea-buy"
                    placeholder="Добавете коментар или изискване"
                    value={formData.comments}
                    onChange={(e) => setFormData({ ...formData, comments: e.target.value })}
                    rows={5}
                  />
                </div>

                <div className="form-checkbox-buy">
                  <input
                    type="checkbox"
                    id="privacy-buy"
                    className="checkbox-input-buy"
                    checked={formData.privacyAgreed}
                    onChange={(e) => setFormData({ ...formData, privacyAgreed: e.target.checked })}
                    required
                  />
                  <label htmlFor="privacy-buy" className="checkbox-label-text-buy">
                    Съгласен съм с политиката по личните данни на този сайт
                  </label>
                </div>

                <button type="submit" className="form-submit-btn-buy">
                  Изпрати заявката
                </button>
              </form>
            </div>
          </div>
        </div>

        <div className="property-buy-right">
          <div className="property-buy-right-sticky">
       

            <div className="advertisement-container-buy">
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/5fe702d6f7c1a80158df7a3f126b5f2ede5a64c3?width=296"
                alt="Bulgarian Estates Logo"
                className="ad-logo-buy"
              />

              <div className="ad-card-buy">
                <svg className="ad-icon-buy" width="44" height="45" viewBox="0 0 44 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M32.9993 19.2927C32.9993 15.4029 31.4541 11.6723 28.7036 8.9218C25.953 6.17127 22.2225 4.62603 18.3327 4.62603C14.4428 4.62603 10.7123 6.17127 7.96178 8.9218C5.21125 11.6723 3.66602 15.4029 3.66602 19.2927C3.66602 28.4465 13.8208 37.9799 17.2308 40.9242C17.5487 41.1626 17.9354 41.2913 18.3327 41.2909M32.9993 41.2927V35.7927M27.4993 41.2927C27.0131 41.2927 26.5468 41.0995 26.203 40.7557C25.8592 40.4119 25.666 39.9456 25.666 39.4594V32.126C25.666 31.8243 25.7404 31.5272 25.8827 31.2611C26.025 30.995 26.2308 30.7682 26.4818 30.6007L31.9818 26.934C32.2831 26.733 32.6372 26.6258 32.9993 26.6258C33.3615 26.6258 33.7156 26.733 34.0169 26.934L39.5169 30.6007C39.7679 30.7682 39.9737 30.995 40.116 31.2611C40.2583 31.5272 40.3327 31.8243 40.3327 32.126V39.4594C40.3327 39.9456 40.1395 40.4119 39.7957 40.7557C39.4519 41.0995 38.9856 41.2927 38.4993 41.2927H27.4993Z" stroke="#299393" strokeWidth="3.66667" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M18.332 24.7927C21.3696 24.7927 23.832 22.3303 23.832 19.2927C23.832 16.2551 21.3696 13.7927 18.332 13.7927C15.2945 13.7927 12.832 16.2551 12.832 19.2927C12.832 22.3303 15.2945 24.7927 18.332 24.7927Z" stroke="#299393" strokeWidth="3.66667" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <h2 className="ad-title-buy">Търсите имот?</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
