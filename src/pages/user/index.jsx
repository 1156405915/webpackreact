import React from 'react'
import { Link }     from 'react-router-dom';
import PageTitle from 'components/pagetitle.jsx'
 
export class User extends React.Component{
    render(){
        return(
            <div id="page-wrapper">
                <PageTitle title="用户" />
            </div>
        )
    }
}