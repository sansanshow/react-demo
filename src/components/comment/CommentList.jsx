/**
 * 评论列表
 */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Comment from './Comment';

import '../../styles/components/comment/comment-list.less'

class CommentList extends Component {
    static defaultProps = {
        commentList: []
    }
    static propTypes = {
        commentList: PropTypes.array.isRequired
    }
    constructor(props) {
        super(props);
    }
    handleDeleteComment(index) {
        if (this.props.onDeleteComment) {
            this.props.onDeleteComment(index);
        }
    }
    render() {
        return (
            <div className="comment-list">
                {
                    this.props.commentList.map((item, index) => 
                        <Comment comment={item} key={item.id} index={index} onDeleteComment={this.handleDeleteComment.bind(this)}/>
                    )
                }
            </div>
        )
    }
}

export default CommentList;