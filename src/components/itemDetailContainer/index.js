import React, {useState, useEffect} from 'react';
import ItemDetail from '../itemDetail';
import { useParams } from "react-router-dom";

const getItems = (id) => { /* Esta función debe retornar la promesa que resuelva con delay */ 
    return new Promise((resolve)=>{
        setTimeout(()=>{resolve({
            title:"Title",
            price: 1000,
            description: "Description" + id,
            img:""

        })},2000)
    })
}

export default function ItemDetailContainer() {
    const [item, setItem] = useState(null)
    const {itemId, otroId} = useParams()

    useEffect(() => {
        getItems(itemId).then((res)=> setItem(res))
        return;
    }, [itemId])

    // Implementar mock invocando a getItems() y utilizando el resolver then
    return <> {itemId} - {otroId}
    <ItemDetail item={item} /></>/* JSX que devuelva un ItemDetail (desafío 6b) */
}





