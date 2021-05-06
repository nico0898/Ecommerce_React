import React, {useState, useEffect} from 'react'

export const CartContext = React.createContext([])

export const CartProvider = ({children}) => {
    // array con items de este forma   {producto:item, quantity: number}
    const [cart, setCart] = useState([])
    const [totalItems, setTotalItems] = useState(0);
    const [totalPrecio, setTotalPrecio] = useState(0)

    useEffect(()=>{

        let totItems = 0;
        let precio = 0;

        for(let item of cart) {
            totItems += item.cantidad;
            precio += item.cantidad * item.producto.price;
        }

        setTotalItems(totItems);
        setTotalPrecio(precio)

    },[cart])

    const addItem = (item, cantidad)=>{

        //si el producto ya existe en el array entonces dara true por lo contrario dara false
        const findItemCartArray = cart.find(e=> e.producto.id === item.id)

        let nuevoProducto;
        let cantidadProducto;

        if (findItemCartArray){
            nuevoProducto = cart.filter(e => e.producto.id !== item.id)
            cantidadProducto = findItemCartArray.cantidad + cantidad; //se suma la cantidad tota de los productos
        }else{
            nuevoProducto = [...cart]
            cantidadProducto = cantidad;
        }

        setCart([...nuevoProducto, { producto: item , cantidad: cantidadProducto  }])
        
    } // agregar cierta cantidad de un ítem al carrito


    const removeItem = (itemId) =>{
        const newCart = cart.filter(e => e.producto.id !== itemId)
        setCart(newCart)
    }// Remover un item del cart por usando su id
    
    const clear = ()=>{
        setCart([])
    } // Remover todos los items
    
    const isInCart = (id) =>{
        const currentItem = cart.find(e=> e.producto.id === id)

        return currentItem ? true : false
    } 

    return (
        <CartContext.Provider value={{ cart, addItem, removeItem, clear, isInCart, totalItems, totalPrecio}} >
            {children}
        </CartContext.Provider>
    )
}
