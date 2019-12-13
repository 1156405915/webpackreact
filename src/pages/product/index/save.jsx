import React from   'react'

import {DatePicker } from 'antd' 
 class ProductSave extends React.Component{
    render(){
        return(
            <div id="page-wrapper">  
                <div className="row">
                    <div className="col-md-12">
                        <span>这里是编辑</span> 
                        <DatePicker /> 
                    </div>
                </div>
            </div>
        )
    }
}
export default ProductSave