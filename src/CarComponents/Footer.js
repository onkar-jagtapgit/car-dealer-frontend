import React from 'react';
import './Footer.css';
//import { Button } from './Button';
// import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>
      <section className='footer-description'>
        <p className='footer-description-heading'></p>
        <h3>About Us</h3>
        <p>ISFCD| CIN: XXXXXXXX0938 |

        Copyright © 2020 Incentive System for Car Dealer Limited
          
        </p>
      </section>

      {/* <div class='footer-links'>
        <div className='footer-link-wrapper'>

          <div class='footer-link-items'>
            <h3>Contact Us</h3>
            {/* <Link to='/'>Contact</Link>
            <Link to='/'>Support</Link> */}

          {/* </div>
        </div>
        <div className='footer-link-wrapper'>

          <div class='footer-link-items'>
            <h3>Follow Us</h3> */}
            {/* <Link to='/'>Instagram</Link>
            <Link to='/'>Facebook</Link>
            <Link to='/'>Youtube</Link>
            <Link to='/'>Twitter</Link> */}
          {/* </div>
        </div> */}
      {/* </div> */} 

      {/* <section class='social-media'>
        <div class='social-media-wrap'>
          <div class='footer-logo'>
            <Link to='/' className='social-logo'>
              HEALTH INSURANCE
              <i class="fas fa-file-medical" />
            </Link>
          </div>
          <small class='website-rights'>HEALTH INSURANCE © 2022</small>
          <div class='social-icons'>
            <Link
              class='social-icon-link facebook'
              to='/'
              target='_blank'
              aria-label='Facebook'
            >
              <i class='fab fa-facebook-f' />
            </Link>
            <Link
              class='social-icon-link instagram'
              to='/'
              target='_blank'
              aria-label='Instagram'
            >
              <i class='fab fa-instagram' />
            </Link>
            <Link
              class='social-icon-link youtube'
              to='/'
              target='_blank'
              aria-label='Youtube'
            >
              <i class='fab fa-youtube' />
            </Link>
            <Link
              class='social-icon-link twitter'
              to='/'
              target='_blank'
              aria-label='Twitter'
            >
              <i class='fab fa-twitter' />
            </Link>

          </div>
        </div>
      </section> */}
    </div>
  );
}

export default Footer;