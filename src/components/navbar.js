import React from 'react';
import logo from '../logo.svg';

export const NavBar = () => {
    return (
        <nav className="bg-dark">
            <div className="p-4 row" style={{ marginRight: 0 }}>
                <div id="logo" className="col-md-4">
                    <img src={logo} className="float-start" alt="logo" width="100" />
                </div>

                <div className="col-md-8">
                    <ul className="d-flex flex-row justify-content-around list-unstyled text-white align-items-center">
                        <li>Home</li>
                        <li>About</li>
                        <li>Contact</li>
                        <li>Form</li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}