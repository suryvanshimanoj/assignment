
import React from 'react'

import './style.css';

function Jsx_component() {
    const myElement = <h1>I love JSX!</h1>
    const myElement1 = <h1>I love JSX!{5+5} </h1>
    const myElement2 = <h1>I love JSX!{5 * 5} </h1>

    const multiElement=(
      <ul>
        <li>Raj</li>
        <li>Nagar</li>
        <li>Tops</li>
      </ul>
    );

    const multiElement1=(
      <ol>
        <li>Heet</li>
        <li>Modh</li>
        <li>Tops</li>
      </ol>
    );

    const multiElement2=(
      <dl>
        <dt>Manoj</dt>
        <dd>I Live in Gwalior</dd>
      </dl>
    );

    const internal={color:"yellow",backgroundColor:"red",textTranform:"uppercase"}
  return (
    <div>
        <h1>Jsx_component</h1>
        {"Raj Nagar/Tops_Tech"}
        <hr />

        {myElement}
        <hr />

        {myElement1}
        {myElement2}
        <hr />

        {multiElement}
        {multiElement1}
        {multiElement2}
        <hr />

        <h1>Style in jsx</h1>

        <h1 style={{color:"red",backgroundColor:"aqua"}}>Inline_css in jsx</h1>
        
        <hr />

        <h1 style={internal}>internal_css in jsx</h1>
        <h2 style={internal}>internal_css in jsx</h2>
        <hr />
        <h1 className='myhead'>External_css in jsx</h1>
        <h1 className='myhead'>External_css in jsx</h1>


    </div>
  )
}

export default Jsx_component