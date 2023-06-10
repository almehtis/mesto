import { memo } from "react"
import { Navigation } from "./Navigation"
import "./styles/Header.scss"

export const Header = memo(function Header() {
  return (
    <div className="header">
      <Navigation />

      <div className="header__background">
        <div className="header__background__first-item">
          <svg viewBox="0 0 800 300" width="100%" height="100%" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M 205,5 L 795,5 L 595,295 L 5,295 L 205,5 z" id="path59" fill="#F2BC1C" stroke="none" />
            <path d="M 205,5 L 795,5 L 595,295 L 5,295 L 205,5 z" id="path61" fill="none" stroke="none" stroke-linejoin="round" />
          </svg>
        </div>

        <div className="header__background__second-item">
          <svg viewBox="0 0 800 300" width="100%" height="100%" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M 205,5 L 795,5 L 595,295 L 5,295 L 205,5 z" id="path59" fill="#FEF159" stroke="none" />
            <path d="M 205,5 L 795,5 L 595,295 L 5,295 L 205,5 z" id="path61" fill="none" stroke="none" stroke-linejoin="round" />
          </svg>
        </div>

        <div className="header__background__third-item">
          <svg viewBox="0 0 800 300" width="100%" height="100%" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M 205,5 L 795,5 L 595,295 L 5,295 L 205,5 z" id="path59" fill="#9C64FC" stroke="none" />
            <path d="M 205,5 L 795,5 L 595,295 L 5,295 L 205,5 z" id="path61" fill="none" stroke="none" stroke-linejoin="round" />
          </svg>
        </div>

        <div className="header__background__fourth-item">
          <svg viewBox="0 0 800 300" width="100%" height="100%" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M 205,5 L 795,5 L 595,295 L 5,295 L 205,5 z" id="path59" fill="#BD98FD" stroke="none" />
            <path d="M 205,5 L 795,5 L 595,295 L 5,295 L 205,5 z" id="path61" fill="none" stroke="none" stroke-linejoin="round" />
          </svg>
        </div>

        <div className="header__background__fifth-item">
          <svg viewBox="0 0 800 300" width="100%" height="100%" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M 205,5 L 795,5 L 595,295 L 5,295 L 205,5 z" id="path59" fill="#FEED25" stroke="none" />
            <path d="M 205,5 L 795,5 L 595,295 L 5,295 L 205,5 z" id="path61" fill="none" stroke="none" stroke-linejoin="round" />
          </svg>
        </div>

        <div className="header__background__sixth-item">
          <svg viewBox="0 0 800 300" width="100%" height="100%" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M 205,5 L 795,5 L 595,295 L 5,295 L 205,5 z" id="path59" fill="#F7D9FD" stroke="none" />
            <path d="M 205,5 L 795,5 L 595,295 L 5,295 L 205,5 z" id="path61" fill="none" stroke="none" stroke-linejoin="round" />
          </svg>
        </div>
      </div>

      <div className="header__title-and-logo-block">
        <h1 className="header__title">Агентство территориального брендинга</h1>
        <img className="header__logo" src="/public/icons/LogotypeLarge.svg" alt="Large logo" />
      </div>

      <div className="header__description-block">
        <p>
          <span>Мы создаем</span>
          {' '}
          <svg className="header__description__icon" width="52" height="52" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="26" cy="26" r="24.5" stroke="#D8E6F1" stroke-width="3"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M6 26.1429C6 26.1429 17.9401 14.7144 26 14.7144C34.0599 14.7144 46 26.1429 46 26.1429C46 26.1429 34.0599 37.5715 26 37.5715C17.9401 37.5715 6 26.1429 6 26.1429ZM25.9714 33.3431C29.9321 33.3431 33.1428 30.1323 33.1428 26.1717C33.1428 22.211 29.9321 19.0002 25.9714 19.0002C22.0107 19.0002 18.8 22.211 18.8 26.1717C18.8 30.1323 22.0107 33.3431 25.9714 33.3431Z" fill="#D8E6F1"/>
          </svg>
          {' '}
          <span>уникальные бренды основываясь на глубоком понимании потребителей</span>
        </p>
      </div>
    </div>
  )
})