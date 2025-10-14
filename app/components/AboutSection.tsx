import { getImagePath } from '../utils/imagePath'

export default function AboutSection() {
  return (
    <section className="about-section">
      <div className="about-container">
        <div className="about-background">
          <div className="image-wrap">
            <img src={getImagePath("/images/hero-section-bg-1.jpg")} alt="About background" />
          </div>
          <div className="about-content-card">
            <h2 className="about-title">
              Защото това е нашата работа...
            </h2>
            <p className="about-description">
              Ние ще защитаваме отговорно и усърдно Вашите интереси на всеки етап от сделката.
            </p>
            <button className="about-cta-button">
              Подай заявка
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
