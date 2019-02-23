import './App.css';

import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import firebase from 'firebase';
import { inject, observer } from 'mobx-react';
import Header from './screens/Header';
import Sidebar from './screens/Sidebar';
import Content from './screens/Content';
import Footer from './screens/Footer';
import Content2 from './screens/Content2';
import Home from './screens/Home';
import About from './screens/About';
import { sayHello } from './screens/utils/helpers';
import { call } from './helper/request'

@inject('NoteStore')
@observer
class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };

        var config = {
            apiKey: "AIzaSyC_s1XF3Sm5zo4MLIyV09S0vZm7q_sCfSI",
            authDomain: "reactjs-tutorial-acae7.firebaseapp.com",
            databaseURL: "https://reactjs-tutorial-acae7.firebaseio.com",
            projectId: "reactjs-tutorial-acae7",
            storageBucket: "reactjs-tutorial-acae7.appspot.com",
            messagingSenderId: "780631658754"
        };
        firebase.initializeApp(config);
    }

    componentDidMount = async () => {
        // this.props.NoteStore.getNote();
        let data = await call("api/music_albums", {})
        console.log("getDataa", data)
        this.props.NoteStore.setList(data)
    }

    render() {
        // console.log(this.props.NoteStore.note);
        // console.log(this.props.NoteStore.getNote());

        return (
            <Router>
                <div className="container">
                    {/* <Router>
                    <div>
                        <Route path="/" exact component={Content} />
                        <Route path="/about/:id" component={Sidebar} />
                    </div>
                </Router> */}

                    <Header />
                    <Route path="/" exact component={Home} />
                    <Route path="/about" component={About} />
                    <Footer />
                </div>
            </Router>
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
