import React, { useEffect, useState } from "react";
import { ItemList } from "../itemList";
import { useParams } from "react-router-dom";

export const ItemListContainer = () => {
    const [items, setItems] = useState([])

    const {categoryId} = useParams()

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
        Items de la categoria {categoryId}
            <ItemList items={items}/>
        </div>
    );
};