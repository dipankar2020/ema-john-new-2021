import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const cart = props.cart;
    // console.log(cart) 
    // Reduce Method for Add Price total 
    // const total = cart.reduce((total, prd) => total + prd.price, 0)
    // By For LooP 
    let total = 0;
    for(let i = 0; i< cart.length; i++) {
        const product = cart[i];
        total = total + product.price;
    }
    
    let shipping = 0;
    if(total > 35){
        shipping = 0.00;
    } else if (total > 15){
        shipping = 4.99; 
    } else if (total > 0){
        shipping = 12.00;
    }
    const tax = (total / 10).toFixed(2);
    const grandTotal = (total + shipping + Number(tax)).toFixed(2);

    const formatNumber = num => {
        const precision = num.toFixed(2);
        return Number(precision)
    }

    return (
        <div>
            <h2>Order Summary</h2>
            <h3>Order Items: {cart.length}</h3>
            <p>Product Price:{formatNumber(total)}</p>
            <p><small>Shipping: {shipping}</small></p>
            <p><small>Tax VAT: {tax}</small></p>
            <p>Total Price: {grandTotal}</p>
        </div>
    );
};

export default Cart;