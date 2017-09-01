import React from 'react'
import ReactDOM from 'react-dom'

//components
import Header from './components/header/header.js'
import Main from './components/main/main.js'
import Footer from './components/footer/footer.js'

//style
import './css/index.scss'

// import hero from './assets/hero.png'


//componente contenedor

class App extends React.Component {
    render(){
        return(
            <div className="wrap-app">
                <Header />
                <Main />
                <Footer />
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'))

