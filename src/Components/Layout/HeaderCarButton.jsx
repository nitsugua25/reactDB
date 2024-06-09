import React, { useState, useEffect } from 'react';
import Cart from '../Cart/cart';

const HeaderCarButton = () => {
    const [showCart, setShowCart] = useState(false);
    const [numberProduct, setNumberProduct] = useState(0);

    // Fonction pour obtenir le nombre de produits
    const getNumberProducts = () => {
        return(getNumberProduct());
    };

    // Mettre à jour le nombre de produits lorsque la dépendance change
    useEffect(() => {
        const intervalId = setInterval(() => {
            const updatedNumberProduct = getNumberProducts();
            setNumberProduct(updatedNumberProduct);
        }); // Mettez à jour toutes les secondes ou ajustez selon vos besoins
        return () => clearInterval(intervalId); // Nettoyer l'intervalle lors du démontage du composant
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
                        src="https://res.cloudinary.com/dkznnkb4t/image/upload/v1713962327/icons8-panier-100_gpsxsb.png"
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
