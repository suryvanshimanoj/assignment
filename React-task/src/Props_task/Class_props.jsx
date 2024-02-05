import React, { Component } from 'react'

export class Class_props extends Component {

    constructor(props) {
        super(props);
        this.data = props
    }

    render() {
        return (
            <div className='col-md-3'>
                <div className="card" style={{ width: "100%" }}>
                    <img className="card-img-top" src={this.data.img} alt="Card image" />
                    <div className="card-body">
                        <h4 className="card-title">{this.data.title}</h4>
                        <p className="card-text">{this.data.desc}</p>
                        <a href="#" className="btn btn-primary">See Profile</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default Class_props