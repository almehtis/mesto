import { memo } from "react"
import { LayoutLink } from "../LayoutLink"
import "./styles/Footer.scss"

export const Footer = memo(function Footer() {
  return (
    <div className="footer">
      <div className="footer__background">
        <div className="footer__background__element">
          <svg viewBox="0 0 800 300" width="100%" height="100%" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M 205,5 L 795,5 L 595,295 L 5,295 L 205,5 z" id="path59" fill="#F2BC1C" stroke="none" />
            <path d="M 205,5 L 795,5 L 595,295 L 5,295 L 205,5 z" id="path61" fill="none" stroke="none" stroke-linejoin="round" />
          </svg>
        </div>

      <div className="footer__background__element">
          <svg viewBox="0 0 800 300" width="100%" height="100%" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M 205,5 L 795,5 L 595,295 L 5,295 L 205,5 z" id="path59" fill="#FEF159" stroke="none" />
            <path d="M 205,5 L 795,5 L 595,295 L 5,295 L 205,5 z" id="path61" fill="none" stroke="none" stroke-linejoin="round" />
          </svg>
        </div>

        <div className="footer__background__element">
          <svg viewBox="0 0 800 300" width="100%" height="100%" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M 205,5 L 795,5 L 595,295 L 5,295 L 205,5 z" id="path59" fill="#9C64FC" stroke="none" />
            <path d="M 205,5 L 795,5 L 595,295 L 5,295 L 205,5 z" id="path61" fill="none" stroke="none" stroke-linejoin="round" />
          </svg>
        </div>

        <div className="footer__background__element">
          <svg viewBox="0 0 800 300" width="100%" height="100%" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M 205,5 L 795,5 L 595,295 L 5,295 L 205,5 z" id="path59" fill="#BD98FD" stroke="none" />
            <path d="M 205,5 L 795,5 L 595,295 L 5,295 L 205,5 z" id="path61" fill="none" stroke="none" stroke-linejoin="round" />
          </svg>
        </div>
      </div>

      <div className="footer__links">
        <div className="footer__links__contacts">
          <LayoutLink isFooterLink text="+7 985 640 29 97" />
          <LayoutLink isFooterLink text="CONTACT@BRANDMESTA.RU" />
        </div>


        <div className="footer__links__privacy-policy">
          <span>Все права защищены ©2023</span>
          <LayoutLink isFooterLink text="Политика конфиденциальности" />
        </div>

        <LayoutLink isFooterLink text="Разработано Friend Lee" />
        <LayoutLink className="footer__large-link" isLargeLink text="ОБСУДИТЬ ЗАДАЧУ" />
      </div>
    </div>
  )
})