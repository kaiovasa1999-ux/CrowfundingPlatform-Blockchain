import React from "react";
import { ReactDOM } from "react-dom/client";
import { BrowserRouter as Router, Route } from 'react-router-dom';
import {ChainId,ThirdWebProvider } from '@thirdweb-dev/react';

import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <ThirdWebProvider desiredChainId={ChainId.Goerli}>
        <Route>
            <App />
        </Route>
    </ThirdWebProvider>
)
