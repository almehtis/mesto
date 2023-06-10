import { ReactNode, memo } from "react"
import { Footer } from "./Footer"
import { Header } from "./Header"

export const Layout = memo(function Layout(props: {
  children: ReactNode
}) {
  return (
    <div className="layout">
      <Header />
      {props.children}
      <Footer />
      <a href="/">Обсудить задачу</a>
    </div>
  )
})