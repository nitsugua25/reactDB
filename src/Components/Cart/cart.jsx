import React, { useState, useEffect } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CloseButton from 'react-bootstrap/CloseButton';

const Cart = ({ show, handleClose }) => {
    const [basket, setBasket] = useState(getBasket()); // State pour stocker le panier
    const [basketQuantities, setBasketQuantities] = useState({}); // State pour stocker les quantités des produits dans le panier

    useEffect(() => {
        // Rafraîchir le panier chaque fois que le panier change
        setBasket(getBasket());
    }, [show]); // Mettez à jour lorsque l'état de l'affichage du panier change

    // Mettre à jour les quantités des produits dans le panier
    useEffect(() => {
        const updatedQuantities = {};
        basket.forEach(item => {
            updatedQuantities[item.id] = item.quantity;
        });
        setBasketQuantities(updatedQuantities);
    }, [basket]);

    const updateQuantityAndRefresh = (productId, amount) => {
        updateQuantity(productId, amount);
        setBasketQuantities(prevQuantities => ({
            ...prevQuantities,
            [productId]: prevQuantities[productId] + amount
        }));
    };

    const HaveItems = getNumberProduct() > 0; 

    const product = basket
    .filter(item => basketQuantities[item.id] > 0)
    .map((item, index) => {
        const isEvenRow = index % 2 === 0; // Vérifie si c'est une ligne paire ou impaire
        const rowStyle = {
            alignItems: 'center',
            marginBottom: '3px',
            fontSize: '1.2em',
            backgroundColor: isEvenRow ? '#f2f2f2' : 'transparent', // Appliquer un fond gris une fois sur deux
        };
        return (
            <Row key={item.id} style={rowStyle}>
                <Col sm={4}>{item.id}</Col>
                <Col sm={2}>{item.product}</Col>
                <Col sm={2}>{basketQuantities[item.id]} U</Col>
                <Col sm={2}>{item.price} €</Col>
                <Col sm={1} style={{ display: 'flex', alignItems: 'center', padding: '10px 0', justifyContent: 'center', marginRight: '5px' }}>
                    <Button size='lg' style={{ marginRight: '12px', padding: '8px' }} onClick={() => updateQuantityAndRefresh(item.id, 1)}>+</Button>
                    <Button size='lg'style={{ marginRight: '25px', padding: '9px 10px' }} onClick={() => updateQuantityAndRefresh(item.id, -1)}>-</Button>
                    <CloseButton  size='xl' style={{padding: '8px' }} onClick={() => updateQuantityAndRefresh(item.id, -basketQuantities[item.id])}/>
                </Col>
            </Row>
        );
    });

    return (
        <Modal
            show={show}
            onHide={handleClose}
            backdrop="static"
            keyboard={false}
            size="lg"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    <h2>
                        Your Cart 
                    </h2>
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Container fluid>
                    {HaveItems ? (
                        <Row >
                            <Col >
                                <Row >
                                    <Col sm={4}><h4>Id</h4></Col>
                                    <Col sm={2}><h4>Product</h4></Col>
                                    <Col sm={2}><h4>Quantity</h4></Col>
                                    <Col sm={2}><h4>Price</h4></Col>
                                    <Col sm={1}></Col>
                                </Row>
                            </Col>
                            <Col xs={12}>
                                {product}
                            </Col>
                            <Modal.Title style={{margin:'10px 30px 10px 0px'}} >
                                <Row >
                                    <Col md={4}>
                                        <h2>
                                            Total Amout:
                                        </h2>
                                        </Col>
                                    <Col style={{display:'flex', justifyContent:'flex-end'}} md={{ span: 4, offset: 4 }}>
                                        <h2>
                                            {getTotalPrice()} €
                                        </h2>
                                    </Col>
                                </Row>
                            </Modal.Title>
                        </Row>
                    ) : (
                        // Code to display when there are no items in the cart
                        <Row>
                            <Col xs={12}>
                                <h4>You don't have any products in your cart.</h4>
                            </Col>
                        </Row>
                    )}
                </Container>
            </Modal.Body>
            <Modal.Footer>
                <Button size='lg' id='closeBotttom'variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                <Button size='lg'id='order' onClick={handleClose} >Order</Button>
            </Modal.Footer>
        </Modal>
    );
}

export default Cart;
