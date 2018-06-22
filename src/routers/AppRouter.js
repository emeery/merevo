import React from 'react';
import {
BrowserRouter, Switch, Route, Link, NavLink} from 'react-router-dom';
import Cabecera from '../componentes/Cabecera';
import AppMerevo from '../componentes/AppMerevo';

const AppRouter = () => (
    <BrowserRouter>
    <div>
            <Cabecera
            titulo='Viajes'/>
        <Switch>
            <Route path="/" component={AppMerevo} exact={true} />
            
        </Switch>
    </div>
    </BrowserRouter>
); 
export default AppRouter;       