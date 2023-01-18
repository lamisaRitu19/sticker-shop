import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import './Sticker.css';

const Sticker = (props) => {
    const { name, price, image } = props.sticker;
    return (
        <div className='sticker'>
            <img src={image} alt="" />
            <h4>{name}</h4>
            <p>Price: {price}</p>
            <button
                onClick={() => { props.handleAddToCart(props.sticker) }}>
                Purchase <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
            </button>
        </div>
    );
};

export default Sticker;