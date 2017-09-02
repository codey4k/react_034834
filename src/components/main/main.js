import React from 'react'

// import '../../css/mixins.scss'
import './main.scss'

class Main extends React.Component {
    render() {
        return(
            <div className="main">
                <div className="main__container">
                    <div className="example"></div>
                    
                    <div className="section">
                        <div className="section--one"></div>
                        <div className="section--two"></div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Main