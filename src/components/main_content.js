import React from 'react'

class Main extends React.Component {
    
        
    
    render() {
        let item = [
                'item large',
                'item description',
                'item red',
                'item description',
                'item red',
                'item description',
                'item description',
                'item red',
                'item large',
                'item description',
                'item description',
                'item red',
                'item large'
            ],
            
            div = item.map( i => <div className={i} ></div> )
        
        
        
        return(
            <div className="main">
                {div}
            </div>
        )
    }
}

export default Main