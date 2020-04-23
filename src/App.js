import React from 'react';
import './App.css';
import WordsList from './WordsList';
import Header from './Header';

if (process.env.NODE_ENV !== 'production') {
    (async () => {
        await import('./mockServer/server');
    })();
}

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
