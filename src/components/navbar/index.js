import React from 'react';
import logo from '../../logo.svg';
import { CartWidget } from '../cartWidget';

import {Link, NavLink} from 'react-router-dom'

export const NavBar = () => {
    return (
        <nav className="bg-dark">
            <div className="p-3 row" style={{ marginRight: 0 }}>
                <div id="logo" className="col-md-4">
                    <Link to='/' className="float-start" >
                        <img src={logo} alt="logo" width="100" />
                    </Link>
                </div>

                <div className="col-md-7 m-auto">
                    <ul className="d-flex flex-row justify-content-around list-unstyled text-white align-items-center">
                        <li>
                            <NavLink exact to='/' activeClassName="active" className="nav-item nav-link" >
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to={`/category/cate1`} className="nav-item nav-link" >
                                Categoria 1
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to={`/category/cate2`} className="nav-item nav-link" >
                                Categoria 2
                            </NavLink>
                        </li>
                    </ul>
                </div>

                <div className="col-md-1 m-auto">
                    <CartWidget />
                </div>
            </div>
        </nav>
    );
}