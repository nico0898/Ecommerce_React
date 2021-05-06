/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import { Link } from 'react-router-dom';

export const Item = ({ item }) => {
  return (
    <div className="col-md-4">
      <div className="card my-3 align-items-center" style={{height: "100%"}}>
        <img loading="lazy" src={item.pictureUrl} className="card-img-top" style={{width: "12rem"}}></img>
        <div className="card-body">
          <h5 className="card-title">{item.title}</h5>
          <p className="card-text">${item.price}</p>
          
          <Link to={`/item/${item.id}`} className="btn btn-primary"> Link al item</Link>
        </div>
      </div>
    </div>
  );
};
