import React, {Component} from 'react'
import {Link} from 'react-router-dom'

class Footer extends Component{
    render() {
      return (
  
        <footer className="footer">
          <div className="container-fluid">
            <nav className="float-left">
              <ul>
                <li>
                  <Link to = ''>
                    Ugarsoft
                  </Link>
                </li>
                <li>
                  <Link to = ''>
                    About Us
                  </Link>
                </li>
                <li>
                  <Link to = ''>
                    Blog
                  </Link>
                </li>
                <li>
                  <Link to = ''>
                    Licenses
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </footer>
      );
    }
};

export default Footer