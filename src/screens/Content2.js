import React, { Component } from 'react'

class Content2 extends Component {
    constructor(props) {
        super(props);

        console.log('constructor');
    }

    componentWillMount() {
        console.log('componentWillMount');
    }

    componentWillReceiveProps(nextProps) {
        console.log('componentWillReceiveProps');
    }

    componentWillUnmount() {
        console.log('componentWillUnmount');
    }

    componentDidMount() {
        console.log('componentDidMount');
    }

    shouldComponentUpdate(newProps, nextState) {
        console.log(this.props.data, newProps.data);

        return false;
    }

    render() {
        console.log('render');
        return (
            <div>
                {this.props.data}
            </div>
        )
    }
}

export default Content2
