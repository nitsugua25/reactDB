import React, { useState, useEffect } from 'react';
import Cart from '../Cart/cart';

const HeaderCarButton = () => {
    const [showCart, setShowCart] = useState(false);
    const [numberProduct, setNumberProduct] = useState(0);

    
    const getNumberProducts = () => {
        return(getNumberProduct());
    };

    
    useEffect(() => {
        const intervalId = setInterval(() => {
            const updatedNumberProduct = getNumberProducts();
            setNumberProduct(updatedNumberProduct);
        }); 
        return () => clearInterval(intervalId); 
    }, []);

    const handleClick = () => {
        setShowCart(true);
    };

    const handleClose = () => {
        setShowCart(false);
    };

    return (
        <>
            <div onClick={handleClick}>
                <button 
                    type="button"
                    className="btn btn-outline-secondary"
                    style={{ padding: '5px 5px 0 5px',display:'flex', alignItems:'center' }}
                >
                    <img
                        src="https://img.icons8.com/?size=100&id=8chNl15hy6jY&format=png&color=000000"
                        alt="panier"
                        style={{ width: '41px' }}
                    />
                    {numberProduct > 0 && <h3>{numberProduct}</h3>}
                </button>
            </div>
            <Cart show={showCart} handleClose={handleClose} />
        </>
    );
}

export default HeaderCarButton;
