import React from 'react'

import Rcpagination from  'rc-pagination'
import 'rc-pagination/assets/index.css'
/**
 * 分页用法
 * <Pagination current={this.state.current} total={this.state.total} onChange={(pageNum)=> this.pageChange(pageNum)} />
 */
class Pagination extends React.Component{
    render(){
        return (
                <div className="row">
                    <div className="col-md-12">
                        <Rcpagination {...this.props}/>
                    </div>
                </div>
            )
    }
}
export default Pagination