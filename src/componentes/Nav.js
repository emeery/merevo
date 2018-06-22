import React from 'react';
import {Link } from 'react-router-dom';
const Nav = () => {
    return( <nav>
        <center>
          <Link 
          className='link'
          to="/"><p>ITEM 1</p></Link>
          <Link 
          className='link'
          to="/"><p>ITEM 2</p></Link>
          <Link 
          className='link'
          to="/"><p>ITEM 3</p></Link>
          <Link 
          className='link'
          to="/"><p>ITEM 4</p></Link>
        </center>
        </nav>)
}
 
export default Nav;
 
