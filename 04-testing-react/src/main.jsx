import React from 'react';
import ReactDOM from 'react-dom/client';

import {FirstApp} from './FirstApp';
import {HelloWorld} from './HelloWorld';
import {CounterApp} from './CounterApp';
import './style.css';

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        {/* <FirstApp title="Hola mundo" subTitle={123}/> */}
        {/* <HelloWorld /> */}
        <CounterApp value={0} />
    </React.StrictMode>
);