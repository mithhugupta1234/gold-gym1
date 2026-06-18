import React, { useEffect, useRef } from 'react'
import './header.css'

const TopBar = () => (
  <div className="topbar">
    <div className="container">
      <div className="left">customer.care@goldsgym.in</div>
      <div className="right">
        Welcome to Gold's Gym India.

      </div>
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
  </div>
)
export default function Header() {
  return (
    <header>
      <TopBar />
      <div className="navcontainer">
        <div className="logo">
          <a href="/">
            <img loading="lazy" className="logo-img" src="https://i0.wp.com/goldsgym.in/wp-content/uploads/2023/10/fullcolor.png?w=563&ssl=1" alt="Gold's Gym" />
          </a>
        </div>
        <nav className="mainnav">
          <ul>
            <li>Get Started</li>
            <li>Fitness Institute – GGFI</li>
            <li>Gallery</li>
            <li>Programs</li>
            <li>Franchise</li>
            <li>Contact Us</li>
          </ul>
        </nav>
        <div className="cta">
          <button className="trial">Free Trial</button>
        </div>
      </div>
    </header>
  )
}
