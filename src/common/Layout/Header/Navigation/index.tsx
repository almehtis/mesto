import { memo, useCallback, useEffect, useState } from "react"
import { Button } from "../../../Button"
import { LayoutLink } from "../../LayoutLink"
import './styles/Navigation.scss'
import { Icon } from "../../../Icon"

export const Navigation = memo(function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const togglemenu = useCallback(() => {
    setIsMenuOpen((open: boolean) => !open)
  }, [])

  // Отключает скроллинг, если открыто мобильое меню
  useEffect(() => {
    isMenuOpen ? document.body.style.overflow = "hidden" : document.body.style.overflow = "auto"
  }, [isMenuOpen])

  return (
    <div className={`navbar ${isMenuOpen ? "mobile-menu_open" : ""}`}>
      <LayoutLink className="navbar__logo" islogo src="/icons/Logotype.svg" />

      <ul className="navbar__links">
        <li>
          <LayoutLink text="Услуги" />
        </li>

        <li>
          <LayoutLink text="Кейсы" />
        </li>

        <li>
          <LayoutLink text="Контакты" />
        </li>
      </ul>

      <Button classname="navbar__button" text="Обсудить задачу" />
      <Icon className="navbar__menu-icon" name={isMenuOpen ? "cross" : "hamburger-menu"} onClick={togglemenu} />
    </div>
  )
})