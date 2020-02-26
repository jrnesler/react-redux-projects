import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Switch, Route} from 'react-router-dom';
import App from './components/App';
import Jewelries from './components/Jewelry';
import './index.css';
import {createBrowserHistory} from 'history';

const history = createBrowserHistory();

ReactDOM.render(
<Router history={history}>
    <Switch>
        <Route exact={true} path='/' component={App}></Route>
      
        <Route path='/jewelry' component={Jewelries}></Route>
       
     
    </Switch>
</Router>,
     document.getElementById('root'));