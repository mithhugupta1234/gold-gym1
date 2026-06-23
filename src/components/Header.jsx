import React, { useEffect, useRef } from 'react'
import './header.css'
import Dropdown from './Dropdown'

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
            <Dropdown
              label="Get Started"
              items={[
                "Our Gyms India",
                "Our Gyms Nepal",
                "Our Gyms Bangladesh",
                "Buy Membership Now",
                "Blogs",
                "Our Events",
                "Coming Soon",
                "Pre Sale",
                "Newsletter",
              ]}
            />
            <Dropdown
              label="Gallery"
              items={[
              ]}
            />
            <Dropdown
              label="Fitness Institute – GGFI"
              items={[
                "GGFI About Us",
                "Our locations accross India",
                "Our Faculty",
                "Certification & Accreditations",
                "Courses Offered",
                "Buy a Course",
                "Book a Demo Class",
                "Our Affiliate Program",
                "Certificate Verification",
              ]}
            />
            <Dropdown
              label="Programs"
              items={[
                "Corporate Memberships",
                "Personal Training Program",
                "Group Program",
                "Corporate Wellness Program",
              ]}
            />
            <Dropdown
              label="Franchise"
              items={[
                "Own a Gold’s Gym",
              ]}
            />
            <Dropdown
              label="Associations, Alliances & Advertising"
              items={[
              ]}
            />
            <Dropdown
              label="Convention"
              items={[
                "Bangkok 2023",
                "Dubai 2022",
                "Kuala Lampur 2019",
                "Kochi 2018",
              ]}
            />
            <Dropdown
              label="Contact Us"
              items={[
                "Find a Gym",
                "Support",
                "Feedback",
              ]}
            />
          </ul>
        </nav>
        <div className="cta">
          <button className="trial">Free Trial</button>
        </div>
      </div>
    </header>
  )
}
