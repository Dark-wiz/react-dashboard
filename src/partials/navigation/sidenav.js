import React, {Component} from 'react'
import {Link} from 'react-router-dom'

class Sidenav extends Component{
    render() {
      return (
          <div className="sidebar" data-color="azure" data-background-color="black" data-image="../assets/img/sidebar-2.jpg">
            {/*
          Tip 1: You can change the color of the sidebar using: data-color="purple | azure | green | orange | danger"
  
          Tip 2: you can also add an image using data-image tag
      */}
            <div className="logo">
              <a href="http://www.creative-tim.com" className="simple-text logo-normal">
                Creative Tim
              </a>
            </div>
            <div className="sidebar-wrapper">
              <ul className="nav">
                <li className="nav-item active  ">
                  <Link to ='/' className="nav-link" href="./dashboard.html">
                    <i className="material-icons">dashboard</i>
                    <p>Dashboard</p>
                  </Link>
                </li>
                <li className="nav-item ">
                  <Link to ='/profile' className="nav-link">
                    <i className="material-icons">person</i>
                    <p>User Profile</p>
                  </Link>
                </li>
                <li className="nav-item ">
                  <Link to = '/table' className="nav-link">
                    <i className="material-icons">content_paste</i>
                    <p>Table List</p>
                  </Link>
                </li>
                <li className="nav-item ">
                  <Link to = '/typography' className="nav-link">
                    <i className="material-icons">library_books</i>
                    <p>Typography</p>
                  </Link>
                </li>
                <li className="nav-item ">
                  <Link to = '/notification' className="nav-link">
                    <i className="material-icons">notifications</i>
                    <p>Notifications</p>
                  </Link>
                </li>
                {/* <li class="nav-item active-pro ">
                  <a class="nav-link" href="./upgrade.html">
                      <i class="material-icons">unarchive</i>
                      <p>Upgrade to PRO</p>
                  </a>
              </li> */}
              </ul>
            </div>
          </div>
      );
    }
  };
  export default Sidenav