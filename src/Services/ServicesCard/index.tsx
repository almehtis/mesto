import {  ReactNode, memo } from "react"
import cn from 'classnames'
import { Tag } from "../Tag"
import './styles/ServicesCard.scss'

const iconNames = ['gloube', 'snowflake', 'circle-arrow-up'] as const
export type IconType = typeof iconNames[number]


export const ServicesCard = memo(function ServicesCard(props: {
  className?: string
  titleFirstWord: string
  titleSecondWord: string
  subtitle: string
  description: string
  iconName: IconType
  children: ReactNode
}) {
  return (
    <div className={cn("card", props.className)}>
      <div className="card-title-block">
        <h3 className="card__title">
          {props.titleFirstWord}
          <br/>и{' '}
          {props.titleSecondWord}
        </h3>
        {props.iconName === 'gloube' && <div className="card-icon-wrapper">
          <svg className="card-icon-wrapper__svg" width="100%" height="100%" viewBox="0 0 220 220" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="110" cy="110" r="107" stroke="#D8E6F1" stroke-width="6"/>
          <path d="M8.59375 110H210.547" stroke="#D8E6F1" stroke-width="6" stroke-linecap="round"/>
          <path d="M153.406 110C153.406 140.074 148.258 167.16 140.05 186.616C135.944 196.349 131.131 204.032 125.939 209.237C120.76 214.43 115.376 217 110 217C104.624 217 99.2404 214.43 94.0606 209.237C88.8693 204.032 84.0563 196.349 79.9499 186.616C71.7422 167.16 66.5938 140.074 66.5938 110C66.5938 79.9256 71.7422 52.8397 79.9499 33.3844C84.0563 23.6507 88.8693 15.9677 94.0606 10.7629C99.2404 5.5698 104.624 3 110 3C115.376 3 120.76 5.5698 125.939 10.7629C131.131 15.9677 135.944 23.6507 140.05 33.3844C148.258 52.8397 153.406 79.9256 153.406 110Z" stroke="#D8E6F1" stroke-width="6"/>
          </svg>
        </div>}

        {props.iconName === 'snowflake' && <div className="card-icon-wrapper">
          <svg className="card-icon-wrapper__svg" width="100%" height="100%" viewBox="0 0 220 220" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M110 0L110 220" stroke="#D8E6F1" stroke-width="6"/>
          <path d="M0 110L220 110" stroke="#D8E6F1" stroke-width="6"/>
          <path d="M32.2181 32.218L187.782 187.782" stroke="#D8E6F1" stroke-width="6"/>
          <path d="M187.782 32.218L32.2184 187.782" stroke="#D8E6F1" stroke-width="6"/>
          </svg>
        </div>}

        {props.iconName === 'circle-arrow-up' && <div className="card-icon-wrapper">
          <svg className="card-icon-wrapper__svg" width="100%" height="100%" viewBox="0 0 220 220" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="110" cy="110" r="107" stroke="#D8E6F1" stroke-width="6"/>
            <path d="M148.826 84.3001C135.885 84.2543 110.003 76.3883 110.003 45.2908M110.003 45.2908C110.003 76.3883 84.1204 84.2543 71.1792 84.3001M110.003 45.2908L110.003 174.708" stroke="#D8E6F1" stroke-width="6"/>
          </svg>
        </div>}
      </div>

      <div className="card__intro">
        <span className="card__intro__subtitle">{props.subtitle}</span>
        <p className="card__intro__description">{props.description}</p>
      </div>

      <div className="tags">
        {props.children}
      </div>
    </div>
  )
})