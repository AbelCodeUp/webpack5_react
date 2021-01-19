import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import './nav.css';
export default () => {
    return (
        <div className='nav-item'>
            <div className="logo">
                
            </div>
            <ul className="nav-list">
                <li>
                    <NavLink exact to="/" activeClassName="active" >HOME</NavLink>
                </li>
                <li>
                    <NavLink exact to="/product" activeClassName="active" >PRODUCTS</NavLink>
                </li>
            </ul>
        </div>
    )
}