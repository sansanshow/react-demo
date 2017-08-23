import React ,{Component} from 'react';
import {render} from 'react-dom';

export default class About extends Component{
    render(){
        return (
            <div>
                <h3>About</h3>
                Page About{this.props.match.params.info}<br/>
                
            </div>
        );
    }

}