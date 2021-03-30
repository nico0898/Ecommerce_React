import React from 'react';
import { ItemCount } from "../itemCount";
import logo from "../../logo.svg";

export const Item = ({ item }) => {

    return (
        <div className="card" style={{ width:  "16rem"}}>
            <img src={ logo } className="card-img-top" alt="logo"></img>
            <div className="card-body">
                <h5 className="card-title"> {item.title} </h5>
                <div class="price text-success"><h5 class="mt-4">$ {item.price}</h5></div>
                
                <ItemCount initial="0" stock="5" />

                <a href="/" className="btn btn-primary mt-3">Agregar a carrito</a>
            </div>
        </div>
    );
}