import React from   'react'
import ReactDOM from 'react-dom'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
    Link,
    useParams
} from "react-router-dom"

import './assets/css/index.scss'
import './assets/css/common.scss'
import './assets/iconfont/iconfont.css'
 
import {Home} from 'pages/home/index.jsx' 
import ProductRouter from 'pages/product/product-router.jsx' 
import {Order} from 'pages/order/index.jsx'
import {User} from 'pages/user/index.jsx' 
import Login from 'pages/login/index.jsx' 
import ErrorPage from 'pages/error/index.jsx'
import Layout from 'components/layout/layout.jsx'

import Category from 'pages/product/category/index.jsx'
class App extends React.Component{
      
    render (){
        const LayoutRouter = (
        <Layout>
            <Switch>
                <Route exact path="/" component={Home} />
            
                <Route path="/product" component={ProductRouter} /> 
                <Route path="/category" component={ProductRouter} /> 

                <Route path="/order" component={Order} />
            
                <Route path="/user" component={User} />
                <Redirect exact from="/user" to="/user/index" />
                
                <Route component={ErrorPage} />
            </Switch>
        </Layout>)
        return(
            <Router> 
                <Switch>
                    <Route path="/login" component={Login} /> 
                    <Route path="/" render={props=>  LayoutRouter} /> 
                </Switch>
            
            </Router>
        )
    }
}
 
ReactDOM.render(<App></App>,document.getElementById('root'))