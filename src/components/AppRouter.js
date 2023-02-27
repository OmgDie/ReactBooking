import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { publicRoutes, authRoutes } from '../routes';
import { AUTH_ROUTE } from '../utils/consts';

const AppRouter = () => {
    const isAuth = false
    return (
        <Routes>
            {publicRoutes.map(({path, Component}) =>
                <Route key={path} path={path} element={<Component/>} exact/>
            )}
            {isAuth && authRoutes.map(({path, Component}) =>
                <Route key={path} path={path} element={<Component/>} exact/>
            )}
            <Route path='*' element={<Navigate to={AUTH_ROUTE}/>} />
        </Routes>
    );
};

export default AppRouter;