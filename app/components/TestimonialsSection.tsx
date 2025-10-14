'use client'

import { useState, useEffect } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay, EffectCoverflow } from 'swiper/modules'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/effect-coverflow'

export default function TestimonialsSection() {
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  const testimonials = [
    {
      text: "The best real estate agency in the whole Black sea area. Great service, highly skilled and professional people, very reactive!"
    },
    {
      text: "... they not just offer real estate but the whole range of advice and related services (lawyers, notary, translators, ...)"
    },
    {
      text: "Exceptional service and expertise in Bulgarian real estate market. They made our property purchase smooth and stress-free."
    }
  ]

  return (
    <section className="testimonials-section">
      <div className="testimonials-container">
        <div className="testimonials-content">
          <div className="testimonials-text">
            <div className="star-rating">
              <svg width="232" height="45" viewBox="0 0 232 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16.9207 6.99494C17.7403 5.54097 19.834 5.54097 20.6536 6.99495L24.2688 13.409C24.5745 13.9514 25.1011 14.334 25.7115 14.4572L32.9288 15.9134C34.5648 16.2435 35.2118 18.2348 34.0823 19.4635L29.0993 24.8839C28.6779 25.3422 28.4768 25.9613 28.5483 26.5798L29.3936 33.8939C29.5852 35.5519 27.8913 36.7826 26.3736 36.088L19.6788 33.0239C19.1126 32.7648 18.4617 32.7648 17.8955 33.0239L11.2007 36.088C9.68303 36.7826 7.98912 35.5519 8.18074 33.8939L9.02605 26.5798C9.09753 25.9613 8.89639 25.3422 8.475 24.8839L3.49204 19.4635C2.36247 18.2348 3.00948 16.2435 4.64555 15.9134L11.8628 14.4572C12.4732 14.334 12.9998 13.9514 13.3055 13.409L16.9207 6.99494Z" fill="#EAFF69"/>
                <path d="M65.495 6.99494C66.3145 5.54097 68.4083 5.54097 69.2278 6.99495L72.843 13.409C73.1487 13.9514 73.6753 14.334 74.2857 14.4572L81.503 15.9134C83.139 16.2435 83.7861 18.2348 82.6565 19.4635L77.6735 24.8839C77.2521 25.3422 77.051 25.9613 77.1225 26.5798L77.9678 33.8939C78.1594 35.5519 76.4655 36.7826 74.9479 36.088L68.253 33.0239C67.6868 32.7648 67.0359 32.7648 66.4697 33.0239L59.7749 36.088C58.2572 36.7826 56.5633 35.5519 56.755 33.8939L57.6003 26.5798C57.6718 25.9613 57.4706 25.3422 57.0492 24.8839L52.0663 19.4635C50.9367 18.2348 51.5837 16.2435 53.2198 15.9134L60.4371 14.4572C61.0474 14.334 61.574 13.9514 61.8797 13.409L65.495 6.99494Z" fill="#EAFF69"/>
                <path d="M114.069 6.99494C114.889 5.54097 116.982 5.54097 117.802 6.99495L121.417 13.409C121.723 13.9514 122.25 14.334 122.86 14.4572L130.077 15.9134C131.713 16.2435 132.36 18.2348 131.231 19.4635L126.248 24.8839C125.826 25.3422 125.625 25.9613 125.697 26.5798L126.542 33.8939C126.734 35.5519 125.04 36.7826 123.522 36.088L116.827 33.0239C116.261 32.7648 115.61 32.7648 115.044 33.0239L108.349 36.088C106.831 36.7826 105.138 35.5519 105.329 33.8939L106.174 26.5798C106.246 25.9613 106.045 25.3422 105.623 24.8839L100.64 19.4635C99.5109 18.2348 100.158 16.2435 101.794 15.9134L109.011 14.4572C109.622 14.334 110.148 13.9514 110.454 13.409L114.069 6.99494Z" fill="#EAFF69"/>
                <path d="M162.643 6.99494C163.463 5.54097 165.557 5.54097 166.376 6.99495L169.991 13.409C170.297 13.9514 170.824 14.334 171.434 14.4572L178.651 15.9134C180.287 16.2435 180.934 18.2348 179.805 19.4635L174.822 24.8839C174.401 25.3422 174.199 25.9613 174.271 26.5798L175.116 33.8939C175.308 35.5519 173.614 36.7826 172.096 36.088L165.401 33.0239C164.835 32.7648 164.184 32.7648 163.618 33.0239L156.923 36.088C155.406 36.7826 153.712 35.5519 153.903 33.8939L154.749 26.5798C154.82 25.9613 154.619 25.3422 154.198 24.8839L149.215 19.4635C148.085 18.2348 148.732 16.2435 150.368 15.9134L157.585 14.4572C158.196 14.334 158.722 13.9514 159.028 13.409L162.643 6.99494Z" fill="#EAFF69"/>
                <path d="M211.218 6.99494C212.037 5.54097 214.131 5.54097 214.95 6.99495L218.566 13.409C218.871 13.9514 219.398 14.334 220.008 14.4572L227.226 15.9134C228.862 16.2435 229.509 18.2348 228.379 19.4635L223.396 24.8839C222.975 25.3422 222.774 25.9613 222.845 26.5798L223.69 33.8939C223.882 35.5519 222.188 36.7826 220.671 36.088L213.976 33.0239C213.409 32.7648 212.759 32.7648 212.192 33.0239L205.498 36.088C203.98 36.7826 202.286 35.5519 202.478 33.8939L203.323 26.5798C203.394 25.9613 203.193 25.3422 202.772 24.8839L197.789 19.4635C196.659 18.2348 197.306 16.2435 198.942 15.9134L206.160 14.4572C206.77 14.334 207.297 13.9514 207.602 13.409L211.218 6.99494Z" fill="#EAFF69"/>
              </svg>
            </div>
            
            <h2 className="testimonials-title">
              Днес всички те са наши приятели
            </h2>
            
            <p className="testimonials-description">
              През годините помогнахме на хиляди взискателни купувачи от България и чужбина да локализират най-подходящите за тях имоти, да направят разумна и изгодна инвестиция, удовлетворяваща изискванията им за качество, приветлива атмосфера и уют. Днес всички те са наши приятели. Доказателство за това са техните препоръки, които непрекъснато ни осигуряват нови и нови клиенти.
            </p>
          </div>
          
          <div className="testimonials-cards">
            {isClient ? (
              <>
                <Swiper
                  modules={[Navigation, Pagination, Autoplay, EffectCoverflow]}
                  effect="coverflow"
                  grabCursor={true}
                  centeredSlides={true}
                  slidesPerView={3}
                  loop={true}
                  dir="rtl"
                  autoplay={{
                    delay: 4000,
                    disableOnInteraction: false,
                  }}
                  coverflowEffect={{
                    rotate: 30,
                    stretch: -20,
                    depth: 300,
                    modifier: 1,
                    slideShadows: false,
                  }}
                  navigation={{
                    nextEl: '.testimonials-next',
                    prevEl: '.testimonials-prev',
                  }}
                  pagination={{
                    el: '.testimonials-pagination',
                    clickable: true,
                    bulletClass: 'testimonial-nav-dot',
                    bulletActiveClass: 'active'
                  }}
                  className="testimonials-swiper"
                >
                  {testimonials.map((testimonial, index) => (
                    <SwiperSlide key={index}>
                      <div className="testimonial-card">
                        <div className="testimonial-content">
                          <p className="testimonial-text">{testimonial.text}</p>
                        </div>
                        <div className="testimonial-arrow">
                          <svg width="98" height="46" viewBox="0 0 98 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M71.0002 45.854L97.4233 0.0878906H44.5771C44.5771 0.0878906 61.9995 9.75445 67.3046 20.415C71.7771 29.4025 71.0002 45.854 71.0002 45.854Z" fill="white"/>
                          </svg>
                        </div>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
                
                <div className="testimonials-navigation">
                  <button className="testimonials-prev testimonial-nav-arrow">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M15 18L9 12L15 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </button>
                  <div className="testimonials-pagination"></div>
                  <button className="testimonials-next testimonial-nav-arrow">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M9 18L15 12L9 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </button>
                </div>
              </>
            ) : (
              // Fallback static grid for SSR
              <div className="testimonials-static-fallback">
                <div className="testimonials-grid">
                  {testimonials.slice(0, 3).map((testimonial, index) => (
                    <div key={index} className="testimonial-card">
                      <div className="testimonial-content">
                        <p className="testimonial-text">{testimonial.text}</p>
                      </div>
                      <div className="testimonial-arrow">
                        <svg width="98" height="46" viewBox="0 0 98 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M71.0002 45.854L97.4233 0.0878906H44.5771C44.5771 0.0878906 61.9995 9.75445 67.3046 20.415C71.7771 29.4025 71.0002 45.854 71.0002 45.854Z" fill="white"/>
                        </svg>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="testimonials-navigation">
                  <div className="testimonial-nav-dot active"></div>
                  <div className="testimonial-nav-dot"></div>
                  <div className="testimonial-nav-dot"></div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
