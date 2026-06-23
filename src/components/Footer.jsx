import React from 'react'
import './Footer.css'
import bg from '../assets/footer-bg.png'

export default function Footer() {
  return (
    <footer className="site-footer" style={{ backgroundImage: `url(${bg})` }}>
      <div className="footer-overlay">
        <div className="footer-inner">
          <div className="footer-col links">
            <h3>QUICK LINKS</h3>
            <ul>
              <li><a href="#">Gym Locator</a></li>
              <li><a href="#">About us</a></li>
              <li><a href="#">Become an Influencer with Us</a></li>
              <li><a href="#">Careers</a></li>
              <li><a href="#">Testimonials</a></li>
              <li><a href="#">Press Room</a></li>
              <li><a href="#">Our Events</a></li>
              <li><a href="#">Group Program</a></li>
            </ul>
          </div>

          <div className="footer-col newsletter">
            <h3>NEWS LETTER</h3>
            <p>Sign up for our mailing list to get latest updates and offers</p>
            <form className="newsletter-form" onSubmit={e => e.preventDefault()}>
              <input type="email" placeholder="Enter Email" aria-label="email" />
              <div className="recaptcha-mock">
                <label>
                  <input type="checkbox" /> <span>I'm not a robot</span>
                </label>
                <div className="recaptcha-badge">reCAPTCHA</div>
              </div>
              <button className="subscribe">SUBSCRIBE NOW</button>
            </form>

            <div>
              <ul className="social-big" aria-label="Social links">
                <li>
                  <a href="https://www.facebook.com" className="social-fb" aria-label="Facebook" target="_blank">
                    <i className="fab fa-facebook-f" ></i>
                  </a>
                </li>
                <li>
                  <a href="https://www.youtube.com/channel/UCCPNLx0irb9sbFdsdTCV6rg" className="social-youtube" target="_blank" >
                    <i className="fab fa-youtube"></i>
                  </a>
                </li>
                <li>
                  <a href="https://www.linkedin.com" className="social-link" target="_blank" >
                    <i className="fab fa-linkedin" ></i>
                  </a>
                </li>
                <li>
                  <a href="https://www.twitter.com" className="social-twitter" target="_blank" >
                    <i className="fab fa-twitter" ></i>
                  </a>
                </li>
                <li>
                  <a href="https://www.instagram.com" className="social-insta" target="_blank" >
                    <i className="fab fa-instagram" ></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="footer-col blog">
            <h3>LATEST BLOG</h3>
            <ul>
              <li><a href="#">The Science of the “Second Half”: Why Recovery Is the Real Competitive Edge</a></li>
              <li><a href="#">Evidence-Based Approaches to Improve Nutrition</a></li>
              <li><a href="#">Gold's Gym Shilong Blog</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <div >©2026 Gold's Gym.in. All Rights Reserved.</div>
          <div >Terms &amp; Conditions | Privacy Policy</div>
        </div>

        <div className="related">
          <h3>Related Searches:</h3>
          <p>Gym Near Me, Gold’s Gym Mumbai Bandra, Corporate Wellness Program, Personal Training Program, Gym Memberships Near Me, Fitness Near Me, Golds Gym Near Me, Personal Training Near Me, Gyms In Pune Kalyani Nagar, Gyms In Bengaluru RR Nagar, Gyms In Delhi Greater Kailash, Gym Workout Routine, Weight Training for Weight Loss</p>
        </div>
      </div>
    </footer>
  )
}
