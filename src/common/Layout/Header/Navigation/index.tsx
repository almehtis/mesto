import { memo } from "react"
import { Button } from "../../../Button"
import { Link } from "../../../Link"
import './styles/Navigation.scss'

export const Navigation = memo(function Navigation() {
  return (
    <div className="navbar">
      <Link islogo src="/icons/Logotype.svg" />

      <div className="navbar-links-and-button">
        <ul className="navbar__links">
          <li>
            <Link text="Услуги" />
          </li>

          <li>
            <Link text="Кейсы" />
          </li>

          <li>
            <Link text="Контакты" />
          </li>
        </ul>

        <Button />
      </div>
    </div>
  )
})