import  { useEffect, useState } from "react";
import "./header.css"

const Header = () => {
  const [showModal, setShowModal] = useState(false);

  const [theme, setTheme] = useState(localStorage.getItem("currentTheme") ?? "dark");

  useEffect(() => {
    if (theme === "light") {
      document.body.classList.remove("dark");
      document.body.classList.add("light");
    }else{
      document.body.classList.remove("light");
      document.body.classList.add("dark");
    }
    
  },[theme]);


  return (
    <header className="header-container">
      <button className="menu icon-menu" onClick={() => setShowModal(!showModal)}  />

      <nav className="nav-bar">
        <ul className="nav-list ">
          <li >
            <a className="" href="">About</a>
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


      
      <button onClick={()=>`btn-mode ${localStorage.setItem("currentTheme", "dark" === theme ? "light" : "dark") }  ${setTheme(localStorage.getItem("currentTheme"))} )`}  className="">
        {theme === "dark" ? (<span className="icon-moon-o icon-mode"  />) : (<span className="icon-sun icon-mode" />)}
      </button>
      


    {showModal && (
      
      <div className="modal-container">
        <div className="modal">
          <ul className="nav-pop">
            <li className="btn-close">
              <button className="icon-close"  onClick={() => setShowModal(!showModal)} />
            </li>
            <li className="nav-pop-item ">
              <a className=""  href="">About</a>
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
