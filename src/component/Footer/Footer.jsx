import React from 'react'
import './Footer.css'
import { assets } from '../../assets/frontend_assets/assets'
function Footer() {
  return (
    <div className='footer' id='footer'>
      <div className="footer-content" >
        <div className="footer-content-left">
            <img id='logo' src={assets.logo} alt="" />
            <h3>Our story</h3>
            <p>Zaika Zilla was founded in 2018 with a bold mission: to bring authentic, affordable, and diverse Indian flavors to every doorstep. What began as a passion project by three food-loving friends quickly grew into a popular food ordering website and app, connecting users with local kitchens, street vendors, and hidden culinary gems. With a focus on real taste, fast delivery, and community support, Zaika Zilla has become a go-to platform for millions craving everything from classic thalis to midnight snacks — all with a dash of flavor and fun.</p>
            <div className="footer-social-icons">
              <img src={assets.facebook_icon} alt="" />
              <img src={assets.twitter_icon} alt="" />
              <img src={assets.linkedin_icon} alt="" />
            </div>

        </div>

        <div className="footer-content-right">
             <h2>Company</h2>
            <ul>
              <li className='center-li'>Home</li>
              <li className='center-li'>About us</li>
              <li className='center-li'>Delivery</li>
              <li className='center-li'>Privacy Policy</li>
            </ul>
               <h2>Get in touch</h2>
            <ul>
              <li>05568-221061</li>
              <li>contact@ZaikaZilla.com</li>
            </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">Copyright 2024 © Zaika_Zilla.com - All Right Reserved.</p>
    <hr />
    </div>
  )
}

export default Footer
