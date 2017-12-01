import React ,{Component} from 'react';
// import {render} from 'react-dom';
import WarningBox from './WarningBox'

class About extends Component{
    constructor(props){
        super(props);
        this.state = {
            isTooggle: true,
            isTooggle2: true,
            isTooggle3: true,
            isTooggle4: true,
            unreadMessages: ['', '', '']
        }
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
    
    handleClick3(id){
        console.log(this);
        console.log(id);
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
    render(){
        var numbers = [1, 2, 3, 4, 5];
        const listItems = numbers.map((id) => 
            <li key={id.toString()}>{id}</li>
        );
        return (
            <div>
                <h3>About</h3>
                Page About{this.props.match.params.info}<br/>
                <button onClick = {this.handleClick}>{this.state.isTooggle ? 'ON' : 'OFF'}</button>
                <p>
                    <button onClick = {(e) => this.handleClick2(e)}>{this.state.isTooggle2 ? 'ON' : 'OFF'}</button>
                </p>
                <p>
                    <button onClick = {this.handleClick3.bind(this, 'id1001')}>{this.state.isTooggle3 ? 'ON' : 'OFF'}</button>
                </p>
                <p>
                    <button onClick = {this.handleClick4}>{this.state.isTooggle4 ? 'ON' : 'OFF'}</button>
                </p>
                { this.state.unreadMessages.length > 0 && 
                    <p> 你有 {this.state.unreadMessages.length} 封邮件.</p>
                }
            
                <p> 你 {this.state.unreadMessages.length > 0 ? '有' + this.state.unreadMessages.length + '封' : '没有'} 新邮件.</p>
                <WarningBox warn={this.state.isTooggle}></WarningBox>
                <button onClick = {this.handleClick}>{this.state.isTooggle ? 'ON' : 'OFF'}</button>
                <ul>{ listItems }
                {
                    numbers.map((id) => 
                        <li key={id.toString()}>{id}</li>
                    )
                }
                </ul>
            </div>
        );
    }

}
export default About; 