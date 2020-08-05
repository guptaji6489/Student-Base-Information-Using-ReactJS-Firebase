import React from 'react'
import imgg from '../../assets/1.jpg';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-sm navbar-light bg-white">
  <div className="container">
    <a className="navbar-brand" href="/">
      <b>Students Profile</b>
    </a>

    <div>
      <ul className="navbar-nav mr-auto"></ul>
      <ul className="navbar-nav align-items-center">
        <li className="nav-item">
          <Link to={`/studentForm`} className="btn btn-primary mr-3">
            Add Student
          </Link>
        </li>
        <li className="nav-item dropdown">
          <a
    
            href="https://harshit-gupta.netlify.app/"
            target="_blank"
          >
          <img src={imgg} height="30px"  alt="admin"  />
            <span className="ml-2 navbar-text">Harshit Gupta</span>
          </a>
          
        </li>
      </ul>
    </div>
  </div>
</nav>
    )
}

export default Navbar
