import React from 'react'

import Rcpagination from  'rc-pagination'
import 'rc-pagination/assets/index.css'

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