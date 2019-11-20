import React from 'react' 
export default class InputAdd extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            value:'',
            list:[]
        }
    }
    onChangeInput(e){ 
        this.setState({
            value:e.target.value
        })
    }
    addListener(){
        this.props.inputChange(this.state.value)
    } 
    render(){  
        return(
            <div>
                <input type="text" ref="input"  onChange={this.onChangeInput.bind(this)} placeholder="请输入"/>
                <button onClick={this.addListener.bind(this)}>添加</button>
            </div>
        )
    }
}