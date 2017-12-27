import React from 'react'

export default class Menubar extends React.Component {
    constructor(props){
        super(props)
        this.scrollHandler = this.scrollHandler.bind(this)
    }
    
    componentWillMount() {
        this.state = {
            height : 80,
            background : 'transparent'
        }
    }
    
    componentDidMount(){
        window.addEventListener('scroll', this.scrollHandler)
    }
    
    scrollHandler(){
        let scroll = document.documentElement.scrollTop || document.body.scrollTop
        
        scroll >= 200 ?
        this.setState({
            height : 60,
            background : 'rgba(3,3,3, .7)',
            color : '#fff'
        })
        :
        this.setState({
            height : 80,
            background : 'transparent'
        })
    }
    
    
    render() {
        const MenuStyles = {
            padre : {
                width : '100%',
                position : 'fixed',
                zIndex : 1000,
                display : 'flex',
                height : this.state.height,
                background : this.state.background
            },
            container : {
                width : '80%',
                height : 'auto',
                margin : 'auto',
                alignItems : 'center',
                justifyContent : 'space-between'
            }
        }
        
        
        return (
            <div className="menu" style={MenuStyles.padre}>
                <div className="menu__container" style={MenuStyles.container}>
                    <h2>Logo</h2>
                    <div class="menu__icon"></div>
                </div>
            </div>
        )
    }
}