import React from 'react'

const Dropdown = ({ label = 'Menu', items = [] }) => {
  return (
    <li className="has-dropdown">
      <button className="menu-btn" aria-expanded="false">{label}</button>
      <ul className="dropdown" aria-label={`${label} submenu`}>
        {items.map((item, idx) => (
          <li key={idx}><a href="#">{item}</a></li>
        ))}
      </ul>
    </li>
  )
}

export default Dropdown
