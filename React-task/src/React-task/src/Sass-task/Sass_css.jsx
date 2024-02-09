
import React from 'react'

import './mysass1.scss'

function Sass_css() {
  return (
    <div>
        <h1 className='myheader'>Hi i am sass css</h1>
        <hr />
        <h1>Nested-Css</h1>
        <nav>
            <ul>
                <li><a href="">Home</a></li>
                <li><a href="">About</a></li>
                <li><a href="">Contact</a></li>
                <li><a href="">Service</a></li>
            </ul>
        </nav>
        <hr />

        <h1 className='mytext'>Hi i am text nested</h1>
        <hr />

        <button className='btn-basic'>Basic Button</button>{' '}
        <button className='btn-red'>Red Button</button>{' '}
        <button className='btn-green'>Green Button</button>{' '}
        <button className='btn-blue'>Blue Button</button>{' '}
        <button className='btn-pink'>Pink Button</button>{' '}
        <button className='btn-orange'>Orange Button</button>{' '}
        <button className='btn-yellow'>yellow Button</button>{' '}
        <button className='btn-maroon'>maroon Button</button>{' '}
        <button className='btn-magenta'>magenta Button</button>{' '}
        <button className='btn-cadetblue'>cadetblue Button</button>


    </div>
  )
}

export default Sass_css