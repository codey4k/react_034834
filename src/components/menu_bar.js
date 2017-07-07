import React from 'react'
import gasmask from '../assets/gas-mask.png'

class Menu extends React.Component {
    render(){
        return(
            <div className="menu">
                <div className="menu__container">
                    <img className="logo" src={gasmask} alt="logo"/>
                    <div className="hamburger">
                        <div className="hamicon"/>
                    </div>
                </div>
            </div>
        )
    }
}

export default Menu