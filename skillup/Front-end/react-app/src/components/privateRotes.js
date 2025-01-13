import React from 'react';
import { Outlet, Navigate } from 'react-router-dom';

const PrivateComponent = () => {
    const check = localStorage.getItem('user');
    return check ? <Outlet /> : <Navigate to='/SignUp' />;
}

export default PrivateComponent;
