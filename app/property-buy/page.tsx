'use client'
import { getImagePath } from '../utils/imagePath'

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

                {formData.location === 'other' && (
                  <div className="location-dropdown-box">
                    <div className="dropdown-wrapper-buy">
                      <select
                        className="form-input-buy"
                        value={formData.locationDropdown}
                        onChange={(e) => setFormData({ ...formData, locationDropdown: e.target.value })}
                      >
                        <option value="">Изберете опция</option>
                        <option value="Дворно парко място">Дворно парко място</option>
                        <option value="Земеделска ��остройка">Земеделска постройка</option>
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
                        <option value="В спа комплекс">В спа комплек��</option>
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
                        <option value="На яхтено пристанище">На яхтено прист��нище</option>
                      </select>
                    </div>
                  </div>
                )}

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
