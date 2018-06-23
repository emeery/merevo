import React from 'react';
import {
BrowserRouter, Switch, Route, Link, NavLink} from 'react-router-dom';
import Cabecera from '../componentes/Cabecera';
import AppDerevo from '../componentes/AppDerevo';

const AppRouter = () => (
    <BrowserRouter>
    <div>
            <Cabecera
            titulo='Derevo'/>
        <Switch>
            <Route path="/" component={AppDerevo} exact={true} />
            
        </Switch>
    </div>
    </BrowserRouter>
); 
export default AppRouter;       