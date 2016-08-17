import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import './style/main.css'

import React, { Component } from 'react'

import logo from './assets/img/logo-large.png'
import { ContentWrapper, Footer, Navbar } from './components'

class App extends Component {
  render() {
    return (
      <div>
        <Navbar
          logo={logo}
          menu={['pricing', 'enterprise', 'about', 'careers']}
          accountMenu={['login']}
          height="65"
          alt="Synergy"/>
        <ContentWrapper>
            {this.props.children}
        </ContentWrapper>
        <Footer/>
      </div>
    )
  }
}

export default App;
