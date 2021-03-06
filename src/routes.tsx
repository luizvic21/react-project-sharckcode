import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Login from './Pages/Login';

function Routes() {
    return (
        <BrowserRouter>
            <Route path="/" component={Login} exact />
        </BrowserRouter>
    )
}

export default Routes;