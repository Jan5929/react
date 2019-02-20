import React, {Component} from 'react'
import PropTypes from 'prop-types'
import './index.css'
export default class Item extends Component{
  static propTypes: {
    item: PropTypes.object.isRequired,
    deleteCommun: PropTypes.func.isRequired,
    index: PropTypes.number.isRequired
  }
  handleDelete = () => {
    const {deleteCommun, index, item} = this.props
    if (window.confirm(`确定删除${item.username}的评论？`)) {
      deleteCommun(index)
    }
  }
  render() {
    const {item} = this.props
    return (
        <li className="list-group-item">
          <div className="handle">
            <a href="javascript:;" onClick={this.handleDelete}>删除</a>
          </div>
          <p className="user">
            <span>{item.username}</span>
            <span>说:</span>
          </p>
          <p className="centence">{item.content}</p>
        </li>
    )
  }
}
