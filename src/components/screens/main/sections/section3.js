import React from 'react'

import seamlessImage from '../../../../assets/img/seamless.png'
import compatibleImage from '../../../../assets/img/compatible.png'
import synchronizeImage from '../../../../assets/img/synchronize.png'
import convinientImage from '../../../../assets/img/convinient.png'
import secureImage from '../../../../assets/img/secure.png'
import softwareImage from '../../../../assets/img/software.png'

const Rows = props =>
  <div className="container">
    <div className="row">
      {props.children}
    </div>
  </div>

const Row = props =>
  <div className="col-md-4 col-sm-6">
    <img src={props.img} alt="" />
    <h2>{props.title}</h2>
    <p>{props.descriptionL1}<br className="hidden-sm hidden-xs"/>{props.descriptionL2}</p>
  </div>

export default function Section(props) {
  return (
    <section id="benefits" className="white-bg">
      <Rows>
        <Row
          img={seamlessImage}
          title="Seamless"
          descriptionL1="Move your mouse to any"
          descriptionL2="computer and start typing."
          />
        <Row
          img={compatibleImage}
          title="Compatible"
          descriptionL1="Works on all major operating systems"
          descriptionL2="(Windows, Mac OS X, and Linux)."
          />
        <Row
          img={synchronizeImage}
          title="Synchronize"
          descriptionL1="Share your clipboard (copy and paste)"
          descriptionL2="between your computers."
          />
        <Row
          img={convinientImage}
          title="Convenient"
          descriptionL1="Drag and drop files from one computer"
          descriptionL2="to another (Windows and Mac OS X)."
          />
        <Row
          img={secureImage}
          title="Secure"
          descriptionL1="Encryption keeps sensitive data safe over networks."
          descriptionL2="(Only available with pro upgrade)"
          />
        <Row
          img={softwareImage}
          title="Software"
          descriptionL1="Network-based (IP) software KVM switch (non-video)."
          />
      </Rows>
      <a href="/pricing" className="grey button">Explore levels</a>
    </section>
  )
}
