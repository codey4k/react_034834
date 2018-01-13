import React from 'react'

export default class Menubar extends React.Component {
    constructor(props){
        super(props)
        this.scrollHandler = this.scrollHandler.bind(this)
    }
    
    componentWillMount() {
        this.state = {
            height : 80,
            bg : '#fff',
            background : 'transparent'
        }
    }
    
    componentDidMount(){
        window.addEventListener('scroll', this.scrollHandler)
    }
    
    componentWillUnMount(){
        window.removeEventListener('scroll', this.scrollHandler)
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
                height : '80%',
                margin : 'auto',
                display : 'flex',
                alignItems : 'center',
                // flexDirection : 'column',
                justifyContent : 'space-between'
            },
            icon : {
                width : 25,
                height : 2,
                background : this.state.bg,
                boxShadow:'0 5px 0 0 #fff, 0 -5px 0 0 #fff'
            }
        }
        
        
        return (
            <div className="menu" style={MenuStyles.padre}>
                <div className="menu__container" style={MenuStyles.container}>
                    <h2>Logo</h2>
                    <div className="menu__icon" style={MenuStyles.icon}></div>
                </div>
            </div>
        )
    }
}