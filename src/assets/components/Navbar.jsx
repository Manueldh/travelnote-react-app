import React from 'react'
import '../../App.css'
import logoIcon from '../images/logo-icon.svg'

function Navbar() {
  return (
    <nav>
        <img src={logoIcon} width="30px" />
        <h1>my Travel Journal.</h1>
    </nav>
  )
}

export default Navbar

