import React from 'react';
import './styles/App.css';
import Aside from './components/aside/aside.jsx';
import Main from './components/main/main.jsx';

const App = () => {
    return (
        <div className="wrapper">
            <Aside />
            <Main />
        
        </div>
    );
}

export default App;

