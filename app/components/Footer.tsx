import { getImagePath } from '../utils/imagePath'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-column services-column">
          <div className="footer-section-header">
            <h3 className="footer-section-title">Услуги</h3>
          </div>
          <div className="footer-links">
            <a href="#" className="footer-link">Продай имот</a>
            <a href="#" className="footer-link">Покупка на имот</a>
            <a href="#" className="footer-link">Наем на имот</a>
            <a href="#" className="footer-link">Отдаване под наем</a>
            <a href="#" className="footer-link">Оценка на недвижим имот</a>
            <a href="#" className="footer-link">Възлагане на поръчка за търсене</a>
            <a href="#" className="footer-link">Огледи и виртуални огледи</a>
          </div>
          
          <div className="footer-section-header">
            <h3 className="footer-section-title">Помощ</h3>
          </div>
          <div className="footer-links">
            <a href="#" className="footer-link">Често задавани въпроси при покупка</a>
            <a href="#" className="footer-link">Често задавани въпроси при продажба</a>
          </div>
        </div>

        <div className="footer-column central-column">
          <div className="footer-logo">
            <img
              src={getImagePath("/images/logo-footer.svg")}
              alt="Bulgarian Estates Logo"
            />
          </div>
          
          <div className="footer-features">
            <div className="footer-feature">
              <div className="feature-check">
                <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3.72416 6.66347L2.06426 4.92164L1.49902 5.5106L3.72416 7.84558L8.50083 2.83311L7.93957 2.24414L3.72416 6.66347Z" fill="#4F2C1D"/>
                </svg>
              </div>
              <span className="footer-feature-text">100% сигурност</span>
            </div>
            <div className="footer-feature">
              <div className="feature-check">
                <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3.72416 6.66347L2.06426 4.92164L1.49902 5.5106L3.72416 7.84558L8.50083 2.83311L7.93957 2.24414L3.72416 6.66347Z" fill="#4F2C1D"/>
                </svg>
              </div>
              <span className="footer-feature-text">Най-изгодни сделки</span>
            </div>
          </div>
          
          <div className="newsletter-signup">
            <h3 className="newsletter-title">Известия за нови обяви и оферти</h3>
            <div className="newsletter-form">
              <input 
                type="email" 
                placeholder="Моят имейл адрес..." 
                className="newsletter-input"
              />
              <button className="newsletter-button">
                Искам да получавам
              </button>
            </div>
          </div>
          
          <div className="social-media">
            <a href="#" className="social-link">
              <svg width="44" height="44" viewBox="0 0 44 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect y="0.0449219" width="44" height="44" rx="22" fill="#A1CC3A"/>
                <path d="M29 22.0625C29 18.1888 25.864 15.0449 22 15.0449C18.136 15.0449 15 18.1888 15 22.0625C15 25.459 17.408 28.287 20.6 28.9397V24.1677H19.2V22.0625H20.6V20.3081C20.6 18.9537 21.699 17.8519 23.05 17.8519H24.8V19.9572H23.4C23.015 19.9572 22.7 20.273 22.7 20.659V22.0625H24.8V24.1677H22.7V29.0449C26.235 28.694 29 25.7046 29 22.0625Z" fill="#4F2C1D"/>
              </svg>
            </a>
            <a href="#" className="social-link">
              <svg width="44" height="44" viewBox="0 0 44 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect y="0.0449219" width="44" height="44" rx="22" fill="#A1CC3A"/>
                <path d="M25.1111 15.0449C26.1425 15.0449 27.1317 15.4546 27.861 16.184C28.5903 16.9133 29 17.9024 29 18.9338V25.156C29 26.1874 28.5903 27.1766 27.861 27.9059C27.1317 28.6352 26.1425 29.0449 25.1111 29.0449H18.8889C17.8575 29.0449 16.8683 28.6352 16.139 27.9059C15.4097 27.1766 15 26.1874 15 25.156V18.9338C15 17.9024 15.4097 16.9133 16.139 16.184C16.8683 15.4546 17.8575 15.0449 18.8889 15.0449H25.1111ZM22 18.9338C21.1749 18.9338 20.3836 19.2616 19.8001 19.845C19.2167 20.4285 18.8889 21.2198 18.8889 22.0449C18.8889 22.87 19.2167 23.6614 19.8001 24.2448C20.3836 24.8283 21.1749 25.156 22 25.156C22.8251 25.156 23.6164 24.8283 24.1999 24.2448C24.7833 23.6614 25.1111 22.87 25.1111 22.0449C25.1111 21.2198 24.7833 20.4285 24.1999 19.845C23.6164 19.2616 22.8251 18.9338 22 18.9338ZM22 20.4894C22.4126 20.4894 22.8082 20.6533 23.0999 20.945C23.3917 21.2367 23.5556 21.6324 23.5556 22.0449C23.5556 22.4575 23.3917 22.8531 23.0999 23.1449C22.8082 23.4366 22.4126 23.6005 22 23.6005C21.5874 23.6005 21.1918 23.4366 20.9001 23.1449C20.6083 22.8531 20.4444 22.4575 20.4444 22.0449C20.4444 21.6324 20.6083 21.2367 20.9001 20.945C21.1918 20.6533 21.5874 20.4894 22 20.4894ZM25.5 17.7671C25.2937 17.7671 25.0959 17.8491 24.95 17.995C24.8042 18.1408 24.7222 18.3386 24.7222 18.5449C24.7222 18.7512 24.8042 18.949 24.95 19.0949C25.0959 19.2408 25.2937 19.3227 25.5 19.3227C25.7063 19.3227 25.9041 19.2408 26.05 19.0949C26.1958 18.949 26.2778 18.7512 26.2778 18.5449C26.2778 18.3386 26.1958 18.1408 26.05 17.995C25.9041 17.8491 25.7063 17.7671 25.5 17.7671Z" fill="#4F2C1D"/>
              </svg>
            </a>
            <a href="#" className="social-link">
              <svg width="44" height="44" viewBox="0 0 44 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect y="0.0449219" width="44" height="44" rx="22" fill="#A1CC3A"/>
                <path d="M26.1071 17.2383C25.4969 16.6312 25.1606 15.8518 25.1607 15.0449H22.4018V24.6894C22.3809 25.2114 22.1281 25.706 21.6967 26.0688C21.2653 26.4315 20.6889 26.6341 20.0893 26.6338C18.8214 26.6338 17.7679 25.7316 17.7679 24.6116C17.7679 23.2738 19.25 22.2705 20.7768 22.6827V20.2249C17.6964 19.8671 15 21.9516 15 24.6116C15 27.2016 17.4643 29.0449 20.0804 29.0449C22.8839 29.0449 25.1607 27.0616 25.1607 24.6116V19.7194C26.2795 20.4192 27.6226 20.7948 29 20.7927V18.3894C29 18.3894 27.3214 18.4594 26.1071 17.2383Z" fill="#4F2C1D"/>
              </svg>
            </a>
            <a href="#" className="social-link">
              <svg width="44" height="44" viewBox="0 0 44 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect y="0.0449219" width="44" height="44" rx="22" fill="#A1CC3A"/>
                <path d="M20 25.0449L25.19 22.0449L20 19.0449V25.0449ZM31.56 17.2149C31.69 17.6849 31.78 18.3149 31.84 19.1149C31.91 19.9149 31.94 20.6049 31.94 21.2049L32 22.0449C32 24.2349 31.84 25.8449 31.56 26.8749C31.31 27.7749 30.73 28.3549 29.83 28.6049C29.36 28.7349 28.5 28.8249 27.18 28.8849C25.88 28.9549 24.69 28.9849 23.59 28.9849L22 29.0449C17.81 29.0449 15.2 28.8849 14.17 28.6049C13.27 28.3549 12.69 27.7749 12.44 26.8749C12.31 26.4049 12.22 25.7749 12.16 24.9749C12.09 24.1749 12.06 23.4849 12.06 22.8849L12 22.0449C12 19.8549 12.16 18.2449 12.44 17.2149C12.69 16.3149 13.27 15.7349 14.17 15.4849C14.64 15.3549 15.5 15.2649 16.82 15.2049C18.12 15.1349 19.31 15.1049 20.41 15.1049L22 15.0449C26.19 15.0449 28.8 15.2049 29.83 15.4849C30.73 15.7349 31.31 16.3149 31.56 17.2149Z" fill="#4F2C1D"/>
              </svg>
            </a>
          </div>
          
          <div className="footer-copyright">
            <p>Bulgarian Estates © 2025</p>
            <p>Политика за защита на личните данни</p>
          </div>
        </div>

        <div className="footer-column properties-column">
          <div className="footer-section-header">
            <h3 className="footer-section-title">Имоти</h3>
          </div>
          <div className="footer-links">
            <a href="#" className="footer-link">На морето</a>
            <a href="#" className="footer-link">Ново строителство</a>
            <a href="#" className="footer-link">В града</a>
            <a href="#" className="footer-link">На село</a>
          </div>
          
          <div className="footer-section-header">
            <h3 className="footer-section-title">Блог</h3>
          </div>
          
          <div className="footer-section-header">
            <h3 className="footer-section-title">Контакти</h3>
          </div>
          
          <div className="contact-info">
            <p className="contact-address">гр. Бургас, ул. Генерал Гурко №13, офис 3</p>
            <div className="contact-details">
              <a href="tel:+359877788888" className="contact-link">+359 877 78 88 88</a>
              <a href="tel:+359877788888" className="contact-link">+359 877 78 88 88</a>
              <p className="working-hours">Работно време</p>
              <p className="working-hours">Пон-Пет: 09:00-18:00</p>
              <a href="tel:+359888799789" className="contact-link">+359 888 79 97 89</a>
              <a href="mailto:info@bulgarianestates.com" className="contact-link">info@bulgarianestates.com</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
