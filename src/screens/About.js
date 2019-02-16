import React, { Component } from 'react'

class About extends Component {
    componentDidMount() {
        setInterval(() => {
            console.log('username', localStorage.getItem('username'));
            console.log('isLogin', localStorage.getItem('isLogin'));
        }, 1000);
    }

    render() {
        return (
            <div>
                This is About
            </div>
        )
    }
}

export default About
