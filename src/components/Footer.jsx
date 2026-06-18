import React from 'react'
import './Footer.css'

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <p>© {new Date().getFullYear()} Gold's Gym. All rights reserved.</p>
      </div>
    </footer>
  )
}
