import React from   'react'
import ReactDOM from 'react-dom'
import './assets/css/index.scss'
import './assets/css/common.scss'
import './assets/iconfont/iconfont.css'
class App extends React.Component{
    render (){
        return(<div>
            <i className="iconfont icon-xingxing"></i>
             <p>react!!!</p>
             <p>wo laices</p>
             <p>wo laices</p>
             <p>wo laices</p>
             <p>wo laices</p>
             <p>wo laices</p>
             </div>)
    }
}

function MyComponent(){
    return (<div>
        helloa
    </div>)
}
ReactDOM.render(<MyComponent></MyComponent>,document.getElementById('root'))