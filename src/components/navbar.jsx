import React, { Component } from 'react';
import { Link } from "react-router-dom";


export class NavBarComponent extends Component {
  render() {
    return (
      <div className="navbar">
        <nav>
          <ul>
            <li>
              <Link to="/">Homemade Meals</Link>
            </li>
            <li>
              <Link to="/outside/">Outside Melas</Link>
            </li>
            <li>
              <Link to="/plan/">Plan</Link>
            </li>
            <li>
              <Link to="/recommendation/">Recommendation</Link>
            </li>
            <li>
              <Link to="/settings/">Settings</Link>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}
