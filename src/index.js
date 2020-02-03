import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
// import { Provider } from 'react-redux';
import { StoreProvider } from './context/store';
import store from './redux/store';

const rootElement = document.getElementById('root');

ReactDOM.render(
    <StoreProvider>
    {/*<Provider store={store}>*/}
        <App />
    {/*</Provider>,*/}
    </StoreProvider>,
    rootElement
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
