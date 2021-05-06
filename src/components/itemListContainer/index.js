import React, { useEffect, useState } from "react";
import {ItemList} from "../itemList"
import { useParams } from "react-router-dom";
import {getFirestore} from '../../firebase';

export default function ItemListContainer() {
  const [items, setItems] = useState([])

  const {categoryId} = useParams()

  useEffect(()=>{

    const db = getFirestore();
    const itemsCollection = db.collection('items') 
    const prom = itemsCollection.get()
    // const filtrado = itemsCollection
    //    .where('categoria','==', categoryId).limit(2)

    // const prom =  filtrado.get();


    prom.then((resultado)=>{
      console.log('se consultaron los datos');
      console.log(resultado);

      if(resultado.size > 0){
        console.log(resultado.docs.map(doc => doc.data()))

        console.log(resultado.docs.map(doc => doc.id))


        setItems(resultado.docs.map(doc => {
          return {id:doc.id,  ...doc.data()}
        }
          ))
      }
      //setItems(resultado)
    })

  },[categoryId])

  return (
    <div className="container">
      {/* Items de la categoria {categoryId} */}
      <ItemList items={items}/>
    </div>
  );
}
