import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import './CartItem.css';

const CartItem = ({ cartItem, handleRemoveFromCart }) => {
    const { name, image } = cartItem;

    return (
        <div className='cartItem'>
            <img src={image} alt="" />
            <p>{name}</p>
            <FontAwesomeIcon
                icon={faTrash}
                className='icon'
                onClick={() => { handleRemoveFromCart(cartItem) }}></FontAwesomeIcon>
        </div>
    );
};

export default CartItem;