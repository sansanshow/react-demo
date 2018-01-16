import React from 'react';
import TemperatureInput from '../components/TemperatureInput';
function toCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5 / 9;
}
  
function toFahrenheit(celsius) {
    return (celsius * 9 / 5) + 32;
}

function tryConvert(temperature, convert){
    const input = parseFloat(temperature);
    if (Number.isNaN(input)) {
      return '';
    }
    const output = convert(input);
    const rounded = Math.round(output * 1000) / 1000;
    return rounded.toString();
}
function BoilingVerdict(props) {
    if (props.celsius >= 100) {
      return <p>The water would boil.</p>;
    }
    return <p>The water would not boil.</p>;
  }
/**
 * 摄氏度转换
 */
class Calculator extends React.Component {
    constructor(props){
        super(props);
        this.handleCelsiusChange = this.handleCelsiusChange.bind(this);
        this.handleFahrenheitChange = this.handleFahrenheitChange.bind(this);
        this.state = {temperature: '', scale: 'c'};
        
    }
    /**
     * 在react组件加载完之前立即执行，此时还不能访问到真实的dom结构
     */
    componentWillMount() {
        // console.log('Calculator--componentWillMount');
    }
    /**
     * 
     */
    componentDidMount() {
        // console.log('Calculator--componentDidMount');
    }
    /**
     * 当挂载的组件接收到新的props时被调用
     * @param {*} newProps 
     */
    componentWillReceiveProps(newProps) {
        // console.log('Calculator--componentWillReceiveProps');
    }
    /**
     * 
     */
    shouldComponentUpdate(nextProps, nextState) {
        // console.log('Calculator--shouldComponentUpdate');
        // console.log(nextProps, nextState);
        return true;
    }

    handleCelsiusChange(temperature) {
        this.setState({temperature, scale: 'c'});
    }
    handleFahrenheitChange(temperature) {
        this.setState({temperature, scale: 'f'});
    }
    
    testHandleChange(){

    }

    render() {
        const scale = this.state.scale;
        const temperature = this.state.temperature;
        const celsius = scale === 'f' ? tryConvert(temperature, toCelsius) : temperature;
        const fahrenheit =  scale === 'c' ? tryConvert(temperature, toFahrenheit) : temperature;
        return (
            <div>
                <TemperatureInput
                    scale="c"
                    temperature={celsius}
                    onTemperatureChange={this.handleCelsiusChange}>
                </TemperatureInput>
                <TemperatureInput
                    scale="f"
                    temperature={fahrenheit}
                    onTemperatureChange={this.handleFahrenheitChange}>
                </TemperatureInput>
                <BoilingVerdict celsius={celsius}></BoilingVerdict>
                <input type="text" name="22" id="" defaultValue='12'/>
                <input type="text" name="22" id="" value='12' onChange={this.testHandleChange}/>
            </div>
        )
    }
}
export default Calculator;