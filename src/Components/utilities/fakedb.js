const addToDb = id => {
    let stickerCart = {}

    const storedCart = localStorage.getItem('sticker-cart');
    if (storedCart) {
        stickerCart = JSON.parse(storedCart);
    }

    const quantity = stickerCart[id];
    if (quantity) {
        const newQuantity = quantity + 1;
        stickerCart[id] = newQuantity;
    }
    else {
        stickerCart[id] = 1;
    }

    localStorage.setItem('sticker-cart', JSON.stringify(stickerCart));
}

const getStoredCart = () => {
    let stickerCart = {}

    const storedCart = localStorage.getItem('sticker-cart');
    if (storedCart) {
        stickerCart = JSON.parse(storedCart);
    }

    return stickerCart;
}

const removeFromDb = id => {
    let stickerCart = {}

    const storedCart = localStorage.getItem('sticker-cart');
    if (storedCart) {
        stickerCart = JSON.parse(storedCart);
    }

    if (id in stickerCart) {
        delete stickerCart[id];
        localStorage.setItem('sticker-cart', JSON.stringify(stickerCart));
    }
}

const deleteStickerCart = () => {
    localStorage.removeItem('sticker-cart');
}

export {
    addToDb,
    getStoredCart,
    removeFromDb,
    deleteStickerCart
}