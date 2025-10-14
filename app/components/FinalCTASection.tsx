import { getImagePath } from '../utils/imagePath'

export default function FinalCTASection() {
  return (
    <section className="final-cta-section">
      <div className="final-cta-background">
        <div className="image-wrap">
          <img
            src={getImagePath("/images/hero-section-bg-2.jpg")}
            alt="Scenic coastal background"
          />
        </div>
        <div className="final-cta-content-card">
          <h2 className="final-cta-title">
            Номер 1 по продажби на южното черноморие
          </h2>
          <p className="final-cta-description">
            Доверете ни се! Нашата мисия е Вашият максимален комфорт.
          </p>
          <button className="final-cta-button">
            Поискай оферта
          </button>
        </div>
      </div>
    </section>
  )
}
