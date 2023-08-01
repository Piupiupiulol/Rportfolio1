import React from 'react';
import {Navigate} from 'react-router-dom';

function PrivateRoute({ children, redirectTo }) {
    let isAuthenticated = true;
    console.log(redirectTo)
    return isAuthenticated ? children : <Navigate to={redirectTo} replace />

}

export default PrivateRoute;
