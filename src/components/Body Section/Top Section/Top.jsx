import React from 'react'
import './top.css'

import {BiSearchAlt} from 'react-icons/bi'

const Top = () => {
  return (
    <div className='topSection'>
      <div className="headerSection flex">
        <div className="title">
          <h1>Welcom to Planti</h1>
          <p>Hello Dummy, Welcome Bakc!</p>
        </div>
      </div>

      <div className="searchBar flex">
        <input type="text" placeholder='Search Here'/>
        <BiSearchAlt className='icon'/>
      </div>
    </div>
  )
}

export default Top