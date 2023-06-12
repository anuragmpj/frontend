import React from "react";
import { Container, Row, Button } from 'reactstrap'
import { NavLink, Link } from 'react-router-dom'
import Logo from '../../assets/images/Logo.png'
import './header.scss'


const nav__links = [
    {
        path: '/home',
        display: 'Home'
    },
    {
        path: '#',
        display: 'About'
    },
    {
        path: '/tours',
        display: 'Tours'
    },
]

const Header = () => {
    return <header className="header">
                    {/*  ===================== logo  ================*/}
                    <div className="logo">
                        <img src={Logo} alt="" />
                    </div>

                    {/*  ===================== logo end================*/}


                    {/*  ===================== menu start================*/}
                    <div className="menu">
                        {
                            nav__links.map((item, index) => (
                                <div className="nav__item" key={index}>
                                    <NavLink to={item.path} className={navClass => navClass.isActive ? "active__link" : ""}>{item.display}</NavLink>
                                </div>
                            ))
                        }
                    </div>
                    {/*  ===================== menu end================*/}


                        <div className="nav__btns">
                            <Button className="btn secondary__btn"><Link to='/login' >Login</Link></Button>
                            <Button className="btn primary__btn"><Link to='/register' >Register</Link></Button>
                        </div>
    </header>

};
export default Header;