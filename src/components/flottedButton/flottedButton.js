import React from 'react'
import Fab from '@mui/material/Fab';
import { Button } from '@mui/material';

export const FlottedButton = (props) => {
  return (
    <Button style={{position:'fixed',bottom:15,right:15,color:props.color,backgroundColor:'#ffdddd'}}onClick={props.onClick}>
    {/* <FiberManualRecordIcon sx={{ mr: 1 }} /> */}
    {props.icon}
    {props.title}

  </Button>
  )
}
