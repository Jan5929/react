import React, { Component } from 'react'
import PropTypes from 'prop-types'
export default class Add extends Component {
  state = {
      username: '',
      content: ''
  }
  static propTypes: {
    handleFunc: PropTypes.func.isRequired
  }
  handleSumbit =  (event) => {
    const {username, content} = this.state
    if ( username && content) {
      this.props.handleFunc(this.state)
      this.setState({
        username: '',
        content: ''
      })
    } else {
      alert('你好调皮')
    }
  }
  handleChang = (event) => {
    let {username, content} = this.state
    if (event.target.localName === 'input') {
      username = event.target.value
    } else {
      content = event.target.value
    }
    this.setState({username,content})
  }
  render() {
    const {username, content} = this.state
    return(
        <div className="col-md-4">
          <form className="form-horizontal">
            <div className="form-group">
              <label>用户名</label>
              <input type="text" className="form-control" placeholder="用户名" value={username} onChange={this.handleChang}/>
            </div>
            <div className="form-group">
              <label>评论内容</label>
              <textarea className="form-control" rows="6" placeholder="评论内容" value={content} onChange={this.handleChang}></textarea>
            </div>
            <div className="form-group">
              <div className="col-sm-offset-2 col-sm-10">
                <button type="button" className="btn btn-default pull-right" onClick={this.handleSumbit}>提交</button>
              </div>
            </div>
          </form>
        </div>
    )
  }
}
