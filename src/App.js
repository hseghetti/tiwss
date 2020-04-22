import React from 'react';
import './App.css';
import WordsList from './WordsList';
import Header from './Header';
import './mockServer/server';

function App() {
    return (
        <div className="App">
            <Header />
            <div>
                <WordsList />
            </div>
        </div>
    );
}

export default App;
