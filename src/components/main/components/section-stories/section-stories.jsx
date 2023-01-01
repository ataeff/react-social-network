import React from 'react';
import './section-stories-styles.css'

const SectionStories = () => {
    return (
         <section className="section-stories">
            <div className="stories-content">
                <div className="users">
                    <div className="user-image"></div>
                    <div className="overlay"></div>
                </div>

                <div className="users">
                    <div className="user-image"></div>
                    <div className="overlay"></div>
                </div>

                <div className="users">
                    <div className="user-image"></div>
                    <div className="overlay"></div>
                </div>

                <div className="users">
                    <div className="user-image"></div>
                    <div className="overlay"></div>
                </div>
            </div>

            <div className="section-share">
                <div className="profile-img">
                    <img src="" alt="" />
                </div>
                <div className="search-box">
                    <input type="text" placeholder='What do you want to share?' className='search-input' />
                </div>
            </div>
        </section>
    );
}

export default SectionStories;