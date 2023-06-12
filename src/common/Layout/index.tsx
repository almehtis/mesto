import { ReactNode, memo } from "react"
import { Footer } from "./Footer"
import { Header } from "./Header"
import './styles/Layout.scss'

export const Layout = memo(function Layout(props: {
  children: ReactNode
}) {
  return (
    <div className="layout">
      <Header />
      {props.children}
      <Footer />
    </div>
  )
})