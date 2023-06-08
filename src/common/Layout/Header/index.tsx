import { memo } from "react"
import { Navigation } from "./Navigation"
import "./styles/Header.scss"

export const Header = memo(function Header() {
  return (
    <div className="header">
      <Navigation />

      <div className="header__title-and-logo-block">
        <h1 className="header__title">Агентство территориального брендинга</h1>
        <img className="geader__logo" src="/public/icons/LogotypeLarge.svg" alt="Large logo" />
      </div>
    </div>
  )
})