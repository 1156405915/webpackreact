import React from 'react'
import SlideNav from '../slidenav.jsx'
import TopNav from '../topnav.jsx'
import './theme.css'
import './layout.scss'
export default class Layout extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div id="wrapper">
                <TopNav></TopNav>
                <SlideNav></SlideNav>
                {this.props.children} 
            </div>
        )
    }
}