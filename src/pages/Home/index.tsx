import React, { useState, useEffect } from 'react';
import Nav from '@components/Nav';
import Banner from '@components/Banner';
import './style.css';
export default () => {
    return (
        <div className="home-container">
            <div className="banner-box">
                <Banner />
            </div>
        </div>
    )
}