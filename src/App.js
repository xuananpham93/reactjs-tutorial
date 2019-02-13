import './App.css';

import React, { Component } from 'react';
import Header from './screens/Header';
import Sidebar from './screens/Sidebar';
import Content from './screens/Content';
import Footer from './screens/Footer';
import Content2 from './screens/Content2';

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

// class App extends Component {
//     constructor(props) {
//         super(props);

//         this.state = {
//             data: 0,
//             isShowContent: true
//         }

//         // this.onShowContent = this.onShowContent.bind(this);
//     }

//     onShowContent = () => {
//         this.setState({
//             isShowContent: !this.state.isShowContent
//         });
//     }

//     onTangData = () => {
//         this.setState({
//             data: this.state.data + 1
//         });
//     }

//     renderContent = () => {
//         if (this.state.isShowContent == true) {
//             return <Content2 data={this.state.data} />
//         }

//         return null;
//     }

//     render() {
//         return (
//             <div>
//                 <button onClick={this.onTangData}>Tăng</button>
//                 <button onClick={this.onShowContent}>Bật/Tắt content</button>

//                 {this.renderContent()}
//                 {/* {
//                     this.state.isShowContent == true ?
//                         <Content2 data={this.state.data} />
//                         : null
//                 } */}
//             </div>
//         );
//     }
// }

export default App;
