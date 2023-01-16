import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Sticker from '../Sticker/Sticker';
import { addToDb, getStoredCart } from '../utilities/fakedb';
import './Shop.css';

const Shop = () => {
    const [stickers, setStickers] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        fetch('stickers.json')
            .then(res => res.json())
            .then(data => setStickers(data));
    }, []);

    useEffect(() => {
        const storedCart = getStoredCart();
        const savedCart = [];

        for (const id in storedCart) {
            const addedSticker = stickers.find(sticker => sticker.id === id);
            if (addedSticker) {
                const quantity = storedCart[id];
                addedSticker.quantity = quantity;
                savedCart.push(addedSticker);
            }
        }

        setCart(savedCart);
    }, [stickers]);

    const handleAddToCart = selectedSticker => {
        let newCart = [];

        const exists = cart.find(sticker => sticker.id === selectedSticker.id);
        if (!exists) {
            selectedSticker.quantity = 1;
            newCart = [...cart, selectedSticker];
        }
        else {
            const rest = cart.filter(sticker => sticker.id !== selectedSticker.id);
            exists.quantity += 1;
            newCart = [...rest, exists];
        }

        setCart(newCart);
        addToDb(selectedSticker.id);
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
                <Cart></Cart>
            </div>
        </div>
    );
};

export default Shop;