import React from 'react'

import { Link } from 'react-router'

/* TODO:
  Link to /nick-bolton
  Link to /forum
*/
export default function Section(props) {
  return (
    <section id="contact-form" className="white-bg">
      <div className="container">
        <h1>{"Get in touch with us"}</h1>
        <p>{"Need help? Please "}<Link to="/contact">{"contact the team"}</Link>{". For self-support check out our "}<a href="/nick-bolton">{"help page"}</a>{". Just so you know, our Customer Service team may take up to 48 hours to respond. If you have a technical query, you may find it faster to check the "}<Link to="/help">{"Synergy forums"}</Link>{", or contact the CEO, "}<a href="/forum">{"Nick Bolton"}</a>{"."}</p>

        <Link to="/contact" className="grey button" style={{ marginTop: '1.5em' }}>{"Contact the team"}</Link>

      </div>
    </section>
  )
}
