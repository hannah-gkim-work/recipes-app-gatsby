import React from "react"
import { Link } from "gatsby"
import { FiAlignJustify } from "react-icons/fi"
import logo from "../assets/images/logo.svg"
export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <Link to="/">
            <img src={logo} alt="" />
          </Link>
        </div>
        <div className="nav-links show-links"></div>
      </div>
    </nav>
    // <nav>
    //   <FiAlignJustify />
    //   <ul>
    //     <li>
    //       <Link to="/">Home</Link>
    //     </li>
    //     <li>
    //       <Link to="/recipes">Recipes</Link>
    //     </li>
    //     <li>
    //       <Link to="/tags">Tags</Link>
    //     </li>
    //     <li>
    //       <Link to="/about">About</Link>
    //     </li>
    //     <li>
    //       <Link to="/contact">Contact</Link>
    //     </li>
    //   </ul>
    // </nav>
  )
}
