// React utilities
import React, { useState } from "react";
// Actions
import { getPrice } from '../Card/favAndCart'
// Components
import ShopCard from "./ShopCard";
// Styles
import Button from '@mui/material/Button';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import './Card.css'
import axios from 'axios';
import { loadStripe } from '@stripe/stripe-js';
import {
    Elements,
    CardElement,
    useStripe,
    useElements
} from '@stripe/react-stripe-js';

const stripePromise = loadStripe('pk_test_51LZlZLAfFn4zXQabU5GwZV9N2mF4rWwZiphhNImIDe3ClFcAcspjPLm2unNFM81E9ljcZfjf2BBhb6L2UW3Vin6G00c54G75HA');

export default function ShoppingCart() {

    const [cartItem, setCartItem] = useState(JSON.parse(localStorage.getItem('cartList')))
    const [totalPrice, setTotalPrice] = useState(getPrice());

    const deleteItem = (id) => {
        let arr = cartItem.filter(instrument => instrument.id !== id)
        localStorage.setItem('cartList', JSON.stringify(arr))
        setCartItem(arr)
        setTotalPrice(getPrice())
    }

    const updateQuantity = () => {
        setTotalPrice(getPrice())
    }

    if (!cartItem) { return (<h4>The CartItem list is empty.</h4>) }
    
    let cartItemMap = cartItem.map((instrument) => <ShopCard
        key={instrument.id}
        id={instrument.id}
        name={instrument.name}
        price={instrument.price}
        brand={instrument.brand}
        rating={instrument.rating}
        color={instrument.color}
        deleteItem={deleteItem}
        updateQuantity={updateQuantity}
        quantity={instrument.quantity}
        image={instrument.image}
    />)

    return (
        <div className="shoppingCart">
            <h2>Your Shopping Cart</h2>
            <div className="containerCardsSC">
                {cartItemMap}
            </div>
        </div>
    );
}
