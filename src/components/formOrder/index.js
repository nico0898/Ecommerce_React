import React, {useContext, useState} from 'react';

import firebase from 'firebase/app';
import 'firebase/firestore';
import {getFirestore} from '../../firebase';
import { CartContext } from '../../context/cartContext';



export const FormOrder = () => {

    const {cart, totalPrecio} = useContext(CartContext)

    const [name, setName] = useState("")
    const [phone, setPhone] = useState("")
    const [email, setEmail] = useState("")

    const data = [
        {
            title: "Nombre",
            onChange: evt => setName(evt.target.value)
        },
        {
            title: "Telefono",
            onChange: evt => setPhone(evt.target.value)
        },
        {
            title: "Email",
            onChange: evt => setEmail(evt.target.value)
        }
    ]

    const formComponent = data.map(({title, onChange}) => (
        <input key={title} type="text" className="form-control mb-3" placeholder={title} onChange={onChange}></input>
    ))

    const addData = () => {
        if(name === "" && phone === "" && email === "" )
        {
            alert("Debe completar todos los datos");
            return false;
        }
        
        generarOrden();
    }
    
    const generarOrden = () => {
        const db = getFirestore();
    
        const ordersCol = db.collection('orders');
    
        let orden = {}
        orden.date = firebase.firestore.Timestamp.fromDate(new Date());
    
        orden.buyer = { name: name, phone: phone, email: email }
        orden.total = totalPrecio;
        orden.items = cart.map(cartItem => {
            const id = cartItem.producto.id;
            const title = cartItem.producto.title;
            const price = cartItem.producto.price * cartItem.cantidad;
    
            return {id, title, price}   
        })
    
    
        ordersCol.add(orden)
        .then((IdDocumento)=>{
            console.log(IdDocumento.id)
        })
        .catch( err => {
            console.log(err);
        })
        .finally(()=>{
            console.log('termino la promesa')
        })
    
        const itemsToUpdate = db.collection('items').where(
            firebase.firestore.FieldPath.documentId(), 'in', cart.map(i=> i.producto.id)
        )
    
        const batch = db.batch();
    
        // por cada item restar del stock la cantidad de el carrito
    
        itemsToUpdate.get()
        .then( collection=>{
            collection.docs.forEach(docSnapshot => {
                batch.update(docSnapshot.ref,{
                    stock: docSnapshot.data().stock - cart.find(item => item.producto.id === docSnapshot.id).quantity
                })
            })
    
            batch.commit().then(res =>{
                console.log('resultado batch:', res)
            })
        })
    
        console.log(orden)
        console.log("se ingreso la orden correctamente")
    }

    return (
        <div className="container">
            <h2>Formulario</h2>
            
            { formComponent }

            <button className="btn btn-success" onClick={addData}>Finalizar</button>
        </div>
    )
}