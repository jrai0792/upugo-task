import React from 'react'
import './navbar.css';

function Navbar() {
  return (
    <div>
      <nav className="navbar">
        <div className="navbar-container d-sm-flex">
          <a href="#" className="navbar-logo me-auto">
            <img src="https://upugo.in/wp-content/uploads/2020/10/upUgo_logo.png"></img>
          </a>
          <div className="navbar-icons">
            <ul className="d-sm-flex navbar-icons-list">
              <li className="navbar-icons-item1 p-4"><i className="fa-solid fa-bell"></i></li>
              <li className="navbar-icons-item2 px-2"><i className="fa-solid fa-user"></i></li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar