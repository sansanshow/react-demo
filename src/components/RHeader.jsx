import React, { Component } from 'react'

class RHeader extends Component {
    constructor(props) {
        super(props);
        // console.log('constructor');
    }
    componentWillMount() {
        // console.log('componentWillMount');
    }
    
    render() {
        // console.log('render');        
        return (
            <h1>{ this.props.title }</h1>
        )
    }
    componentDidMount() {
        // console.log('componentDidMount');
        
    }

    componentWillUnmount() {
        // console.log('componentWillUnmount');
    }
}

export default RHeader;