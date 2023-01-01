import React from 'react';
import './main-styles.css';
import SectionSearch from './components/section-search/section-search';
import SectionStories from './components/section-stories/section-stories';
import SectionContents from './components/section-contents/section-contents';



const Main = () => {
    return (
        <main className="main">
            <div className="container">
                <SectionSearch/> 
                <SectionStories />
                <SectionContents />
            </div>
        </main>
    );
}

export default Main;