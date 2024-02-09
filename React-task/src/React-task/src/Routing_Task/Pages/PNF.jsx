
import React from 'react'
import { Link } from 'react-router-dom'

function PNF() {
  return (
    <div className="container mt-5">
        <div className="row">
            <div className="col-sm-12">
                <h2>Page Not Found</h2>
                <div className="container mt-3">
                    <h2>420</h2>
                    <Link to="/" className='btn btn-success'>Back</Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default PNF