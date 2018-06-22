import React from 'react';
import {NavLink} from 'react-router-dom';
import {Fade, Zoom, Rotate} from 'react-reveal';
import header from '../imagenes/header.jpg';
import { Parallax, Background } from 'react-parallax';
import {Tooltip} from 'react-tippy';
//import Nav from './Nav';
// <Nav/>
const Cabecera = (props) => (
  <div>
    <Parallax 
      strength={300}
      className='cabecera-parallax'
    >
        
        <div className='cabecera__info' >
          
            <h1 className='cabecera__titulo'
              > { props.titulo } </h1> 
          
          <Fade right delay={2000}>
                  <hr></hr>
          </Fade>
          <Rotate>
            { props.subtitulo && 
          <h3 className='cabecera__subtitulo'
              > {props.subtitulo} </h3> }
          </Rotate>
              
          <i 
          className="fa fa-angle-down fa-5x" 
          aria-hidden="true"> </i>
        </div>
        <div className='espacio-cabecera'></div>
        
      <Background 
      className="custom-bg">
          <img src={header} />
      </Background>
      
    </Parallax>
  </div>
);
export default Cabecera;



