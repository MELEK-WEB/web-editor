import React from 'react'

export const CircleButton = (props) => {
  return (
    <React.Fragment>
        <div style={{borderRadius:"50%",borderColor:props.borderColor,backgroundColor:props.color,height:12,width:12,display:'flex'}}></div>
    </React.Fragment>
  )
}
