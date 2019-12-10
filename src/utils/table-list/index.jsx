import React from 'react'
 
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
        //表头字段展开
        let tableHeader = this.props.tableHeads.map((item,index)=>{ 
            return( 
                <th  key={index} >{item}</th> 
            )
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