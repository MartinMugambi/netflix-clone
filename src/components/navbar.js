import React, { useEffect, useState } from "react";
import Logo from './nextflix-logo.png';
import Avatar from './Netflix-avatar.png';
import './navbar.css';
const NavBar = () =>{

    const [show, handleShow] = useState(false);
    useEffect(()=>{
      window.addEventListener('scroll', ()=>{
          if(window.scrollY > 100){
              handleShow(true);
          } else {
              handleShow(false);
          }

          return () =>{
              window.removeEventListener('scroll');
          }
      })
    },[])
    return(
        <div className= {`navbar ${show && 'navbar__color'}`}>
          <img src = {Logo} alt="netflix__logo" className= "navbar__logo"/>
          <img src= {Avatar} alt= "netflix_avatar" className="navbar__avatar" />
        </div>
    );
}

export default NavBar;