import React from 'react' 
import { Link }     from 'react-router-dom';
import PageTitle from 'components/pagetitle.jsx' 
import TableList from   'utils/table-list/index.jsx'
import Pagination from 'utils/pagination/index.jsx'

import UserService from 'service/user-service.jsx' 
import Util from 'utils/util.jsx'
const _user = new UserService()
const _util = new Util()

export class User extends React.Component{
    constructor(props){
        super(props) 
        this.state = {
            current:1,
            total:100,
            list:[]
        }
    }
    pageChange(current){ 
        this.setState({
            current:current
        },()=>{
            this.getListRequest()
        })
    }
    componentWillMount(){
        this.getListRequest()
    }
    getListRequest(){
        _user.getUserList(this.state.current)
        .then(res=>{
            this.setState({
                current:res.pageNum,
                total:res.total,
                list:res.list
            })
        },err=>{})
    }
    render(){
        let ListBody = this.state.list.map((item,index)=>{
            return(
                <tr key={index}>
                    <td>{item.id}</td>
                    <td>{item.username}</td>
                    <td>{item.email}</td>
                    <td>{item.phone}</td>
                    <td>{ new Date(item.createTime).toLocaleString() }</td>
                </tr>
            )
        })
        return(
            <div id="page-wrapper"> 
                <PageTitle title="用户列表" />
                <TableList tableHeads={['ID', '用户名', '邮箱', '电话', '注册时间']} >{ListBody}</TableList>
                <Pagination current={this.state.current} total={this.state.total} onChange={(pageNum)=> this.pageChange(pageNum)} />
            </div>
        )
    }
}