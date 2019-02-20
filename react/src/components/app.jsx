import React , {Component} from 'react'   // 切记Component 的 C 必须大写
import ReactDom from 'react-dom'
import Add from './add'
import List from './list'
export default class App extends Component {
  state = {
    communs: [
      {username: 'tom', content: 'React 很简单！'},
      {username: 'jaylene', content: 'React 太难了！'}
    ]
  }
  //添加评论
  handleFunc = (data) => {
    const {communs} = this.state
    communs.unshift(data)
    this.setState({communs})
  }
  //删除评论
  deleteCommun = (index) => {
    const {communs} = this.state
    communs.splice(index, 1)
    this.setState({communs})
  }
   render() {
    const { communs } = this.state
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
            <Add handleFunc ={ this.handleFunc}/>
            <List  communs = { communs } deleteCommun={this.deleteCommun}/>
          </div>
        </div>
    )
  }
}
ReactDom.render('<App />', document.getElementById('root'))
