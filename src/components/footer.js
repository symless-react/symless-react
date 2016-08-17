import React from 'react'

import { Link } from 'react-router'

import facebookIconImage from '../assets/img/facebook-icon.png'
import twitterIconImage from '../assets/img/twitter-icon.png'
import youtubeIconImage from '../assets/img/youtube-icon.png'
import googlePlusIconImage from '../assets/img/google-plus-icon.png'
import githubIconImage from '../assets/img/github-icon.png'

export default function Footer(props) {
  return (
    <footer className="footer">
      <div className="container">
          <div className="row">
              <div className="col-md-7">
                  <ul className="pull-left-ml">
                      <li><Link className="divider" to="/contact">Contact us</Link></li>
                      <li><a className="divider" href="http://eepurl.com/bOzE_X">Newsletter</a></li>
                      <li><Link className="divider" to="/download">Download</Link></li>
                      <li><Link to="/help">Help</Link></li>
                  </ul>
              </div>
              <div className="col-md-5">
                  <ul className="pull-right-ml">
                      <li><a href="https://www.facebook.com/symless"><img src={facebookIconImage} alt="Symless Facebook page" /></a></li>
                      <li><a href="https://twitter.com/symless"><img src={twitterIconImage} alt="Symless Twitter feed" /></a></li>
                      <li><a href="https://www.youtube.com/user/SynergyOpenSource"><img src={youtubeIconImage} alt="Synergy Youtube channel" /></a></li>
                      <li><a href="https://plus.google.com/+synergy"><img src={googlePlusIconImage} alt="Synergy Google Plus" /></a></li>
                      <li><a href="https://github.com/symless"><img src={githubIconImage} alt="Symless GitHub" /></a></li>
                  </ul>
              </div>
          </div>
      </div>
    </footer>
  )
}
