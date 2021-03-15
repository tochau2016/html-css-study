import React, { useState } from 'react';

import Main from './Main';

function Header() {
  const [sidebar, setSidebar] = useState(0);

  return (
    <div>

      <div className="header-container container-fluid">
        <div className="header-content container">
          <div className="header-brand">
            <i className="material-icons mr-3"
              id="sidebarBtn"
              style={{ fontSize: "28px" }}
              onClick={() => {
                // setSidebar(true);
                setSidebar(sidebar + 1)
                console.log(setSidebar(sidebar + 1));
              }
              }
            >menu</i>
            <h4>Brand Name</h4>
          </div>

          <ul className="header-menu">
            <li>
              <a href="" className="header-menu-item">Home</a>
              <div className="header-item-border-bottom"></div>
            </li>
            <li className="header-menu-dropdown">
              <a href="" className="header-menu-item">Products</a>
              <ul className="header-sub-menu">
                <li>
                  <a href="" className="header-sub-menu-item">Product A</a>
                </li>
                <li>
                  <a href="" className="header-sub-menu-item">Product B</a>
                </li>
                <li>
                  <a href="" className="header-sub-menu-item">Product C</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="" className="header-menu-item">About</a>
            </li>
          </ul>
          <h4>Username</h4>
        </div>
      </div>

    </div>

  );
}
export default Header;