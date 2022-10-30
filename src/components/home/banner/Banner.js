import React, { useState } from 'react'
import './banner.css';
import Search from './search/Search';
import { useNavigate } from "react-router-dom";


function Banner() {
  const navigate = useNavigate();
  const [showSearch, setShowSearch] = useState
  (false);

  return (
    <div className="banner">
      <div className="banner__search">
        {showSearch && <Search />}
        <button className='banner__searchbutton' onClick={() => setShowSearch(!showSearch)}>
        {showSearch ? "Hide" : "Search Dates"}
        </button>
      </div>
      <div className="banner__info">
        <h1>Get out and stretch your imagination</h1>
        <h5>
        Plan a different kind of getaway to uncover the hidden gems near you.
        </h5>
        <button onClick={() => navigate('/search') }>Explore nearby</button>
      </div>
    </div>
  )
}

export default Banner
