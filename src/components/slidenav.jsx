import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams
} from "react-router-dom"
export default class SlideNav extends React.Component{
    render(){
        return(
            <div>
                <p><Link to="/">home</Link></p>
                <p><Link to="/product">product</Link></p>
                <p><Link to="/user">user</Link></p>
            </div>
        )
    }
}