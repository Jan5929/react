import React, { Component } from 'react'
import './index.css'
import Item from '../item'
import PropTypes from 'prop-types'
export default class List extends Component {
  static propTypes: {
    communs: PropTypes.array.isRequired,
    deleteCommun: PropTypes.func.isRequired
  }
  render() {
    const {communs,deleteCommun} = this.props
    const display = communs.length === 0? 'block':'none'
    return(
        <div className="col-md-8">
          <h3 className="reply">评论回复：</h3>
          <h2 style={{display}}>暂无评论，点击左侧添加评论！！！</h2>
          <ul className="list-group">
            {
              communs.map((item, index) => <Item item={ item } key={index} deleteCommun={deleteCommun} index={index}/>)
            }
          </ul>
        </div>
    )
  }
}
