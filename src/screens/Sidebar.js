import React, { Component } from 'react';

class Sidebar extends Component {
    render() {
        return (
            <div className="Sidebar">
                <h2 className="text-center">Login</h2>

                <form action="">
                    <label ><b>Username</b></label>
                    <input className="input-text" type="text" placeholder="Enter Username" name="uname" required />

                    <label><b>Password</b></label>
                    <input className="input-text" type="password" placeholder="Enter Password" name="psw" required />

                    <button className="btn" type="submit">Login</button>
                </form>

            </div>
        );
    }
}

export default Sidebar;
