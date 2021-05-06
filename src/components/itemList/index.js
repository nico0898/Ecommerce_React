import React from 'react'
import { Item } from '../item'

export const ItemList = ({items=[]}) => {


    return (
        <div className="row">
            {items.map(item => <Item key={item.id}  item={item}/> )}
        </div>
    )
}
