import Header from "../Layout/Header";
import Product from "./Product";
import PageProduct from "./PageProduct";
import { Alert } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { createBrowserRouter,Outlet, RouterProvider } from 'react-router-dom';



const router = createBrowserRouter([
    {
        path: '/',
        element: <><Outlet/><Header/></>,
        errorElement: <PageError/>,
        children: [
            {
                path: '/',
                element: <Product/>,
            },
            {
                path: '/product',
                children: [
                    {
                        path: ':id',
                        element: <PageProduct/>
                    }
                ]
            }
            
        ]
    },
]);

function PageError() {
    return (
        <Alert variant="danger">
        <Alert.Heading>ERROR 404</Alert.Heading>
    
        <p>
            La page demandée n'existe pas.
        </p>
        <Link to="/">Revenir au menu</Link>         
        </Alert>
    );
}


function Route() {
    return (
        <RouterProvider router={router} />
    );
}

export default Route;
