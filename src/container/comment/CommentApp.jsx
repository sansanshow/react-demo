import React, { Component } from 'react'
import CommentInput from './CommentInput';
import CommentList from './CommentList';

class CommentAppContainer extends Component {
    constructor(props) {
        super(props);
    }
    componentWillMount() {
        let comments = JSON.parse(localStorage.getItem('comments')) || [];
        this.setState({
            comments: comments
        })
    }
    handleSubmit(comment) {
        let item = Object.assign({}, comment);

        this.setState( preState => {
            var listOld = preState.comments || [];
            listOld.push(item);
            this._saveCommentList(listOld);
            return {comments: listOld}
        })  
    }

    handleDeleteComment(index) {
        let comments = this.state.comments;
        comments.splice(index, 1);

        this.setState( preState => ({ 
            comments: comments
        }))
        this._saveCommentList(comments);
    }
    _saveCommentList(comments){
        // 存储数据
        localStorage.setItem('comments', JSON.stringify(comments));
    }

    render() {
        let comments = this.state.comments;
        return (
            <div>
                <CommentInput onSubmit={this.handleSubmit.bind(this)}/> 
                <CommentList comments={ comments } onDeleteComment={ this.handleDeleteComment.bind(this) }/>
            </div>
        )
    }
}

export default CommentAppContainer;