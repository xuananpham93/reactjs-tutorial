import './App.css';

import React, { Component } from 'react';
import Header from './screens/Header';
import Sidebar from './screens/Sidebar';
import Content from './screens/Content';
import Footer from './screens/Footer';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <div className="container">
                <Header />
                <div className="main-content">
                    <Sidebar />
                    <Content />
                </div>
                <Footer />
            </div>
        );
    }
}

export default App;
