import React from "react"
import Navabar from "./Navabar"
import "../pages/styles/globle.css"

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <Navabar />
      <div className="content">{children}</div>
      <footer>
        <p>Copyright 2021 Web Warrier</p>
      </footer>
    </div>
  )
}

export default Layout
