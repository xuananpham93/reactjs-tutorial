import React, { Component } from 'react'
import Sidebar from './Sidebar';
import Content from './Content';

class Home extends Component {
    render() {
        return (
            <div className="main-content">
                <Sidebar />
                <Content />
            </div>
        )
    }
}

export default Home
