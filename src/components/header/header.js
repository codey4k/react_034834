import React from 'react'

import './header.scss'

class Header extends React.Component {
    
    
    render() {
        let range = (start, end) => Array.from(Array(end + 1).keys()).slice(start)
        let li = range(1, 10)
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