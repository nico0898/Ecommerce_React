import React, {useState, useEffect} from 'react';
import ItemDetail from '../itemDetail';

const getItems = () => { /* Esta función debe retornar la promesa que resuelva con delay */ 
    return new Promise((resolve)=>{
        setTimeout(()=>{resolve({
            title:"Title",
            price: 1000,
            description: "Description",
            img:""

        })},2000)
    })
}

export default function ItemDetailContainer() {
    const [item, setItem] = useState(null)
    useEffect(() => {
        getItems().then((res)=> setItem(res))
        return;
    }, [])

    // Implementar mock invocando a getItems() y utilizando el resolver then
     return <ItemDetail item={item} />/* JSX que devuelva un ItemDetail (desafío 6b) */
}





