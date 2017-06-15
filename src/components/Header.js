import React from 'react'

import hero from '../assets/hero.png'

const Header = () =>
    <div className="header">
        <img src={hero} alt="hero" />
        <h1>Welcome to travel site</h1>
    </div>

export default Header