import React, { useState } from "react";
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import { useEffect } from "react";

const ProductItemForm = (props) => {

  const [kilo, setKilo] = useState(1);

  const handleChange = (event) => {
    const value = event.target.value;
    setKilo(value);
  };

  const totalPrice = kilo * props.price;
  const priceUnit = props.price;

  const handleFormSubmit = (event) => {
    event.preventDefault();
    const formData = {    
      quantity: parseInt(kilo),
      product: props.name,
      id: props._id,
      price: priceUnit
    };
    console.log(formData);
    addBasket(formData);
  };

  return (
    <>
      <Form onSubmit={handleFormSubmit}>
        <InputGroup>
          <Form.Control
            type="number"
            value={kilo}
            min={1}
            onChange={handleChange}
            id={props._id}
          />
          <InputGroup.Text>U</InputGroup.Text>
          <InputGroup.Text>{totalPrice} €</InputGroup.Text>
          <Button id={props.name} type="submit" variant="secondary"> 
            Add
          </Button>
        </InputGroup>
      </Form>
    </>
  );
}

export default ProductItemForm;
