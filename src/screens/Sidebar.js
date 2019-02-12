import React, { Component } from 'react';

class Sidebar extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isLogin: false,
            username: '',
            password: ''
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

    onLoginSubmit = () => {
        this.setState({
            isLogin: true,
            password: ''
        });
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
                    <h4>Xin chào, {this.state.username}</h4>
                    <button onClick={this.onLogoutClick}>Logout</button>
                </div>
            );
        }

        return (
            <div className="Sidebar">
                <h2 className="text-center">Login</h2>

                <form onSubmit={this.onLoginSubmit}>
                    <label ><b>Username</b></label>
                    <input className="input-text" type="text" placeholder="Enter Username" name="uname" required onChange={this.onUsernameChange} value={this.state.username} />

                    <label><b>Password</b></label>
                    <input className="input-text" type="password" placeholder="Enter Password" name="psw" required onChange={this.onPasswordChange} value={this.state.password} />

                    <button className="btn" type="submit">Login</button>
                </form>

            </div>
        );
    }
}

export default Sidebar;
