import React, { Component } from 'react';
import PropTypes from 'prop-types';

import CommentList from '../../components/comment2/CommentList';


class CommentListContainer extends Component {
    static propTypes ={
        comments: PropTypes.array,
        onDeleteComment: PropTypes.func
    }
    static defaultProps = {
        comments: []
    }
    constructor(props) {
        super(props);
    }
    componentWillMount() {
        this.setState({
            comments: this.props.comments
        })
    }
    /**
     * 删除评论
     */
    handleDeleteComment(index) {
        if(this.props.onDeleteComment) {
            this.props.onDeleteComment(index);
        } 
    }

    render() {
        let comments = this.state.comments;
        return (
            <CommentList comments={comments} onDeleteComment={this.handleDeleteComment.bind(this)}/>
        )
    }
}
export default CommentListContainer;
