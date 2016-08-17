import React from 'react'

export default function ContentWrapper(props) {
  return (
    <div className="layout">
      <div className="content">
        {props.children}
      </div>
    </div>
  )
}
