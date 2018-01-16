import React ,{Component} from 'react';
// import {render} from 'react-dom';
import WarningBox from './WarningBox';

import LikeButton from './LikeButton';

class About extends Component{
    constructor(props){
        super(props);
        this.state = {
            isTooggle: true,
            isTooggle2: true,
            isTooggle3: true,
            isTooggle4: true,
            unreadMessages: ['', '', ''],
            isLike: false
        }
    }

    /**
     * props 设置默认值的情况
     */
    static defaultProps = {
        title: "def"
    }

    handleClick = () => {
        console.log(this);
        this.setState(preState => ({
            isTooggle: !preState.isTooggle
        }));
    }

    handleClick2(e){
        console.log(this);
        console.log(e.target);
        this.setState(preState => ({
            isTooggle2: !preState.isTooggle2
        }));

    }
    
    handleClick3(id, e){
        console.log(this);
        console.log(id);
        console.log(e.target);
        this.setState(preState => ({
            isTooggle3: !preState.isTooggle3
        }));

    }

    handleClick4(){
        console.log(this);
        try {
            this.setState(preState => ({
                isTooggle4: !preState.isTooggle4
            }));
        } catch (error) {
            console.error(error);
        }
    }
    handleClick5() {
        this.setState(preState => ({
            isLike: !preState.isLike
        }))
    }
    componentWillUnmount() {
        console.log('componentWillUnmount');
    }
    render(){
        var numbers = [1, 2, 3, 4, 5];
        const listItems = numbers.map((id) => 
            <li key={id.toString()}>{id}</li>
        );
        const title = this.props.title;
        const info = this.props.match.params.info;
        return (
            <div>
                <h3>About { title }</h3>
                Page About{ this.props.match.params.info }<br/>
                1:<button onClick = { this.handleClick}>{this.state.isTooggle ? 'ON' : 'OFF' }</button>
                <p>
                    2:<button onClick = {(e) => this.handleClick2(e)}>{this.state.isTooggle2 ? 'ON' : 'OFF'}</button>
                </p>
                <p>
                    3:<button  onMouseEnter = {this.handleClick3.bind(this, 'id1001')} onClick = {this.handleClick3.bind(this, 'id1001')}>{this.state.isTooggle3 ? 'ON' : 'OFF'}</button>
                </p>
                <p>
                    4:<button onClick = {this.handleClick4}>{this.state.isTooggle4 ? 'ON' : 'OFF'}</button>
                </p>
                <p>
                    5:<button onClick = {() => this.handleClick5()}>
                    {
                        !this.state.isLike ? '点赞' : '取消' 
                    }👍</button>
                </p>
                <p>
                    6:<LikeButton wordings={{likeText: "已赞", unLikeText: "赞" }} />
                </p>
                { this.state.unreadMessages.length > 0 && 
                    <p> 你有 {this.state.unreadMessages.length} 封邮件.</p>
                }
            
                <p> 你 {this.state.unreadMessages.length > 0 ? '有' + this.state.unreadMessages.length + '封' : '没有'} 新邮件.</p>
                <WarningBox warn={this.state.isTooggle}></WarningBox>
                <button onClick = {this.handleClick}>{this.state.isTooggle ? 'ON' : 'OFF'}</button>
                <ul>
                { listItems }
                </ul>
            </div>
        );
    }

}
export default About; 