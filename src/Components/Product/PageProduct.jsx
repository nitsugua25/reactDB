import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import axios from "axios";
import { useParams } from "react-router-dom";
import { Alert, Spinner } from 'react-bootstrap'; 
import ProductItemForm from './ProductItemForm';

function PageProduct() {
    const [product, setProduct] = useState([]);
    const [loading, setLoading] = useState(true); 
    const { id } = useParams(); 

    useEffect(() => {
        axios
        .get(`http://localhost:3000/api/product/${id}`) 
            .then(response => {
                setProduct([response.data.product]); 
                setLoading(false); 
            })
            .catch(error => {
                console.log(error);
                setLoading(false); 
            });
    }, [id]);

    // loading spinner
    if (loading) {
        return <Spinner animation="border" role="status">
                    <span className="sr-only">Loading...</span>
                </Spinner>;
    }

    // Error message if product does not exist
    if (product.length === 0) {
        return (
            <Alert variant="warning">
                <Alert.Heading>ERROR 404</Alert.Heading>
                <p>
                    Aucun produit trouvé avec l'identifiant {id}.
                </p>
                <Link to="/">Revenir au menu</Link>         
            </Alert>
        );
    } 
    
    // Display product
    else {
        return (
          <section style={{backgroundColor: "rgba(236, 236, 236, 0.5)", borderRadius: '10px',marginTop:'50px'}}>
            {product.map((product, index) => ( 
                <div key={index}>
                    <section style={{padding:'30px',marginTop:'20px'}}>
                        <div className="container">
                            <div className="row gx-5">
                                <aside style={{textAlign :"center"}}>
                                    <div style={{ width: '500px', height: '280px', overflow: 'hidden', margin: 'auto',borderRadius:'5px' }}>
                                        <img style={{ objectFit: 'cover', width: '100%', height: '100%' }} className='productDetail' src={product.images}  alt=""/>
                                    </div>
                                </aside> 
                                <main>
                                    <br></br>
                                    <div style={{textAlign:'center'}}>
                                        <h4>
                                            {product.name}
                                        </h4>
                                        <div>
                                            <span>{product.price}€</span>
                                        </div>
                                        <p>
                                            {product.description}
                                        </p>
                                        <hr />
                                    </div>
                                </main>
                            </div>
                        </div>
                        <div style={{width:"500px", borderRadius: '10px', margin:'auto'}} >
                            <ProductItemForm price={product.price}  _id={product._id} name={product.name}/>
                        </div>
                    </section>
                </div>
            ))}
        </section>
        )
    }
}

export default PageProduct;
