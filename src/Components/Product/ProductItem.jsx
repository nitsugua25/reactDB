import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ProductItemForm from './ProductItemForm';

const ProductItem = (props) => {
  return (
    <Card style={{ width: '18rem',margin:'10px', padding: '15px 10px 0 10px' }}>
      <a href={`/product/${props._id}`} style={{ textDecoration: 'none', cursor: 'pointer', color:'#5c636a' }}>
        <div style={{ width: '150px', height: '150px', overflow: 'hidden', margin: 'auto' }}>
          <Card.Img src={props.images} style={{ objectFit: 'cover', width: '100%', height: '100%' }} />
        </div>
        <div style={{ paddingTop: '15px'}}>
          <Card.Title>{props.name}</Card.Title>
        </div>
      </a>
      <Card.Body>
        <ProductItemForm price={props.price} _id={props._id} name={props.name} />
      </Card.Body>
    </Card>
  );
}

export default ProductItem;
