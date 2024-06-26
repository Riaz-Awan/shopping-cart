import React from "react";
import CustomNavbar from "../components/CustomNavbar";
import {Row, Col} from 'react-bootstrap';
import { productsArray } from "../productStores";
import ProductCard from "../components/ProductCard";


const Store = ({ user, handleLogout }) => {
  return (
    <div className="w-screen h-screen bg-slate-200">
      <CustomNavbar handleLogout={handleLogout} />
      <div className="flex flex-col justify-center items-center ">
        <img
          className="w-32 h-32 rounded-full "
          src={user.picture}
          alt="userPic"
        />
        <p>Welcome, {user ? user.name : "User name"} to the Shopping cart!</p>
        <Row xs={1} md={3} lg={4} className="gap-2">
          {productsArray.map((product, index)=>(
            <Col key={index} align='center'>
           <div className="mx-6"><ProductCard product={product}/></div>
          </Col>

          ))}
        </Row>
        
      </div>
    </div>
  );
};

export default Store;
