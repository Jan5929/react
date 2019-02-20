import React , {Component} from 'react'   // 切记Component 的 C 必须大写

import logo from '../logo.svg'

import '../index.css'

export default class App extends Component {
    render() {
        return (
            <div>
                <img className='logo' src={logo} alt="logo"/>
                <p className='title'>这是react　组件</p>
            </div>
        )
    }
}
