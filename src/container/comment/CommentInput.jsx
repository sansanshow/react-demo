import React, { Component } from 'react';
import PropTypes from 'prop-types';

import CommentInput from '../../components/comment2/CommentInput';

class CommentInputContainer extends Component {
    static propTypes = {
        comments: PropTypes.array, 
        onSubmit: PropTypes.func
    }

    componentWillMount() {

        this.setState({
            uname: localStorage.getItem('uname') || ''
        })
    }

    constructor() {
        super();
    }

    handleSubmitComment() {

    }
    render() {
        let uname = this.state.uname;
        return (
            <CommentInput uname={ uname } onSubmit={ this.handleSubmitComment.bind(this) }/>
        )
    }
}
export default CommentInputContainer;
