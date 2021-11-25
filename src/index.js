import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/app/app';
import {movieCards} from './mock-data';

ReactDOM.render(
    <App movieCards = {movieCards}/>,
    document.getElementById(`root`)
);
