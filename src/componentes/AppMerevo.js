import React from 'react';
import {Link } from 'react-router-dom';
import Nav from './Nav';
import Casos from  './Casos';
import Nav2 from './Nav2';
import Logro from './Logro';
class AppMerevo extends React.Component {
    render(){
        return(
            <div>
            <Nav/>
            <Casos/>
            <Nav2/>
            <Logro/>
  </div>

            

        );
    }
} 
export default AppMerevo;