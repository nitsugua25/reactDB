import React from "react";
import ProductItem from "./ProductItem";
import axios from "axios";
import Row from "react-bootstrap/Row";
import { useState, useEffect} from "react";
import Spinner from 'react-bootstrap/Spinner';
import Button from 'react-bootstrap/Button';



function Product() {

    const [donnees, setDonnees] = useState(null)
    const [error, setError] = useState(false);

    useEffect(()=>{
        axios
          .get('http://localhost:3000/api/product/') 
          
          .then(function (test) { 
            console.log(test);
            setDonnees(test.data.products);   
            setError(false)   
          })
          .catch(function (error) { 
            console.log(error)
            setError(true)
            console.log(error)
          })

      }, []); 

    if (!donnees) {
    return (
    <Button variant="primary" disabled>
      <Spinner
        as="span"
        animation="grow"
        size="sm"
        role="status"
        aria-hidden="true"
      />
      Loading...
  </Button>
  )}

  else{

        const product = donnees.map((item) => (
      <ProductItem
        key={item._id}
        _id={item._id}
        name={item.name}
        images={item.images}
        price={item.price}
        data={item} 
        description={item.description}
      />
      
    ));

    return (
      <section >
        <Row xs={1} lg={3} md={2} style={{marginTop:'40px'}}>
          {product}
        </Row>
      </section>
    );
    
  };}


export default Product;