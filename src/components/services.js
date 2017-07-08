import React from 'react'

let Item = () => 
    <svg width="100" height="100" viewBox="0 0 400 400" className="svg">
        <circle cx="200" cy="140" r="50" fill="transparent" stroke="#333" stroke-width="200"/>
        <path d="M100 280 Q 205 150 300 280" stroke="#333" fill="transparent" stroke-width="200"/>
    </svg>

class Services extends React.Component {
    render() {
        return(
            <div className="services">
                <div className="services__container">
                    <div className="services__item">
                        <Item />
                        <h2>Web</h2>
                    </div>
                    <div className="services__item">
                        <Item />
                        <h2>Hacking</h2>
                    </div>
                    <div className="services__item">
                        <Item />
                        <h2>Design</h2>
                    </div>
                </div>
            </div>
        )
    }
}

export default Services