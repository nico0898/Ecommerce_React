import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';

export const CartWidget = () => {
    return (
        <div>
            <a href="/cart">
                <FontAwesomeIcon icon={faCartPlus} style={{ color: '#FFFFFF', fontSize: 25 }} />
            </a>
        </div>
    );
}