import React, { useEffect, useState } from "react";
import { ItemList } from "../itemList"
import { useParams } from "react-router-dom";
import { getFirestore } from '../../firebase';

export default function ItemListContainer() {
  const [items, setItems] = useState([])

  const {categoria} = useParams()

  useEffect(()=>{

    const db = getFirestore();
    const itemsCollection = db.collection('items');
    let prom = itemsCollection.get();

    if(categoria !== "todos")
      prom = itemsCollection.where('categoria','==', categoria).get();
    else
      prom = itemsCollection.get();
    

    prom.then((resultado) => {
      console.log('se consultaron los datos');
      console.log(resultado);

      if(resultado.size > 0){
        console.log(resultado.docs.map(doc => doc.data()))

        console.log(resultado.docs.map(doc => doc.id))

        setItems(resultado.docs.map(doc => {
            return {id:doc.id,  ...doc.data()}
        }))
      }
      
    }
  )},[categoria])

  console.log(items)

  return (
    <div className="container">
      {/* Items de la categoria {categoria} */}
      <ItemList items={items}/>
    </div>
  );
}
