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
    isLargeLink?: boolean
    text: string
  }
  | {
    islogo: true
    src: string
    isFooterLink?: never
    isLargeLink?: never
    text?: never
  }
)) {
  const [hover, setHover] = useState(true)

  return (
    <a
      className={cn(
        {
          "layout-footer-link": props.isFooterLink,
          "layout-header-link": !props.isFooterLink && !props.isLargeLink,
          "layout-large-link": props.isLargeLink
        },

        props.className
      )}
      href="https://friendlee.pro/"
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