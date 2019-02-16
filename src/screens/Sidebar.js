import React, { Component } from 'react';
import firebase from 'firebase';

class Sidebar extends Component {
    constructor(props) {
        super(props)

        this.state = {
            username: '',
            password: '',
            isLogin: false
        }
    }

    onUsernameChange = (e) => {
        this.setState({
            username: e.target.value
        });
    }

    onPasswordChange = (e) => {
        this.setState({
            password: e.target.value
        });
    }

    onLoginClick = (e) => {
        e.preventDefault();

        firebase.auth().signInWithEmailAndPassword(this.state.username, this.state.password)
            .then((userInfo) => {
                console.log(userInfo);
                this.setState({
                    isLogin: true
                });
                localStorage.setItem('username', userInfo.user.email);
                localStorage.setItem('isLogin', true);

                // setTimeout(() => {
                //     localStorage.clear();
                // }, 10000);
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    componentDidMount() {
        // console.log(localStorage.getItem('username'));
        // console.log(localStorage.getItem('isLogin'));
        let isLogin = localStorage.getItem('isLogin');

        if (isLogin) {
            this.setState({
                isLogin: true,
                username: localStorage.getItem('username')
            });
        }
    }

    onLogoutClick = () => {
        this.setState({
            isLogin: false,
            username: '',
            password: ''
        });
    }

    render() {
        if (this.state.isLogin) {
            return (
                <div>
                    Xin chao, {this.state.username}
                    <button onClick={this.onLogoutClick}>Logout</button>
                </div>
            );
        }

        return (
            <div className="Sidebar">
                <h2 className="text-center">Login</h2>

                <form onSubmit={this.onLoginClick}>
                    <label ><b>Username</b></label>
                    <input className="input-text" type="text" placeholder="Enter Username" name="uname" required onChange={this.onUsernameChange} value={this.state.username} />

                    <label><b>Password</b></label>
                    <input className="input-text" type="password" placeholder="Enter Password" name="psw" required value={this.state.password} onChange={this.onPasswordChange} />

                    <button className="btn" type="submit">Login</button>
                </form>

            </div>
        );
    }
}

export default Sidebar;
