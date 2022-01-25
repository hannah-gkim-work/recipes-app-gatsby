import React from "react"
import Footer from "./Footer"
import Navbar from "./Navbar"
import "../assets/css/main.css"
import "normalize.css"
//wrap all our pages....
export default function Layout({ children }) {
  return (
    <React.Fragment>
      <Navbar />
      {children}
      <Footer />
    </React.Fragment>
  )
}
