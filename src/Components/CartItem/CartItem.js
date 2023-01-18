import React from 'react';
import './CartItem.css';

const CartItem = (props) => {
    const { name, image } = props.cartItem;

    return (
        <div className='cartItem'>
            <img src={image} alt="" />
            <p>{name}</p>
            <button
                onClick={() => { props.handleRemoveFromCart(props.cartItem) }}
            >del</button>
        </div>
    );
};

export default CartItem;