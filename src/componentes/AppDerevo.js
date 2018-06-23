import React from 'react';
import {Link } from 'react-router-dom';
import Nav from './Nav';
import Casos from  './Casos';
import Nav2 from './Nav2';
import Logro from './Logro';
import Grafica1 from './Grafica1';

class AppMerevo extends React.Component {
    render(){
        return(
            <div>
                <Nav/>
                <Casos/>
                <Nav2/>
                <Logro/>
                <Grafica1/>
            </div>
        );
    }
} 
export default AppMerevo;