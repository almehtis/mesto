import { memo, useState } from "react"
import './styles/Link.scss'

export const Link = memo(function Link(props: & (
  | {
    islogo?: never
    text: string
  }
  | {
    islogo: true
    src: string
    text?: never
  }
)) {
  const [hover, setHover] = useState(true)

  return (
    <a onMouseEnter={() => {setHover(true)}} onMouseLeave={() => {setHover(false)}} className="link" rel="stylesheet" href="https://friendlee.pro/">
      {props.islogo && <img src={props.src} alt="Mesto logo" />}

      {props.text &&
        <>
          <span className={hover ? "label-down" : "label-down__animated"}>{props.text}</span>
          <span className="label-up">{props.text}</span>
        </>
      }
    </a>
  )
})