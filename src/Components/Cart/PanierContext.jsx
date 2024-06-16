const saveBasket = (basket) => {
    localStorage.setItem("basket", JSON.stringify(basket));
}



const deleteBasket = () => {
    localStorage.removeItem("basket");
}



const getBasket = () => {
    let basket = localStorage.getItem("basket");
    if (basket === null) {
        return [];
    } else {
        return JSON.parse(basket);
    }
}



const addBasket = (product) => {
    let basket = getBasket();
    let foundProduct = basket.find(p => p.id == product.id);
    if (foundProduct != undefined) {
        foundProduct.quantity += product.quantity;
    } else {
        basket.push({ ...product, quantity: product.quantity });
    }
    saveBasket(basket);
}



const deleteFromBasket = (product) => {
    let basket = getBasket();
    basket = basket.filter(p => p.id != product.id);
    saveBasket(basket); 
}



const updateQuantity = (productId, quantity) => {
    let basket = getBasket();
    let foundIndex = basket.findIndex(p => p.id === productId);
    if (foundIndex !== -1) {
        basket[foundIndex].quantity += quantity;
        if (basket[foundIndex].quantity <= 0) {
            basket.splice(foundIndex, 1); // Supprimer le produit du panier si la quantité est inférieure ou égale à zéro
        }
        saveBasket(basket);
    }
}



const getNumberProduct = () => {
    let basket = getBasket();
    let number = 0;
    basket.forEach(p => number += p.quantity);
    return number;
}



const getTotalPrice = () => {
    let basket = getBasket();
    return basket.reduce((total, product) => total += product.quantity * product.price, 0);
}
