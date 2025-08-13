'use client'

import { useSearchParams } from 'next/navigation'
import { useState, useEffect } from 'react'

export default function FormPage() {
  const searchParams = useSearchParams()
  const [formType, setFormType] = useState('')
  const [location, setLocation] = useState('')
  const [additionalInfo, setAdditionalInfo] = useState('')
  const [contactName, setContactName] = useState('')
  const [contactPhone, setContactPhone] = useState('')
  const [contactEmail, setContactEmail] = useState('')

  useEffect(() => {
    const type = searchParams.get('type') || ''
    const loc = searchParams.get('location') || ''
    setFormType(type)
    setLocation(loc)
  }, [searchParams])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted:', {
      formType,
      location,
      additionalInfo,
      contactName,
      contactPhone,
      contactEmail
    })
    alert('Формата беше изпратена успешно!')
  }

  const LocationIcon = () => (
    <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M6.35134 6.19836C7.86216 4.83677 9.89625 4.0785 12.0116 4.08832C14.1269 4.09815 16.1526 4.87527 17.6484 6.25083C19.1442 7.62639 19.9892 9.48923 19.9999 11.4345C20.0106 13.3798 19.186 15.2504 17.7054 16.6398L13.4618 20.5423C13.0816 20.8919 12.566 21.0882 12.0284 21.0882C11.4908 21.0882 10.9751 20.8919 10.5949 20.5423L6.35134 16.6398C4.84579 15.2551 4 13.3772 4 11.4191C4 9.46097 4.84579 7.58303 6.35134 6.19836Z" stroke="#299393" strokeWidth="1.5" strokeLinejoin="round"/>
      <path d="M12 14.0882C13.6569 14.0882 15 12.9689 15 11.5882C15 10.2075 13.6569 9.08823 12 9.08823C10.3431 9.08823 9 10.2075 9 11.5882C9 12.9689 10.3431 14.0882 12 14.0882Z" stroke="#299393" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )

  return (
    <div className="form-page">
      <div className="form-page-container">
        <div className="form-header">
          <h1 className="form-title">{formType}</h1>
          <p className="form-subtitle">Моля, попълнете формата по-долу и ние ще се свържем с Вас</p>
        </div>

        <form onSubmit={handleSubmit} className="property-form">
          <div className="form-section">
            <h2 className="section-title">Информация за имота</h2>
            
            <div className="form-field">
              <label className="field-label">Локация</label>
              <div className="input-wrapper">
                <LocationIcon />
                <input 
                  type="text" 
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  placeholder="Въведете локация..."
                  className="form-input"
                  required
                />
              </div>
            </div>

            <div className="form-field">
              <label className="field-label">Допълнителна информация</label>
              <textarea 
                value={additionalInfo}
                onChange={(e) => setAdditionalInfo(e.target.value)}
                placeholder="Опишете имота, желаната цена, специални изисквания..."
                className="form-textarea"
                rows={4}
              />
            </div>
          </div>

          <div className="form-section">
            <h2 className="section-title">Контактна информация</h2>
            
            <div className="form-field">
              <label className="field-label">Име и фамилия</label>
              <input 
                type="text" 
                value={contactName}
                onChange={(e) => setContactName(e.target.value)}
                placeholder="Въведете вашето име..."
                className="form-input"
                required
              />
            </div>

            <div className="form-field">
              <label className="field-label">Телефон</label>
              <input 
                type="tel" 
                value={contactPhone}
                onChange={(e) => setContactPhone(e.target.value)}
                placeholder="Въведете телефонен номер..."
                className="form-input"
                required
              />
            </div>

            <div className="form-field">
              <label className="field-label">Имейл</label>
              <input 
                type="email" 
                value={contactEmail}
                onChange={(e) => setContactEmail(e.target.value)}
                placeholder="Въведете имейл адрес..."
                className="form-input"
                required
              />
            </div>
          </div>

          <div className="form-actions">
            <button type="submit" className="submit-button">
              Изпрати заявка
            </button>
            <button 
              type="button" 
              className="back-button"
              onClick={() => window.history.back()}
            >
              Назад
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
