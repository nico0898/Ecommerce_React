import React, {useState,useContext}from 'react'
import {ItemCount} from '../itemCount'
import {Link} from 'react-router-dom';
import { CartContext } from "../../context/cartContext";


export default function ItemDetail({ item }) {
    const [count, setCount] = useState(0)

    const {addItem} = useContext(CartContext);

    const addHandler = (contador)=>{
        console.log('se agrego un item', contador, item)
        addItem(item, contador)
        setCount(contador)
    }

    if (!item) return null;

    return <div className="d-flex flex-row">
        <div>
            <img src={item?.pictureUrl} alt=""/>
        </div>
        <div>
            <h2>{item?.title}</h2>
            <p>{item?.description}</p>
            <div>${item?.price}</div>
                
            <div style={{display:'flex', justifyContent:'center'}}>
                { count === 0  ?
                    <ItemCount stock={item.stock === 0 ? 0 : item.stock} initial="0" onAdd={addHandler} />
                    :
                    <Link to='/cart' >
                        <button className="btn btn-primary">Terminar mi compra</button>
                    </Link>
                }
            </div>
        </div>
    </div>;
   
  }

