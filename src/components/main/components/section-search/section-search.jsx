import React from 'react';
import './section-search-styles.css';
import { IoNotifications } from 'react-icons/io5';
import { RiBookmark2Fill, RiSettings4Fill } from 'react-icons/ri';
import { BiSearch } from 'react-icons/bi';

const SectionSearch = () => {
    return (
        <section className="section-search">
            <div className="search-box">
                <BiSearch className='icon-search' />
                <input type="text" placeholder='Search anything...' className='search-input' />
            </div>

            <div className="section-search-icons">
                <a href="#"><IoNotifications id='icon-notification' className='icons'/></a>
                <a href="#"><RiBookmark2Fill id='icon-bookmark' className='icons'/></a>
                <a href="#"><RiSettings4Fill id='icon-settings' className='icons'/></a>
            </div>
        </section>
    );
}

export default SectionSearch;