import { memo, useState } from "react"
import './styles/Button.scss'

export const Button = memo(function Button() {
  const [hover, setHover] = useState(true)

  return (
    <button onMouseEnter={() => {setHover(true)}} onMouseLeave={() => {setHover(false)}} className="button" type="button">
      <span className={hover ? "label-down" : "label-down__animated"}>Обсудить задачу</span>
      <span className="label-up">Обсудить задачу</span>
    </button>
  )
})