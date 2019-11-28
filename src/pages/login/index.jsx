import React from 'react'
import './index.scss'
import User from 'service/user-service.jsx'
const _user = new User()
export default class Login extends React.Component{
    constructor (props){
        super(props)
        
    }

    onInputKeyUp(e){

    }
    onInputChange(e){

    }
    
    onSubmit(e){
        _user.Login({username:'admin',password:'admin'})
        .then((res)=>{
            console.log(res)
        },(err)=>{

        })
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
                                    onKeyUp={e => this.onInputKeyUp(e)}
                                    onChange={e => this.onInputChange(e)}/>
                            </div>
                            <div className="form-group">
                                <input type="password" 
                                    name="password"
                                    className="form-control" 
                                    placeholder="请输入密码" 
                                    onKeyUp={e => this.onInputKeyUp(e)}
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