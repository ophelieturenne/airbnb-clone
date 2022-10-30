import React from 'react'
import './head.css';
import { AiOutlineSearch } from "react-icons/ai";
import { GrLanguage } from "react-icons/gr";
import { MdExpandMore } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className='header'>
      <Link to='/'>
        <img className='header__icon' src="https://i.pinimg.com/originals/3c/bf/be/3cbfbe148597341fa56f2f87ade90956.png" alt="" />
      </Link>

      <div className="header__center">
        <input type="text" />
        <AiOutlineSearch />
      </div>

      <div className="header__right">
        <p>Become a host</p>
        <GrLanguage />
        <MdExpandMore />
        <CgProfile />
      </div>
    </div>
  )
}

export default Header
