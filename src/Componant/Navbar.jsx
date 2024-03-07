import React from 'react'
import { Link } from "react-scroll"
import "./Navbar.css";
const Navbar = () => {
    return (
        <>
            <header className='main-header'>
                <div className="navbar-container">
                    <div className='Br-Architer'>
                        <Link to="home"
                            smooth={true}
                            duration={500}><span>BR</span> Architects</Link>
                    </div>
                    <div className="ul-classes">
                        <ul>
                            <li className="li-items">
                                <Link to="projects"
                                    smooth={true}
                                    duration={500}>Projects</Link>
                            </li>
                            <li className="li-items">
                                <Link to="about" smooth={true}
                                    duration={500}>About</Link></li>
                            <li className="li-items">
                                <Link to="contact" smooth={true}
                                    duration={500}>Contact</Link>
                            </li>
                        </ul>
                    </div>
                </div>


            </header>

        </>

    )
}

export default Navbar
