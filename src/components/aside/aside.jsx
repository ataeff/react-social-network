import React from 'react';
import './aside-styles.css';
import { RiMessage3Fill, RiUser3Fill } from 'react-icons/ri';
import { TiHome } from 'react-icons/ti';
import { IoNewspaper } from 'react-icons/io5';


const Aside = () => {
    return (
        <aside className="aside">
            <div className="logo">
                <h1>LOGOTYPE</h1>
            </div>

            <div className="nav">
                <a href="#" className="home"><TiHome className='icon-nav'/>Home</a>
                <a href="#" className="messages"><RiMessage3Fill className='icon-nav'/>Messages</a>
                <a href="#" className="profile"><RiUser3Fill className='icon-nav'/>Profile</a>
                <a href="#" className="news"><IoNewspaper className='icon-nav'/>News</a>
            </div>
        </aside>
    );
}

export default Aside;