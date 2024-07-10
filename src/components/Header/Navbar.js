import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
    return (
        <header>
            <nav className="navbar navbar-expand-lg bg-primary navbar-dark">
                <div className="container">
                    <Link to="/" className="navbar-brand">Basic React</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item"><Link to="/" className="nav-link">Home</Link></li>
                            <li className="nav-item"><Link to="/about" className="nav-link">About</Link></li>
                            <li className="nav-item"><Link to="/contact" className="nav-link">Contact</Link></li>
                            <li className="nav-item"><Link to="/users" className="nav-link">Users</Link></li>
                            <li className="nav-item dropdown">
                                <button className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Auth</button>
                                <ul className="dropdown-menu">
                                    <li><Link to="/auth/login" className="dropdown-item">Login</Link></li>
                                    <li><Link to="/auth/register" className="dropdown-item">Register</Link></li>
                                    <li><Link to="/auth/forgot-password" className="dropdown-item">Forgot Password</Link></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    )
}
