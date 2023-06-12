import { memo } from "react"
import { Button } from "../../../Button"
import { LayoutLink } from "../../LayoutLink"
import './styles/Navigation.scss'

export const Navigation = memo(function Navigation() {
  return (
    <div className="navbar">
      <LayoutLink islogo src="/icons/Logotype.svg" />

      <div className="navbar-links-and-button">
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

        <Button text="Обсудить задачу" />
      </div>
    </div>
  )
})