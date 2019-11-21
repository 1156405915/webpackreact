import React from   'react'
import ReactDOM from 'react-dom'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams
} from "react-router-dom"

import './assets/css/index.scss'
import './assets/css/common.scss'
import './assets/iconfont/iconfont.css'
 
import {Home} from 'pages/home/index.jsx' 
import {Product} from 'pages/product/index.jsx' 
import {Order} from 'pages/order/index.jsx'
import {User} from 'pages/user/index.jsx' 
import Login from 'pages/login/index.jsx' 
import Layout from 'components/layout/layout.jsx'
class App extends React.Component{
      
    render (){
        
        return(
            <Router> 
                <Switch>
                    <Route path="/login" component={Login} /> 
                    <Route path="/" render={props=> (
                        <Layout>
                            <Switch>
                                <Route exact path="/" component={Home} />
                                <Route path="/product" component={Product} />
                                <Route path="/order" component={Order} />
                                <Route path="/user" component={User} />
                            </Switch>
                        </Layout>
                    )} /> 
                </Switch>
            
            </Router>
        )
    }
}
 
ReactDOM.render(<App></App>,document.getElementById('root'))