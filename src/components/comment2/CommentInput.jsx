/**
 * 评论 表单
 */
import React, { Component } from 'react'
import PropTypes  from 'prop-types'
import '../../styles/components/comment/comment-input.less'
class CommentInput extends Component {
    static propTypes = {
        uname: PropTypes.string,
        onSubmit: PropTypes.func,
        onUnameInputBlur: PropTypes.func
    }
    static defaultProps = {
        uname: ''
    }
    constructor(props) {
        super(props);
        this.state = {
            uname: props.uname,
            content: ''
        }
    }

    componentDidMount() {
        this.textarea.focus();
    }
    handleContentChange (event) {
        this.setState({
          content: event.target.value
        })
    }

    handleUnameChange (event) {
        this.setState({
          uname: event.target.value
        })
    }
    
    handleSubmit() {
        if(this.props.onSubmit) {
            let currDate = new Date().getTime();
            this.props.onSubmit({
                id: currDate,
                uname: this.state.uname,
                content: this.state.content,
                createdTime: currDate
            })
        }
        this.setState({
            content: ''
        })
    
    }

    render() {
        console.log(this.props.uname);
        return (
            <div className='comment-form'>
                <div className="form-line">
                    <span>用户名</span>
                    <div>
                        <input value={ this.state.uname } type="text" onChange={ this.handleUnameChange.bind(this) }/>
                    </div>
                </div>
                <div className="form-line">
                    <span>评论内容</span>
                    <div>
                        <textarea ref={ (textarea) => this.textarea = textarea } value={ this.state.content } type="text" onChange={ this.handleContentChange.bind(this) }>
                
                        </textarea>
                    </div>
                </div>
                <div>
                    <button onClick={ this.handleSubmit.bind(this) }>发布</button>
                </div>
            </div>
        )
    }
}

export default CommentInput;