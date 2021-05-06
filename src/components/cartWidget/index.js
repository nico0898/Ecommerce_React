import React, { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';
import { CartContext } from '../../context/cartContext';
import { Link } from 'react-router-dom';

export const CartWidget = () => {
    const {totalItems} = useContext(CartContext)

    return (
        <div>
            <Link to="/cart">
                { totalItems }
                <FontAwesomeIcon icon={faCartPlus} style={{ color: '#FFFFFF', fontSize: 25 }} />
            </Link>
        </div>
    );
}