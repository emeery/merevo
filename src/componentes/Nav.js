import React from 'react';
import {Link } from 'react-router-dom';
const Nav = () => {
    return( <nav>
        <center>
          <Link 
          className='link'
          to="/item1"><p>Item 1</p></Link>
          <Link 
          className='link'
          to="/item2"><p>Item 2</p></Link>
        </center>
        </nav>)
}
 
export default Nav;
 
