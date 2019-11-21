import React from 'react'
import { Link }     from 'react-router-dom';
import PageTitle from 'components/pagetitle.jsx'
 
export class Product extends React.Component{
    render(){
        return(
            <div id="page-wrapper">
                <PageTitle title="商品" />
            </div>
        )
    }
}