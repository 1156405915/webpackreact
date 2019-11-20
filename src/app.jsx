import React from   'react'
import ReactDOM from 'react-dom'
import './assets/css/index.scss'
import './assets/css/common.scss'
import './assets/iconfont/iconfont.css'
 
import InputLst from './components/inputlist.jsx'
import InputAdd from './components/inputadd.jsx'
  
class ListModule extends React.Component{
    constructor(props){
        super(props)
        this.state={
            list:[]
        }
    }
    inputChange(val){
        this.state.list.push(val)
        this.setState({
            list:this.state.list
        })
    }
    render(){  
        return(
            <div>
                <InputAdd inputChange = {this.inputChange.bind(this)}></InputAdd>
                <InputLst data={this.state.list}></InputLst>
            </div>
        )
    }
} 

class App extends React.Component{
      
    render (){
        
        return(
            <div className="container">
                <div className="top">

                </div>
                <div className="content">
                    <div className="leftSlide"> 
                    </div>
                    <div className="mainer">
                        <ListModule></ListModule> 
                    </div>
                </div>
            </div>
        )
    }
}

ReactDOM.render(<App></App>,document.getElementById('root'))