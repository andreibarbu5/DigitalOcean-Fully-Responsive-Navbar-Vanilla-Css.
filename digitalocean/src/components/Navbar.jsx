import React, {useState} from 'react'
import logo from '../images/logo.svg'
import hamburger from '../images/hamburger.svg'
import close from '../images/close.svg'
import "./Navbar.css"



import arrow from "../images/arrow.svg"



const Navbar = () => {

    const [show, setShow] = useState(false)

    return (
        <div>
            <div>
                <div className="announcement">
                    <h5>Introducing DigitalOcean Functions: A powerful, serverless compute solution →</h5>
                    <div className='ann-links'>
                        <ul>
                            <li><a href="#">We're Hiring</a></li>
                            <li><a href="#">Blog</a></li>
                            <li><a href="#">Docs</a></li>
                            <li><a href="#">Get Support</a></li>
                            <li><a href="#">Sales</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="navbar">
                <div className="navbar-container">
                    <div className="logo">
                        <img src={logo} />
                    </div>

                    <div className='nav-links'>
                        <div className={show ? "show" : "hide"}>
                            <ul>
                                <div className="arrow products">
                                <li><a href="#">Products <img src={arrow} /></a></li>
                                </div>
                                <div className="arrow">
                                <li><a href="#">Solutions <img src={arrow} /></a></li>
                                </div>
                                <div className="arrow">
                                <li><a href="#">Marketplace <img src={arrow} /></a></li>
                                </div>
                                <div className="arrow">
                                <li><a href="#">Community  <img src={arrow} /></a></li>
                                </div>
                                <div className="arrow">
                                <li><a className="pricing" href="#">Pricing  <img src={arrow} /></a></li>
                                </div>
                            </ul>
                        </div>
                    </div>

                    <div className={show ? "show1" : "hide1"}>
                        <div className="join">
                            
                            <div className='signup'><a>Sign Up</a></div>
                            <div className='login'><a>Log In</a></div>
                            <div className='login hiring'><a>We're Hiring</a></div>
                            <div className='login'><a>Blog</a></div>
                            <div className='login'><a>Docs</a></div>
                            <div className='login'><a>Get Support</a></div>
                            <div className='login'><a>Sales</a></div>
                            
                        </div>
                    </div>

                    <div className="joinbtnmed">
                        <div className="login2">
                            <a href="#">Log In</a>
                        </div>
                        <div className="signup2">
                            <a href="#">Sign Up</a>
                        </div>
                    </div>

                    <div className="burger">
                        <button onClick={() => setShow(!show)}><img src={show ? close : hamburger } /></button>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar