import React from   'react'
import {BrowserRouter as Router,Switch,Redirect,Route,Link} from 'react-router-dom'

import ProductList from 'pages/product/index/index.jsx'
import ProductDetail from 'pages/product/index/detail.jsx'
import ProductSave from 'pages/product/index/save.jsx'
import Category from 'pages/product/category/index.jsx'
class ProductRouter extends React.Component{
    render (){
        return (
            <Switch>
                <Route path="/product/index" component={ProductList} />
                <Route path="/product/detail/:pid" component={ProductDetail}/>
                <Route path="/product/save/:pid?" component={ProductSave}/>
                <Route path="/category/index" component={Category}/>
                <Redirect exact from="/product" to="/product/index" />
                <Redirect exact from="/category" to="/category/index" />
            </Switch>
        )
    }
}

export default ProductRouter