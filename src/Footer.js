import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter, FaTiktok, FaSnapchatGhost } from "react-icons/fa";

function Footer() {
  return (
    <div>
        <footer className='footer'>
        <div className='footer-contact-follow'>
          <div className='footer-contact'>
            <div><b>Contact us</b></div>
            <div>08-12 34 56</div>
            <div>info@reactwebshop.com</div>
            <div>Gustavslundsvägen 151 D</div>
          </div>
        <div className='footer-follow'>
          <div><b>Follow us</b></div>
          <div><FaFacebook /> <FaInstagram /> <FaTwitter /> <FaTiktok /> <FaSnapchatGhost /></div>
        </div>
      </div>
        <div className='footer-copy'>Copyright &copy; 2022</div>
      </footer>
    </div>
  )
}

export default Footer