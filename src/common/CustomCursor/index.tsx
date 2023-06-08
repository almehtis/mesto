import { memo, useEffect, useRef } from "react"
import './styles/CustomCursor.scss'

export const CustomCursor = memo(function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null)
  const links = document.getElementsByClassName("link")
  const buttons = document.getElementsByClassName("button")

  useEffect(() => {
    document.addEventListener('mousemove', (event: MouseEvent) => {
      const mouseX = event.clientX
      const mouseY = event.clientY
      cursorRef.current!.style.left = `${mouseX}px`
      cursorRef.current!.style.top = `${mouseY}px`
    })

    for (let i = 0; i < links.length; i++) {
      const selfLink = links[i];

      selfLink.addEventListener("mouseover", function() {
        cursorRef.current!.classList.add("hover");
      });
      selfLink.addEventListener("mouseout", function() {
        cursorRef.current!.classList.remove("hover");
      });
    }

    for (let i = 0; i < buttons.length; i++) {
      const button = buttons[i];

      button.addEventListener("mouseover", function() {
        cursorRef.current!.classList.add("hover");
      });
      button.addEventListener("mouseout", function() {
        cursorRef.current!.classList.remove("hover");
      });
    }
  }, [buttons, links])

  return (
    <div className="custom-cursor" ref={cursorRef} />
  )
})