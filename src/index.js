require("file?name=404.html!./404.html")

import React from 'react'
import ReactDOM from 'react-dom'
import App from './app'

import {
  About,
  Careers,
  Contact,
  Download,
  Enterprise,
  Login,
  Main,
  Help,
  Pricing
} from './components/screens'
import { IndexRoute, Router, Route, browserHistory } from 'react-router'

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Main} />
      <Route path="/about" component={About}/>
      <Route path="/careers" component={Careers}/>
      <Route path="/contact" component={Contact}/>
      <Route path="/download" component={Download}/>
      <Route path="/enterprise" component={Enterprise}/>
      <Route path="/help" component={Help}/>
      <Route path="/login" component={Login}/>
      <Route path="/pricing" component={Pricing}/>
      <Route path="/account/login" component={Login}/>
    </Route>
  </Router>,
  document.getElementById('root')
);
