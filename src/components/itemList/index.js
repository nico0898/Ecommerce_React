import React from 'react'
import { Item } from '../item'

export const ItemList = ({items=[]}) => {

    return (
        <div className="row justify-content-center">
            {
                items.map(item => 

                    <div className="col-md-3">
                        <Item item={item}/>
                    </div>
                )
            }
        </div>
    )
}
