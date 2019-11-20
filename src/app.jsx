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
import {User} from 'pages/user/index.jsx' 
import Layout from 'components/layout.jsx'
class App extends React.Component{
      
    render (){
        
        return(
            <Router> 
            <Layout>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/product" component={Product} />
                <Route path="/user" component={User} />
            </Switch>
            </Layout>
            </Router>
        )
    }
}
 
ReactDOM.render(<App></App>,document.getElementById('root'))