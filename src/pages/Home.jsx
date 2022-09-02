import {useSelector, useDispatch} from 'react-redux';
import { unSetUser } from '../reducers/user/userSlice';
import { useNavigate } from 'react-router-dom';
import { ProductList } from '../components/ProductList';
import { useState, useEffect } from 'react';
import Axios from 'axios';

export const Home = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [products, setProducts] = useState([]);

    useEffect(() => {
        Axios.get("http://localhost:3000/products")
          .then(response => {
            setProducts(response.data);
          })
      }, [])

    const user = useSelector(state => state.user);

    const handlerLogout = () => {
        dispatch(unSetUser());
        navigate("/");
    }
    
    return (
        <>
        <h2>Home</h2>
        <p>Bienvenido: {user.fullName}</p>
        <button className="btn btn-primary" onClick={handlerLogout}>Salir</button>
        <hr />
        <ProductList products={products} ></ProductList>
        </>
    )
}