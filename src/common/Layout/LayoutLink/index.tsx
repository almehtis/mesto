import { memo, useState } from "react"
import cn from 'classnames'
import { Icon } from "../../Icon"
import './styles/LayoutLink.scss'

export const LayoutLink = memo(function LayoutLink(props: {
  className?: string
} & (
  | {
    islogo?: never
    isFooterLink?: boolean
    isMailTo?: boolean
    isTel?: boolean
    isLargeLink?: boolean
    text: string
  }
  | {
    islogo: true
    src: string
    isFooterLink?: never
    isLargeLink?: never
    isMailTo?: never
    isTel?: never
    text?: never
  }
)) {
  const [hover, setHover] = useState(true)
  let href

  const checkProps = () => {
    if(props.isMailTo) {
      href = "mailto:contact@brandmesta.ru"
    }

    if(props.isTel) {
      href =  "tel:+7 985 640 29 97"
    }

    if(!props.isMailTo && !props.isTel) {
      href = "https://friendlee.pro/"
    }
  }

  checkProps()

  return (
    <a
      className={cn(
        {
          "layout__footer-link": props.isFooterLink,
          "layout__header-link": !props.isFooterLink && !props.isLargeLink,
          "layout__footer-link_large": props.isLargeLink
        },

        props.className
      )}
      href={href}
      onMouseEnter={() => {setHover(true)}}
      onMouseLeave={() => {setHover(false)}}
      rel="stylesheet"
    >
      {props.islogo && <Icon name="logo" />}
      {props.text &&
        <>
          <span className={hover ? "layout-link__label-down" : "layout-link__label-down_animated"}>{props.text}</span>
          <span className="layout-link__label-up">{props.text}</span>
        </>
      }
    </a>
  )
})