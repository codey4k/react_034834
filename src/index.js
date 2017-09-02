import React from 'react'
import ReactDOM from 'react-dom'

import './index.scss'

import Header from './components/header/header'
import Main from './components/main/main'
import Footer from './components/footer/footer'


class App extends React.Component {
    render() {
        return(
            <div className="site-wrap">
                <Header />
                <Main />
                <Footer />
            </div>
        )
    }
}

ReactDOM.render(<App />, document.body)

