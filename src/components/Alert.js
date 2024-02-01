import React from 'react'

function Alert(props) {
  return (
    <>
      <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
         <strong>{props.alert.type}</strong> <strong>{props.alert.msg}</strong> 
       </div>
    </>
  )
}

export default Alert
