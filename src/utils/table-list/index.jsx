import React from 'react'
 /**
  * table 模板用法
  * 
  * <TableList tableHeads={['ID', '用户名', '邮箱', '电话', '注册时间']} >{ListBody}</TableList>
  * 
  */
class TableList extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            isFirstLoading: true
        }
    }
    componentWillReceiveProps(){
        // 列表只有在第一次挂载的时候，isFirstLoading为true，其他情况为false
        this.setState({
            isFirstLoading : false
        });
    }
    render(){ 
        /**
         * 表头字段展开
         *  tableHeads = ['a','b','c']
         * 也有可能是
         * tableHeads=[{name:'a',width:'10%'},{name:'b',width:'10%'}] 
         * 
         */
        let tableHeader = this.props.tableHeads.map((item,index)=>{ 
            if(typeof item === 'object'){
                return (
                    <th  key={index} width={item.width} >{item.name}</th> 
                )
            }else if(typeof item === 'string'){
                return( 
                    <th  key={index} >{item}</th> 
                )
            }
            
        })
        let tableBody = this.props.children
        let tableInfo = (
            <tr>
                <td colSpan={this.props.tableHeads.length} className="text-center">
                    {this.state.isFirstLoading?'正在加载数据...':'没有找到相应的结果~'}
                </td>
            </tr>
        )
        
        return (
            <div className="row">
                <div className="col-md-12">
                    <table className="table table-striped table-bordered">
                        <thead>
                            <tr>
                                {tableHeader}
                            </tr>
                        </thead>
                        <tbody>
                            {tableBody.length>0?tableBody:tableInfo}
                        </tbody>
                    </table>
                </div>
            </div>
            )
    }
}
export default TableList