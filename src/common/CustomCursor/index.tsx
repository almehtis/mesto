import { memo, useEffect, useRef } from "react"
import './styles/CustomCursor.scss'

export const CustomCursor = memo(function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null)
  const layoutHeaderLinks = document.getElementsByClassName("layout__header-link")
  const servicesLinks = document.getElementsByClassName("services-link")
  const buttons = document.getElementsByTagName("button")
  const layoutFooterLinks = document.getElementsByClassName("layout__footer-link")
  const layoutLargeLinks = document.getElementsByClassName("layout__footer-link_large")
  const cards = document.getElementsByClassName("card")

  useEffect(() => {
    document.addEventListener('mousemove', (event: MouseEvent) => {
      const mouseX = event.clientX
      const mouseY = event.clientY
      cursorRef.current!.style.left = `${mouseX}px`
      cursorRef.current!.style.top = `${mouseY}px`
    })

    for (let i = 0; i < layoutHeaderLinks.length; i++) {
      const link = layoutHeaderLinks[i]

      link.addEventListener("mouseover", function() {
        cursorRef.current!.classList.add("hover")
      })

      link.addEventListener("mouseout", function() {
        cursorRef.current!.classList.remove("hover")
      })
    }

    for (let i = 0; i < buttons.length; i++) {
      const button = buttons[i]

      button.addEventListener("mouseover", function() {
        cursorRef.current!.classList.add("hover")
      })

      button.addEventListener("mouseout", function() {
        cursorRef.current!.classList.remove("hover")
      })
    }

    for (let i = 0; i < servicesLinks.length; i++) {
      const link = servicesLinks[i]

      link.addEventListener("mouseover", function() {
        cursorRef.current!.classList.add("hover")
      })

      link.addEventListener("mouseout", function() {
        cursorRef.current!.classList.remove("hover")
      });
    }

    for (let i = 0; i < layoutFooterLinks.length; i++) {
      const link = layoutFooterLinks[i]

      link.addEventListener("mouseover", function() {
        cursorRef.current!.classList.add("hover")
      })

      link.addEventListener("mouseout", function() {
        cursorRef.current!.classList.remove("hover")
      });
    }

    for (let i = 0; i < layoutLargeLinks.length; i++) {
      const link = layoutLargeLinks[i]

      link.addEventListener("mouseover", function() {
        cursorRef.current!.classList.add("hover")
      })

      link.addEventListener("mouseout", function() {
        cursorRef.current!.classList.remove("hover")
      })
    }

    for (let i = 0; i < cards.length; i++) {
      const link = cards[i]

      link.addEventListener("mouseover", function() {
        cursorRef.current!.classList.add("hover")
      })

      link.addEventListener("mouseout", function() {
        cursorRef.current!.classList.remove("hover")
      })
    }
  }, [buttons, cards, layoutFooterLinks, layoutFooterLinks.length, layoutHeaderLinks, layoutLargeLinks, layoutLargeLinks.length, servicesLinks])

  return (
    <div className="custom-cursor" ref={cursorRef} />
  )
})