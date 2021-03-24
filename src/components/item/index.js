import React, { useEffect, useState } from 'react';
import logo from '../../logo.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';

export const Item = ({ initial, stock }) => {

    const [count, setCount] = useState(parseInt(initial));

    useEffect(() => {
        setCount(parseInt(initial));
        return;
    }, [initial]);

    const addHandle = () => {
        setCount(count + 1);
    };

    const removeHandle = () => {
        setCount(count - 1);
    };

    return (
        <div className="card" style={{ width:  "18rem"}}>
            <img src={ logo } className="card-img-top" alt="logo"></img>
            <div className="card-body">
                <div className="d-flex flex-row justify-content-around">
                    <button type="button" className="btn btn-outline-primary" disabled={count === 0} onClick={removeHandle}>
                        <FontAwesomeIcon icon={ faMinus }/>
                    </button>

                    <input type="text" className="form-control" value={count}></input>

                    <button type="button" className="btn btn-outline-primary" disabled={count === parseInt(stock)} onClick={addHandle}>
                        <FontAwesomeIcon icon={ faPlus } />
                    </button>
                </div>
                <a href="/" className="btn btn-primary mt-3">Agregar a carrito</a>
            </div>
        </div>
    );
}