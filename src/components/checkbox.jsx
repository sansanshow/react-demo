import React ,{Component} from 'react';
// import {render} from 'react-dom';

export default class Checkbox extends Component{
    static defaultProps={
        label:''
    };
    constructor(props){
        super(props);
        this.state={
            checked:props.checked,
            disable:props.disable
        };
    }
    onChange(checked){
        console.log('before',this.state.checked,checked);
        this.setState({
            checked:!checked
        });
        console.log('after',this.state.checked,checked);
        this.props.onCommClick({chked: this.state.checked, label: this.props.label});
    }
    render(){
        return (
            <div className="demo-checkbox-box clearfix">
                <div className="checkboxs">
                    <label className="check-label">{this.props.label}</label>

                    <input {...this.otherProps}
                           type="checkbox" className="check-input"
                           value={this.props.value}
                           disabled={this.state.disable}
                           checked={this.state.checked}
                           onChange={this.onChange.bind(this,this.state.checked)}
                    />
                </div>
            </div>
        )
    }
}