import React from 'react'
import { Link }     from 'react-router-dom';
import './index.scss'
import PageTitle from 'components/pagetitle.jsx'

import TableList from 'utils/table-list/index.jsx'
import Pagination from 'utils/pagination/index.jsx'
import IndexListSearch from 'pages/product/index/index-list-search.jsx'
import Util from 'utils/util.jsx'
import Product from 'service/product-service.jsx'
const _util = new Util()
const _product = new Product()
class ProductList extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            list:[],
            total:1,
            pageNum:1,
            keyword:'',
            searchType:'',
            listType:'list'
        }
        this.paginationChange = this.paginationChange.bind(this)
    }
    componentWillMount(){ 
        this.getProductList()
    }
    paginationChange(pageNum){ //分页
        this.setState({
            pageNum:pageNum
        },()=>{
            this.getProductList()
        })
    }
    onSearch(searchType,searchKeyWord){
        this.setState({
            listType:'search',
            searchType:searchType,
            keyword:searchKeyWord
        },()=>{
            this.getProductList()
        })
    }
    onSetProductStatus(e,id,status){
        let newStatus = status==1?2:1,
            confirmTips = status == 1?'确定要下架该商品？':'确定要上架该商品？';
        if(window.confirm(confirmTips)){
            _product.setProductStatus({
                productId:id,
                status:newStatus
            })
            .then((res)=>{
                this.getProductList()
            },(err)=>{})
        }
    }
    getProductList(){
        _product.getProductList(this.state)
        .then((res)=>{
            this.setState({
                list:res.list,
                total:res.total 
            })
        },(err)=>{})
    }
    render(){
        let _tableHeads = [
            {name: '商品ID', width: '10%'},
            {name: '商品信息', width: '50%'},
            {name: '价格', width: '10%'},
            {name: '状态', width: '15%'},
            {name: '操作', width: '15%'}
        ];
        let _tableBodys = this.state.list.map((item,index)=>{
            return(
                <tr key={index}>
                    <td>{item.id}</td>
                    <td>
                        <p>{item.name}</p>
                        <p>{item.subtitle}</p>
                    </td>
                    <td>￥{item.price}</td>
                    <td>
                        <p>{item.status == 1?'在售':'已下架'}</p>
                        <button className="btn btn-xs btn-warning"  onClick={(e)=>{this.onSetProductStatus(e,item.id,item.status)}}>
                            {item.status == 1?'下架':'上架'}
                        </button>
                    </td>
                    <td>
                        <Link className="opear" to={`/product/detail/${item.id}`}>详情</Link>
                        <Link className="opear" to={`/product/save/${item.id}`}>编辑</Link>
                    </td>
                </tr>
            )
        })
        return(
            <div id="page-wrapper">
                <PageTitle title="商品列表" >  
                    <div className="page-header-right">
                        <Link to="/product/save" className="btn btn-primary">
                            <i className="fa fa-plus"></i>
                            <span>添加商品</span>
                        </Link>
                    </div>
                </PageTitle>
                <IndexListSearch  onSearch={(searchType, searchKeyword) => {this.onSearch(searchType, searchKeyword)}} />
                <TableList tableHeads={_tableHeads}>
                    {_tableBodys}
                </TableList>
                <Pagination total={this.state.total} current={this.state.pageNum} onChange={this.paginationChange}></Pagination>
            </div>  
        )
    }
}
export default ProductList