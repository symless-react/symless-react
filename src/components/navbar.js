import React from 'react'

import Nav from 'react-bootstrap/lib/Nav'
import Navbar from 'react-bootstrap/lib/Navbar'
import NavItem from 'react-bootstrap/lib/NavItem'
import { LinkContainer } from 'react-router-bootstrap'
import { Link } from 'react-router'

export default function Navibar(props) {
  return (
    <Navbar>
      <Navbar.Header>
        <Navbar.Brand>
          <div
            className="navbar-brand"
            href="/"
            >
            <Link to="/"><img
              height={props.height}
              src={props.logo}
              alt={props.alt}
              /></Link>
          </div>
        </Navbar.Brand>
        <Navbar.Toggle />
      </Navbar.Header>
      <Navbar.Collapse id="navbar">
        <Nav pullRight>
          {props.menu.map((menuItem, key) =>
            <LinkContainer key={key} to={`/${menuItem}`}>
              <NavItem eventKey={key}>{menuItem}</NavItem>
            </LinkContainer>)
          }
          {props.accountMenu.map((menuItem, key) =>
            <LinkContainer key={key} to={`/account/${menuItem}`}>
              <NavItem eventKey={key}>
                <span className="nav-button">{menuItem}</span>
              </NavItem>
            </LinkContainer>)
          }
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}
