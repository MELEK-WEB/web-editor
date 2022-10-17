import React from 'react'
import ButtonAppBar from '../component/navbar/Navbar'
import Editor from '../component/Pens/Editor'
import BasicTabs from '../component/tabs/tabs'

export const Recording = () => {
  return (
    <React.Fragment>
      {/* <Editor/> */}
        <ButtonAppBar/>
        <BasicTabs>
        </BasicTabs>
    </React.Fragment>
  )
}
