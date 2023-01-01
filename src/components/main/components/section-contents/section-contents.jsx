import React from "react";
import './section-contents-styles.css';
import { BsHeartFill } from 'react-icons/bs';

const SectionContents = () => {
    return (
        <section className="section-contents">
            <div className="user-content">
                <div className="user-img"></div>
                <div className="user-info">
                    <p className="user-name">Kevin McCalister</p>
                    <p className="user-post-time">25 Minutes ago</p>
                </div>
            </div>

            <p className="content-text">Take a breath people, we need oxygen, Stay Green!</p>
            <div className="user-post">
                <div className="post-img2"></div>
            </div>
        </section>
    );
}

export default SectionContents;