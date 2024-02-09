
import React from 'react'
// MODULE CSS IMPORT
import S1 from './mystyle1.module.css'
import S2 from './mystyle2.module.css'
function Module_css() {
  return (
    <div>
        <h1 className={S1.bigred}>Hi i am Module_css from mystyle1</h1>
        <h1 className={S2.bigred}>Hi i am Module_css from mystyle2</h1>
    </div>
  )
}

export default Module_css