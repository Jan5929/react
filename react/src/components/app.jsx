import React , {Component} from 'react'   // 切记Component 的 C 必须大写
import ReactDom from 'react-dom'
import Add from './add'
import List from './list'
export default class App extends Component {
    render() {
        return (
            <div>
                <header className="site-header jumbotron">
                    <div className="container">
                        <div className="row">
                            <div className="col-xs-12">
                                <h1>请发表对React的评论</h1>
                            </div>
                        </div>
                    </div>
                </header>
                <div className="container">
                    <Add/>
                    <List/>
                </div>
            </div>
        )
    }
}

ReactDom.render('<App />', document.getElementById('root'))
