
import React from 'react'

import Header from '../Component/Header'
import Footer from '../Component/Footer'

function About() {
    return (
        <div>
            <Header />
            <div class="bg-light p-5 text-center">
                <h2>My First Bootstrap Page</h2>
                <p>Some Bootstrap buttons:</p>
                <button class="btn btn-primary">Primary</button>{' '}
                <button class="btn btn-success">Success</button>

                <h1>About us</h1>
            </div>
            <Footer />
        </div>
    )
}

export default About