/* eslint-disable react-hooks/exhaustive-deps */
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './views/LandingPage/LandingPage';
import Home from './views/Home/Home';
import NavBar from "./components/NavBar/NavBar";
import ContactUs from "./views/ContactUs";
import ProductDetail from "./views/ProductDetail/ProductDetail";
import CreateProduct from "./views/CreateProduct";
import UserProfile from "./views/UserProfile";
import NotFound from "./views/NotFound";
import Footer from "./components/Footer/Footer";
import AboutUs from "./views/AboutUs/AboutUs";
import ProductEdit from "./views/ProductEdit/ProductEdit";
import Favorites from "./components/Favorites/Favorites";
import CookieCard from './components/CookieCard';
import AlertMessage from "./components/Alerts/AlertMessage";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import StripeComponent from './components/StripeComponent/StripeComponent';
import ShoopingCart from "./components/ShoppingCart";
import { useAuth0 } from '@auth0/auth0-react';
import { Alert, AlertTitle, Snackbar } from "@mui/material";
import { getUserByEmail, registerUser } from './redux/actions';

function App() {

    const alertInfo = useSelector(store => store.alertInfo)
    const { user } = useAuth0()
    const dispatch = useDispatch()

    useEffect(() => {
        if (user) {
            registerUser(user)
            dispatch(getUserByEmail(user.email))
        }
    }, [user])
    //-------------------------------
    //-------------------------------
    // alert para los fav y cart
    const [added, setAdded] = useState(false);
    const [notAdded, setNotAdded] = useState(false);

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setAdded(false);
        setNotAdded(false)
    };
    const handleAdded = () => {
        setAdded(true)
    }
    const handleNotAdded = () => {
        setNotAdded(true)
    }
    //-------------------------------
    //-------------------------------

    return (<>
        <Router>
            <NavBar />
            <CookieCard />
            <AlertMessage {...alertInfo} />
            <Routes>
                <Route exact path="/" element={<LandingPage />} />
                <Route path="/home" element={<Home handleAdded={handleAdded} handleNotAdded={handleNotAdded} />} />
                <Route exact path='/contact' element={<ContactUs />} />
                <Route path='/detail/:id' element={<ProductDetail handleAdded={handleAdded} handleNotAdded={handleNotAdded} />} />
                <Route path='/edit/:id' element={<ProductEdit />} />
                <Route exact path='/create' element={<CreateProduct />} />
                <Route exact path='/profile/*' element={<UserProfile />} />
                <Route exact path='/about' element={<AboutUs />} />
                <Route exact path='/favorites' element={<Favorites />} />
                <Route exact path='/cart' element={<ShoopingCart />} />
                <Route path='/stripe' element={<StripeComponent />} />
                <Route path='*' element={<NotFound />} />
            </Routes>
            <Snackbar open={added} autoHideDuration={1000} onClose={handleClose}>
                <Alert onClose={() => handleClose()} severity="success" sx={{ width: '100%' }}>
                    <AlertTitle>Success</AlertTitle>
                    <strong>Added correctly</strong>
                </Alert>
            </Snackbar>
            <Snackbar open={notAdded} autoHideDuration={1000} onClose={handleClose}>
                <Alert onClose={() => handleClose()} severity="warning" sx={{ width: '100%' }}>
                    <AlertTitle>Fail</AlertTitle>
                    <strong>List maximum size exceeded</strong>
                </Alert>
            </Snackbar>
            <Footer />
        </Router>
    </>
    );
}

export default App;
