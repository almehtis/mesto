import { memo, useState } from "react"
import './styles/ServicesLink.scss'
import { Icon } from "../../common/Icon"

export const ServicesLink = memo(function ServicesLink(props: & (
  | {
    hasDescription?: never
    description?: never
    title: string
  }
  | {
    hasDescription: true
    description: string
    title: string
  }
)) {
  const [hover, setHover] = useState(true)

  return (
    <a
      className="services-link"
      href="https://friendlee.pro/"
      onMouseEnter={() => {setHover(true)}}
      onMouseLeave={() => {setHover(false)}}
      rel="stylesheet"
    >
      {props.hasDescription && <div className="services-link__service-block">
        <div className="services-link__service-block__title-block">
          <span className="services-link__service-block__title-block__title">{props.title}</span>
          <Icon className="services-link__service-block__title-block__icon" name="star" />
        </div>

        <p className="services-link__service-block__description">{props.description}</p>
      </div>}

      {!props.hasDescription && <div className="services-link">
        {props.title}
        <Icon name="six" />
      </div>}
    </a>
  )
})