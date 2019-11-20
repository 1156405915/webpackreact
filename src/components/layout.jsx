import React from 'react'
import SlideNav from './slidenav.jsx'
import TopNav from './topnav.jsx'
export default class Layout extends React.Component{
    render(){
        return(
            <div className="container">
                
                <div className="top">
                    <TopNav></TopNav>
                </div>
                <div className="content">
                    <div className="leftSlide"> 
                        <SlideNav></SlideNav>
                    </div>
                    <div className="mainer">
                        {this.props.children} 
                    </div>
                </div>
            </div>
        )
    }
}