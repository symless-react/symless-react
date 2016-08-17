import React from 'react'

import devicesImage from '../../../../assets/img/devices.png'

export default function Section(props) {
  return (
    <section className="blue-bg">
      <div className="container">
        <h1>{"Just move your mouse from one screen to another"}</h1>
        <img className="img-responsive" src={devicesImage} alt="Mac OSx Windows Linux" />
      </div>
    </section>
  )
}
