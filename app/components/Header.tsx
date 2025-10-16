'use client'

import { useState, useEffect, useRef } from 'react'
import { useRouter } from 'next/navigation'
import { getImagePath } from '../utils/imagePath'

export default function Header() {
  const [isLanguageMenuOpen, setIsLanguageMenuOpen] = useState(false)
  const [isNavigationMenuOpen, setIsNavigationMenuOpen] = useState(false)
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const languageMenuRef = useRef<HTMLDivElement>(null)
  const searchRef = useRef<HTMLDivElement>(null)
  const router = useRouter()

  const languages = [
    {
      code: 'en',
      name: 'English',
      flag: (
      <img src="/images/eng.svg" width="24" height="24"></img>
      )
    },
    {
      code: 'bg',
      name: 'Български',
      flag: (
       <img src="/images/bg.svg" width="24" height="24"></img>
      )
    },
    {
      code: 'de',
      name: 'Deutsch',
      flag: (
         <img src="/images/de.svg" width="24" height="24"></img>
      )
    },
    {
      code: 'tr',
      name: 'Turkish',
      flag: (
    <img src="/images/tr.svg" width="24" height="24"></img>
      )
    },
    {
      code: 'ru',
      name: 'Русский',
      flag: (
     <img src="/images/rus.svg" width="24" height="24"></img>
      )
    }
  ]

  const navigationItems = [
    { name: 'Огледи', href: '/viewings', icon: <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.13478 3.09499C8.65156 1.57821 10.5639 1.57821 12.0807 3.09499L17.4641 8.47832C18.3828 9.39707 18.3828 10.9362 17.4641 11.8549L16.6666 12.6524V16.6666C16.6666 17.1269 16.294 17.4999 15.8333 17.4999H12.4999C12.0396 17.4999 11.6666 17.1269 11.6666 16.6666V13.3333H8.33325V16.6666C8.33325 17.1269 7.96028 17.4999 7.49992 17.4999H4.16659C3.70622 17.4999 3.33325 17.1269 3.33325 16.6666V12.6524L2.53575 11.8549C1.61701 10.9362 1.61701 9.39707 2.53575 8.47832L7.91909 3.09499H7.13478Z" stroke="#299393" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg> },
    { name: 'Продай', href: '/sell', icon: <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.5 6.66667V3.33333C7.5 2.8731 7.8731 2.5 8.33333 2.5H16.6667C17.1269 2.5 17.5 2.8731 17.5 3.33333V11.6667C17.5 12.1269 17.1269 12.5 16.6667 12.5H13.3333M2.5 8.33333V16.6667C2.5 17.1269 2.8731 17.5 3.33333 17.5H11.6667C12.1269 17.5 12.5 17.1269 12.5 16.6667V8.33333C12.5 7.8731 12.1269 7.5 11.6667 7.5H3.33333C2.8731 7.5 2.5 7.8731 2.5 8.33333Z" stroke="#299393" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/><path d="M5.83325 10.8333L7.49992 12.5L10.8333 9.16667" stroke="#299393" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg> },
    { name: 'Купи', href: '/buy', icon: <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.66659 8.33333V5.83333C6.66659 3.53215 8.53208 1.66667 10.8333 1.66667C13.1344 1.66667 14.9999 3.53215 14.9999 5.83333V8.33333M3.33325 8.33333H17.4999L16.6666 16.6667H4.16659L3.33325 8.33333Z" stroke="#299393" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg> },
    { name: 'Наем', href: '/rent', icon: <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.5 7.5L10 2.5L17.5 7.5V16.6667C17.5 17.1269 17.1269 17.5 16.6667 17.5H13.3333V12.5H6.66667V17.5H3.33333C2.8731 17.5 2.5 17.1269 2.5 16.6667V7.5Z" stroke="#299393" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/><path d="M8.33325 10H11.6666" stroke="#299393" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg> },
    { name: 'Услуги', href: '/services', icon: <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10.8333 1.66667L12.325 4.65833L15.8333 5.16667L13.3333 7.59167L13.925 11.075L10.8333 9.51667L7.74167 11.075L8.33333 7.59167L5.83333 5.16667L9.34167 4.65833L10.8333 1.66667Z" stroke="#299393" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/><path d="M5 15L7.5 17.5L15 10" stroke="#299393" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg> },
    { name: 'Помощ', href: '/help', icon: <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="10" cy="10" r="8.33333" stroke="#299393" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/><path d="M7.57495 7.5C7.77087 6.94772 8.14831 6.48706 8.6441 6.18948C9.13989 5.8919 9.72375 5.77581 10.2925 5.85764C10.8613 5.93948 11.3816 6.21434 11.7697 6.63748C12.1578 7.06062 12.3904 7.60221 12.4291 8.16667C12.4291 10 9.92912 10.8333 9.92912 10.8333" stroke="#299393" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/><path d="M10 14.1667H10.0083" stroke="#299393" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg> },
    { name: 'Блог', href: '/blog', icon: <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15.8333 2.5H4.16667C3.24619 2.5 2.5 3.24619 2.5 4.16667V15.8333C2.5 16.7538 3.24619 17.5 4.16667 17.5H15.8333C16.7538 17.5 17.5 16.7538 17.5 15.8333V4.16667C17.5 3.24619 16.7538 2.5 15.8333 2.5Z" stroke="#299393" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/><path d="M5.83325 7.5H14.1666" stroke="#299393" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/><path d="M5.83325 10.8333H14.1666" stroke="#299393" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/><path d="M5.83325 14.1667H10" stroke="#299393" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg> },
    { name: 'Контакти', href: '/contacts', icon: <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M18.3333 14.0999V16.5999C18.3341 16.8319 18.2866 17.0618 18.1936 17.2744C18.1006 17.487 17.9643 17.6778 17.7933 17.8343C17.6222 17.9908 17.4204 18.1096 17.2005 18.1835C16.9806 18.2574 16.7473 18.2849 16.5166 18.2641C13.9523 17.9883 11.4891 17.1179 9.32497 15.7249C7.31151 14.4436 5.60445 12.7365 4.32497 10.7232C2.92831 8.55051 2.05893 6.07638 1.78747 3.50157C1.76671 3.27165 1.79394 3.03925 1.86707 2.81986C1.9402 2.60047 2.0579 2.39914 2.21307 2.22792C2.36824 2.05669 2.55756 1.91981 2.76841 1.82583C2.97926 1.73185 3.20745 1.68285 3.43747 1.68157H5.93747C6.32302 1.67776 6.69698 1.80754 6.9918 2.04742C7.28663 2.2873 7.48302 2.62338 7.54497 2.99324L8.18747 6.00824C8.2499 6.35362 8.20054 6.71066 8.04666 7.02376C7.89279 7.33686 7.64325 7.58665 7.33747 7.73324L6.22497 8.28991C7.38601 10.384 9.11936 12.1174 11.2133 13.2782L11.77 12.1657C11.9166 11.8599 12.1663 11.6104 12.4794 11.4565C12.7925 11.3026 13.1496 11.2533 13.495 11.3157L16.51 11.9582C16.8811 12.0206 17.2181 12.2178 17.4583 12.5135C17.6986 12.8092 17.8277 13.1844 17.8233 13.5699L18.3333 14.0999Z" stroke="#299393" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg> }
  ]

  // Close menus when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (languageMenuRef.current && !languageMenuRef.current.contains(event.target as Node)) {
        setIsLanguageMenuOpen(false)
      }
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsSearchOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  // Close navigation menu on escape key
  useEffect(() => {
    function handleEscapeKey(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        setIsNavigationMenuOpen(false)
      }
    }

    if (isNavigationMenuOpen) {
      document.addEventListener('keydown', handleEscapeKey)
      document.body.style.overflow = 'hidden' // Prevent background scrolling
    } else {
      document.body.style.overflow = 'unset'
    }

    return () => {
      document.removeEventListener('keydown', handleEscapeKey)
      document.body.style.overflow = 'unset'
    }
  }, [isNavigationMenuOpen])

  const toggleLanguageMenu = () => {
    setIsLanguageMenuOpen(!isLanguageMenuOpen)
  }

  const toggleNavigationMenu = () => {
    setIsNavigationMenuOpen(!isNavigationMenuOpen)
  }

  const toggleSearchField = () => {
    setIsSearchOpen(!isSearchOpen)
  }

  const selectLanguage = (language: typeof languages[0]) => {
    console.log('Selected language:', language)
    setIsLanguageMenuOpen(false)
    // Add language switching logic here
  }

  const handleNavigation = (href: string) => {
    console.log('Navigate to:', href)
    setIsNavigationMenuOpen(false)
    // Add navigation logic here
  }

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      router.push(`/search?q=${encodeURIComponent(searchQuery.trim())}`)
      setIsSearchOpen(false)
      setSearchQuery('')
    }
  }

  const handleSearchInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value)
  }

  return (
    <>
      <header className="header">
        <div className="header-container">
          <div className="logo-container">
            <img
              src={getImagePath("/images/logo.svg")}
              alt="Bulgarian Estates Logo"
              className="logo"
            />
          </div>
          
          <div className="header-actions">
            <div className="search-container" ref={searchRef}>
              {isSearchOpen && (
                <form className="search-field" onSubmit={handleSearch}>
                  <input
                    type="text"
                    placeholder="Search properties..."
                    className="search-input"
                    value={searchQuery}
                    onChange={handleSearchInputChange}
                    autoFocus
                  />
                  <button
                    type="submit"
                    className="search-submit-button"
                    aria-label="Submit search"
                  >
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 25"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M16.893 17.5154L19.973 20.5954M19 12.0954C19 14.0845 18.2098 15.9921 16.8033 17.3987C15.3968 18.8052 13.4891 19.5954 11.5 19.5954C9.51088 19.5954 7.60322 18.8052 6.1967 17.3987C4.79018 15.9921 4 14.0845 4 12.0954C4 10.1062 4.79018 8.19859 6.1967 6.79207C7.60322 5.38554 9.51088 4.59537 11.5 4.59537C13.4891 4.59537 15.3968 5.38554 16.8033 6.79207C18.2098 8.19859 19 10.1062 19 12.0954Z"
                        stroke="#299393"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                </form>
              )}
              <button
                className="action-button"
                aria-label="Search"
                onClick={toggleSearchField}
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M16.893 17.5154L19.973 20.5954M19 12.0954C19 14.0845 18.2098 15.9921 16.8033 17.3987C15.3968 18.8052 13.4891 19.5954 11.5 19.5954C9.51088 19.5954 7.60322 18.8052 6.1967 17.3987C4.79018 15.9921 4 14.0845 4 12.0954C4 10.1062 4.79018 8.19859 6.1967 6.79207C7.60322 5.38554 9.51088 4.59537 11.5 4.59537C13.4891 4.59537 15.3968 5.38554 16.8033 6.79207C18.2098 8.19859 19 10.1062 19 12.0954Z"
                    stroke="#299393"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>

            <div className="language-selector" ref={languageMenuRef}>
              <button
                className="action-button language-button"
                aria-label="Language"
                onClick={toggleLanguageMenu}
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 3.59537C10.22 3.59537 8.47991 4.12321 6.99987 5.11214C5.51983 6.10107 4.36628 7.50668 3.68509 9.15122C3.0039 10.7958 2.82567 12.6054 3.17294 14.3512C3.5202 16.097 4.37737 17.7007 5.63604 18.9593C6.89472 20.218 8.49836 21.0752 10.2442 21.4224C11.99 21.7697 13.7996 21.5915 15.4442 20.9103C17.0887 20.2291 18.4943 19.0755 19.4832 17.5955C20.4722 16.1155 21 14.3754 21 12.5954C21 10.2084 20.0518 7.91923 18.364 6.23141C16.6761 4.54358 14.387 3.59537 12 3.59537ZM19.46 11.8454H16.7C16.3507 9.43638 15.332 7.17386 13.76 5.31537C15.2678 5.68266 16.625 6.50741 17.6455 7.67652C18.666 8.84562 19.2998 10.3018 19.46 11.8454ZM8.81 13.3454H15.19C14.7271 15.7138 13.6238 17.9101 12 19.6954C10.3762 17.9101 9.27288 15.7138 8.81 13.3454ZM8.81 11.8454C9.27288 9.47689 10.3762 7.28063 12 5.49537C13.6238 7.28063 14.7271 9.47689 15.19 11.8454H8.81ZM10.24 5.31537C8.66798 7.17386 7.64932 9.43638 7.3 11.8454H4.54C4.70021 10.3018 5.33403 8.84562 6.35454 7.67652C7.37504 6.50741 8.73225 5.68266 10.24 5.31537ZM4.54 13.3154H7.3C7.64932 15.7244 8.66798 17.9869 10.24 19.8454C8.73666 19.4799 7.38264 18.6596 6.36258 17.4963C5.34251 16.3331 4.70606 14.8836 4.54 13.3454V13.3154ZM13.76 19.8454C15.332 17.9869 16.3507 15.7244 16.7 13.3154H19.46C19.3057 14.8643 18.6745 16.3271 17.6536 17.5021C16.6326 18.6771 15.2722 19.5063 13.76 19.8754V19.8454Z"
                    fill="#299393"
                  />
                </svg>
              </button>

              {isLanguageMenuOpen && (
                <div className="language-menu">
                  {languages.map((language) => (
                    <button
                      key={language.code}
                      className="language-option"
                      onClick={() => selectLanguage(language)}
                    >
                      <span className="flag-icon">{language.flag}</span>
                      <span className="language-name">{language.name}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>
            
            <button 
              className="action-button menu-button" 
              aria-label="Menu"
              onClick={toggleNavigationMenu}
            >
              <svg 
                width="22" 
                height="17" 
                viewBox="0 0 22 17" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M0.9375 1.59537H21.0625" stroke="#4F2C1D" strokeWidth="1.75" strokeLinecap="round"/>
                <path d="M0.9375 8.59537H21.0625" stroke="#4F2C1D" strokeWidth="1.75" strokeLinecap="round"/>
                <path d="M0.9375 15.5954H21.0625" stroke="#4F2C1D" strokeWidth="1.75" strokeLinecap="round"/>
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Navigation Menu Overlay */}
      {isNavigationMenuOpen && (
        <div className="navigation-overlay" onClick={() => setIsNavigationMenuOpen(false)}>
          <div className="navigation-menu" onClick={(e) => e.stopPropagation()}>
            <div className="navigation-header">
              <img 
                src={getImagePath("/images/logo.svg")} 
                alt="Bulgarian Estates Logo" 
                className="navigation-logo"
              />
              <button 
                className="navigation-close"
                onClick={() => setIsNavigationMenuOpen(false)}
                aria-label="Close menu"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>
            
            <nav className="navigation-items">
              {navigationItems.map((item, index) => (
                <button
                  key={index}
                  className="navigation-item"
                  onClick={() => handleNavigation(item.href)}
                >
                  <span className="navigation-icon">{item.icon}</span>
                  <span className="navigation-text">{item.name}</span>
                  <svg className="navigation-arrow" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7.5 5L12.5 10L7.5 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              ))}
            </nav>

            <div className="navigation-footer">
              <div className="navigation-contact">
                <h4>Свържете се с нас</h4>
                <p>+359 888 123 456</p>
                <p>info@bulgarianestates.com</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
