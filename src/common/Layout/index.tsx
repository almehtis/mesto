import { ReactNode, memo, useEffect } from "react"
import { Footer } from "./Footer"
import { Header } from "./Header"
import { CustomCursor } from "../CustomCursor"

export const Layout = memo(function Layout(props: {
  children: ReactNode
}) {
  return (
    <div>
      <Header />
      {props.children}
      <Footer />
      <a href="/">Обсудить задачу</a>
      <CustomCursor />
    </div>
  )
})