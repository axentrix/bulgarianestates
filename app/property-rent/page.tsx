'use client'

import { useState } from 'react'

export default function PropertyRentPage() {
  const [formData, setFormData] = useState({
    interest: 'search',
    name: '',
    phone: '',
    email: '',
    city: '',
    district: '',
    location: 'other',
    propertyType: 'residential',
    residentialTypes: [] as string[],
    comments: '',
    agreedToPolicy: false
  })

  const handleCheckboxChange = (value: string) => {
    setFormData(prev => ({
      ...prev,
      residentialTypes: prev.residentialTypes.includes(value)
        ? prev.residentialTypes.filter(item => item !== value)
        : [...prev.residentialTypes, value]
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Rental form submitted:', formData)
    alert('Заявката е изпратена успешно!')
  }

  return (
    <div className="property-rent-page">
      <main className="property-rent-content property-rent-grid">
        <section className="property-rent-left">
          <div className="rental-form-card">
            <form onSubmit={handleSubmit} className="rental-form">
              <h1 className="rental-form-title">Заявка за наем</h1>

              {/* Interest Type */}
              <div className="form-section-rental">
                <label className="rental-section-label">Интересувам се</label>
                <div className="rental-radio-row">
                  <button
                    type="button"
                    className={`rental-radio-btn ${formData.interest === 'search' ? 'active' : ''}`}
                    onClick={() => setFormData({ ...formData, interest: 'search' })}
                  >
                    <span className={`rental-radio-circle ${formData.interest === 'search' ? 'active' : ''}`}>
                      {formData.interest === 'search' && <span className="rental-radio-dot" />}
                    </span>
                    Търся да наема
                  </button>
                  <button
                    type="button"
                    className={`rental-radio-btn ${formData.interest === 'rent-out' ? 'active' : ''}`}
                    onClick={() => setFormData({ ...formData, interest: 'rent-out' })}
                  >
                    <span className={`rental-radio-circle ${formData.interest === 'rent-out' ? 'active' : ''}`}>
                      {formData.interest === 'rent-out' && <span className="rental-radio-dot" />}
                    </span>
                    Отдавам под наем
                  </button>
                </div>
              </div>

              {/* Personal Info */}
              <div className="rental-form-row">
                <input
                  type="text"
                  placeholder="Име"
                  className="rental-input"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
              </div>

              <div className="rental-form-row">
                <input
                  type="tel"
                  placeholder="Мобилен телефон"
                  className="rental-input"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                />
              </div>

              <div className="rental-form-row">
                <input
                  type="email"
                  placeholder="Имейл адрес"
                  className="rental-input"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>

              <div className="rental-form-row">
                <input
                  type="text"
                  placeholder="Предпочитан град"
                  className="rental-input"
                  value={formData.city}
                  onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                />
              </div>

              <div className="rental-form-row">
                <input
                  type="text"
                  placeholder="Предпочитан квартал/район"
                  className="rental-input"
                  value={formData.district}
                  onChange={(e) => setFormData({ ...formData, district: e.target.value })}
                />
              </div>

              {/* Location */}
              <div className="form-section-rental">
                <label className="rental-input-label">Местоположение на имота</label>
                <div className="rental-radio-grid">
                  {['sea', 'city', 'village', 'other'].map((loc) => (
                    <button
                      key={loc}
                      type="button"
                      className={`rental-radio-btn ${formData.location === loc ? 'active' : ''}`}
                      onClick={() => setFormData({ ...formData, location: loc })}
                    >
                      <span className={`rental-radio-circle ${formData.location === loc ? 'active' : ''}`}>
                        {formData.location === loc && <span className="rental-radio-dot" />}
                      </span>
                      {loc === 'sea' && 'На море'}
                      {loc === 'city' && 'В град'}
                      {loc === 'village' && 'В село'}
                      {loc === 'other' && 'Друго'}
                    </button>
                  ))}
                </div>
              </div>

              {/* Location Dropdown */}
              <div className="rental-location-dropdown">
                <div className="rental-dropdown-wrapper">
                  <input
                    type="text"
                    placeholder="Местоположение на имота"
                    className="rental-input"
                    readOnly
                  />
                  <svg className="rental-chevron-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5.29279 9.29302C5.48031 9.10555 5.73462 9.00023 5.99979 9.00023C6.26495 9.00023 6.51926 9.10555 6.70679 9.29302L11.9998 14.586L17.2928 9.29302C17.385 9.19751 17.4954 9.12133 17.6174 9.06892C17.7394 9.01651 17.8706 8.98892 18.0034 8.98777C18.1362 8.98662 18.2678 9.01192 18.3907 9.0622C18.5136 9.11248 18.6253 9.18673 18.7192 9.28063C18.8131 9.37452 18.8873 9.48617 18.9376 9.60907C18.9879 9.73196 19.0132 9.86364 19.012 9.99642C19.0109 10.1292 18.9833 10.2604 18.9309 10.3824C18.8785 10.5044 18.8023 10.6148 18.7068 10.707L12.7068 16.707C12.5193 16.8945 12.265 16.9998 11.9998 16.9998C11.7346 16.9998 11.4803 16.8945 11.2928 16.707L5.29279 10.707C5.10532 10.5195 5 10.2652 5 10C5 9.73486 5.10532 9.48055 5.29279 9.29302Z" fill="black"/>
                  </svg>
                </div>
              </div>

              {/* Property Type */}
              <div className="form-section-rental">
                <label className="rental-input-label">Тип на имота</label>
                <div className="rental-radio-grid">
                  {['residential', 'business', 'plot', 'other'].map((type) => (
                    <button
                      key={type}
                      type="button"
                      className={`rental-radio-btn ${formData.propertyType === type ? 'active' : ''}`}
                      onClick={() => setFormData({ ...formData, propertyType: type })}
                    >
                      <span className={`rental-radio-circle ${formData.propertyType === type ? 'active' : ''}`}>
                        {formData.propertyType === type && <span className="rental-radio-dot" />}
                      </span>
                      {type === 'residential' && 'Частен имот'}
                      {type === 'business' && 'Бизнес имот'}
                      {type === 'plot' && 'Парцел'}
                      {type === 'other' && 'Друго'}
                    </button>
                  ))}
                </div>
              </div>

              {/* Residential Property Types */}
              <div className="rental-property-types">
                <h3 className="rental-property-types-title">Частен имот</h3>
                <div className="rental-checkbox-grid">
                  {[
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
                  ].map((type) => (
                    <label key={type} className="rental-checkbox-label">
                      <input
                        type="checkbox"
                        className="rental-checkbox-input"
                        checked={formData.residentialTypes.includes(type)}
                        onChange={() => handleCheckboxChange(type)}
                      />
                      <span className="rental-checkbox-box" />
                      <span className="rental-checkbox-text">{type}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Additional Comments */}
              <div className="rental-form-section">
                <label className="rental-input-label">Допълнителни коментари</label>
                <textarea
                  className="rental-textarea"
                  rows={5}
                  value={formData.comments}
                  onChange={(e) => setFormData({ ...formData, comments: e.target.value })}
                />
              </div>

              {/* Privacy Policy */}
              <label className="rental-checkbox-label rental-privacy-label">
                <input
                  type="checkbox"
                  className="rental-checkbox-input"
                  checked={formData.agreedToPolicy}
                  onChange={(e) => setFormData({ ...formData, agreedToPolicy: e.target.checked })}
                />
                <span className="rental-checkbox-box" />
                <span className="rental-checkbox-text">Съгласен съм с политиката по личните данни на този сайт</span>
              </label>

              {/* Submit */}
              <button type="submit" className="rental-submit-btn">
                Изпрати заявката
              </button>
            </form>
          </div>
        </section>

        <aside className="property-rent-right">
          <div className="property-rent-ad-section">
            <div className="property-rent-ad-bg">
              <svg className="property-rent-ad-svg-base" viewBox="0 0 880 94" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M42.5476 9.37255H-55V173.191H880V0.190735H791.349L42.5476 9.37255Z" fill="#F5FFB7"/>
              </svg>
              <svg className="property-rent-ad-svg-1" viewBox="0 0 145 379" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M30.1749 0.295227L0.402344 160.724L35.3133 250.119H24.432V366.41L144.127 378.238V222.499L30.1749 0.295227Z" fill="#299393"/>
              </svg>
              <svg className="property-rent-ad-svg-2" viewBox="0 0 475 307" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0.363281 8.66146L118.97 252.133L469.56 306.647L475.001 298.177L323.509 135.873L5.83417 0.190796L0.363281 8.66146Z" fill="#A1CD3A"/>
              </svg>
              <svg className="property-rent-ad-svg-3" viewBox="0 0 47 232" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M27.2638 231.177H0L27.2638 4.7981L34.4878 0.774536L47.0013 14.9024L27.2638 231.177Z" fill="#A1CD3A"/>
              </svg>
              <svg className="property-rent-ad-svg-4" viewBox="0 0 470 299" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0.832031 0.190796L119.439 243.662L469.999 298.177L323.978 127.372L0.832031 0.190796Z" fill="#F5FFB7"/>
              </svg>
              <svg className="property-rent-ad-svg-5" viewBox="0 0 72 320" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18.9358 0.902466L0.4375 217.177V304.364L67.2671 319.309L71.4382 102.46L18.9358 0.902466Z" fill="#299393"/>
              </svg>
              <svg className="property-rent-ad-svg-6" viewBox="0 0 102 145" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M101.432 138.409L0.265625 144.309L3.258 0.337585L101.432 22.1193V138.409Z" fill="#31A5A5"/>
              </svg>
              <svg className="property-rent-ad-svg-7" viewBox="0 0 326 157" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0.128906 156.238V0.498901L325.662 54.1969V122.93L0.128906 156.238Z" fill="#31A5A5"/>
              </svg>
              <svg className="property-rent-ad-svg-8" viewBox="0 0 173 260" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0.261719 36.0686L50.5879 252.857L172.308 259.119L137.397 169.724L165.991 15.5575L158.827 0.854797L140.147 86.6203L0.261719 36.0686Z" fill="#F5FFB7"/>
              </svg>
            </div>

            <div className="property-rent-ad-content">
              <img 
                src="https://api.builder.io/api/v1/image/assets/TEMP/84ca5c28136583cf278b56a42ca091d031a21cff?width=296" 
                alt="Bulgarian Estates Logo" 
                className="property-rent-ad-logo"
              />
              
              <div className="property-rent-ad-card">
                <svg className="property-rent-ad-icon" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M33.5013 18.4834C33.5013 14.5936 31.9561 10.8631 29.2055 8.11255C26.455 5.36202 22.7245 3.81678 18.8346 3.81678C14.9448 3.81678 11.2143 5.36202 8.46374 8.11255C5.7132 10.8631 4.16797 14.5936 4.16797 18.4834C4.16797 27.6373 14.3228 37.1706 17.7328 40.1149C18.0506 40.3533 18.4373 40.482 18.8346 40.4816M33.5013 40.4834V34.9834M28.0013 40.4834C27.5151 40.4834 27.0488 40.2903 26.7049 39.9465C26.3611 39.6027 26.168 39.1363 26.168 38.6501V31.3168C26.1679 31.015 26.2424 30.7179 26.3847 30.4518C26.527 30.1858 26.7328 29.9589 26.9838 29.7914L32.4838 26.1248C32.7851 25.9238 33.1391 25.8165 33.5013 25.8165C33.8635 25.8165 34.2175 25.9238 34.5188 26.1248L40.0188 29.7914C40.2698 29.9589 40.4756 30.1858 40.6179 30.4518C40.7602 30.7179 40.8347 31.015 40.8346 31.3168V38.6501C40.8346 39.1363 40.6415 39.6027 40.2977 39.9465C39.9539 40.2903 39.4875 40.4834 39.0013 40.4834H28.0013Z" stroke="#299393" strokeWidth="3.66667" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M18.8359 23.9834C21.8735 23.9834 24.3359 21.521 24.3359 18.4834C24.3359 15.4459 21.8735 12.9834 18.8359 12.9834C15.7984 12.9834 13.3359 15.4459 13.3359 18.4834C13.3359 21.521 15.7984 23.9834 18.8359 23.9834Z" stroke="#299393" strokeWidth="3.66667" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <h3 className="property-rent-ad-title">Търсите имот под наем?</h3>
              </div>
            </div>
          </div>
        </aside>
      </main>
    </div>
  )
}
