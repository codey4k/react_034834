import React from 'react'
import ReactDOM from 'react-dom'

import './index.scss'

import Header from './components/header/header'
import Main from './components/main/main'
import Footer from './components/footer/footer'
import Menubar from './components/menubar/menubar'


class App extends React.Component {
    render() {
        return(
            <div className="site-wrap">
                <Menubar />
                <Header />
                <Main />
                <Footer />
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'))

