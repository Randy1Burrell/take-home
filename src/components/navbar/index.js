import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class NavBar extends Component {
    render () {
        const { links } = this.props
        return (
            <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
                <Link className="navbar-brand" to='/'>Home</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                    {
                        links.map((data) => {
                            return (
                                <li
                                    key={data.name}
                                    className="nav-item"
                                    style={{fontVariant: 'all-petite-caps'}}
                                >
                                    <Link className="nav-link" to={data.path}>
                                        {data.name}
                                    </Link>
                                </li>
                            )
                        })
                    }
                    </ul>
                </div>
            </nav>
        )
    }
}

export default NavBar
