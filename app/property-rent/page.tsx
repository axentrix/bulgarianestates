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
       <svg width="880" height="963" viewBox="0 0 880 963" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_295_4398)">
<rect width="880" height="963" fill="#F5FFB7"/>
<g clip-path="url(#clip1_295_4398)">
<path d="M0 -318H880V725H0V-318Z" fill="url(#paint0_linear_295_4398)"/>
<path d="M42.5476 561.182H-55V725H880V552H791.349L42.5476 561.182Z" fill="#F5FFB7"/>
<path d="M301.175 210.104L271.402 370.533L306.313 459.929H295.432V576.219L415.127 588.047V432.308L301.175 210.104Z" fill="#299393"/>
<path d="M287.363 190.471L405.97 433.942L756.56 488.457L762.001 479.986L610.509 317.682L292.834 182L287.363 190.471Z" fill="#A1CD3A"/>
<path d="M134.264 479.986H107L134.264 253.607L141.488 249.584L154.001 263.712L134.264 479.986Z" fill="#A1CD3A"/>
<path d="M292.832 182L411.439 425.471L761.999 479.986L615.978 309.181L292.832 182Z" fill="#F5FFB7"/>
<path d="M145.936 263.712L127.438 479.986V567.173L194.267 582.118L198.438 365.269L145.936 263.712Z" fill="#299393"/>
<path d="M295.432 576.219L194.266 582.118L197.258 438.147L295.432 459.929V576.219Z" fill="#31A5A5"/>
<path d="M415.129 588.047V432.308L740.662 486.006V554.74L415.129 588.047Z" fill="#31A5A5"/>
<path d="M134.262 236.878L184.588 453.666L306.308 459.929L271.397 370.533L299.991 216.367L292.827 201.664L274.147 287.43L134.262 236.878Z" fill="#F5FFB7"/>
</g>
</g>
<defs>
<linearGradient id="paint0_linear_295_4398" x1="440" y1="-318" x2="440" y2="725" gradientUnits="userSpaceOnUse">
<stop stop-color="#BDFFFF"/>
<stop offset="0.456794" stop-color="white"/>
</linearGradient>
<clipPath id="clip0_295_4398">
<rect width="880" height="963" fill="white"/>
</clipPath>
<clipPath id="clip1_295_4398">
<rect width="880" height="1474" fill="white" transform="translate(0 -318)"/>
</clipPath>
</defs>
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
