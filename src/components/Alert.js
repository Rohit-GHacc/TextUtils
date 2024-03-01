import React from 'react'

export default function Alert(props) {
  const myStyle={
    height: '20px'
  }
  return (
        <div style={myStyle}>
        {props.alert && <div class={`alert alert-dismissible fade show alert-${props.alert.type} `} role="alert">
        <strong>{props.alert.type}!</strong> {props.alert.msg}
        </div>}
        </div>

  )
}
