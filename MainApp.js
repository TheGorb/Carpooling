import React from 'react';
import {StoreProvider} from 'easy-peasy';
import store from './src/store/index';
import App from './App';

const MainApp = () => {
    return (
        <StoreProvider>
            <App />
        </StoreProvider>
    );
};

export default MainApp;