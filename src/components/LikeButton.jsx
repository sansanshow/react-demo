import React from 'react';
import ReactDOM from 'react-dom';

class LikeButton extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            isLiked: false
        }
        // event bind
        
    }
    static defaultProps = {
        wordings: {
            likeText: "点赞",
            unLikeText: "取消"
        }
    }
    handleBtnClick(id){
        console.log(id);
        this.setState(preState => ({
            isLiked: !preState.isLiked
        }))
    }
    
    render() {
        return (
            <button onClick={ this.handleBtnClick.bind(this, '111') }>
            {
                !this.state.isLiked ? this.props.wordings.likeText : this.props.wordings.unLikeText
            }👍
            </button>
        )
    }
}

export default LikeButton;