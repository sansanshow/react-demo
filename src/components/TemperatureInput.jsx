import React ,{Component} from 'react';
const scaleNames = {
    c: 'Celsius',
    f: 'Fahrenheit'
  };
class TemperatureInput extends Component {
    constructor(props){
        super(props);
        this.handleChange = this.handleChange.bind(this);
        // this.state = {temperature: props.temperature || ''};
    }
    /**
     * 
     */
    componentWillReceiveProps(nextProps) {
        console.log('TemperatureInput-', nextProps);
    }
    handleChange(e){
        var target = e.target;
        // console.log(target.value);
        // this.setState({
        //     temperature: e.target.value
        // })
        this.props.onTemperatureChange(e.target.value);
    }
    render(){
        const temperature = this.props.temperature;
        const scale =  this.props.scale;
        return (
            <fieldset>
                <legend>Enter temperature in {scaleNames[scale]}</legend>
                <input type="text" maxLength="10" value={ temperature } onChange={this.handleChange}/>
            </fieldset>
        )
    }
}
export default TemperatureInput;