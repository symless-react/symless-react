import React from 'react'

import windowsImage from '../../../../assets/img/windows.png'
import debianUbuntuImage from '../../../../assets/img/debian-ubuntu.png'

export default function Section1(props) {
  const styles = {
    button: {
      marginBottom: '0.5em'
    },
    icons: {
      marginBottom: '3em',
    },
    icon: {
      height: 60,
      margin: 10,
    },
  }
  return (
    <section id="get-synergy" className="white-bg">
      <div className="container">
        <h1>{"Be more seamless"}</h1>
        <p>{"Synergy combines your desktop devices together in to one cohesive experience. It's software for sharing your mouse"}<br className="hidden-sm hidden-xs"/>{" and keyboard between multiple computers on your desk. It works on Windows, Mac OS X and Linux."}</p>
        <p>{"We recently changed our domain name from "}<b>{"synergy-project.org"}</b>{" to "}<b>{"symless.com"}</b>{" ("}<em><b>{"Symless"}</b>{" is the company behind "}<b>{"Synergy"}</b></em>{")"}</p>
        <p><a style={styles.button} href="//symless.com/synergy/" className="purchase-button top grey button">{"Get Synergy"}</a></p>
        <div style={styles.icons}>
          <img style={styles.icon} src={windowsImage} alt="Windows"/>
          <img style={styles.icon} src="//developer.apple.com/assets/elements/icons/mac-os/mac-os.svg" alt="Mac OS X"/>
          <img style={styles.icon} src={debianUbuntuImage} alt="Debian Ubuntu"/>
        </div>
      </div>
    </section>
  )
}
