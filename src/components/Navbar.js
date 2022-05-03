import React from 'react'

function Navbar() {
  return (
    <div>
      <nav className="navbar">
        <div className="navbar-container">
          <a href="#" className="navbar-logo">
            <img src="https://upugo.in/wp-content/uploads/2020/10/upUgo_logo.png"></img>
          </a>
          <div className="navbar-icons">
            <ul>
              <li><i className="fa-solid fa-bell"></i></li>
              <li><i className="fa-solid fa-user"></i></li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar