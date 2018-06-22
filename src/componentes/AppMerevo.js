import React from 'react';
import {Link } from 'react-router-dom';
import Nav from './Nav';
import Casos from  './Casos';
class AppMerevo extends React.Component {
    render(){
        return(
            <div>
            <Nav/>
            <Casos/>
  </div>

            

        );
    }
} 
export default AppMerevo;