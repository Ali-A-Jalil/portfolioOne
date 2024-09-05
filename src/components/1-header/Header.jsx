import React, { useState } from "react";
import "./header.css"
const Header = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <header className="header-container">
      <button className="menu icon-menu" onClick={() => setShowModal(!showModal)} />

      <nav className="nav-bar">
        <ul className="nav-list ">
          <li >
            <a className="active" href="">About</a>
          </li>
          <li>
            <a href="">Articles</a>
          </li>
          <li>
            <a href="">Projects</a>
          </li>
          <li>
            <a href="">Speaking</a>
          </li>
          <li>
            <a href="">Contact</a>
          </li>
        </ul>
      </nav>


      <button className="btn-mode">
        <span className="icon-moon-o" />
        <span />
      </button>


    {showModal && (
      
      <div className="modal-container">
        <div className="modal">
          <ul className="nav-pop">
            <li className="btn-close">
              <button className="icon-close"  onClick={() => setShowModal(!showModal)} />
            </li>
            <li className="nav-pop-item ">
              <a className="active"  href="">About</a>
            </li>
            <li className="nav-pop-item">
              <a href="">Articles</a>
            </li>
            <li className="nav-pop-item">
              <a href="">Projects</a>
            </li>
            <li className="nav-pop-item">
              <a href="">Speaking</a>
            </li>
            <li className="nav-pop-item">
              <a href="">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    )

    }
    </header>
  );
};

export default Header;
