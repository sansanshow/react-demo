import React, { Component } from 'react'
import CommentInput from './CommentInput';
import CommentList from './CommentList';

class CommentAppContainer extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <CommentInput /> 
                <CommentList />
            </div>
        )
    }
}

export default CommentAppContainer;