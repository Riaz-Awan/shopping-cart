import React from 'react';
import { Button } from 'react-bootstrap';
import { CartContext } from '../CartContext';
import { useContext } from 'react';
import { getProductData } from '../productStores';


const CartProduct = (props) => {
    const cart =useContext(CartContext);
    const id = props.id;
    const quantity = props.quantity;
    const productData= getProductData(id);
  return (
    <div>
        <h3>{productData.title}</h3>
        <p>{quantity}</p>
        <p>${(quantity*productData.price).toFixed(2)}</p>
        <Button size='sm' onClick={()=>cart.deleteFromCart(id)}  >Remove</Button>
        <hr></hr>
      
    </div>
  );
};

export {CartProduct};
