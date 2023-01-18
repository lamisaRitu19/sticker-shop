import React, { useEffect, useState } from 'react';
import CartItem from '../CartItem/CartItem';
import Sticker from '../Sticker/Sticker';
import './Shop.css';

const Shop = () => {
    const [stickers, setStickers] = useState([]);
    const [cartItems, setCartItems] = useState([]);
    // console.log(cartItems);

    useEffect(() => {
        fetch('stickers.json')
            .then(res => res.json())
            .then(data => setStickers(data));
    }, []);

    const handleAddToCart = selectedSticker => {
        let cart = [];

        const addedSticker = stickers.find(sticker =>
            sticker.id === selectedSticker.id);
        if ((addedSticker) && (cartItems.length < 4)) {
            cart = [...cartItems, addedSticker];
            setCartItems(cart);
        }
        else {
            const warningMessage = document.getElementById('warning');
            warningMessage.style.display = 'block';
        }
    }

    const handleRemoveFromCart = deletedSticker => {
        // const abc = deletedSticker.name;
        // const removedSticker = document.getElementsByTagName('Sticker');
        // const remainingStickers = cartItems.filter(cartItem =>
        // cartItem.id !== deletedSticker.id);
        // setCartItems(remainingStickers);

        // console.log(removedSticker);
    }

    return (
        <div className='shop-container'>
            <div className='sticker-container'>
                {
                    stickers.map(sticker => <Sticker
                        key={sticker.id}
                        sticker={sticker}
                        handleAddToCart={handleAddToCart}>
                    </Sticker>)
                }
            </div>
            <div className='cart-container'>
                <h4>Selected Stickers</h4>
                <p id='warning'>Only four stickers can be added!</p>
                <div className="cartItem-container">
                    {
                        cartItems.map(cartItem => <CartItem
                            key={cartItem.id}
                            id={cartItem.name}
                            cartItem={cartItem}
                            handleRemoveFromCart={handleRemoveFromCart}>
                        </CartItem>)
                    }
                </div>

                {/* <div className="final-sticker"></div> */}
                <button>Choose one for me</button>
                <button>Choose again</button>
            </div>
        </div>
    );
};

export default Shop;