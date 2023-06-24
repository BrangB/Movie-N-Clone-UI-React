import React, { useState } from 'react'
import './navbar.scss'
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import logo from '../../img/Netflix-logo.png'

const Navbar = () => {

  const [isScrolled, setIsScrolled] = useState(false);

  window.onscroll = () => {
    setIsScrolled(window.pageYOffset === 0 ? false : true)
    return () => (window.onscroll = null);
  }

  return (
    <div className={isScrolled ? 'navbar scrolled' : "navbar"}>
      <div className="container">
        <div className="left">
          <img src={logo} alt="" />
          <span>Home</span>
          <span>Series</span>
          <span>Movies</span>
          <span>New & popular</span>
          <span>My list</span>
        </div>
        <div className="right">
          <SearchIcon  className='icons'/>
          <span>KID</span>
          <NotificationsIcon  className='icons'/>
          <img src="https://scontent.fmdl4-2.fna.fbcdn.net/v/t39.30808-6/323464794_889635965804148_6019066637496874879_n.jpg?_nc_cat=101&cb_f2e=test&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeHGRjsXDr47BEylbxF31ZGfvSCE2Iskh469IITYiySHjrRzGmFWw36FvcFB1AdOPA-h9GWnr1gN2mR1nyC3GxdR&_nc_ohc=-2WMEl7_l3UAX-wiWp_&_nc_ht=scontent.fmdl4-2.fna&oh=00_AfDNOZo2iaAhX0AMOdHW5nSZEjcinWr_2Gl38CmqW7n5_w&oe=649AD050" alt="" />
          <div className="profile">
            <ArrowDropDownIcon  className='icons'/>
            <div className="options">
              <span>Setting</span>
              <span>Logout</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar