'use client'

import { useState } from 'react'

export default function PropertySellPage() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    city: '',
    district: '',
    date: '',
    location: 'other',
    locationDropdown: '',
    propertyType: 'residential',
    residentialTypes: [] as string[],
    description: '',
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
    <div className="property-sell-page">
      <div className="property-sell-container">
        <div className="property-sell-left">
          <div className="property-sell-left-inner">
            <h1 className="property-sell-title">Продайте имот с Бългериан Естейтс</h1>
            
            <div className="property-sell-form-card">
              <form onSubmit={handleSubmit} className="property-sell-form">
                <h2 className="property-sell-form-title">Заявка за оглед</h2>

                <div className="form-field">
                  <input
                    type="text"
                    placeholder="Име"
                    className="form-input-sell"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                  />
                </div>

                <div className="form-field">
                  <input
                    type="tel"
                    placeholder="Мобилен телефон"
                    className="form-input-sell"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    required
                  />
                </div>

                <div className="form-field">
                  <input
                    type="email"
                    placeholder="Имейл адрес"
                    className="form-input-sell"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                  />
                </div>

                <div className="form-field">
                  <input
                    type="text"
                    placeholder="Град"
                    className="form-input-sell"
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    required
                  />
                </div>

                <div className="form-field">
                  <input
                    type="text"
                    placeholder="Квартал/район"
                    className="form-input-sell"
                    value={formData.district}
                    onChange={(e) => setFormData({ ...formData, district: e.target.value })}
                  />
                </div>

                <div className="form-field">
                  <div className="date-input-wrapper-sell">
                    <input
                      type="date"
                      placeholder="Предпочитана дата"
                      className="form-input-sell"
                      value={formData.date}
                      onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    />
                    <svg className="calendar-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M16.5 5V3M7.5 5V3M3.25 8H20.75M3 10.044C3 7.929 3 6.871 3.436 6.063C3.83025 5.34231 4.44199 4.7645 5.184 4.412C6.04 4 7.16 4 9.4 4H14.6C16.84 4 17.96 4 18.816 4.412C19.569 4.774 20.18 5.352 20.564 6.062C21 6.872 21 7.93 21 10.045V14.957C21 17.072 21 18.13 20.564 18.938C20.1698 19.6587 19.558 20.2365 18.816 20.589C17.96 21 16.84 21 14.6 21H9.4C7.16 21 6.04 21 5.184 20.588C4.44214 20.2358 3.83041 19.6583 3.436 18.938C3 18.128 3 17.07 3 14.955V10.044Z" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </div>

                <div className="form-section-sell">
                  <label className="form-section-label-sell">Местоположение на имота</label>
                  <div className="location-buttons">
                    {locationOptions.map(option => (
                      <button
                        key={option.id}
                        type="button"
                        className={`location-button ${formData.location === option.id ? 'active' : ''}`}
                        onClick={() => setFormData({ ...formData, location: option.id })}
                      >
                        <span className={`radio-circle-sell ${formData.location === option.id ? 'active' : ''}`}>
                          {formData.location === option.id && <span className="radio-dot-sell" />}
                        </span>
                        {option.label}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="location-dropdown-box">
                  <div className="dropdown-wrapper">
                    <input
                      type="text"
                      placeholder="Местоположение на имота"
                      className="form-input-sell"
                      value={formData.locationDropdown}
                      onChange={(e) => setFormData({ ...formData, locationDropdown: e.target.value })}
                    />
                    <svg className="chevron-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5.29279 9.29302C5.48031 9.10555 5.73462 9.00023 5.99979 9.00023C6.26495 9.00023 6.51926 9.10555 6.70679 9.29302L11.9998 14.586L17.2928 9.29302C17.385 9.19751 17.4954 9.12133 17.6174 9.06892C17.7394 9.01651 17.8706 8.98892 18.0034 8.98777C18.1362 8.98662 18.2678 9.01192 18.3907 9.0622C18.5136 9.11248 18.6253 9.18673 18.7192 9.28063C18.8131 9.37452 18.8873 9.48617 18.9376 9.60907C18.9879 9.73196 19.0132 9.86364 19.012 9.99642C19.0109 10.1292 18.9833 10.2604 18.9309 10.3824C18.8785 10.5044 18.8023 10.6148 18.7068 10.707L12.7068 16.707C12.5193 16.8945 12.265 16.9998 11.9998 16.9998C11.7346 16.9998 11.4803 16.8945 11.2928 16.707L5.29279 10.707C5.10532 10.5195 5 10.2652 5 10C5 9.73486 5.10532 9.48055 5.29279 9.29302Z" fill="black"/>
                    </svg>
                  </div>
                </div>

                <div className="form-section-sell">
                  <label className="form-section-label-sell">Тип на имота</label>
                  <div className="property-type-buttons">
                    {propertyTypeOptions.map(option => (
                      <button
                        key={option.id}
                        type="button"
                        className={`property-type-button ${formData.propertyType === option.id ? 'active' : ''}`}
                        onClick={() => setFormData({ ...formData, propertyType: option.id })}
                      >
                        <span className={`radio-circle-sell ${formData.propertyType === option.id ? 'active' : ''}`}>
                          {formData.propertyType === option.id && <span className="radio-dot-sell" />}
                        </span>
                        {option.label}
                      </button>
                    ))}
                  </div>
                </div>

                {formData.propertyType === 'residential' && (
                  <div className="residential-types-box">
                    <h3 className="residential-types-title">Частен имот</h3>
                    <div className="residential-checkboxes">
                      {residentialOptions.map(option => (
                        <label key={option} className="checkbox-label-sell">
                          <input
                            type="checkbox"
                            className="checkbox-input-sell"
                            checked={formData.residentialTypes.includes(option)}
                            onChange={() => handleCheckboxChange(option)}
                          />
                          <span className="checkbox-custom" />
                          <span className="checkbox-text">{option}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                )}

                <div className="form-section-sell">
                  <label className="form-section-label-sell">Описание на имота</label>
                  <textarea
                    className="form-textarea-sell"
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                    rows={5}
                  />
                </div>

                <div className="form-checkbox-sell">
                  <input
                    type="checkbox"
                    id="privacy-sell"
                    className="checkbox-input-sell"
                    checked={formData.privacyAgreed}
                    onChange={(e) => setFormData({ ...formData, privacyAgreed: e.target.checked })}
                    required
                  />
                  <label htmlFor="privacy-sell" className="checkbox-label-text">
                    Съгласен съм с политиката по личните данни на този сайт
                  </label>
                </div>

                <button type="submit" className="form-submit-btn-sell">
                  Изпрати заявката
                </button>
              </form>
            </div>
          </div>
        </div>

        <div className="property-sell-right">
          <div className="property-sell-right-sticky">
            <div className="right-column-content">
              <div className="bannertext"><img 
                src="https://api.builder.io/api/v1/image/assets/TEMP/5fe702d6f7c1a80158df7a3f126b5f2ede5a64c3?width=296" 
                alt="Bulgarian Estates Logo" 
                className="right-logo"
              />
              
              <div className="right-card-icon">
                <svg className="icon-house" width="44" height="45" viewBox="0 0 44 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4.40039 8.65937C4.39923 7.88004 4.67392 7.12545 5.17581 6.52925C5.6777 5.93304 6.37439 5.5337 7.1425 5.40195C7.91061 5.2702 8.70056 5.41454 9.37244 5.80941C10.0443 6.20428 10.5548 6.8242 10.8134 7.55937H36.3004C37.0803 7.55828 37.8353 7.83343 38.4316 8.33601C39.028 8.83859 39.427 9.53613 39.5581 10.3049C39.6891 11.0737 39.5436 11.864 39.1475 12.5358C38.7513 13.2075 38.13 13.7173 37.3938 13.9746L37.4004 14.1594V29.5594C37.4004 31.3098 36.705 32.9885 35.4673 34.2263C34.2296 35.464 32.5508 36.1594 30.8004 36.1594H15.4004C13.7769 36.1593 12.2104 35.5609 11.0004 34.4786V38.9094C11.0004 39.347 10.8266 39.7667 10.5171 40.0761C10.2077 40.3855 9.788 40.5594 9.35039 40.5594H6.05039C5.61279 40.5594 5.1931 40.3855 4.88367 40.0761C4.57423 39.7667 4.40039 39.347 4.40039 38.9094V8.65937ZM35.2004 29.5594V14.1594H11.0004V29.5594C11.0004 30.7263 11.464 31.8455 12.2891 32.6706C13.1143 33.4958 14.2334 33.9594 15.4004 33.9594H30.8004C31.9673 33.9594 33.0865 33.4958 33.9117 32.6706C34.7368 31.8455 35.2004 30.7263 35.2004 29.5594ZM8.80039 11.9594H36.3004C36.5921 11.9594 36.8719 11.8435 37.0782 11.6372C37.2845 11.4309 37.4004 11.1511 37.4004 10.8594C37.4004 10.5676 37.2845 10.2878 37.0782 10.0815C36.8719 9.87526 36.5921 9.75937 36.3004 9.75937H8.80039V8.65937C8.80039 8.36763 8.6845 8.08784 8.47821 7.88155C8.27192 7.67526 7.99213 7.55937 7.70039 7.55937C7.40866 7.55937 7.12887 7.67526 6.92258 7.88155C6.71629 8.08784 6.60039 8.36763 6.60039 8.65937V38.3594H8.80039V11.9594ZM16.5004 22.8604V28.4704C16.5004 28.7621 16.6163 29.0419 16.8226 29.2482C17.0289 29.4545 17.3087 29.5704 17.6004 29.5704H19.8004C20.0921 29.5704 20.3719 29.4545 20.5782 29.2482C20.7845 29.0419 20.9004 28.7621 20.9004 28.4704V26.2704C20.9004 25.9786 21.0163 25.6988 21.2226 25.4925C21.4289 25.2863 21.7087 25.1704 22.0004 25.1704H24.2004C24.4921 25.1704 24.7719 25.2863 24.9782 25.4925C25.1845 25.6988 25.3004 25.9786 25.3004 26.2704V28.4704C25.3004 28.7621 25.4163 29.0419 25.6226 29.2482C25.8289 29.4545 26.1087 29.5704 26.4004 29.5704H28.6004C28.8921 29.5704 29.1719 29.4545 29.3782 29.2482C29.5845 29.0419 29.7004 28.7621 29.7004 28.4704V22.8604C29.7005 22.5494 29.6346 22.242 29.5072 21.9583C29.3798 21.6747 29.1937 21.4212 28.9612 21.2148L23.8308 16.6608C23.6295 16.482 23.3696 16.3833 23.1004 16.3833C22.8312 16.3833 22.5713 16.482 22.37 16.6608L17.2396 21.2148C17.0071 21.4212 16.821 21.6747 16.6936 21.9583C16.5661 22.242 16.5003 22.5494 16.5004 22.8604Z" fill="#299393"/>
                </svg>
                <h2 className="right-card-title">Имате имот за продажба?</h2>
              </div>

              <div className="right-card-text">
                <p className="right-text-content">
                  Продайте го с Бългериан Естейтс, бързо, на максимална цена и с минимални разходи на време и средства.
                </p>
              </div>
</div>
              <div className="right-illustration">
               
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
