"use client";
import { useState } from "react";

const CONSULTANTS = [
  {
    id: 1,
    name: "Динко Славов",
    title: "Старши консултант",
    phone: "+359888799789",
    email: "slavov@bulgarianestates.com",
    image: "https://api.builder.io/api/v1/image/assets/TEMP/2441c0dc3cc81dd8c2662fb8774192ec11904ff1?width=818",
    description: `Динко Славов е управител и собственик на "Бългериан Естейтс Бургас", а също така и основен брокер за района на южното бъл��арско Черноморие, което включва населени места и курорти като Созопол, Черноморец, Приморско Лозенец и Царево.

Своята кариера в недвижимите имоти Динко започва през 2004 като брокер в „Бългериан Пропертис" ООД. След множество успешно приключени сделки преминава на мениджърска позиция по продажбите на офис Бургас за гр. Бургас и в района на най-��жните морски курорти - Созопол, Лозенец и др.

От началото на 2010 г. Динко Славов  основава Бългериан Естейтс – Bulgarian Estates ®. За периода 2010 – 2016 г. фирмата е ексклузивен партньор на БЪЛГЕРИАН ПРОПЕРТИС и ЛУКС ИМОТИ за цялото Южно Черноморие.`,
  },
  {
    id: 2,
    name: "Ахавни Елекчиян",
    title: "Старши консултант",
    phone: "+359887388088",
    email: "elekchian@bulgarianestates.com",
    image: "https://api.builder.io/api/v1/image/assets/TEMP/7b8ba4cd0ad4c8ce8686967cb75295933e7e3331?width=818",
    description: `Информация за Ахавни Елекчиян...`,
  },
  {
    id: 3,
    name: "Валентин Тютюнджиев",
    title: "Старши консултант",
    phone: "+359884359884",
    email: "valentin@bulgarianestates.com",
    image: "https://api.builder.io/api/v1/image/assets/TEMP/44bde0a931e3075afa5e293c056a39aa6d22a792?width=818",
    description: `Информация за Валентин Тютюнджиев...`,
  },
];

