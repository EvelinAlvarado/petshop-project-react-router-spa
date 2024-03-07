import { Link } from "react-router-dom";
import image from "/doguito.svg";
import "../assets/css/components/header.css";

export const Header = () => {
  return (
    <header className="header container">
      <div className="menu-hamburger">
        <span className="menu-hamburger__icon"></span>
      </div>
      <div className="header-container">
        <Link to="/" className="flex flex--center">
          <img className="header__logo" src={image} alt="doguito" />
          <h1 className="header__title">Petshop</h1>
        </Link>
      </div>
      <nav className="menu-header">
        <ul className="menu-items">
          <li>
            <Link className="menu-item menu-item--login" to="#">
              Login
            </Link>
          </li>
          <li>
            <Link className="menu-item" to="#">
              Products
            </Link>
          </li>
          <li>
            <Link className="menu-item" to="/">
              Blog
            </Link>
          </li>
          <li>
            <Link className="menu-item" to="/about">
              About
            </Link>
          </li>
        </ul>
      </nav>
      <div className="menu-header-background"></div>
    </header>
  );
};
