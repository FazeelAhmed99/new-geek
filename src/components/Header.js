import React from 'react';
import './Header.css';
import newloop from '../images/newloop.png';


function Header() {
    return (
        <>

            <div className="nav-bar">
                <div className="left-nav">
                    <img src={newloop} alt="image not load" />
                    <h4>Infinite Loopers</h4>
                </div>
                <div className="right-nav">
                    <li>HOME</li>
                    <li>BLOG</li>
                    <li>CONTACT</li>
                </div>
                
            </div>
        </>
    )
}
export default Header;
