import React from 'react'

import Img1 from '../assets/logo.png'

export default function Header() {
  return (
    <div id='header'>
        <img src={Img1} alt="Logo" />
        <h1>Compound Interest Calculator</h1>
    </div>
  )
}
