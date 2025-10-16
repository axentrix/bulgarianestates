'use client'

import PropertyListings from '../components/PropertyListings'
import SearchFilters from '../components/SearchFilters'

export default function SearchResultsPage() {
  return (
    <div className="search-results-page">
      {/* Search Filter Bar */}
      <div className="search-filter-bar">
        <div className="search-filter-container">
          <SearchFilters />
        </div>
      </div>

      <main className="search-results-content">
        <aside className="search-left">
          <div className="search-map-sticky">
            <div className="map-container">
              <img 
                src="https://api.builder.io/api/v1/image/assets/TEMP/4255c3444ca9d7a29a4f8343762535d514bc4d9b?width=3546" 
                alt="Map of properties" 
                className="map-image" 
              />
              
              {/* Map Pins */}
              <svg className="map-pin map-pin-1" width="45" height="49" viewBox="0 0 45 49" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0_179_9452)" filter="url(#filter0_d_179_9452)">
                  <g filter="url(#filter1_d_179_9452)">
                    <path d="M20.7703 43.0116L20.2303 42.6459C17.5277 40.755 15.0164 38.6045 12.7322 36.225C8.71875 32.0203 4.21875 25.7175 4.21875 18.2784C4.21875 9.12656 11.6466 0 22.5 0C33.3534 0 40.7812 9.12656 40.7812 18.2812C40.7812 25.7203 36.2812 32.0231 32.2678 36.2222C29.9836 38.6017 27.4723 40.7522 24.7697 42.6431C24.5409 42.8025 24.3609 42.9244 24.2297 43.0088C23.6587 43.3884 23.0766 43.7484 22.5 44.1141C21.9234 43.7484 21.3413 43.3884 20.7703 43.0116Z" fill="white"/>
                    <path d="M22.5 0.351562C33.1384 0.351562 40.4297 9.2992 40.4297 18.2812C40.4297 25.581 36.0095 31.7987 32.0146 35.9785C29.7464 38.3413 27.252 40.4768 24.5684 42.3545C24.3412 42.5128 24.1658 42.632 24.04 42.7129H24.0391L24.0352 42.7158C23.5297 43.052 23.0172 43.3717 22.5 43.6982C21.9828 43.3717 21.4699 43.0518 20.9639 42.7178L20.4277 42.3545C17.7456 40.4774 15.2525 38.3431 12.9854 35.9814C8.9904 31.7959 4.57031 25.578 4.57031 18.2783C4.57038 9.29915 11.8616 0.351562 22.5 0.351562Z" stroke="white" strokeWidth="0.703125"/>
                  </g>
                  <path d="M21.4218 17.3809L13.2759 18.8155C12.9529 18.8719 12.6562 18.624 12.6562 18.2973V11.1053C12.6562 10.8499 12.8403 10.6321 13.0919 10.587L21.2378 9.14865C21.5608 9.09231 21.8575 9.34018 21.8575 9.66692V16.8589C21.8575 17.1143 21.6734 17.3321 21.4218 17.3771V17.3809Z" fill="#299393"/>
                  <path d="M21.4218 26.845L13.2759 28.2796C12.9529 28.3359 12.6562 28.0881 12.6562 27.7613V20.5694C12.6562 20.314 12.8403 20.0962 13.0919 20.0511L21.2378 18.6164C21.5608 18.5601 21.8575 18.808 21.8575 19.1347V26.3267C21.8575 26.5821 21.6734 26.7999 21.4218 26.845Z" fill="#299393"/>
                  <path d="M32.3595 30.2024L23.3611 26.9276C23.1546 26.8524 23.0156 26.6534 23.0156 26.4356V19.2887C23.0156 18.9244 23.3762 18.6728 23.7179 18.7967L32.7163 22.0716C32.9229 22.1467 33.0618 22.3457 33.0618 22.5636V29.7105C33.0618 30.0747 32.7013 30.3264 32.3595 30.2024Z" fill="#A1CD3A"/>
                  <path d="M30.5756 20.0887L23.3611 17.4635C23.1546 17.3884 23.0156 17.1894 23.0156 16.9715V9.82465C23.0156 9.46036 23.3762 9.20873 23.7179 9.33267L30.9324 11.9578C31.139 12.0329 31.2779 12.232 31.2779 12.4498V19.5967C31.2779 19.961 30.9174 20.2126 30.5756 20.0887Z" fill="#A1CD3A"/>
                </g>
                <defs>
                  <filter id="filter0_d_179_9452" x="0" y="0" width="49" height="49" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                    <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                    <feOffset dx="2" dy="2"/>
                    <feGaussianBlur stdDeviation="1"/>
                    <feComposite in2="hardAlpha" operator="out"/>
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.88 0"/>
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_179_9452"/>
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_179_9452" result="shape"/>
                  </filter>
                  <filter id="filter1_d_179_9452" x="4.21875" y="0" width="40.5625" height="48.1141" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                    <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                    <feOffset dx="2" dy="2"/>
                    <feGaussianBlur stdDeviation="1"/>
                    <feComposite in2="hardAlpha" operator="out"/>
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.88 0"/>
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_179_9452"/>
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_179_9452" result="shape"/>
                  </filter>
                  <clipPath id="clip0_179_9452">
                    <rect width="45" height="45" fill="white"/>
                  </clipPath>
                </defs>
              </svg>

              <svg className="map-pin map-pin-2" width="45" height="49" viewBox="0 0 45 49" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0_179_9460)" filter="url(#filter0_d_179_9460)">
                  <g filter="url(#filter1_d_179_9460)">
                    <path d="M20.7703 43.0116L20.2303 42.6459C17.5277 40.755 15.0164 38.6045 12.7322 36.225C8.71875 32.0203 4.21875 25.7175 4.21875 18.2784C4.21875 9.12656 11.6466 0 22.5 0C33.3534 0 40.7812 9.12656 40.7812 18.2812C40.7812 25.7203 36.2812 32.0231 32.2678 36.2222C29.9836 38.6017 27.4723 40.7522 24.7697 42.6431C24.5409 42.8025 24.3609 42.9244 24.2297 43.0088C23.6587 43.3884 23.0766 43.7484 22.5 44.1141C21.9234 43.7484 21.3413 43.3884 20.7703 43.0116Z" fill="white"/>
                    <path d="M22.5 0.351562C33.1384 0.351562 40.4297 9.2992 40.4297 18.2812C40.4297 25.581 36.0095 31.7987 32.0146 35.9785C29.7464 38.3413 27.252 40.4768 24.5684 42.3545C24.3412 42.5128 24.1658 42.632 24.04 42.7129H24.0391L24.0352 42.7158C23.5297 43.052 23.0172 43.3717 22.5 43.6982C21.9828 43.3717 21.4699 43.0518 20.9639 42.7178L20.4277 42.3545C17.7456 40.4774 15.2525 38.3431 12.9854 35.9814C8.9904 31.7959 4.57031 25.578 4.57031 18.2783C4.57038 9.29915 11.8616 0.351562 22.5 0.351562Z" stroke="white" strokeWidth="0.703125"/>
                  </g>
                  <path d="M21.4218 17.3809L13.2759 18.8155C12.9529 18.8719 12.6562 18.624 12.6562 18.2973V11.1053C12.6562 10.8499 12.8403 10.6321 13.0919 10.587L21.2378 9.14865C21.5608 9.09231 21.8575 9.34018 21.8575 9.66692V16.8589C21.8575 17.1143 21.6734 17.3321 21.4218 17.3771V17.3809Z" fill="#299393"/>
                  <path d="M21.4218 26.845L13.2759 28.2796C12.9529 28.3359 12.6562 28.0881 12.6562 27.7613V20.5694C12.6562 20.314 12.8403 20.0962 13.0919 20.0511L21.2378 18.6164C21.5608 18.5601 21.8575 18.808 21.8575 19.1347V26.3267C21.8575 26.5821 21.6734 26.7999 21.4218 26.845Z" fill="#299393"/>
                  <path d="M32.3595 30.2024L23.3611 26.9276C23.1546 26.8524 23.0156 26.6534 23.0156 26.4356V19.2887C23.0156 18.9244 23.3762 18.6728 23.7179 18.7967L32.7163 22.0716C32.9229 22.1467 33.0618 22.3457 33.0618 22.5636V29.7105C33.0618 30.0747 32.7013 30.3264 32.3595 30.2024Z" fill="#A1CD3A"/>
                  <path d="M30.5756 20.0887L23.3611 17.4635C23.1546 17.3884 23.0156 17.1894 23.0156 16.9715V9.82465C23.0156 9.46036 23.3762 9.20873 23.7179 9.33267L30.9324 11.9578C31.139 12.0329 31.2779 12.232 31.2779 12.4498V19.5967C31.2779 19.961 30.9174 20.2126 30.5756 20.0887Z" fill="#A1CD3A"/>
                </g>
                <defs>
                  <filter id="filter0_d_179_9460" x="0" y="0" width="49" height="49" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                    <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                    <feOffset dx="2" dy="2"/>
                    <feGaussianBlur stdDeviation="1"/>
                    <feComposite in2="hardAlpha" operator="out"/>
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.88 0"/>
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_179_9460"/>
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_179_9460" result="shape"/>
                  </filter>
                  <filter id="filter1_d_179_9460" x="4.21875" y="0" width="40.5625" height="48.1141" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                    <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                    <feOffset dx="2" dy="2"/>
                    <feGaussianBlur stdDeviation="1"/>
                    <feComposite in2="hardAlpha" operator="out"/>
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.88 0"/>
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_179_9460"/>
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_179_9460" result="shape"/>
                  </filter>
                  <clipPath id="clip0_179_9460">
                    <rect width="45" height="45" fill="white"/>
                  </clipPath>
                </defs>
              </svg>

              <svg className="map-pin map-pin-3" width="45" height="49" viewBox="0 0 45 49" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0_179_9467)" filter="url(#filter0_d_179_9467)">
                  <g filter="url(#filter1_d_179_9467)">
                    <path d="M20.7703 43.0116L20.2303 42.6459C17.5277 40.755 15.0164 38.6045 12.7322 36.225C8.71875 32.0203 4.21875 25.7175 4.21875 18.2784C4.21875 9.12656 11.6466 0 22.5 0C33.3534 0 40.7812 9.12656 40.7812 18.2812C40.7812 25.7203 36.2812 32.0231 32.2678 36.2222C29.9836 38.6017 27.4723 40.7522 24.7697 42.6431C24.5409 42.8025 24.3609 42.9244 24.2297 43.0088C23.6587 43.3884 23.0766 43.7484 22.5 44.1141C21.9234 43.7484 21.3413 43.3884 20.7703 43.0116Z" fill="white"/>
                    <path d="M22.5 0.351562C33.1384 0.351562 40.4297 9.2992 40.4297 18.2812C40.4297 25.581 36.0095 31.7987 32.0146 35.9785C29.7464 38.3413 27.252 40.4768 24.5684 42.3545C24.3412 42.5128 24.1658 42.632 24.04 42.7129H24.0391L24.0352 42.7158C23.5297 43.052 23.0172 43.3717 22.5 43.6982C21.9828 43.3717 21.4699 43.0518 20.9639 42.7178L20.4277 42.3545C17.7456 40.4774 15.2525 38.3431 12.9854 35.9814C8.9904 31.7959 4.57031 25.578 4.57031 18.2783C4.57038 9.29915 11.8616 0.351562 22.5 0.351562Z" stroke="white" strokeWidth="0.703125"/>
                  </g>
                  <path d="M21.4218 17.3809L13.2759 18.8155C12.9529 18.8719 12.6562 18.624 12.6562 18.2973V11.1053C12.6562 10.8499 12.8403 10.6321 13.0919 10.587L21.2378 9.14865C21.5608 9.09231 21.8575 9.34018 21.8575 9.66692V16.8589C21.8575 17.1143 21.6734 17.3321 21.4218 17.3771V17.3809Z" fill="#299393"/>
                  <path d="M21.4218 26.845L13.2759 28.2796C12.9529 28.3359 12.6562 28.0881 12.6562 27.7613V20.5694C12.6562 20.314 12.8403 20.0962 13.0919 20.0511L21.2378 18.6164C21.5608 18.5601 21.8575 18.808 21.8575 19.1347V26.3267C21.8575 26.5821 21.6734 26.7999 21.4218 26.845Z" fill="#299393"/>
                  <path d="M32.3595 30.2024L23.3611 26.9276C23.1546 26.8524 23.0156 26.6534 23.0156 26.4356V19.2887C23.0156 18.9244 23.3762 18.6728 23.7179 18.7967L32.7163 22.0716C32.9229 22.1467 33.0618 22.3457 33.0618 22.5636V29.7105C33.0618 30.0747 32.7013 30.3264 32.3595 30.2024Z" fill="#A1CD3A"/>
                  <path d="M30.5756 20.0887L23.3611 17.4635C23.1546 17.3884 23.0156 17.1894 23.0156 16.9715V9.82465C23.0156 9.46036 23.3762 9.20873 23.7179 9.33267L30.9324 11.9578C31.139 12.0329 31.2779 12.232 31.2779 12.4498V19.5967C31.2779 19.961 30.9174 20.2126 30.5756 20.0887Z" fill="#A1CD3A"/>
                </g>
                <defs>
                  <filter id="filter0_d_179_9467" x="0" y="0" width="49" height="49" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                    <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                    <feOffset dx="2" dy="2"/>
                    <feGaussianBlur stdDeviation="1"/>
                    <feComposite in2="hardAlpha" operator="out"/>
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.88 0"/>
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_179_9467"/>
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_179_9467" result="shape"/>
                  </filter>
                  <filter id="filter1_d_179_9467" x="4.21875" y="0" width="40.5625" height="48.1141" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                    <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                    <feOffset dx="2" dy="2"/>
                    <feGaussianBlur stdDeviation="1"/>
                    <feComposite in2="hardAlpha" operator="out"/>
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.88 0"/>
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_179_9467"/>
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_179_9467" result="shape"/>
                  </filter>
                  <clipPath id="clip0_179_9467">
                    <rect width="45" height="45" fill="white"/>
                  </clipPath>
                </defs>
              </svg>

              <svg className="map-pin map-pin-4" width="45" height="49" viewBox="0 0 45 49" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0_179_9474)" filter="url(#filter0_d_179_9474)">
                  <g filter="url(#filter1_d_179_9474)">
                    <path d="M20.7703 43.0116L20.2303 42.646C17.5277 40.755 15.0164 38.6045 12.7322 36.225C8.71875 32.0203 4.21875 25.7175 4.21875 18.2785C4.21875 9.12659 11.6466 3.05176e-05 22.5 3.05176e-05C33.3534 3.05176e-05 40.7812 9.12659 40.7812 18.2813C40.7812 25.7203 36.2812 32.0232 32.2678 36.2222C29.9836 38.6017 27.4723 40.7522 24.7697 42.6432C24.5409 42.8025 24.3609 42.9244 24.2297 43.0088C23.6587 43.3885 23.0766 43.7485 22.5 44.1141C21.9234 43.7485 21.3413 43.3885 20.7703 43.0116Z" fill="white"/>
                    <path d="M22.5 0.351593C33.1384 0.351593 40.4297 9.29923 40.4297 18.2813C40.4297 25.5811 36.0095 31.7988 32.0146 35.9785C29.7464 38.3414 27.252 40.4768 24.5684 42.3545C24.3412 42.5128 24.1658 42.6321 24.04 42.7129H24.0391L24.0352 42.7159C23.5297 43.052 23.0172 43.3717 22.5 43.6983C21.9828 43.3717 21.4699 43.0519 20.9639 42.7178L20.4277 42.3545C17.7456 40.4775 15.2525 38.3431 12.9854 35.9815C8.9904 31.7959 4.57031 25.5781 4.57031 18.2784C4.57038 9.29918 11.8616 0.351593 22.5 0.351593Z" stroke="white" strokeWidth="0.703125"/>
                  </g>
                  <path d="M21.4218 17.3809L13.2759 18.8156C12.9529 18.8719 12.6562 18.624 12.6562 18.2973V11.1053C12.6562 10.85 12.8403 10.6321 13.0919 10.5871L21.2378 9.14867C21.5608 9.09233 21.8575 9.3402 21.8575 9.66694V16.8589C21.8575 17.1143 21.6734 17.3321 21.4218 17.3772V17.3809Z" fill="#299393"/>
                  <path d="M21.4218 26.845L13.2759 28.2796C12.9529 28.3359 12.6562 28.0881 12.6562 27.7613V20.5694C12.6562 20.314 12.8403 20.0962 13.0919 20.0511L21.2378 18.6165C21.5608 18.5601 21.8575 18.808 21.8575 19.1347V26.3267C21.8575 26.5821 21.6734 26.7999 21.4218 26.845Z" fill="#299393"/>
                  <path d="M32.3595 30.2025L23.3611 26.9276C23.1546 26.8525 23.0156 26.6534 23.0156 26.4356V19.2887C23.0156 18.9244 23.3762 18.6728 23.7179 18.7967L32.7163 22.0716C32.9229 22.1467 33.0618 22.3458 33.0618 22.5636V29.7105C33.0618 30.0748 32.7013 30.3264 32.3595 30.2025Z" fill="#A1CD3A"/>
                  <path d="M30.5756 20.0887L23.3611 17.4635C23.1546 17.3884 23.0156 17.1894 23.0156 16.9716V9.82467C23.0156 9.46038 23.3762 9.20876 23.7179 9.33269L30.9324 11.9578C31.139 12.033 31.2779 12.232 31.2779 12.4498V19.5967C31.2779 19.961 30.9174 20.2126 30.5756 20.0887Z" fill="#A1CD3A"/>
                </g>
                <defs>
                  <filter id="filter0_d_179_9474" x="0" y="3.05176e-05" width="49" height="49" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                    <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                    <feOffset dx="2" dy="2"/>
                    <feGaussianBlur stdDeviation="1"/>
                    <feComposite in2="hardAlpha" operator="out"/>
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.88 0"/>
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_179_9474"/>
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_179_9474" result="shape"/>
                  </filter>
                  <filter id="filter1_d_179_9474" x="4.21875" y="3.05176e-05" width="40.5625" height="48.114" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                    <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                    <feOffset dx="2" dy="2"/>
                    <feGaussianBlur stdDeviation="1"/>
                    <feComposite in2="hardAlpha" operator="out"/>
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.88 0"/>
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_179_9474"/>
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_179_9474" result="shape"/>
                  </filter>
                  <clipPath id="clip0_179_9474">
                    <rect width="45" height="45" fill="white"/>
                  </clipPath>
                </defs>
              </svg>

              <svg className="map-pin map-pin-5" width="45" height="49" viewBox="0 0 45 49" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0_179_9481)" filter="url(#filter0_d_179_9481)">
                  <g filter="url(#filter1_d_179_9481)">
                    <path d="M20.7703 43.0116L20.2303 42.6459C17.5277 40.755 15.0164 38.6045 12.7322 36.225C8.71875 32.0203 4.21875 25.7175 4.21875 18.2784C4.21875 9.12656 11.6466 0 22.5 0C33.3534 0 40.7812 9.12656 40.7812 18.2812C40.7812 25.7203 36.2812 32.0231 32.2678 36.2222C29.9836 38.6017 27.4723 40.7522 24.7697 42.6431C24.5409 42.8025 24.3609 42.9244 24.2297 43.0088C23.6587 43.3884 23.0766 43.7484 22.5 44.1141C21.9234 43.7484 21.3413 43.3884 20.7703 43.0116Z" fill="white"/>
                    <path d="M22.5 0.351562C33.1384 0.351562 40.4297 9.2992 40.4297 18.2812C40.4297 25.581 36.0095 31.7987 32.0146 35.9785C29.7464 38.3413 27.252 40.4768 24.5684 42.3545C24.3412 42.5128 24.1658 42.632 24.04 42.7129H24.0391L24.0352 42.7158C23.5297 43.052 23.0172 43.3717 22.5 43.6982C21.9828 43.3717 21.4699 43.0518 20.9639 42.7178L20.4277 42.3545C17.7456 40.4774 15.2525 38.3431 12.9854 35.9814C8.9904 31.7959 4.57031 25.578 4.57031 18.2783C4.57038 9.29915 11.8616 0.351562 22.5 0.351562Z" stroke="white" strokeWidth="0.703125"/>
                  </g>
                  <path d="M21.4218 17.3809L13.2759 18.8155C12.9529 18.8719 12.6562 18.624 12.6562 18.2973V11.1053C12.6562 10.8499 12.8403 10.6321 13.0919 10.587L21.2378 9.14864C21.5608 9.0923 21.8575 9.34017 21.8575 9.66691V16.8589C21.8575 17.1142 21.6734 17.3321 21.4218 17.3771V17.3809Z" fill="#299393"/>
                  <path d="M21.4218 26.845L13.2759 28.2796C12.9529 28.3359 12.6562 28.0881 12.6562 27.7613V20.5694C12.6562 20.314 12.8403 20.0962 13.0919 20.0511L21.2378 18.6165C21.5608 18.5601 21.8575 18.808 21.8575 19.1347V26.3267C21.8575 26.5821 21.6734 26.7999 21.4218 26.845Z" fill="#299393"/>
                  <path d="M32.3595 30.2024L23.3611 26.9275C23.1546 26.8524 23.0156 26.6534 23.0156 26.4356V19.2887C23.0156 18.9244 23.3762 18.6727 23.7179 18.7967L32.7163 22.0716C32.9229 22.1467 33.0618 22.3457 33.0618 22.5635V29.7104C33.0618 30.0747 32.7013 30.3263 32.3595 30.2024Z" fill="#A1CD3A"/>
                  <path d="M30.5756 20.0887L23.3611 17.4635C23.1546 17.3884 23.0156 17.1894 23.0156 16.9716V9.82467C23.0156 9.46038 23.3762 9.20876 23.7179 9.33269L30.9324 11.9578C31.139 12.033 31.2779 12.232 31.2779 12.4498V19.5967C31.2779 19.961 30.9174 20.2126 30.5756 20.0887Z" fill="#A1CD3A"/>
                </g>
                <defs>
                  <filter id="filter0_d_179_9481" x="0" y="0" width="49" height="49" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                    <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                    <feOffset dx="2" dy="2"/>
                    <feGaussianBlur stdDeviation="1"/>
                    <feComposite in2="hardAlpha" operator="out"/>
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.88 0"/>
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_179_9481"/>
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_179_9481" result="shape"/>
                  </filter>
                  <filter id="filter1_d_179_9481" x="4.21875" y="0" width="40.5625" height="48.1141" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                    <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                    <feOffset dx="2" dy="2"/>
                    <feGaussianBlur stdDeviation="1"/>
                    <feComposite in2="hardAlpha" operator="out"/>
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.88 0"/>
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_179_9481"/>
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_179_9481" result="shape"/>
                  </filter>
                  <clipPath id="clip0_179_9481">
                    <rect width="45" height="45" fill="white"/>
                  </clipPath>
                </defs>
              </svg>

              <svg className="map-pin map-pin-6" width="45" height="49" viewBox="0 0 45 49" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0_179_9488)" filter="url(#filter0_d_179_9488)">
                  <g filter="url(#filter1_d_179_9488)">
                    <path d="M20.7703 43.0116L20.2303 42.646C17.5277 40.755 15.0164 38.6045 12.7322 36.225C8.71875 32.0203 4.21875 25.7175 4.21875 18.2785C4.21875 9.12659 11.6466 3.05176e-05 22.5 3.05176e-05C33.3534 3.05176e-05 40.7812 9.12659 40.7812 18.2813C40.7812 25.7203 36.2812 32.0232 32.2678 36.2222C29.9836 38.6017 27.4723 40.7522 24.7697 42.6432C24.5409 42.8025 24.3609 42.9244 24.2297 43.0088C23.6587 43.3885 23.0766 43.7485 22.5 44.1141C21.9234 43.7485 21.3413 43.3885 20.7703 43.0116Z" fill="white"/>
                    <path d="M22.5 0.351593C33.1384 0.351593 40.4297 9.29923 40.4297 18.2813C40.4297 25.5811 36.0095 31.7988 32.0146 35.9785C29.7464 38.3414 27.252 40.4768 24.5684 42.3545C24.3412 42.5128 24.1658 42.6321 24.04 42.7129H24.0391L24.0352 42.7159C23.5297 43.052 23.0172 43.3717 22.5 43.6983C21.9828 43.3717 21.4699 43.0519 20.9639 42.7178L20.4277 42.3545C17.7456 40.4775 15.2525 38.3431 12.9854 35.9815C8.9904 31.7959 4.57031 25.5781 4.57031 18.2784C4.57038 9.29918 11.8616 0.351593 22.5 0.351593Z" stroke="white" strokeWidth="0.703125"/>
                  </g>
                  <path d="M21.4218 17.3809L13.2759 18.8156C12.9529 18.8719 12.6562 18.624 12.6562 18.2973V11.1053C12.6562 10.85 12.8403 10.6321 13.0919 10.5871L21.2378 9.14867C21.5608 9.09233 21.8575 9.3402 21.8575 9.66694V16.8589C21.8575 17.1143 21.6734 17.3321 21.4218 17.3772V17.3809Z" fill="#299393"/>
                  <path d="M21.4218 26.845L13.2759 28.2796C12.9529 28.3359 12.6562 28.0881 12.6562 27.7613V20.5694C12.6562 20.314 12.8403 20.0962 13.0919 20.0511L21.2378 18.6165C21.5608 18.5601 21.8575 18.808 21.8575 19.1347V26.3267C21.8575 26.5821 21.6734 26.7999 21.4218 26.845Z" fill="#299393"/>
                  <path d="M32.3595 30.2025L23.3611 26.9276C23.1546 26.8525 23.0156 26.6534 23.0156 26.4356V19.2887C23.0156 18.9244 23.3762 18.6728 23.7179 18.7967L32.7163 22.0716C32.9229 22.1467 33.0618 22.3458 33.0618 22.5636V29.7105C33.0618 30.0748 32.7013 30.3264 32.3595 30.2025Z" fill="#A1CD3A"/>
                  <path d="M30.5756 20.0887L23.3611 17.4636C23.1546 17.3885 23.0156 17.1894 23.0156 16.9716V9.82469C23.0156 9.4604 23.3762 9.20877 23.7179 9.33271L30.9324 11.9579C31.139 12.033 31.2779 12.232 31.2779 12.4498V19.5967C31.2779 19.961 30.9174 20.2127 30.5756 20.0887Z" fill="#A1CD3A"/>
                </g>
                <defs>
                  <filter id="filter0_d_179_9488" x="0" y="3.05176e-05" width="49" height="49" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                    <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                    <feOffset dx="2" dy="2"/>
                    <feGaussianBlur stdDeviation="1"/>
                    <feComposite in2="hardAlpha" operator="out"/>
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.88 0"/>
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_179_9488"/>
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_179_9488" result="shape"/>
                  </filter>
                  <filter id="filter1_d_179_9488" x="4.21875" y="3.05176e-05" width="40.5625" height="48.1141" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                    <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                    <feOffset dx="2" dy="2"/>
                    <feGaussianBlur stdDeviation="1"/>
                    <feComposite in2="hardAlpha" operator="out"/>
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.88 0"/>
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_179_9488"/>
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_179_9488" result="shape"/>
                  </filter>
                  <clipPath id="clip0_179_9488">
                    <rect width="45" height="45" fill="white"/>
                  </clipPath>
                </defs>
              </svg>
            </div>
          </div>
        </aside>

        <section className="search-right">
          <PropertyListings activeCategory={0} />
        </section>
      </main>
    </div>
  )
}
