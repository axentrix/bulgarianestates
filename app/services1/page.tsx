export default function Services1Page() {
  return (
    <div className="innerpage">
      <section className="faq-buying-hero">
        <div className="property-viewing-hero-content">
          <h1 className="property-viewing-title">Юридически консултации</h1>
          <img
            className="property-viewing-illustration"
            src="/images/innerimage2.png"
            alt="Съвети и отговори"
          />
        </div>
      </section>

      <div className="innerpage-container">
        <div className="legal-services-content">
          <div className="legal-description">
            <p>
              Покупко - продажбата на недвижим имот е процес, който е добре урегулиран във Българското законодателство. Въпреки това ви съветваме, винаги при сключване на сделка да се консултирате с опитен юрист.
            </p>
            <p>
              Изхождайки от богатия си опит в областта на недвижимите имоти, създадохме цялостна система за правно обслужване на нашите клиенти.
            </p>
            <p className="legal-services-title">Юридическите ни услуги включват:</p>
            <ul className="legal-services-list">
              <li>Разясняване на цялостната процедура по покупко – продажба на недвижим имот</li>
              <li>Проверки на собствеността</li>
              <li>Проверка за тежести и обрменения</li>
              <li>Проверка на всички документи, съпътстващи сделката с недвижим имот</li>
              <li>Съдействие при подготовката на нужните документи за покупко – продажба на недвижим имот</li>
              <li>Изготвяне на съответните договори и нотариални актове</li>
              <li>Представителство при сключване на сделка с недвижим имот</li>
            </ul>
          </div>
        </div>
      </div>

      <section className="services-cta-section">
        <div className="services-cta-background">
          <div className="services-cta-content">
            <h2 className="services-cta-title">Номер 1 по продажби на южното черноморие</h2>
            <p className="services-cta-subtitle">Доверете ни се! Нашата мисия е Вашият максимален комфорт.</p>
            <button className="services-cta-button">Изпрати запитване</button>
          </div>
        </div>
      </section>
    </div>
  )
}
