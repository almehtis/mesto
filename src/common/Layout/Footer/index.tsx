import { memo } from "react"
import { Link } from "../../Link"
import "./styles/Footer.scss"

export const Footer = memo(function Footer() {
  return (
    <div className="footer">
      <div className="footer__contacts">
        <Link text="+79856402997" />
        <Link text="CONTACT@BRANDMESTA.RU" />
      </div>


      <div className="footer__privacy-policy">
        <span>Все права защищены ©2023</span>
        <Link text="Политика конфиденциальности" />
      </div>

      <div className="footer__developed-by">
        <Link text="Разработано Friend Lee" />
      </div>
    </div>
  )
})