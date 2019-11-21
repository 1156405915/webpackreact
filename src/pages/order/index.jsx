import React from 'react'
import { Link }     from 'react-router-dom';
import PageTitle from 'components/pagetitle.jsx'
 
export class Order extends React.Component{
    render(){
        return(
            <div id="page-wrapper">
                <PageTitle title="订单" />
            </div>
        )
    }
}