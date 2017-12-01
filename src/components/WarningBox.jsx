import React, {Component} from 'react';

class WarningBox extends Component{

    render(){
        if(this.props.warn){
            return null;
        }
        
        return (
            <div>
                Wraning!!!
            </div>
        );
    }
}

export default WarningBox;