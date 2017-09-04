import React from 'react'

import './header.scss'

class Header extends React.Component {
    
    
    render() {
        let li = [1,2,3,4,5,6,7,8,9,10]
        
        
        let item = li.map( () => <li> </li>)
        
        return(
            <div className="header">
                <ul className="bubble">
                    {item}
                </ul>
            </div>
        )
    }
}

export default Header