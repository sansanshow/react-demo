/**
 * 评论 item
 */
import React, { Component } from 'react';

import PropTypes from 'prop-types';

import '../../styles/components/comment/comment.less';
class Comment extends Component {

    constructor(props) {
        super(props);
        this.state = { timeString: '' }
    }


    _updateTimeString () {
        const comment = this.props.comment
        const duration = (+Date.now() - comment.createdTime) / 1000
        this.setState({
          timeString: duration > 60
            ? `${Math.round(duration / 60)} 分钟前`
            : `${Math.round(Math.max(duration, 1))} 秒前`
        })
    }
    componentWillMount() {
        this._updateTimeString();  
        this._timer = setInterval(
            this._updateTimeString.bind(this),
            5000
        )
    }

    componentWillUnmount() {
        clearInterval(this._timer);
    }

    handleDeleteComment(index){
        if(this.props.onDeleteComment) {
            this.props.onDeleteComment(this.props.index);
        }
    }

    render() {
        return (
            <div className="list-item">
                <div className="comment-main">
                    <span className="name" styles={{ color: this.context.themeColor }}>{ this.props.comment.uname }:</span>
                    <span className="main">
                        { this.props.comment.content }
                    </span>
                    <span className="delete">
                        <button onClick={ this.handleDeleteComment.bind(this) }>删除</button>
                    </span>
                </div>
                <p className="pub-date">{ this.state.timeString}</p>
            </div>
        )
    }
}

export default Comment;