import React, { useState, useEffect } from 'react';
const bg  = require('@assets/Home/images/bg.png');
import './style.css'
export default () => {
    return (
        <div className="home-banner">
            <img src={bg} />
        </div>
    )
}