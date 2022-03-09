import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter, FaTiktok, FaSnapchatGhost } from "react-icons/fa";

function Footer() {
  return (
    <div>
        <footer className='footer'>
         <div className='footer-contact-follow'>
          <div className='footer-contact'>
            <div className='contact-title'><b>Contact us</b></div>
            <div>076 899 95 96</div>
            <div>info@cakeShop.com</div>
            <div>Luntmakargatan 78</div>
          </div>
         <div className='footer-follow'>
          <div className='follow-title'><b>Follow us</b></div>
          <div className='socmed-icons'><FaFacebook /> <FaInstagram /> <FaTwitter /> <FaTiktok /> <FaSnapchatGhost /></div>
        </div>
      </div>
        <div className='footer-copy'>Copyright &copy; 2022</div>
      </footer>
    </div>
  )
}


export default Footer