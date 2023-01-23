import React, { useEffect, useState } from 'react';
import CartItem from '../CartItem/CartItem';
import Sticker from '../Sticker/Sticker';
import './Shop.css';

const Shop = () => {
    const [stickers, setStickers] = useState([]);
    const [cartItems, setCartItems] = useState([]);

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

    const handleChooseOne = () => {
        if (cartItems.length === 4) {
            const value = Math.floor(Math.random() * 4);
            const chosenName = cartItems[value].name;

            const chosenStickerMessage = document.getElementById('chosenSticker');
            chosenStickerMessage.innerText = `'` + chosenName + `' sticker is chosen!`;
            chosenStickerMessage.style.display = 'block';
        }
        else {
            const lessStickersMessage = document.getElementById('lessStickers');
            lessStickersMessage.style.display = 'block';
        }
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
                <p id='chosenSticker'></p>
                <p id='lessStickers'>Choose four stickers first!</p>
                <p id='warning'>Only four stickers can be added!</p>
                <div className="cartItem-container">
                    {
                        cartItems.map(cartItem => <CartItem
                            key={cartItem.id}
                            cartItem={cartItem}>
                        </CartItem>)
                    }
                </div>
                <button onClick={handleChooseOne}>Choose one for me</button>
                <button>Choose again</button>
            </div>
        </div>
    );
};

export default Shop;