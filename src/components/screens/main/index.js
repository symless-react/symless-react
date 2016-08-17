import React from 'react'

import Jumbotron from './sections/jumbotron'
import Section1 from './sections/section1'   /* Be more seamless */
import Section2 from './sections/section2'   /* Just move your mouse from one screen to another */
import Section3 from './sections/section3'   /* Features */
import Section4 from './sections/section4'   /* Feature video */
import Section5 from './sections/section5'   /* Get in touch with us */

export default function Main(props) {
  return (
    <div id="home">
      <Jumbotron/>
      <Section1/>
      <Section2/>
      <Section3/>
      <Section4/>
      <Section5/>
    </div>
  )
}
