import { faFacebook, faXTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const Footer = () => {
    return (
        <footer className="footer sm:footer-horizontal bg-[#d5d7da] text-base-content p-10">
            <div>
                <h3 className='font-bold text-3xl lg:text-5xl' >KiddoLand</h3>
                <p className='text-[16px]   mt-3'>
                    At Kiddoland, we believe every child deserves <br /> a world full of wonder. Our toys are designed <br /> to spark creativity, laughter, and <br /> magical moments for kids of all ages.
                </p>
                <p className=' font-medium mt-5'>
                    Email: <a href="">hello@kiddoland.com</a> <br />
                    Call: <a href="">(+880) 1914463784</a>
                </p>
            </div>


           <nav>
                <h6 className="footer_title_heading">Account</h6>
                <a className='hover:text-green-400' href="">Your Account</a>
                <a className='hover:text-green-400' href="">Ordering Tracking</a>
                <a className='hover:text-green-400' href="">Delivery Information</a>
                <a className='hover:text-green-400' href="">Discount</a>
                <a className='hover:text-green-400' href="">Custom Service</a>
                
           </nav>

           <nav>
                <h6 className="footer_title_heading">Services</h6>
                <a className='hover:text-green-400' href="">Sitemap</a>
                <a className='hover:text-green-400' href="">Advanced Search</a>
                <a className='hover:text-green-400' href="">Terms & Conditions</a>
                <a className='hover:text-green-400' href="">Contact Us</a>
                <a className='hover:text-green-400' href="">Privacy policy</a>
           </nav>


  <nav>
    <h6 className="footer_title_heading">Social</h6>
    <div className="grid grid-flow-col gap-4">
      <a className='text-4xl' href=""><FontAwesomeIcon icon={faXTwitter}></FontAwesomeIcon></a>
      <a className='text-4xl hover:text-red-600' href=""><FontAwesomeIcon icon={faYoutube}></FontAwesomeIcon></a>
      <a className='text-4xl hover:text-blue-600' href=""><FontAwesomeIcon icon={faFacebook}></FontAwesomeIcon></a>
    </div>
  </nav>
</footer>
    );
};

export default Footer;