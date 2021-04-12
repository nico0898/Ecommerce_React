import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ItemCount } from '../itemCount';

export default function ItemDetail ({ item }) {
 
    const [count, setCount] = useState(0) 

    const addHandler = (contador) => {
        console.log("se agrego un producto al carrito")
        setCount(contador)
    }

    return <>
            <img src={item?.img} alt=""/>
            <h2>{item?.title}</h2>
            <p>{item?.description}</p>
            <div>${item?.price}</div>
            {
                count === 0 ?
                    <ItemCount initial="0" stock="5" onAdd={ addHandler }/>
                :

                <Link to="/cart">
                    <button>Terminar compra</button>
                </Link>
            }
    </>;
}
