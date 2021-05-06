import React, { useContext } from 'react';
import { Link } from "react-router-dom";
import { CartContext } from '../../context/cartContext';

export const Cart = () => {

    const {cart, removeItem, totalItems, totalPrecio, clear} = useContext(CartContext)

    const noItemComp = <h2>No hay Items en el carrito <Link to='/'>Ir al home </Link> </h2>;

    if(totalItems === 0) return noItemComp

    return (
        <div className="container">
           <ul className="list-group list-group-flush">
            {
                cart.map(item => {
                    return (
                        <li className="list-group-item d-flex flex-row justify-content-between" key={item.producto.id}>
                            <div> 
                                <span className="fw-bold text-secondary">Titulo: </span>
                                <span className="text-uppercase">{item.producto.title}</span>
                            </div>
                            <div> 
                                <span className="fw-bold text-secondary">Cantidad: </span>
                                <span className="text-uppercase">{item.cantidad}</span>
                            </div>
                            <button onClick={()=> removeItem(item.producto.id)} className="btn btn-danger"> X </button>
                        </li>
                    );
                })
            }
            </ul>

            <div className="mb-3">
                <label>
                    <span className="fw-bold text-secondary">Total de productos: </span>
                    {totalItems}
                </label>
                <br></br>
                <label>
                    <span className="fw-bold text-secondary">Valor total: </span>
                    $ {totalPrecio}
                </label>
            </div> 

            <div className="mb-3">
                <button onClick={clear} className="btn btn-danger mx-1">Borrar todo</button>  
                <Link to="/orders" className="btn btn-success mx-1">Finalizar Compra</Link>
            </div>
        </div>
    );
}

