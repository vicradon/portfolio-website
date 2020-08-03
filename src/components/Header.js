import React from 'react'

import Footer from './Footer'
import avatar from '../assets/images/avatar.jpg'

const Header = () => (
  <header id="header">
    <div className="inner">
      <p className="image avatar">
        <img src={avatar} alt="" />
      </p>
      <h1>
        <strong>Osinachi Chukwujama</strong>
        <br style={{ display: 'block' }} />
        FullStack developer and
        <br style={{ display: 'block' }} />
        Technical Writer
        <br />
      </h1>
    </div>
    <Footer />
  </header>
)

export default Header
