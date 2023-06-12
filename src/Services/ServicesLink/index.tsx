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
      {props.hasDescription && <div className="services-link__services">
        <div className="services-link__services__title-block">
          <span className="services-link__services__title-block__title">{props.title}</span>
          <Icon name="star" />
        </div>

        <p className="services-link__services__description">{props.description}</p>
      </div>}

      {!props.hasDescription && <div className="services-link">
        {props.title}
        <Icon name="six" />
      </div>}
    </a>
  )
})