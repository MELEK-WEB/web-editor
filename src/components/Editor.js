import React, { useState } from 'react'
import 'codemirror/lib/codemirror.css'

import 'codemirror/theme/material.css'
import 'codemirror/mode/xml/xml'
import 'codemirror/mode/javascript/javascript'
import 'codemirror/mode/css/css'
import { Controlled as ControlledEditor } from 'react-codemirror2'


export default function Editor(props) {
  const {
    language,
    displayName,
    value,
    onChange
  } = props
  const [open, setOpen] = useState(true)

  function handleChange(editor, data, value) {
    onChange(value)
    var frame = {
      fileName:language,
      value:value,
      time:props.time
    }
    var newVideo=props.video;
    newVideo.push(frame);
    props.setVideo(newVideo);
    console.log(newVideo);
  }

  return (
    <div 
    className={`editor-container ${open ? '' : 'collapsed'}`}
    >
      
      <ControlledEditor
        onBeforeChange={handleChange}
        value={value}
        className="code-mirror-wrapper"
        options={{
          lineWrapping: true,
          lint: true,
          mode: language,
          theme: 'material',
          lineNumbers: true
        }}
      />
    </div>
  )
}
