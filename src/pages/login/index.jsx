import React from 'react'
import './index.scss'
import User from 'service/user-service.jsx' 
import Util from 'utils/util.jsx'
const _user = new User()
const _util = new Util()
export default class Login extends React.Component{
    constructor (props){
        super(props) 
        this.state = {
            username:'',
            password:'',
            redirect:_util.getUrlParam('redirect')||'/'
        }
    }
 
    onInputChange(e){
        this.setState({
            [e.target.name]:e.target.value
        })
    }
    
    onSubmit(e){
        let userInfo = {
            username:this.state.username,
            password:this.state.password
        },
        checkResult = _user.checkLoginInfo(userInfo);
        if(checkResult.status){ 
            _user.Login(userInfo).then((res)=>{ 
                this.props.history.push(this.state.redirect)
                
            },(err)=>{
                _util.errorTips()
            })
        }else{
            _util.errorTips(checkResult.msg)
        }
 
    }
     
    render(){ 
        return (
            <div className="col-md-4 col-md-offset-4">
                <div className="panel panel-default login-panel">
                    <div className="panel-heading">欢迎登录 - MMALL管理系统</div>
                    <div className="panel-body">
                        <div>
                            <div className="form-group">
                                <input type="text"
                                    name="username"
                                    className="form-control"
                                    placeholder="请输入用户名" 
                                    onChange={e => this.onInputChange(e)}/>
                            </div>
                            <div className="form-group">
                                <input type="password" 
                                    name="password"
                                    className="form-control" 
                                    placeholder="请输入密码" 
                                    onChange={e => this.onInputChange(e)}/>
                            </div>
                            <button className="btn btn-lg btn-primary btn-block"
                                onClick={e => {this.onSubmit(e)}}>登录</button>
                        </div>
                    </div>
                </div>
            </div>
                    
        );
    }
}