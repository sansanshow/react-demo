import React, { Component } from 'react'

export default class Clock extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nowTime: new Date()
        }
    }
    componentWillMount() {
        this.timer = setInterval(() => {
            this.setState({
                nowTime: new Date()
            })
        },500)
    }
    componentWillUnmount() {
        clearInterval(this.timer)
    }

    render() {
        return (
            <div>
                <h4>现在时间：{ this.state.nowTime.toLocaleTimeString() }</h4>
            </div>
        )
    }
}