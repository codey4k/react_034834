import React from 'react'

class Menu extends React.Component {
    render(){
        return(
            <div className="menu">
                <div className="menu__container">
                    <h1>Logo</h1>
                    <div className="hamburger">
                        <div className="hamicon"/>
                    </div>
                </div>
            </div>
        )
    }
}

export default Menu