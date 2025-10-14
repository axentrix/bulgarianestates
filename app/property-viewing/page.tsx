'use client'

import { useState, useRef } from 'react'

export default function PropertyViewingPage() {
  const [viewingType, setViewingType] = useState('onsite')
  const dateRef = useRef<HTMLInputElement | null>(null)
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    city: '',
    date: '',
    propertyDetails: '',
    comments: '',
    privacyAgreed: false
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData, 'Type:', viewingType)
    alert('Вашата заявка е изпратена успешно!')
  }

  const openDatePicker = () => {
    const el = dateRef.current
    if (!el) return
    // Newer browsers support showPicker() on date inputs
    // Fallback to focus()
    if ((el as any).showPicker) {
      try { (el as any).showPicker() } catch (e) { el.focus() }
    } else {
      el.focus()
      // On mobile, focusing should open native picker
    }
  }

  return (
    <div className="property-viewing-page">
      <section className="property-viewing-hero">
        <div className="property-viewing-hero-content">
          <h1 className="property-viewing-title">Огледи</h1>

          <img
            className="property-viewing-illustration"
            src="/images/ogledi.png"
            alt="Огледи"
          />
        </div>
      </section>

      <div className="property-viewing-content">
        <p className="property-viewing-intro">
          Харесали сте имот от нашата база данни и желаете да го видите, попълнете формата по-долу.<br/>
          Наш специалист ще се свърже с Вас, за да организира оглед в удобно време.<br/><br/>
          Ако все още не сте избрали своя имот за оглед, ще Ви насочим към  брокер, който да Ви предложи подходящи оферти.
        </p>

        <div className="viewing-info-box">
          <h2 className="viewing-info-title">Дистанционен оглед</h2>
          <p className="viewing-info-text">
            Ако желаете да разгледате имоти и сте далеч или не разполагате с нужното време, свържете се с нас чрез формата по-долу. Наш специалист ще се свърже с Вас и ще организира оглед в удобно време. Всичко от което имате нужда е компютър или смартфон с инсталирано приложение за видео комуникация. Обикновено огледът отнема около 10-15 минути, като брокерът Ви показва изцяло обекта. По време на огледа бихте могли да направлявате камерата в зависимост от детайлите, които Ви интересуват.
          </p>
        </div>

        <div className="viewing-form-card">
          <form onSubmit={handleSubmit} className="viewing-form">
            <h2 className="viewing-form-title">Заявка за оглед</h2>

            <div className="viewing-type-section">
              <label className="viewing-type-label">Желая да заявя</label>
              <div className="viewing-type-buttons">
                <button
                  type="button"
                  className={`viewing-type-btn ${viewingType === 'onsite' ? 'active' : ''}`}
                  onClick={() => setViewingType('onsite')}
                >
                  <span className="radio-circle">
                    {viewingType === 'onsite' && <span className="radio-dot" />}
                  </span>
                  Оглед на място
                </button>
                <button
                  type="button"
                  className={`viewing-type-btn ${viewingType === 'remote' ? 'active' : ''}`}
                  onClick={() => setViewingType('remote')}
                >
                  <span className="radio-circle">
                    {viewingType === 'remote' && <span className="radio-dot" />}
                  </span>
                  Дистанционен оглед
                </button>
              </div>
            </div>

            <div className="form-row">
              <input
                type="text"
                placeholder="Име"
                className="form-input"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
              />
            </div>

            <div className="form-row">
              <input
                type="tel"
                placeholder="Мобилен телефон"
                className="form-input"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                required
              />
            </div>

            <div className="form-row">
              <input
                type="email"
                placeholder="Имейл адрес"
                className="form-input"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
              />
            </div>

            <div className="form-row">
              <input
                type="text"
                placeholder="Град"
                className="form-input"
                value={formData.city}
                onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                required
              />
            </div>

            <div className="form-row">
              <div className="date-input-wrapper">
                <div className="date-input-inner">
                  <input
                    ref={dateRef}
                    type="date"
                    placeholder="Избери дата..."
                    className={`form-input date-input ${formData.date ? 'has-value' : ''}`}
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                  />
                  {/* Placeholder overlay for browsers that don't show placeholder on date inputs */}
                  {!formData.date && (
                    <button type="button" className="date-placeholder" onClick={openDatePicker} aria-hidden>
                      Избери дата...
                    </button>
                  )}
                </div>

                <button type="button" className="date-icon-button" onClick={openDatePicker} aria-label="Open calendar">
                  <svg width="24" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17 5V3M8 5V3M3.75 8H21.25M3.5 10.044C3.5 7.929 3.5 6.871 3.936 6.063C4.33025 5.34231 4.94199 4.7645 5.684 4.412C6.54 4 7.66 4 9.9 4H15.1C17.34 4 18.46 4 19.316 4.412C20.069 4.774 20.68 5.352 21.064 6.062C21.5 6.872 21.5 7.93 21.5 10.045V14.957C21.5 17.072 21.5 18.13 21.064 18.938C20.6698 19.6587 20.058 20.2365 19.316 20.589C18.46 21 17.34 21 15.1 21H9.9C7.66 21 6.54 21 5.684 20.588C4.94214 20.2358 4.33041 19.6583 3.936 18.938C3.5 18.128 3.5 17.07 3.5 14.955V10.044Z" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              </div>
            </div>

            <div className="form-section">
              <label className="form-section-label">Какъв имот бихте искали да видите</label>
              <textarea
                placeholder="Например: Интересувам се от Жилищна сграда с апартаменти и паркоместа в Созопол"
                className="form-textarea"
                value={formData.propertyDetails}
                onChange={(e) => setFormData({ ...formData, propertyDetails: e.target.value })}
                rows={5}
              />
            </div>

            <div className="form-section">
              <label className="form-section-label">Коментари</label>
              <textarea
                placeholder="Добавете коментар или изискване"
                className="form-textarea"
                value={formData.comments}
                onChange={(e) => setFormData({ ...formData, comments: e.target.value })}
                rows={5}
              />
            </div>

            <div className="form-checkbox">
              <input
                type="checkbox"
                id="privacy"
                checked={formData.privacyAgreed}
                onChange={(e) => setFormData({ ...formData, privacyAgreed: e.target.checked })}
                required
              />
              <label htmlFor="privacy">
                Съгласен съм с политиката по личните данни на този сайт
              </label>
            </div>

            <button type="submit" className="form-submit-btn">
              Изпрати запитване
            </button>
          </form>
        </div>

        <div className="viewing-important-box">
          <h2 className="viewing-important-title">Важно е да знаете:</h2>
          <div className="viewing-important-text">
            Бългериан Естейтс не взима такса за оглед.<br/>
            Предлагаме дистанционен оглед на имот чрез Skype, Viber или Whats App.<br/>
            Работим с гъвкаво работно време, включително и в почивните дни, при предварителна уговорка с нашите брокери.<br/>
            Разполагаме със собствен транспорт, който е напълно безплатен в рамките на населеното място, в което ще се ��звършва огледът. При трансфер или оглед, който надвишава 100 км., се заплаща единствено цената на изразходеното гориво.
          </div>
        </div>
      </div>
    </div>
  )
}
