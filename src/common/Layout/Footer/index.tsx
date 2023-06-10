import { memo } from "react"
import { Link } from "../../Link"
import "./styles/Footer.scss"

export const Footer = memo(function Footer() {
  return (
    <div className="footer">
      <div className="footer__background">
        <div className="footer__background__first-item">
          <svg viewBox="0 0 800 300" width="100%" height="100%" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M 205,5 L 795,5 L 595,295 L 5,295 L 205,5 z" id="path59" fill="#F2BC1C" stroke="none" />
            <path d="M 205,5 L 795,5 L 595,295 L 5,295 L 205,5 z" id="path61" fill="none" stroke="none" stroke-linejoin="round" />
          </svg>
        </div>

        <div className="footer__background__second-item">
          <svg viewBox="0 0 800 300" width="100%" height="100%" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M 205,5 L 795,5 L 595,295 L 5,295 L 205,5 z" id="path59" fill="#FEF159" stroke="none" />
            <path d="M 205,5 L 795,5 L 595,295 L 5,295 L 205,5 z" id="path61" fill="none" stroke="none" stroke-linejoin="round" />
          </svg>
        </div>

        <div className="footer__background__third-item">
          <svg viewBox="0 0 800 300" width="100%" height="100%" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M 205,5 L 795,5 L 595,295 L 5,295 L 205,5 z" id="path59" fill="#9C64FC" stroke="none" />
            <path d="M 205,5 L 795,5 L 595,295 L 5,295 L 205,5 z" id="path61" fill="none" stroke="none" stroke-linejoin="round" />
          </svg>
        </div>

        <div className="footer__background__fourth-item">
          <svg viewBox="0 0 800 300" width="100%" height="100%" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M 205,5 L 795,5 L 595,295 L 5,295 L 205,5 z" id="path59" fill="#BD98FD" stroke="none" />
            <path d="M 205,5 L 795,5 L 595,295 L 5,295 L 205,5 z" id="path61" fill="none" stroke="none" stroke-linejoin="round" />
          </svg>
        </div>
      </div>

      <div className="footer__links">
        <div className="footer__links__contacts">
          <Link text="+79856402997" />
          <Link text="CONTACT@BRANDMESTA.RU" />
        </div>


        <div className="footer__links__privacy-policy">
          <span>Все права защищены ©2023</span>
          <Link text="Политика конфиденциальности" />
        </div>

        <div className="footer__links__developed-by">
          <Link text="Разработано Friend Lee" />
        </div>
      </div>
    </div>
  )
})