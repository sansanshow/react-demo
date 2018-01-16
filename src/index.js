import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import RouteConfig from './components/RouteConfig';
// import About from './components/about';
// import Inbox from './components/inbox';
// import { Router, Route } from 'react-router'
import {Route, BrowserRouter as Router} from 'react-router-dom';

import registerServiceWorker from './registerServiceWorker';

// ReactDOM.render(<App name={'Jack'}/>, document.getElementById('root'));
class Index extends React.Component {
    render () {
        return (
            <App name={'Jack'}/>
        );
    }
}
ReactDOM.render((
    <Router>
        <Route path="/" component={Index}>
            {/* <Route path="about" component={About} />
            <Route path="inbox" component={Inbox} /> */}
        </Route>
        {/* <Route path="/config" component={ RouteConfig }/> */}
    </Router>
    // <RouteConfig />
), document.getElementById('root'));
registerServiceWorker();
