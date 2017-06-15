import React from 'react'
import ReactDOM from 'react-dom'

//components
import Header from './components/Header.js'
import Menu from './components/menu_bar.js'
//style
require('./css/style.css')
require('./assets/hero.png')


//componente contenedor

class App extends React.Component {
    render(){
        return(
            <div className="container">
                <Menu />
                <Header />
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'))

