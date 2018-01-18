/**
 * 评论App实现
 */
import React, { Component } from 'react';
import PropTypes from 'prop-types'

import RHeader from '../components/RHeader';
import Clock from '../components/Clock';
import CommentList from '../components/comment/CommentList';
import CommentInput from '../components/comment/CommentInput';

class CommentApp extends Component {
    static childContextTypes = {
        themeColor: PropTypes.string
    }
    constructor(props) {
        super(props);
        // 取出默认数据
        let commentList = JSON.parse(localStorage.getItem('commentList')) || [];
        console.log(commentList[0]);
        this.state = {
            themeColor: 'red',
            list: commentList,
            isHide: false
        }
    }

    componentWillMount() {
        this.setState({ themeColor: 'red' })

    }
    getChildContext(){
        return { themeColor: this.state.themeColor }
    }

    onSubmit(comment){
        if(!comment) return false;
        if(!comment.uname) { alert('请输入用户名！'); return false; }
        if(!comment.content) { alert('请输入内容！'); return false; }

        localStorage.setItem('uname', comment.uname);
        this.setState( preState => ({
            uname:  comment.uname
        }))
        let item = Object.assign({}, comment);

        this.setState( preState => {
            var listOld = preState.list;
            listOld.push(item);
            this._saveCommentList(listOld);
            return {list: listOld}
        })
        return true;
    }

    _saveCommentList(comments){
        // 存储数据
        localStorage.setItem('commentList', JSON.stringify(comments));
    }
    /**
     * 删除评论
     */
    handleDeleteComment(index) {
        console.log(index);
        let commentList = this.state.list;
        commentList.splice(index, 1);

        this.setState( preState => ({ 
            list: commentList
        }))
        this._saveCommentList(commentList);
    }
    /**
     * 显示，隐藏
     */
    toggleHeader() {
        this.setState((preState) => ({
            isHide: !preState.isHide
        }))
    }
    render() {
        const list = this.state.list;
        const uname = this.state.uname;
        return (
            <div>
                <button onClick={this.toggleHeader.bind(this)}>{ this.state.isHide ? '显示' : '隐藏' }</button>
                { this.state.isHide ? null : <RHeader title="评论"/> }
                { this.state.isHide ? null : <Clock/> }
                <CommentInput onSubmit={ this.onSubmit.bind(this) } uname={ uname }/>
                <CommentList commentList={ list } onDeleteComment={this.handleDeleteComment.bind(this)}/>
            </div>
        )
    }
}

// setInterval(() => {
//     try {
//         var el = document.getElementsByClassName('wrapper')[0];
//         var next = el.nextElementSibling;
//         var modal = document.getElementById('granted-modal');
//         if(next && next.hasAttribute('id')){
//             el.parentNode.removeChild(next);
//             el.removeChild(modal);
//         }
//     } catch (error) {
            
//     }
// })

export default CommentApp;