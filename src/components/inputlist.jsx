import React from 'react'
export default class InputList extends React.Component{
    constructor(props){
        super(props)
        this.state={
            list:this.props.data
        }
    }
    render(){ 
        return(
        <div>{
            this.state.list.map((item,index)=>{
            return( <p key={index}>{item}</p> )
            })
        }</div>
        )
    }
}