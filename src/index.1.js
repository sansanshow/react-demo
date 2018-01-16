import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {Route, BrowserRouter as Router} from 'react-router-dom';
import routes from './router'
import registerServiceWorker from './registerServiceWorker';

import App from './App';
import Calculator from './views/Calculator';
import Inbox from './components/inbox';

class Index extends React.Component {
    render () {
        return (
            <App name={'Jack'}/>
        );
    }
}

ReactDOM.render((
    <Router>
        <div>
            <Route path="/" component={Index} />
            <div>111111</div>
            <Route path="/inbox" component={Inbox} />
            <div>222222</div>
            <Route path="/calculator" component={Calculator} />
        </div>
    </Router>
), document.getElementById('root'));
registerServiceWorker();
