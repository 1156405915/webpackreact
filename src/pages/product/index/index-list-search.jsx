import React from   'react'

class IndexListSearch extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            searchType:'productId',
            searchKeyword:''
        }
    }
    onValueChange(e){
        let _name = e.target.name,
            _value = e.target.value.trim();
        this.setState({
            [_name]:_value
        })
    }
    onSearch(){
        this.props.onSearch(this.state.searchType,this.state.searchKeyword)
    }
    render(){
        return (
            <div className="row search-wrap">
                <div className="col-md-12">
                    <div className="form-inline">
                        <div className="form-group">
                            <select className="form-control"
                                name="searchType"
                                onChange={(e) => this.onValueChange(e)}>
                                <option value="productId">按商品ID查询</option>
                                <option value="productName">按商品名称查询</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <input type="text" 
                                className="form-control" 
                                placeholder="关键词"
                                name="searchKeyword" 
                                onChange={(e) => this.onValueChange(e)}/>
                        </div>
                        <button className="btn btn-primary" 
                            onClick={(e) => this.onSearch(e)}>搜索</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default IndexListSearch