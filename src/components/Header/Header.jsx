import React from "react"
import { Link } from "react-router-dom"

import "./Header.css"
import logo from "../../images/logo.svg"
import Navigation from "../Navigation/Navigation"


export default function Header() {
  return (
    <header className="header">
      <Link to="/" className="header__link">
        <img src={logo} alt="logo" className="header__logo"></img>
      </Link>
      <Navigation />
    </header>
  )
}
