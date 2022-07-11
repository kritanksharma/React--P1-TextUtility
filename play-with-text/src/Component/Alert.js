import React from 'react'

export default function Alert(props) {

  return (
       <div style={{height:'50px'}}>
       {props.alertText && <div className={`alert alert-${props.alertText.type}`} role="alert">
       {props.alertText.msg}
       </div>}
       </div>
  )
}
