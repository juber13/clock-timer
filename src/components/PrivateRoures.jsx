import { useState } from 'react';
import { Outlet, Navigate } from 'react-router-dom';


export default function PrivateRoute() {
    const [isUserLoggedIn] = useState(localStorage.getItem('user'));
    return isUserLoggedIn ? <Outlet /> : <Navigate to='/login' />;
}
