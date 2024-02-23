import React from 'react'

function Alert(props) {
  return (
    <>
      <div style={{height:'50px'}}>
      <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
         <strong>{props.alert.type}</strong> <strong>{props.alert.msg}</strong>
         </div> 
       </div>
    </>
  )
}

export default Alert
