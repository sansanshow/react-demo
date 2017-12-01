import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Checkbox from './components/checkbox.jsx';
import About from './components/about';
import Inbox from './components/inbox';
import Calculator from './views/Calculator';
import { Route, Link, Switch } from 'react-router-dom';

class App extends Component {
    // propTypes: {
    //     title: PropTypes.string.isRequired // title必须是一个字符串，而且是必须的
    // }
    handleChange(info){
        console.log(info)
    }
    render() {
        let propsArray = [
            {
                checked: false,
                disable: true,
                label: '男'
            },
            {
                checked: false,
                disable: false,
                label: '女'
            }
        ];
        return (
            <div className="App">
                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h2>Welcome to React,{this.props.name}</h2>
                </div>
                <p className="App-intro">
                    To get started, edit <code>src/App.js</code> and save to reload.
                </p>
                {
                    propsArray.map((v,i) => {
                        let chbox;
                        chbox = <Checkbox key={i} {...v} onCommClick={this.handleChange}/>
                        return (chbox);
                    })
                }
                <ul>
                    <li>
                        <Link to={{
                            pathname: '/about/6666',
                            search: '?sort=name',
                            state: { price: 18 }
                        }}>Aboutsss</Link>
                    </li>
                    <li><Link to="/inbox">Inboxsss</Link></li>
                    <li><Link to="/calculator">calculator</Link></li>
                </ul>
                <hr/>
                <div>
                    <Switch>
                        <Route path="/about/:info" component={About} />
                        {/*<Route path="/about/:info" render={() => <About/>} />*/}
                        <Route path="/inbox" component={Inbox} />
                        <Route path="/calculator" component={Calculator} />
                    </Switch>
                </div>
                {/*{this.props.children}*/}

            </div>
        );
    }
}

export default App;
