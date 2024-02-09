import React from 'react'
import Header from '../Component/Header'
import Footer from '../Component/Footer'

function Contact() {
    return (
        <div>
            <Header />
            <div className="container mt-5">
                <div className="row">
                    <div className="col-sm-12">
                        <h1>Contact Us</h1>
                        <form action="/action_page.php">
                            <div className="mb-3 mt-3">
                                <label htmlFor="email" className="form-label">Email:</label>
                                <input type="email" className="form-control" id="email" placeholder="Enter email" name="email" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="pwd" className="form-label">Password:</label>
                                <input type="password" className="form-control" id="pwd" placeholder="Enter password" name="pswd" />
                            </div>
                            <div className="form-check mb-3">
                                <label className="form-check-label">
                                    <input className="form-check-input" type="checkbox" name="remember" /> Remember me
                                </label>
                            </div>
                            <button type="submit" className="btn btn-primary">Submit</button>
                        </form>

                    </div>
                </div>
            </div>
            <hr />

            {/* ========Comments========================= */}

            <div class="form-floating">
                <textarea class="form-control" id="comment" name="text" placeholder="Comment goes here"></textarea>
                <label for="comment">Comments</label>
            </div>

            <hr />
            <div class="form-floating">
                <select class="form-select" id="sel1" name="sellist">
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                </select>
                <label for="sel1" class="form-label">Select list (select one):</label>
            </div>
            <Footer />
        </div>
    )
}

export default Contact