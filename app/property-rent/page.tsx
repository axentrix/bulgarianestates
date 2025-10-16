'use client'
import { getImagePath } from '../utils/imagePath'

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
    locationDropdown: '',
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
              {formData.location === 'other' && (
                <div className="location-dropdown-box">
                  <div className="rental-dropdown-wrapper">
                    <select
                      className="rental-input"
                      value={formData.locationDropdown}
                      onChange={(e) => setFormData({ ...formData, locationDropdown: e.target.value })}
                    >
                      <option value="">Изберете опция</option>
                      <option value="Дворно парко място">Дворно парко място</option>
                      <option value="Земеделска постройка">Земеделска постройка</option>
                      <option value="Имоти в строеж">Имоти в строеж</option>
                      <option value="Къщи">Къщи</option>
                      <option value="Етаж от къща">Етаж от къща</option>
                      <option value="Къща">Къща</option>
                      <option value="Медицински Център">Медицински Център</option>
                      <option value="Паркинг">Паркинг</option>
                      <option value="Парцели">Парцели</option>
                      <option value="Земеделска земя">Земеделска земя</option>
                      <option value="Парцел с проект за застрояване">Парцел с проект за застрояване</option>
                      <option value="Урегулиран Поземлен Имот">Урегулиран Поземлен Имот</option>
                      <option value="Разни">Разни</option>
                      <option value="Хотели">Хотели</option>
                      <option value="ХотелНай-важните въпроси при покупка на недвижим имот">ХотелНай-важните въпроси при покупка на недвижим имот</option>
                      <option value="Местоположение на имота:">Местоположение на имота:</option>
                      <option value="Всички типове">Всички типове</option>
                      <option value="Инвестиция в морски имот">Инвестиция в морски имот</option>
                      <option value="Близо до балнеоложки курорт">Близо до балнеоложки курорт</option>
                      <option value="Близо до голф игрище">Близо до голф игрище</option>
                      <option value="Близо до град">Близо до град</option>
                      <option value="Близо до магистрала">Близо до магистрала</option>
                      <option value="Близо до морето">Близо до морето</option>
                      <option value="Близо до морски курорт">Близо до морски курорт</option>
                      <option value="Близо до планина">Близо до планина</option>
                      <option value="Близо до ски курорт">Близо до ски курорт</option>
                      <option value="Близо до яхтено пристанище">Близо до яхтено пристанище</option>
                      <option value="В балнеоложки курорт">В балнеоложки курорт</option>
                      <option value="В града">В града</option>
                      <option value="В историческа местност">В историческа местност</option>
                      <option value="В ловен район">В ловен район</option>
                      <option value="В морски курорт">В морски курорт</option>
                      <option value="В планината">В планината</option>
                      <option value="В риболовен район">В риболовен район</option>
                      <option value="В селски район (на село)">В селски район (на село)</option>
                      <option value="В ски курорт">В ски курорт</option>
                      <option value="В спа комплекс">В спа комплекс</option>
                      <option value="В столицата">В столицата</option>
                      <option value="Във ваканционно селище">Във ваканционно селище</option>
                      <option value="Гледка море">Гледка море</option>
                      <option value="На брега на река Дунав">На брега на река Дунав</option>
                      <option value="На втора линия">На втора линия</option>
                      <option value="На голф игрище">На голф игрище</option>
                      <option value="На езеро или язовир">На езеро или язовир</option>
                      <option value="На морето">На морето</option>
                      <option value="На остров">На остров</option>
                      <option value="На първа линия">На първа линия</option>
                      <option value="На река">На река</option>
                      <option value="На трета линия">На трета линия</option>
                      <option value="На яхтено пристанище">На яхтено пристанище</option>
                    </select>
                  </div>
                </div>
              )}

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
