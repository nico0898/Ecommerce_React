import React, { useEffect, useState } from "react";
import { ItemList } from "../itemList";

export const ItemListContainer = () => {
    const [items, setItems] = useState([])

    useEffect(()=>{
  
      const prom = new Promise(( resolve, reject )=>{
        setTimeout(()=>{
          resolve([
            { id: 1, title: "Title", price: 1000, pictureUrl: { } },
            { id: 2, title: "Title", price: 1000, pictureUrl: { } },
            { id: 3, title: "Title", price: 1000, pictureUrl: { } },
            { id: 4, title: "Title", price: 1000, pictureUrl: { } },
          ])
        },2000)
      })
  
      prom.then((resultado)=>{
        setItems(resultado)
      })
    })

    return(
        <div className="container mt-3">
            <ItemList items={items}/>
        </div>
    );
};