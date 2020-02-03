import React from 'react';
import './App.css';
import WordsList from "./components/WordsList";
import SearchSection from "./components/SearchSection";
import { Store } from './context/store';

function App() {
    const { state, dispatch } = React.useContext(Store);

    return (
    <div className="App">
        <SearchSection urls={[]} dispatcher={dispatch}/>
      <div>
        <WordsList wordsList={state}/>
      </div>
    </div>
    );
}

export default App;
