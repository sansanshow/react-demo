import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import About from './components/about';
import Inbox from './components/inbox';
// import { Router, Route } from 'react-router'
import {Route, BrowserRouter as Router} from 'react-router-dom';

import registerServiceWorker from './registerServiceWorker';

// ReactDOM.render(<App name={'Jack'}/>, document.getElementById('root'));
ReactDOM.render((
    <Router>
        <Route path="/" component={App}>
            <Route path="about" component={About} />
            <Route path="inbox" component={Inbox} />
        </Route>
    </Router>
), document.getElementById('root'));
registerServiceWorker();