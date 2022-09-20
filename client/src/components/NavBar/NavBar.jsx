// React utilities
import React from "react";
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import SearchBar from "../SearchBar/SearchBar";
import LogInBtn from "../LogInBtn";
import LogOutBtn from "../LogOutBtn";
import LightDarktn from "../LightDarkBtn";
import { BsCartFill, BsStarFill } from 'react-icons/bs';
import { GiGuitarBassHead } from 'react-icons/gi';
// Files and extra code
import goode_logo from '../../components/img/assets/ChuckBerry.png'
// Auth0
import { useAuth0 } from '@auth0/auth0-react';
// Style
import 'bootstrap/dist/css/bootstrap.css';
import './NavBar.css';
import { NavDropdown } from "react-bootstrap";
import { useSelector } from "react-redux";

export default function NavBar() {

    const { user, isAuthenticated, isLoading } = useAuth0()
    const userDetail = useSelector(state => state.usersEmail)

    return (
        <nav className="navbar mb-2 p-2 bg-dark sticky-top rounded">
            <div className="containerNavBar container-fluid justify-content-around ">
                <div className="d-flex align-items-center">
                    <div className="d-flex me-5">
                        <img className="navbarLogo" src={goode_logo} alt="Logo B. Goode" width="40" height='40' />
                        <Link className="navbar-brand" to="/">
                            B. Goode
                        </Link>
                    </div>
                </div>

                <div className="navbar-nav hstack gap-3">
                    <Link to='/home' className="nav-link"  ><GiGuitarBassHead className='CardIcon' /></Link>
                    <Link to='/favorites' className="nav-link"><BsStarFill className='CardIcon' /></Link>
                    <Link to='/cart' className="nav-link"><BsCartFill className='CardIcon' /></Link>
                    <Link to='/create' className="nav-link sellStyle" ><strong>Sell</strong></Link>
                </div>

                <SearchBar />

                {isAuthenticated ?
                    <>
                        <img className="ProfileImg" src={user.picture} alt="user" referrerPolicy="no-referrer" />
                        <NavDropdown title={user.nickname} id="navbarScrollingDropdown">
                            <NavDropdown.Item href='/profile/data' className="dropDown" >Personal Data</NavDropdown.Item>
                            <NavDropdown.Item href="/profile/sold" className="dropDown" >Sales History</NavDropdown.Item>
                            <NavDropdown.Item href='/profile/shop-history' className="dropDown" >Shopping history</NavDropdown.Item>
                            <NavDropdown.Item href='/profile/my-products' className="dropDown" >My Products</NavDropdown.Item>
                            {userDetail.isAdmin && <NavDropdown.Item href='/profile/admin' className="dropDown" >Admin panel</NavDropdown.Item>}
                        </NavDropdown>
                        <LogOutBtn />
                    </>
                    : (!isLoading && <LogInBtn />)}
                <LightDarktn />
            </div>
        </nav>
    );
}