export default function ConsultantsPage() {
  const [showBrokerModal, setShowBrokerModal] = useState(false);
  const [activeBroker, setActiveBroker] = useState(null);

  function openBroker(broker) {
    setActiveBroker(broker);
    setShowBrokerModal(true);
  }

  function closeBroker() {
    setShowBrokerModal(false);
    setActiveBroker(null);
  }

  return (
    <div className="consultants-page">
      <div className="consultants-header-container">
        <h1 className="consultants-title">Консултанти недвижими имоти</h1>
      </div>

      <div className="consultants-grid">
        {CONSULTANTS.map((c) => (
          <div className="consultant-card" key={c.id}>
            <div
              className="consultant-image-container"
              role="button"
              tabIndex={0}
              onClick={() => openBroker(c)}
              onKeyDown={(e) => (e.key === "Enter" ? openBroker(c) : null)}
            >
              <img src={c.image} alt={c.name} className="consultant-image" />
            </div>

            <div className="consultant-content">
              <div className="consultant-header">
                <div className="consultant-info">
                  <h3
                    className="consultant-name"
                    role="button"
                    tabIndex={0}
                    onClick={() => openBroker(c)}
                    onKeyDown={(e) => (e.key === "Enter" ? openBroker(c) : null)}
                  >
                    {c.name}
                  </h3>

                  <p className="consultant-role">{c.title}</p>

                  <div className="consultant-languages">
                    {/* flags kept as inline svgs from the design */}
                    <svg className="flag-icon" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M1.20312 4.75928H16.1291V13.9074H1.20312V4.75928Z" fill="#5C9E31" />
                      <path d="M1.20312 10.7778H16.1291V13.9074H1.20312V10.7778Z" fill="#D22F27" />
                      <path d="M1.20312 4.75928H16.1291V7.88891H1.20312V4.75928Z" fill="#F2F2F2" />
                    </svg>
                    <svg className="flag-icon" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M1.53516 4.75928H16.4611V13.9074H1.53516V4.75928Z" fill="#1E50A0" />
                      <path d="M9.96094 7.6135V8.37039H12.4119L16.4609 5.88859V4.75928H14.6183L9.96094 7.6135Z" fill="#F2F2F2" />
                      <path d="M16.4609 4.75928H15.5396L9.96094 8.17852V8.37039H10.7992L16.4609 4.90035V4.75928Z" fill="#D22F27" />
                    </svg>
                    <svg className="flag-icon" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M1.87109 4.75928H16.797V13.9074H1.87109V4.75928Z" fill="#D22F27" />
                      <path d="M1.87109 4.75928H16.797V7.88891H1.87109V4.75928Z" fill="#F2F2F2" />
                      <path d="M1.87109 7.88889H16.797V10.7778H1.87109V7.88889Z" fill="#1E50A0" />
                    </svg>
                  </div>
                </div>

                <div className="consultant-social">
                  {/* social icons kept as-is */}
                  <svg className="social-icon" width="28" height="29" viewBox="0 0 28 29" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M13.9987 3C7.5587 3 2.33203 8.22667 2.33203 14.6667C2.33203 21.1067 7.5587 26.3333 13.9987 26.3333C20.4387 26.3333 25.6654 21.1067 25.6654 14.6667C25.6654 8.22667 20.4387 3 13.9987 3Z" fill="#00ABF4"/></svg>
                </div>
              </div>

              <div className="consultant-contact">
                <span className="consultant-phone">{c.phone}</span>
                <span className="consultant-email">{c.email}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Broker Profile Modal */}
      {showBrokerModal && activeBroker && (
        <div className="broker-modal-overlay" onClick={closeBroker}>
          <div className="broker-modal-container" onClick={(e) => e.stopPropagation()}>
            <button className="broker-modal-close" onClick={closeBroker} aria-label="Close broker profile">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7.75781 16.243L16.2438 7.757M16.2438 16.243L7.75781 7.757" stroke="black" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>

            <img src={activeBroker.image} alt={activeBroker.name} className="broker-modal-image" />

            <div className="broker-modal-content">
              <div className="broker-modal-scrollbar">
                <div className="broker-profile-header">
                  <div className="broker-profile-info">
                    <div className="broker-profile-name">{activeBroker.name}</div>
                    <div className="broker-profile-title">{activeBroker.title}</div>
                    <div className="broker-profile-languages">
                      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1.20312 4.09261H16.1291V13.2408H1.20312V4.09261Z" fill="#5C9E31" />
                        <path d="M1.20312 10.1111H16.1291V13.2408H1.20312V10.1111Z" fill="#D22F27" />
                        <path d="M1.20312 4.09261H16.1291V7.22224H1.20312V4.09261Z" fill="#F2F2F2" />
                      </svg>
                      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1.53516 4.09261H16.4611V13.2408H1.53516V4.09261Z" fill="#1E50A0" />
                        <path d="M9.96094 6.94683V7.70372H12.4119L16.4609 5.22192V4.09261H14.6183L9.96094 6.94683Z" fill="#F2F2F2" />
                        <path d="M16.4609 4.09261H15.5396L9.96094 7.51185V7.70372H10.7992L16.4609 4.23368V4.09261Z" fill="#D22F27" />
                      </svg>
                      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1.87109 4.09261H16.797V13.2408H1.87109V4.09261Z" fill="#D22F27" />
                        <path d="M1.87109 4.09261H16.797V7.22224H1.87109V4.09261Z" fill="#F2F2F2" />
                        <path d="M1.87109 7.22223H16.797V10.1111H1.87109V7.22223Z" fill="#1E50A0" />
                      </svg>
                    </div>
                  </div>
                </div>

                <div className="broker-profile-contact">
                  <span className="broker-phone">{activeBroker.phone}</span>
                  <br />
                  <span className="broker-email">{activeBroker.email}</span>
                </div>

                <div className="broker-profile-socials">
                  <svg width="28" height="28" viewBox="0 0 28 29" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M13.9987 2.66668C7.5587 2.66668 2.33203 7.89334 2.33203 14.3333C2.33203 20.7733 7.5587 26 13.9987 26C20.4387 26 25.6654 20.7733 25.6654 14.3333C25.6654 7.89334 20.4387 2.66668 13.9987 2.66668Z" fill="#00ABF4"/></svg>
                </div>

                <div className="broker-profile-description">
                  {activeBroker.description.split('\n\n').map((p, i) => (
                    <p key={i}>{p}</p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
