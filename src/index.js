import ReactDOM from 'react-dom';
import React from 'react';
import { Provider } from 'mobx-react';
import stores from './screens/stores';
import App from './App';

ReactDOM.render((
    <Provider {...stores}>
        <App />
    </Provider>
), document.getElementById('root'));
