import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
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

        const existingSticker = cartItems.find(cartItem => cartItem.id === selectedSticker.id);

        if ((!existingSticker) && (cartItems.length < 4)) {
            cart = [...cartItems, addedSticker];
            setCartItems(cart);
        }
        else if (existingSticker) {
            const existingStickerMessage = document.getElementById('existingSticker');
            existingStickerMessage.style.display = 'block';
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

    const handleClearCart = () => {
        const clearCart = [];
        setCartItems(clearCart);
    }

    const handleCross = () => {
        const warningMessage = document.getElementById('warning');
        warningMessage.style.display = 'none';

        const existingStickerMessage = document.getElementById('existingSticker');
        existingStickerMessage.style.display = 'none';

        const chosenStickerMessage = document.getElementById('chosenSticker');
        chosenStickerMessage.style.display = 'none';

        const lessStickersMessage = document.getElementById('lessStickers');
        lessStickersMessage.style.display = 'none';
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
                <p id='chosenSticker'>
                    <FontAwesomeIcon icon={faXmark} onClick={handleCross} className='ml-10' />
                </p>
                <p id='warning'>
                    Only four stickers can be added!
                    <FontAwesomeIcon icon={faXmark} onClick={handleCross} className='ml-10' />
                </p>
                <p id='lessStickers'>
                    Choose four stickers first!
                    <FontAwesomeIcon icon={faXmark} onClick={handleCross} className='ml-10' />
                </p>
                <p id='existingSticker'>
                    The sticker is already present in the cart!
                    <FontAwesomeIcon icon={faXmark} onClick={handleCross} className='ml-10' />
                </p>
                <div className="cartItem-container">
                    {
                        cartItems.map(cartItem => <CartItem
                            key={cartItem.id}
                            cartItem={cartItem}>
                        </CartItem>)
                    }
                </div>
                <button onClick={handleChooseOne}>Choose one for me</button>
                <button onClick={handleClearCart}>Choose again</button>
            </div>
        </div>
    );
};

export default Shop;