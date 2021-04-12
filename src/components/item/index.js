import React from 'react';
import logo from "../../logo.svg";
import { Link } from 'react-router-dom';

export const Item = ({ item }) => {

    return (
        <div className="card" style={{ width:  "16rem"}}>
            <img src={ logo } className="card-img-top" alt="logo"></img>
            <div className="card-body">
                <h5 className="card-title">{item.title}</h5>
                <div className="price text-success">
                    <h5 classNames="mt-4">$ {item.price}</h5>
                </div>

                <Link to={`/item/${item.id}`} className=""> Link al item</Link>
            </div>
        </div>
    );
}