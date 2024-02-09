
import React from 'react'

// normal css import
import './style1.css'
import './style2.css'

function Css() {

    const Mystyle={color:"bule",backgroundColor:"aqua",textTransform:"uppercase"}
  return (
    <div>
        <h1 style={{color:'green',backgroundColor:"yellow"}}>inline_css</h1>
        <hr />

        <h1 style={Mystyle}>internal_css</h1>
        <hr />

        <h1 className='bigred'>External_css</h1>
    </div>
  )
}

export default Css