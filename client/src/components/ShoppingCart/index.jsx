import React, { useState } from "react";
import { getPrice } from '../Card/favAndCart'
import ShopCard from "./ShopCard";
import './Card.css'

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
            <h2>Your Shopping Cart, total import: {totalPrice}</h2>
            <div className="containerCardsSC">
                {cartItemMap}
            </div>
        </div>
    );
}
