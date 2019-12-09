import React from 'react'
import {Link } from 'react-router-dom'
import Util from 'utils/util.jsx'
import User from 'service/user-service.jsx'
const _user = new User()
const _util = new Util()
export default class TopNav extends React.Component{
    constructor(props){
        super(props)
        this.state={
            username:_util.getStorage('userInfo').username
        }
        this.logout = this.onLogout.bind(this)
    }
    onLogout(){
        _user.Logout()
        .then((res)=>{ 
            _util.removeStorage('userInfo')
            window.location.href='/login'
        },(err)=>{})
    }
    render(){
        return(
            <div className="navbar navbar-default top-navbar">
                <div className="navbar-header">
                    <Link className="navbar-brand" to="/"><b>Hello</b>QIYI</Link>
                </div>

                <ul className="nav navbar-top-links navbar-right">
                    <li className="dropdown">
                        <a className="dropdown-toggle" >
                            <i className="fa fa-user fa-fw"></i>
                            <span>{this.state.username}</span>
                            {/* {
                                this.state.username
                                ? <span>欢迎，{this.state.username}</span>
                                : <span>欢迎您</span>
                            } */}
                            <i className="fa fa-caret-down"></i>
                        </a>
                        <ul className="dropdown-menu dropdown-user">
                            <li>
                                <a onClick={this.logout}>
                                    <i className="fa fa-sign-out fa-fw"></i>
                                    <span>退出登录</span>
                                </a>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
        )
    }
}