import React, { Component } from 'react';
import PropTypes from 'prop-types';

import CommentInput from '../../components/comment2/CommentInput';

class CommentInputContainer extends Component {
    static propTypes = {
        comments: PropTypes.array, 
        onSubmit: PropTypes.func
    }
    constructor(props) {
        super(props);
        this.state = {
            uname: ''
        }
    }

    componentWillMount() {
        this.setState({
            uname: localStorage.getItem('uname') || ''
        })
    }

    handleSubmitComment(comment) {
        if(!comment) return false;
        if(!comment.uname) { alert('请输入用户名！'); return false; }
        if(!comment.content) { alert('请输入内容！'); return false; }

        if(this.props.onSubmit){
            this.props.onSubmit(comment);
        }

    }

    handleUnameInputBlur(uname) {
        localStorage.setItem('uname', uname);
    }

    render() {
        let uname = this.state.uname;
        return (
            <CommentInput uname={ uname } onUnameInputBlur={ this.handleUnameInputBlur.bind(this) } onSubmit={ this.handleSubmitComment.bind(this) }/>
        )
    }
}
export default CommentInputContainer;
